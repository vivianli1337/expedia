import React from 'react';
import { Card, Button } from 'react-bootstrap';

interface Flight {
  time: string;
  duration: string;
  price: string;
  airline: string;
  stops: string;
}

const flights: Flight[] = [
  { time: '6:00am - 9:36am', duration: '6h 36m', price: '$287', airline: 'United', stops: 'Nonstop' },
  { time: '8:30am - 12:05pm', duration: '6h 35m', price: '$330', airline: 'United', stops: 'Nonstop' },
  { time: '2:26pm - 10:20pm', duration: '10h 54m', price: '$259', airline: 'Spirit', stops: '1 Stop' },
];

export function FlightsList() {
  return (
    <div className="flights-list">
      {flights.map((flight, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{flight.time}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{flight.duration} ({flight.stops})</Card.Subtitle>
            <Card.Text>
              <strong>Airline:</strong> {flight.airline} <br />
              <strong>Price:</strong> {flight.price}
            </Card.Text>
            <Button variant="primary">Select</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default FlightsList;
