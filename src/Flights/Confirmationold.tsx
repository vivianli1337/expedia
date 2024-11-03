import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './index.css'

export function ConfirmationPage() {
  return (
    <Container className="confirmation-page my-5">
      <Card className="p-4 shadow">
        <Card.Body>
          {/* Header Section */}
          <header className="text-center mb-4">
            <h1 className="text-primary">Booking Confirmed!</h1>
            <p className="text-muted">Your trip is all set. Check your email for the confirmation details.</p>
          </header>

          {/* Booking Summary Section */}
          <section className="booking-summary mb-4">
            <h4 className="text-dark">Booking Summary</h4>
            <Row className="mt-3">
              <Col md={6}>
                <strong>Destination:</strong>
                <p>Paris, France</p>
              </Col>
              <Col md={6}>
                <strong>Check-in:</strong>
                <p>June 15, 2024</p>
              </Col>
              <Col md={6}>
                <strong>Check-out:</strong>
                <p>June 20, 2024</p>
              </Col>
              <Col md={6}>
                <strong>Hotel:</strong>
                <p>Hotel Eiffel</p>
              </Col>
              <Col md={6}>
                <strong>Room Type:</strong>
                <p>Double Room, Sea View</p>
              </Col>
            </Row>
          </section>

          {/* Traveler Details Section */}
          <section className="traveler-info mb-4">
            <h4 className="text-dark">Traveler Details</h4>
            <Row className="mt-3">
              <Col md={6}>
                <strong>Name:</strong>
                <p>John Doe</p>
              </Col>
              <Col md={6}>
                <strong>Email:</strong>
                <p>johndoe@example.com</p>
              </Col>
              <Col md={6}>
                <strong>Phone:</strong>
                <p>+1 234 567 890</p>
              </Col>
            </Row>
          </section>

          {/* Payment Summary Section */}
          <section className="payment-summary mb-4">
            <h4 className="text-dark">Payment Summary</h4>
            <Row className="mt-3">
              <Col md={6}>
                <strong>Subtotal:</strong>
                <p>$1,200.00</p>
              </Col>
              <Col md={6}>
                <strong>Taxes & Fees:</strong>
                <p>$150.00</p>
              </Col>
              <Col md={6} className="total-cost mt-3">
                <strong>Total:</strong>
                <p className="font-weight-bold">$1,350.00</p>
              </Col>
            </Row>
          </section>

          {/* Print Button */}
          <div className="text-center">
            <Button variant="primary" onClick={() => window.print()} className="mt-3">
              Print Confirmation
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ConfirmationPage;
