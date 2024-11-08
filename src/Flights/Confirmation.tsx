import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './index.css';
import MapComponent from './Map';

export function ConfirmationPage() {
    const [chatOpen, setChatOpen] = useState(false);
    const [chatContent, setChatContent] = useState("Loading..."); // Default loading message

    // Define destination as a single string to match MapComponent's expected type
    const destination = "Los Angeles, United States";

    const toggleChat = () => {
        setChatOpen(!chatOpen);

        // Fetch the itinerary when the chat is opened
        if (!chatOpen) {
            fetchItinerary();
        }
    };

    const fetchItinerary = async () => {
        const requestBody = {
            place: "Los Angeles",
            leave_date: "2024-12-15",
            end_date: "2024-12-20",
            budget: "$300",
            origin_country: "United States",
            destination_country: "United States"
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/create_itinerary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                const data = await response.json();
                setChatContent(data.response || "Here's your itinerary!"); // Adjust field as per response structure
            } else {
                setChatContent("Sorry, we couldn't retrieve your itinerary. Please try again.");
            }
        } catch (error) {
            console.error("Error fetching itinerary:", error);
            setChatContent("There was an error fetching the itinerary.");
        }
    };

    return (
        <Container className="confirmation-page my-5">
            <Card className="p-4 shadow">
                <Card.Body>
                    <header className="text-center mb-4">
                        <h1 className="text-primary">Booking Confirmed!</h1>
                        <p className="text-muted">Your trip is all set. Check your email for the confirmation details.</p>
                    </header>

                    <section className="booking-summary mb-4">
                        <h4 className="text-dark">Booking Summary</h4>
                        <Row className="mt-3">
                            <Col md={6}><strong>Destination:</strong><p>Los Angeles, United States</p></Col>
                            <Col md={6}><strong>Check-in:</strong><p>Decemeber 15, 2024</p></Col>
                            <Col md={6}><strong>Check-out:</strong><p>Decemeber 20, 2024</p></Col>
                            <Col md={6}><strong>Hotel:</strong><p>Hotel Hollywood</p></Col>
                            <Col md={6}><strong>Room Type:</strong><p>Double Room, Sea View</p></Col>
                        </Row>
                    </section>

                    <section className="map-section mb-4">
                        <h4 className="text-dark">Your Trip Map</h4>
                        <MapComponent destination={destination} />
                        destination={destination} 
                        apiKey={process.env.REACT_PUBLIC_GOOGLE_MAPS_API_KEY} 
                    </section>

                    <section className="traveler-info mb-4">
                        <h4 className="text-dark">Traveler Details</h4>
                        <Row className="mt-3">
                            <Col md={6}><strong>Name:</strong><p>John Doe</p></Col>
                            <Col md={6}><strong>Email:</strong><p>johndoe@example.com</p></Col>
                            <Col md={6}><strong>Phone:</strong><p>+1 234 567 890</p></Col>
                        </Row>
                    </section>

                    <section className="payment-summary mb-4">
                        <h4 className="text-dark">Payment Summary</h4>
                        <Row className="mt-3">
                            <Col md={6}><strong>Subtotal:</strong><p>$800.00</p></Col>
                            <Col md={6}><strong>Taxes & Fees:</strong><p>$70.00</p></Col>
                            <Col md={6} className="total-cost mt-3"><strong>Total:</strong><p className="font-weight-bold">$870.00</p></Col>
                        </Row>
                    </section>

                    <div className="text-center">
                        <Button variant="primary" onClick={() => window.print()} className="mt-3">
                            Print Confirmation
                        </Button>
                    </div>
                </Card.Body>
            </Card>

            <div className="chat-box-container">
                {!chatOpen ? (
                    <Button className="chat-toggle-button" onClick={toggleChat}>
                        💬 Plan Your Itinerary!
                    </Button>
                ) : (
                    <div className="chat-box">
                        <div className="chat-header">
                            <h5>Chat with our AI</h5>
                            <Button variant="light" size="sm" onClick={toggleChat}>&times;</Button>
                        </div>
                        <div className="chat-content">
                            <ReactMarkdown>{chatContent}</ReactMarkdown>
                        </div>
                        <div className="chat-input">
                            <input type="text" placeholder="Type a message..." className="form-control" />
                            <Button variant="primary">Send</Button>
                        </div>
                    </div>
                )}
            </div>
        </Container>
    );
}

export default ConfirmationPage;