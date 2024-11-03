import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Flight } from './flightsData';

interface FlightsListProps {
  flights: Flight[];
  onSelectFlight: (flight: Flight) => void;
}

export function FlightsList({ flights, onSelectFlight }: FlightsListProps) {
  return (
    <div className="flights-list">
      {flights.map((flight) => (
        <Card key={flight.id} className="mb-3">
          <Card.Body>
            <Card.Title>{flight.time}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {flight.duration} ({flight.stops})
            </Card.Subtitle>
            <Card.Text>
              <strong>Airline:</strong> {flight.airline} <br />
              <strong>Airport:</strong> {flight.airport} <br />
              <strong>Price:</strong> ${flight.price}
            </Card.Text>
            <Button variant="primary" onClick={() => onSelectFlight(flight)}>
              Select
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default FlightsList;
