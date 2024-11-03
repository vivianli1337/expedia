// import React from 'react';
// import { Card, ListGroup, Container, Row, Col, Button } from 'react-bootstrap';
// import { Flight } from './flightsData';

// interface PaymentPageProps {
//   outboundFlight: Flight;
//   returnFlight: Flight;
// }

// export function PaymentPage({ outboundFlight, returnFlight }: PaymentPageProps) {
//   if (!outboundFlight || !returnFlight) {
//     return <div>Flight information is missing. Please go back and select flights.</div>;
//   }

//   const totalCost = parseFloat(outboundFlight.price) + parseFloat(returnFlight.price);

//   return (
//     <Container fluid>
//       <Row>
//         <Col md={8}>
//           <h3>Review your trip</h3>
//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Title>Boston to Los Angeles</Card.Title>
//               <Card.Text>
//                 <strong>Flight Time:</strong> {outboundFlight.time} <br />
//                 <strong>Duration:</strong> {outboundFlight.duration} <br />
//                 <strong>Airline:</strong> {outboundFlight.airline} <br />
//               </Card.Text>
//             </Card.Body>
//           </Card>

//           <Card className="mb-3">
//             <Card.Body>
//               <Card.Title>Los Angeles to Boston</Card.Title>
//               <Card.Text>
//                 <strong>Flight Time:</strong> {returnFlight.time} <br />
//                 <strong>Duration:</strong> {returnFlight.duration} <br />
//                 <strong>Airline:</strong> {returnFlight.airline} <br />
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Price Summary</Card.Title>
//               <ListGroup variant="flush">
//                 <ListGroup.Item>
//                   <strong>Total Cost:</strong> ${totalCost.toFixed(2)}
//                 </ListGroup.Item>
//                 <ListGroup.Item>Flight: ${outboundFlight.price}</ListGroup.Item>
//                 <ListGroup.Item>Flight: ${returnFlight.price}</ListGroup.Item>
//               </ListGroup>
//               <Button variant="primary" size="lg" className="w-100">
//                 Proceed to Checkout
//               </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default PaymentPage;
import React from 'react';
import { useLocation, Link} from 'react-router-dom';
import { Card, ListGroup, Container, Row, Col, Button } from 'react-bootstrap';
import { Flight } from './flightsData';

interface PaymentPageProps {
  outboundFlight: Flight;
  returnFlight: Flight;
}

const PaymentPage: React.FC<PaymentPageProps> = () => {
  const location = useLocation();
  const { outboundFlight, returnFlight } = location.state || {};

  if (!outboundFlight || !returnFlight) {
    return <div>Flight information is missing. Please go back and select flights.</div>;
  }

  const totalCost = parseFloat(outboundFlight.price) + parseFloat(returnFlight.price);

  return (
    <Container fluid className="mt-4">
      <Row>
        <Col md={8}>
          <h3>Review Your Trip</h3>

          {/* Outbound Flight Details */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Boston to Los Angeles</Card.Title>
              <Card.Text>
                <strong>Flight Time:</strong> {outboundFlight.time} <br />
                <strong>Duration:</strong> {outboundFlight.duration} <br />
                <strong>Airline:</strong> {outboundFlight.airline} <br />
                <strong>Price:</strong> ${outboundFlight.price}
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Return Flight Details */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Los Angeles to Boston</Card.Title>
              <Card.Text>
                <strong>Flight Time:</strong> {returnFlight.time} <br />
                <strong>Duration:</strong> {returnFlight.duration} <br />
                <strong>Airline:</strong> {returnFlight.airline} <br />
                <strong>Price:</strong> ${returnFlight.price}
              </Card.Text>
            </Card.Body>
          </Card>

          {/* Additional Information */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Seats</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Boston to Los Angeles: Seat choice for a fee</ListGroup.Item>
                <ListGroup.Item>Los Angeles to Boston: Seat choice for a fee</ListGroup.Item>
              </ListGroup>
              <Button variant="secondary" className="mt-3">Choose Your Seats</Button>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Bags</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>Boston to Los Angeles: Personal item included, checked bag for a fee</ListGroup.Item>
                <ListGroup.Item>Los Angeles to Boston: Personal item included, checked bag for a fee</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Price Summary */}
        <Col md={4}>
          <Card className="sticky-top" style={{ top: '20px' }}>
            <Card.Body>
              <Card.Title>Price Summary</Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Flight 1 Price:</strong> ${outboundFlight.price}</ListGroup.Item>
                <ListGroup.Item><strong>Flight 2 Price:</strong> ${returnFlight.price}</ListGroup.Item>
                <ListGroup.Item className="text-primary"><strong>Total Cost:</strong> ${totalCost.toFixed(2)}</ListGroup.Item>
              </ListGroup>
              <Link to="/confirmation">
              <Button variant="primary" size="lg" className="w-100 mt-3">
                Proceed to Checkout
              </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentPage;
