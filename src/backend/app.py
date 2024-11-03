import requests
from bs4 import BeautifulSoup
import google.generativeai as genai
from google.ai.generativelanguage_v1beta.types import content
import concurrent.futures
import time
from flask import Flask, request, jsonify
from datetime import datetime
from iso_codes import country_to_iso
from google.oauth2 import service_account
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from flask_cors import CORS

API_KEY = "AIzaSyCq6YCSlAstW4ckN5uBXBoowTcjesyk7ZA"
SCOPES = ['https://www.googleapis.com/auth/calendar']
SERVICE_ACCOUNT_FILE = "prefab-range-440623-d0-379eea731deb.json"

# Authenticate and build the Calendar service
credentials = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE, scopes=SCOPES
)
service = build('calendar', 'v3', credentials=credentials)

app = Flask(__name__)
CORS(app)  # Enables CORS for all routes

@app.route('/add_to_calendar', methods=['POST'])
def add_to_calendar():
    # Get the itinerary JSON from request
    data = request.json
    data = data["itinerary"]
    
    # Validate input format
    if "events" not in data:
        return jsonify({"error": "Invalid JSON format. 'events' field is required"}), 400
    
    # Create events in Google Calendar
    calendar_id = 'primary'  # or a specific calendar ID if needed
    created_events = []
    
    for event in data['events']:
        try:
            # Create the event body based on the JSON format
            event_body = {
                'summary': event.get('summary', ''),
                'description': event.get('description', ''),
                'start': {
                    'dateTime': event['start']['dateTime'],
                    'timeZone': event['start']['timeZone'],
                },
                'end': {
                    'dateTime': event['start']['dateTime'],
                    'timeZone': event['start']['timeZone'],
                },
                'location': event.get('location', ''),
                'attendees': [],
            }
            
            # Insert event into Google Calendar
            created_event = service.events().insert(calendarId=calendar_id, body=event_body).execute()
            created_events.append({
                'id': created_event.get('id'),
                'htmlLink': created_event.get('htmlLink'),
            })
        
        except Exception as e:
            print(f"Error creating event: {e}")
            return jsonify({"error": str(e)}), 500

    return jsonify({"created_events": created_events}), 200


def get_iso_code(country_name):
    """Get ISO 2 code from country name."""
    return country_to_iso.get(country_name.strip(), None)

def get_visa_requirement(passport, destination):
    base_url = "https://rough-sun-2523.fly.dev/api"
    url = f"{base_url}/{passport}/{destination}"
    
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return None

def interpret_status(status):
    status_map = {
        "VF": "Visa-free",
        "VOA": "Visa on arrival",
        "EV": "eVisa required",
        "VR": "Visa required",
        "CB": "COVID-19 ban (entry not allowed)",
        "NA": "No admission"
    }
    return status_map.get(status, "Unknown status")

def format_date(date_str):
    """Convert date string to a more readable format."""
    try:
        date_obj = datetime.fromisoformat(date_str)
        return date_obj.strftime("%B %d, %Y")  # e.g., 'November 02, 2024'
    except ValueError:
        return date_str  # Return original if parsing fails

def get_itinerary_url(place, check_in, check_out, sort="RECOMMENDED"):
    return f"https://www.expedia.com/things-to-do/search?location={place}&d1={check_in}&startDate={check_in}&d2={check_out}&endDate={check_out}&sort={sort}"

def fetch_things_to_do(place, check_in, check_out, sort="RECOMMENDED"):
    url = get_itinerary_url(place, check_in, check_out, sort)
    print("Fetching Things to Do from Expedia")
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    links = soup.find_all("a", {"data-testid": "card-link"})
    things_to_do = [
        (link["href"].split("/")[2].split(".")[0].replace("-", " ").title(), link['href'])
        for link in links
    ]
    return things_to_do

def fetch_dates_for_activities(things_to_do, limit=3):
    start_time = time.time()
    dates_by_activity = []
    print("Fetching Dates for Things to Do")
    if  limit == None or limit > len(things_to_do):
        limit = len(things_to_do)

    def fetch_dates(thing):
        url = f"https://www.expedia.com{thing[1]}"
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")
        list_of_dates = soup.find_all("ul", {"class": "uitk-date-range"})
        if list_of_dates:
            dates = [li.text.strip().replace("$", " $") for li in list_of_dates[0].find_all("li")]
            return (thing[0], dates)
        return None

    with concurrent.futures.ThreadPoolExecutor() as executor:
        results = executor.map(fetch_dates, things_to_do[:limit])
        dates_by_activity.extend(filter(None, results))

    print("Fetched",len(dates_by_activity),"dates for Things to Do in",time.time()-start_time,"seconds")
    return dates_by_activity

def generate_itinerary_prompt(place, check_in, check_out, budget, dates_by_activity):
    prompt = f"I'm going on a trip to {place} from {check_in} to {check_out} with a budget of {budget}.\nHere's a list of things to do in {place}:\n"
    for activity, dates in dates_by_activity:
        prompt += f"\n    {activity}\n    Dates: {dates}\n"
    prompt += "\nCan you help me create an itinerary for my trip? I need specific times, dates, locations, and prices for each activity."
    
    print("\nPrompt:\n", prompt)
    print("\n\n")
    return prompt

def get_response(prompt, messages):
    genai.configure(api_key=API_KEY)
    model = genai.GenerativeModel("gemini-1.5-flash")

    messages.append({'role': 'user', 'parts': [prompt]})
    response = model.generate_content(messages)
    print(response.candidates[0].content.parts[0].text)
    return response.candidates[0].content.parts[0].text, messages


def create_itinerary(place, leave_date, end_date, budget="$400", origin_country="USA", destination_country="USA"):
    
    print(f"Getting Itinerary for {place} from {leave_date} to {end_date}")
    things_to_do = fetch_things_to_do(place, leave_date, end_date)
    dates_by_activity = fetch_dates_for_activities(things_to_do,limit=3)
    
    prompt = generate_itinerary_prompt(place, leave_date, end_date, budget, dates_by_activity)
    messages = []
    response, messages = get_response(prompt, messages)
    return response, messages

def convert_itenerary_to_json(itinerary):
    print("Converting Itinerary to JSON")
    genai.configure(api_key=API_KEY)

    generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_schema": content.Schema(
        type=content.Type.OBJECT,
        description="Create a JSON object for an itinerary with dates, times, and activities.",
        properties={
            "itinerary": content.Schema(
                type=content.Type.OBJECT,
                description="Each key is a date with a list of scheduled activities.",
                properties={
                    "events": content.Schema(
                        type=content.Type.ARRAY,  # Define events as an array
                        items=content.Schema(
                            type=content.Type.OBJECT,
                            properties={
                                "summary": content.Schema(
                                    type=content.Type.STRING,
                                    description="A brief description of the event.",
                                ),
                                "description": content.Schema(
                                    type=content.Type.STRING,
                                    description="A detailed description of the event.",
                                ),
                                "start": content.Schema(
                                    type=content.Type.OBJECT,
                                    properties={
                                        "dateTime": content.Schema(
                                            type=content.Type.STRING,
                                            description="The start date and time of the event.",
                                        ),
                                        "timeZone": content.Schema(
                                            type=content.Type.STRING,
                                            description="The time zone of the event.",
                                        ),
                                    },
                                ),
                                "end": content.Schema(
                                    type=content.Type.OBJECT,
                                    properties={
                                        "dateTime": content.Schema(
                                            type=content.Type.STRING,
                                            description="The end date and time of the event.",
                                        ),
                                        "timeZone": content.Schema(
                                            type=content.Type.STRING,
                                            description="The time zone of the event.",
                                        ),
                                    },
                                ),
                                "location": content.Schema(
                                    type=content.Type.OBJECT,
                                    properties={
                                        "name": content.Schema(
                                            type=content.Type.STRING,
                                            description="The name of the location.",
                                        ),
                                        "address": content.Schema(
                                            type=content.Type.STRING,
                                            description="The address of the location.",
                                        ),
                                    },
                                ),
                            },
                        ),
                    ),
                },
            ),
        },
    ),
    "response_mime_type": "application/json",
}

    print("Generating JSON Object")
    model = genai.GenerativeModel(
        model_name="gemini-1.5-pro",
        generation_config=generation_config,
    )

    prompt = """Create a JSON object from the following itinerary. Here is the itinerary:\n
    """
    prompt += itinerary
    print(prompt) 

    chat_session = model.start_chat(history=[])
    
    prompt = "Create a JSON object from the following itinerary Here is the itinerary:\n"
    prompt += itinerary

    response = chat_session.send_message(prompt)
    print(response.text)
    with open("itinerary.json", "w") as f:
        f.write(response.text)
    
    print("Itinerary saved to itinerary.json")

@app.route('/create_itinerary', methods=['POST'])
def itinerary_endpoint():
    data = request.json
    place = data["place"]
    leave_date = data["leave_date"]
    end_date = data["end_date"]
    budget = data["budget"]
    origin_country = data["origin_country"]
    destination_country = data["destination_country"]

    response, messages = create_itinerary(place, leave_date, end_date, budget, origin_country, destination_country)
    return jsonify({"response": response, "messages": messages})

@app.route('/get_response', methods=['POST'])
def response_endpoint():
    data = request.json
    prompt = data["prompt"]
    messages = data["messages"]

    response, messages = get_response(prompt, messages)
    return jsonify({"response": response, "messages": messages})

@app.route('/convert_itinerary', methods=['POST'])
def convert_itinerary_endpoint():
    data = request.json
    itinerary = data["itinerary"]

    convert_itenerary_to_json(itinerary)
    return jsonify({"response": "Itinerary saved to itinerary.json"})

@app.route('/get_visa_requirement', methods=['POST'])
def visa_requirement_endpoint():
    data = request.json
    passport = data["passport"]
    destination = data["destination"]

    passport = get_iso_code(passport)
    destination = get_iso_code(destination)

    result = get_visa_requirement(passport, destination)
    
    if result and not result.get("error", {}).get("message"):
        status = interpret_status(result.get("status", ""))
        date = format_date(result.get("date", "Unknown date"))
        duration = result.get("dur") or result.get("visa_free_days", "Unknown duration")
        
        return jsonify({
            "status": status,
            "date": date,
            "duration": duration
        })
    else:
        return jsonify({"error": "Invalid passport or destination country"})
    
# test endpoint examples:
# curl -X POST http://127.0.0.1:5000/create_itinerary -H "Content-Type: application/json" -d '{"place": "New York", "leave_date": "2022-12-01", "end_date": "2022-12-05", "budget": "$400", "origin_country": "USA", "destination_country": "USA"}'
# curl -X POST http://127.0.0.1:5000/visa_requirement -H "Content-Type: application/json" -d '{"passport": "United States", "destination": "Canada"}'
if __name__ == '__main__':
    # test
    # iten,messages = create_itinerary("New York", "2024-12-01", "2024-12-05", "$400", "USA", "USA")
    # print('done1')
    # convert_itenerary_to_json(iten)
    # print('done2')
    app.run(debug=True)