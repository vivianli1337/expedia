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
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY!}>
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
                                <h3 className="text-lg font-semibold">{selectedLocation.name}</h3>
                                <p className="text-sm">{selectedLocation.time}</p>
                                <p className="text-sm">{selectedLocation.description}</p>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </Card>
    );
};

export default MapComponent;
