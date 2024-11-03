// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import { Card } from 'react-bootstrap';


// interface Location {
//     lat: number;
//     lng: number;
//     name?: string;
//     time?: string;
//     description?: string;
// }

// const MapComponent = ({ destination }: { destination: string }) => {
//     const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
//     const [locations, setLocations] = useState<Location[]>([]);
//     const [mapCenter, setMapCenter] = useState({ lat: 34.0522, lng: -118.2437 });

//     const mapStyles = { height: '400px', width: '100%' };

//     useEffect(() => {
//         const fetchLocations = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:5000/process-itinerary', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({
//                         itinerary: {
//                             date: {
//                                 activities: [
//                                     { thing_to_do: "Visit Hollywood Walk of Fame", time: "10:00 AM" },
//                                     { thing_to_do: "Tour at Universal Studios", time: "2:00 PM" },
//                                 ],
//                             },
//                         },
//                     }),
//                 });
//                 const data = await response.json();
//                 if (data.success && data.locations) {
//                     setLocations(data.locations);
//                 }
//             } catch (error) {
//                 console.error("Error fetching locations:", error);
//             }
//         };

//         fetchLocations();
//     }, [destination]);

//     const handleMarkerClick = (location: Location) => setSelectedLocation(location);

//     return (
//         <Card className="p-4 mt-4">
//             <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
//                 <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={mapCenter}>
//                     {locations.map((location, index) => (
//                         <Marker
//                             key={index}
//                             position={{ lat: location.lat, lng: location.lng }}
//                             onClick={() => handleMarkerClick(location)}
//                         />
//                     ))}

//                     {selectedLocation && (
//                         <InfoWindow
//                             position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
//                             onCloseClick={() => setSelectedLocation(null)}
//                         >
//                             <div>
//                                 <h3 className="text-lg font-semibold">{selectedLocation.name}</h3>
//                                 <p className="text-sm">{selectedLocation.time}</p>
//                                 <p className="text-sm">{selectedLocation.description}</p>
//                             </div>
//                         </InfoWindow>
//                     )}
//                 </GoogleMap>
//             </LoadScript>
//         </Card>
//     );
// };

// export default MapComponent;


// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import { Card } from 'react-bootstrap';

// interface Location {
//     lat: number;
//     lng: number;
//     name?: string;
//     time?: string;
//     description?: string;
// }

// const MapComponent = ({ destination }: { destination: string }) => {
//     const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
//     const [locations, setLocations] = useState<Location[]>([]);
//     const [mapCenter, setMapCenter] = useState({ lat: 34.0522, lng: -118.2437 });

//     const mapStyles = { height: '400px', width: '100%' };

//     useEffect(() => {
//         const fetchLocations = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:5000/process-itinerary', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({
//                         itinerary: {
//                             date: {
//                                 activities: [
//                                     { thing_to_do: "Visit Hollywood Walk of Fame", time: "10:00 AM" },
//                                     { thing_to_do: "Tour at Universal Studios", time: "2:00 PM" },
//                                 ],
//                             },
//                         },
//                     }),
//                 });
//                 const data = await response.json();
//                 if (data.success && data.locations) {
//                     setLocations(data.locations);
//                 }
//             } catch (error) {
//                 console.error("Error fetching locations:", error);
//             }
//         };

//         fetchLocations();
//     }, [destination]);

//     const handleMarkerClick = (location: Location) => setSelectedLocation(location);

//     return (
//         <Card className="p-4 mt-4">
//             <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}>
//                 <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={mapCenter}>
//                     {locations.map((location, index) => (
//                         <Marker
//                             key={index}
//                             position={{ lat: location.lat, lng: location.lng }}
//                             onClick={() => handleMarkerClick(location)}
//                         />
//                     ))}

//                     {selectedLocation && (
//                         <InfoWindow
//                             position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
//                             onCloseClick={() => setSelectedLocation(null)}
//                         >
//                             <div>
//                                 <h3 className="text-lg font-semibold">{selectedLocation.name}</h3>
//                                 <p className="text-sm">{selectedLocation.time}</p>
//                                 <p className="text-sm">{selectedLocation.description}</p>
//                             </div>
//                         </InfoWindow>
//                     )}
//                 </GoogleMap>
//             </LoadScript>
//         </Card>
//     );
// };

// export default MapComponent;

// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import { Card } from 'react-bootstrap';

// interface Location {
//     lat: number;
//     lng: number;
//     name?: string;
//     time?: string;
//     description?: string;
// }

// const MapComponent = ({ destination }: { destination: string }) => {
//     const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
//     const [locations, setLocations] = useState<Location[]>([]);
//     const [mapCenter, setMapCenter] = useState({ lat: 34.0522, lng: -118.2437 });

//     const mapStyles = { height: '400px', width: '100%' };

//     useEffect(() => {
//         const fetchLocations = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:5000/process-itinerary', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({
//                         itinerary: {
//                             date: {
//                                 activities: [
//                                     { thing_to_do: "Visit Hollywood Walk of Fame", time: "10:00 AM" },
//                                     { thing_to_do: "Tour at Universal Studios", time: "2:00 PM" },
//                                 ],
//                             },
//                         },
//                     }),
//                 });
//                 const data = await response.json();
//                 if (data.success && data.locations) {
//                     setLocations(data.locations);
//                 }
//             } catch (error) {
//                 console.error("Error fetching locations:", error);
//             }
//         };

//         fetchLocations();
//     }, [destination]);

//     const handleMarkerClick = (location: Location) => setSelectedLocation(location);

//     return (
//         <Card className="p-4 mt-4">
//             <LoadScript
//                 googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}
//                 onLoad={() => console.log('Google Maps loaded successfully')}
//                 onError={(error) => console.error('Error loading Google Maps', error)}
//             >
//                 <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={mapCenter}>
//                     {locations.map((location, index) => (
//                         <Marker
//                             key={index}
//                             position={{ lat: location.lat, lng: location.lng }}
//                             onClick={() => handleMarkerClick(location)}
//                         />
//                     ))}

//                     {selectedLocation && (
//                         <InfoWindow
//                             position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
//                             onCloseClick={() => setSelectedLocation(null)}
//                         >
//                             <div>
//                                 <h3>{selectedLocation.name}</h3>
//                                 <p>{selectedLocation.time}</p>
//                                 <p>{selectedLocation.description}</p>
//                             </div>
//                         </InfoWindow>
//                     )}
//                 </GoogleMap>
//             </LoadScript>
//         </Card>
//     );
// };

// export default MapComponent;

// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import { Card } from 'react-bootstrap';

// interface Location {
//     lat: number;
//     lng: number;
//     name?: string;
//     time?: string;
//     description?: string;
// }

// interface MapComponentProps {
//     destination: string;
//     apiKey: string;
// }
// const MapComponent: React.FC<MapComponentProps> = ({ destination, apiKey }) => {
//     const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
//     const [locations, setLocations] = useState<Location[]>([]);
//     const [mapCenter, setMapCenter] = useState({ lat: 34.0522, lng: -118.2437 });
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     const mapStyles = { height: '400px', width: '100%' };

//     // Use REACT_APP prefix for Create React App
//     const googleMapsApiKey = apiKey || process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

//     const handleMarkerClick = (location: Location) => setSelectedLocation(location);

//     useEffect(() => {
//         const fetchLocations = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:5000/process-itinerary', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({
//                         itinerary: {
//                             date: {
//                                 activities: [
//                                     { thing_to_do: "Visit Hollywood Walk of Fame", time: "10:00 AM" },
//                                     { thing_to_do: "Tour at Universal Studios", time: "2:00 PM" },
//                                 ],
//                             },
//                         },
//                     }),
//                 });
//                 const data = await response.json();
//                 if (data.success && data.locations) {
//                     setLocations(data.locations);
//                     if (data.locations.length > 0) {
//                         setMapCenter({ lat: data.locations[0].lat, lng: data.locations[0].lng });
//                     }
//                 }
//             } catch (error) {
//                 console.error("Error fetching locations:", error);
//             }
//         };

//         fetchLocations();
//     }, [destination]);

//     const handleMarkerClick = (location: Location) => setSelectedLocation(location);

//     return (
//         <Card className="p-4 mt-4">
//             <LoadScript
//                 googleMapsApiKey={apiKey}
//                 onLoad={() => console.log('Google Maps loaded successfully')}
//                 onError={(error) => console.error('Error loading Google Maps', error)}
//             >
//                 <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={mapCenter}>
//                     {locations.map((location, index) => (
//                         <Marker
//                             key={index}
//                             position={{ lat: location.lat, lng: location.lng }}
//                             onClick={() => handleMarkerClick(location)}
//                         />
//                     ))}

//                     {selectedLocation && (
//                         <InfoWindow
//                             position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
//                             onCloseClick={() => setSelectedLocation(null)}
//                         >
//                             <div>
//                                 <h3>{selectedLocation.name || "Unnamed Location"}</h3>
//                                 <p>{selectedLocation.time || "No time available"}</p>
//                                 <p>{selectedLocation.description || "No description available"}</p>
//                             </div>
//                         </InfoWindow>
//                     )}
//                 </GoogleMap>
//             </LoadScript>
//         </Card>
//     );
// };

// export default MapComponent;

// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import { Card, Spinner } from 'react-bootstrap';

// interface Location {
//     lat: number;
//     lng: number;
//     name?: string;
//     time?: string;
//     description?: string;
// }

// interface MapComponentProps {
//     destination: string;
// }

// const MapComponent: React.FC<MapComponentProps> = ({ destination }) => {
//     const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
//     const [locations, setLocations] = useState<Location[]>([]);
//     const [mapCenter, setMapCenter] = useState({ lat: 34.0522, lng: -118.2437 });
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     const mapStyles = { height: '400px', width: '100%' };

//     // Get API key directly from the environment variable
//     const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

//     const handleMarkerClick = (location: Location) => setSelectedLocation(location);

//     useEffect(() => {
//         const fetchLocations = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:5000/process-itinerary', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({
//                         itinerary: {
//                             date: {
//                                 activities: [
//                                     { thing_to_do: "Visit Hollywood Walk of Fame", time: "10:00 AM" },
//                                     { thing_to_do: "Tour at Universal Studios", time: "2:00 PM" },
//                                 ],
//                             },
//                         },
//                     }),
//                 });
//                 const data = await response.json();
//                 if (data.success && data.locations) {
//                     setLocations(data.locations);
//                     if (data.locations.length > 0) {
//                         setMapCenter({ lat: data.locations[0].lat, lng: data.locations[0].lng });
//                     }
//                 }
//             } catch (error) {
//                 console.error("Error fetching locations:", error);
//                 setError("Failed to load locations.");
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchLocations();
//     }, [destination]);

//     return (
//         <Card className="p-4 mt-4">
//             {isLoading && (
//                 <div className="text-center">
//                     <Spinner animation="border" variant="primary" />
//                     <p>Loading map...</p>
//                 </div>
//             )}
//             {!isLoading && !error && googleMapsApiKey && (
//                 <LoadScript
//                     googleMapsApiKey={googleMapsApiKey}
//                     onLoad={() => setIsLoading(false)}
//                     onError={(error) => {
//                         console.error('Error loading Google Maps', error);
//                         setError("Error loading Google Maps");
//                     }}
//                 >
//                     <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={mapCenter}>
//                         {locations.map((location, index) => (
//                             <Marker
//                                 key={index}
//                                 position={{ lat: location.lat, lng: location.lng }}
//                                 onClick={() => handleMarkerClick(location)}
//                             />
//                         ))}

//                         {selectedLocation && (
//                             <InfoWindow
//                                 position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
//                                 onCloseClick={() => setSelectedLocation(null)}
//                             >
//                                 <div>
//                                     <h3>{selectedLocation.name || "Unnamed Location"}</h3>
//                                     <p>{selectedLocation.time || "No time available"}</p>
//                                     <p>{selectedLocation.description || "No description available"}</p>
//                                 </div>
//                             </InfoWindow>
//                         )}
//                     </GoogleMap>
//                 </LoadScript>
//             )}
//             {error && (
//                 <div className="text-center text-danger">
//                     <p>{error}</p>
//                 </div>
//             )}
//         </Card>
//     );
// };

// // export default MapComponent;
// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import { Card, Spinner } from 'react-bootstrap';

// interface Location {
//     lat: number;
//     lng: number;
//     name?: string;
//     time?: string;
//     description?: string;
// }

// interface MapComponentProps {
//     destination: string;
// }

// const MapComponent: React.FC<MapComponentProps> = ({ destination }) => {
//     const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
//     const [locations, setLocations] = useState<Location[]>([]);
//     const [mapCenter, setMapCenter] = useState({ lat: 34.0522, lng: -118.2437 });
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     const mapStyles = { height: '400px', width: '100%' };

//     // Get API key directly from the environment variable
//     const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


//     const handleMarkerClick = (location: Location) => setSelectedLocation(location);

//     useEffect(() => {
//         const fetchLocations = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:5000/process-itinerary', {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({
//                         itinerary: {
//                             date: {
//                                 activities: [
//                                     { thing_to_do: "Visit Hollywood Walk of Fame", time: "10:00 AM" },
//                                     { thing_to_do: "Tour at Universal Studios", time: "2:00 PM" },
//                                 ],
//                             },
//                         },
//                     }),
//                 });
//                 const data = await response.json();
//                 if (data.success && data.locations) {
//                     setLocations(data.locations);
//                     if (data.locations.length > 0) {
//                         setMapCenter({ lat: data.locations[0].lat, lng: data.locations[0].lng });
//                     }
//                 }
//             } catch (error) {
//                 console.error("Error fetching locations:", error);
//                 setError("Failed to load locations.");
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchLocations();
//     }, [destination]);

//     return (
//         <Card className="p-4 mt-4">
//             {isLoading && (
//                 <div className="text-center">
//                     <Spinner animation="border" variant="primary" />
//                     <p>Loading map...</p>
//                 </div>
//             )}
//             {!isLoading && !error && googleMapsApiKey ? (
//                 <LoadScript
//                     googleMapsApiKey={googleMapsApiKey}
//                     onLoad={() => setIsLoading(false)}
//                     onError={() => {
//                         console.error('Error loading Google Maps');
//                         setError("Error loading Google Maps");
//                     }}
//                 >
//                     <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={mapCenter}>
//                         {locations.map((location, index) => (
//                             <Marker
//                                 key={index}
//                                 position={{ lat: location.lat, lng: location.lng }}
//                                 onClick={() => handleMarkerClick(location)}
//                             />
//                         ))}

//                         {selectedLocation && (
//                             <InfoWindow
//                                 position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
//                                 onCloseClick={() => setSelectedLocation(null)}
//                             >
//                                 <div>
//                                     <h3>{selectedLocation.name || "Unnamed Location"}</h3>
//                                     <p>{selectedLocation.time || "No time available"}</p>
//                                     <p>{selectedLocation.description || "No description available"}</p>
//                                 </div>
//                             </InfoWindow>
//                         )}
//                     </GoogleMap>
//                 </LoadScript>
//             ) : !googleMapsApiKey && (
//                 <div className="text-center text-danger">
//                     <p>Google Maps API key is missing. Please check your .env configuration.</p>
//                 </div>
//             )}
//             {error && (
//                 <div className="text-center text-danger">
//                     <p>{error}</p>
//                 </div>
//             )}
//         </Card>
//     );
// };

// export default MapComponent;
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Card } from 'react-bootstrap';

interface Location {
    lat: number;
    lng: number;
    name?: string;
    time?: string;
    description?: string;
}

const MapComponent = ({ destination }: { destination: string }) => {
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [locations, setLocations] = useState<Location[]>([]);
    const [mapCenter, setMapCenter] = useState({ lat: 34.0522, lng: -118.2437 });

    const mapStyles = { height: '400px', width: '100%' };

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/process-itinerary', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        itinerary: {
                            date: {
                                activities: [
                                    { thing_to_do: "Visit Hollywood Walk of Fame", time: "10:00 AM" },
                                    { thing_to_do: "Tour at Universal Studios", time: "2:00 PM" },
                                ],
                            },
                        },
                    }),
                });
                const data = await response.json();
                if (data.success && data.locations) {
                    setLocations(data.locations);
                }
            } catch (error) {
                console.error("Error fetching locations:", error);
            }
        };

        fetchLocations();
    }, [destination]);

    const handleMarkerClick = (location: Location) => setSelectedLocation(location);

    return (
        <Card className="p-4 mt-4">
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}
                onLoad={() => console.log('Google Maps loaded successfully')}
                onError={(error) => console.error('Error loading Google Maps', error)}
            >
                <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={mapCenter}>
                    {locations.map((location, index) => (
                        <Marker
                            key={index}
                            position={{ lat: location.lat, lng: location.lng }}
                            onClick={() => handleMarkerClick(location)}
                        />
                    ))}

                    {selectedLocation && (
                        <InfoWindow
                            position={{ lat: selectedLocation.lat, lng: selectedLocation.lng }}
                            onCloseClick={() => setSelectedLocation(null)}
                        >
                            <div>
                                <h3>{selectedLocation.name}</h3>
                                <p>{selectedLocation.time}</p>
                                <p>{selectedLocation.description}</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </Card>
    );
};

export default MapComponent;