import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import Filters from './Filter';
import FlightsList from './FlightList';
import FlightDetailsPanel from './FlightDetailsPanel';
import { flights, Flight } from './flightsData';

export function FlightSearchPage() {
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>(flights);
  const [selectedOutboundFlight, setSelectedOutboundFlight] = useState<Flight | null>(null);
  const [selectedReturnFlight, setSelectedReturnFlight] = useState<Flight | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [step, setStep] = useState<'outbound' | 'return'>('outbound');

  const handleSearch = (criteria: {
    from: string;
    to: string;
    tripType: string;
    travelerCount: number;
    travelClass: string;
    departureDate: string;
    returnDate?: string;
  }) => {
    const filtered = flights.filter(
      (flight) =>
        flight.airport.toLowerCase().includes(`${criteria.from} to ${criteria.to}`.toLowerCase())
    );
    setFilteredFlights(filtered);
  };

  // Handles selecting an outbound flight and shows its details
  const handleSelectOutboundFlight = (flight: Flight) => {
    setSelectedOutboundFlight(flight);
    setShowPanel(true); // Show the side panel with outbound flight details
  };

  // Confirms the outbound flight selection and moves to return flight selection
  const handleConfirmOutboundFlight = () => {
    setShowPanel(false);
    setStep('return'); // Move to return flight selection
  };

  // Handles selecting a return flight and shows its details
  const handleSelectReturnFlight = (flight: Flight) => {
    setSelectedReturnFlight(flight);
    setShowPanel(true); // Show side panel with the selected return flight details
  };

  const returnFlights = flights.filter(
    (flight) =>
      flight.airport.toLowerCase().includes('lax to bos') // Assuming "LAX to BOS" for return flights
  );

  return (
    <Container fluid>
      <SearchBar onSearch={handleSearch} />
      <Row>
        <Col md={3}>
          <Filters />
        </Col>
        <Col md={9}>
          {step === 'outbound' ? (
            <>
              <h3>Select Outbound Flight</h3>
              <FlightsList flights={filteredFlights} onSelectFlight={handleSelectOutboundFlight} />
            </>
          ) : (
            <>
              <h3>Select Return Flight</h3>
              <FlightsList flights={returnFlights} onSelectFlight={handleSelectReturnFlight} />
            </>
          )}
        </Col>
      </Row>

      {/* Side Panel for Outbound Flight Details */}
      {selectedOutboundFlight && step === 'outbound' && (
        <FlightDetailsPanel
          show={showPanel}
          onHide={() => setShowPanel(false)}
          flight={selectedOutboundFlight}
          onSelect={handleConfirmOutboundFlight} // Select button action for outbound flight
          isLinkToPayment={false} // No payment link for outbound flight selection
        />
      )}

      {/* Side Panel for Return Flight Details */}
      {selectedReturnFlight && step === 'return' && (
        <FlightDetailsPanel
          show={showPanel}
          onHide={() => setShowPanel(false)}
          flight={selectedReturnFlight}
          onSelect={() => {}} // No additional action needed for return flight
          isLinkToPayment={true} // Link to payment page for return flight
        />
      )}
    </Container>
  );
}

export default FlightSearchPage;
