import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar'; // Import the SearchBar component
import Filters from './Filter'; // Import the Filters component
import FlightsList from './FlightList';
import FlightDetailsPanel from './FlightDetailsPanel';
import { flights, Flight } from './flightsData';

export function FlightSearchPage() {
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>(flights);
  const [selectedOutboundFlight, setSelectedOutboundFlight] = useState<Flight | null>(null);
  const [selectedReturnFlight, setSelectedReturnFlight] = useState<Flight | null>(null);
  const [showPanel, setShowPanel] = useState(false);
  const [step, setStep] = useState<'outbound' | 'return'>('outbound');

  // Filter flights based on criteria
  const handleSearch = (criteria: {
    from: string;
    to: string;
    tripType: string;
    travelerCount: number;
    travelClass: string;
    departureDate: string;
    returnDate?: string;
  }) => {
    const filtered = flights.filter(flight =>
      flight.airport.toLowerCase().includes(`${criteria.from} to ${criteria.to}`.toLowerCase())
    );
    setFilteredFlights(filtered);
  };

  // Handles selecting an outbound flight
  const handleSelectOutboundFlight = (flight: Flight) => {
    setSelectedOutboundFlight(flight);
    setShowPanel(true);
  };

  // Confirm outbound flight selection and proceed to return flight selection
  const handleConfirmOutboundFlight = () => {
    setShowPanel(false);
    setStep('return');
  };

  // Handles selecting a return flight
  const handleSelectReturnFlight = (flight: Flight) => {
    setSelectedReturnFlight(flight);
    setShowPanel(true);
  };

  const returnFlights = flights.filter(
    (flight) => flight.airport.toLowerCase().includes('lax to bos') // Assuming "LAX to BOS" for return flights
  );

  return (
    <Container fluid>
      {/* Add SearchBar component and pass handleSearch function */}
      <SearchBar onSearch={handleSearch} />

      <Row>
        <Col md={3}>
          {/* Add Filters component */}
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

      {/* Outbound Flight Details Panel */}
      {selectedOutboundFlight && step === 'outbound' && (
        <FlightDetailsPanel
          show={showPanel}
          onHide={() => setShowPanel(false)}
          flight={selectedOutboundFlight}
          onSelect={handleConfirmOutboundFlight}
          isLinkToPayment={false} // Disable payment link for outbound flight
        />
      )}

      {/* Return Flight Details Panel with Payment Link */}
      {selectedReturnFlight && step === 'return' && (
        <FlightDetailsPanel
          show={showPanel}
          onHide={() => setShowPanel(false)}
          flight={selectedReturnFlight}
          onSelect={() => {}} // No additional action needed for return flight
          isLinkToPayment={true} // Enable payment link for return flight selection
          outboundFlight={selectedOutboundFlight} // Pass outbound flight for payment
        />
      )}
    </Container>
  );
}

export default FlightSearchPage;
