import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SearchBar from './SearchBar';
import Filters from './Filter';
import FlightsList from './FlightList';
import FlightDetailsPanel from './FlightDetailsPanel';
import TravelRequirementsModal from './TravelRequirementsModal.tsx';
import { flights, Flight } from './flightsData';

export const FlightSearchPage: React.FC = () => {
    const [filteredFlights, setFilteredFlights] = useState<Flight[]>(flights);
    const [selectedOutboundFlight, setSelectedOutboundFlight] = useState<Flight | null>(null);
    const [selectedReturnFlight, setSelectedReturnFlight] = useState<Flight | null>(null);
    const [showPanel, setShowPanel] = useState(false);
    const [step, setStep] = useState<'outbound' | 'return'>('outbound');
    const [showModal, setShowModal] = useState(false); // State to control modal visibility

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

    const handleSelectOutboundFlight = (flight: Flight) => {
        setSelectedOutboundFlight(flight);
        setShowPanel(true);
    };

    const handleConfirmOutboundFlight = () => {
        setShowPanel(false);
        setStep('return');
    };

    const handleSelectReturnFlight = (flight: Flight) => {
        setSelectedReturnFlight(flight);
        setShowPanel(true);
    };

    const returnFlights = flights.filter(
        (flight) => flight.airport.toLowerCase().includes('lax to bos')
    );

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

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
                            <Row className="align-items-center mb-3">
                                <Col>
                                    <h3>Select Outbound Flight</h3>
                                </Col>
                                <Col xs="auto">
                                    <Button variant="primary" onClick={handleShowModal}>
                                        View Travel Requirements
                                    </Button>
                                </Col>
                            </Row>
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

            {selectedOutboundFlight && step === 'outbound' && (
                <FlightDetailsPanel
                    show={showPanel}
                    onHide={() => setShowPanel(false)}
                    flight={selectedOutboundFlight}
                    onSelect={handleConfirmOutboundFlight}
                    isLinkToPayment={false}
                />
            )}

            {selectedReturnFlight && step === 'return' && (
                <FlightDetailsPanel
                    show={showPanel}
                    onHide={() => setShowPanel(false)}
                    flight={selectedReturnFlight}
                    onSelect={() => {}}
                    isLinkToPayment={true}
                    outboundFlight={selectedOutboundFlight}
                />
            )}
            <TravelRequirementsModal show={showModal} onHide={handleCloseModal} />
        </Container>
    );
};

export default FlightSearchPage;
