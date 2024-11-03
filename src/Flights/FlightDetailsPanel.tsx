import { Offcanvas, Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { Flight } from './flightsData';

interface FlightDetailsPanelProps {
  show: boolean;
  onHide: () => void;
  flight: Flight | null;
  onSelect: () => void;
  isLinkToPayment?: boolean;
  outboundFlight?: Flight | null;
}

export function FlightDetailsPanel({
  show,
  onHide,
  flight,
  onSelect,
  isLinkToPayment,
  outboundFlight,
}: FlightDetailsPanelProps) {
  const navigate = useNavigate();

  if (!flight) {
    return null;
  }

  const handleNavigateToPayment = () => {
    navigate('./PaymentPage', { state: { outboundFlight, returnFlight: flight } });
  };

  return (
    <Offcanvas show={show} onHide={onHide} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Flight to {flight.airline}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <h5>{flight.time}</h5>
        <p><strong>Airport:</strong> {flight.airport}</p>
        <p>{flight.duration} ({flight.stops})</p>

        <Card className="mb-3">
          <Card.Body>
            <Card.Title>${flight.price}</Card.Title>
            <Card.Text>Roundtrip for 1 traveler</Card.Text>
          </Card.Body>
        </Card>

        <ListGroup variant="flush">
          {flight.extras.map((extra, index) => (
            <ListGroup.Item key={index}>
              <span>{extra}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* Conditionally render navigation button */}
        {isLinkToPayment ? (
        
          <Button variant="primary" className="mt-3" onClick={handleNavigateToPayment}>
            Proceed to Payment
          </Button>
        
        ) : (
          <Button variant="primary" className="mt-3" onClick={onSelect}>
            Select
          </Button>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default FlightDetailsPanel;
