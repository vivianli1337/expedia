import React from 'react';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import { FaInfoCircle, FaFileAlt, FaHeartbeat, FaPlusCircle } from 'react-icons/fa';
import './index.css'

interface TravelRequirementsModalProps {
  show: boolean;
  onHide: () => void;
}

const TravelRequirementsModal: React.FC<TravelRequirementsModalProps> = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Travel Requirements</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Visa Requirements Section */}
        <Row className="mb-3">
          <Col xs={1}>
            <FaInfoCircle size={24} />
          </Col>
          <Col>
            <h5>Visa Requirements</h5>
            <p>You need a visa for Mainland China if you have a United States passport.</p>
            <Button variant="primary" size="sm">Start Application</Button>
            <p><a href="#details">See Details & Exemptions</a></p>
          </Col>
        </Row>

        {/* Passport and Documents Section */}
        <Row className="mb-3">
          <Col xs={1}>
            <FaFileAlt size={24} />
          </Col>
          <Col>
            <h5>Passport and Documents</h5>
            <ul>
              <li>Mandatory proof of return or onward ticket from China. <a href="#details">See Details</a></li>
              <li>Mandatory proof of accommodation. <a href="#details">See Details</a></li>
              <li>Passport valid for at least 6 months from the time of entry. <a href="#details">See Details</a></li>
            </ul>
          </Col>
        </Row>

        {/* Health Risks and Requirements Section */}
        <Row className="mb-3">
          <Col xs={1}>
            <FaHeartbeat size={24} />
          </Col>
          <Col>
            <h5>Health Risks and Requirements</h5>
            <p>You may need prescription medication for Travelers Diarrhea.</p>
            <Button variant="outline-primary" size="sm">Find the right medications for your trip</Button>
            <p><a href="#details">See Details</a></p>
          </Col>
        </Row>

        {/* Additional Information Section */}
        <Row className="mb-3">
          <Col xs={1}>
            <FaPlusCircle size={24} />
          </Col>
          <Col>
            <h5>Additional Information</h5>
            <ul>
              <li>Health screening for Mpox may be required on arrival. <a href="#details">See Details</a></li>
              <li>Instant worldwide 5G connection on your phone without roaming fees. <a href="#details">See Details</a></li>
            </ul>
            <Button variant="outline-primary" size="sm">Find the right eSim for your trip</Button>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <p className="text-muted">
          Information is provided as guidance only and accurate at the time of publishing. Always check government websites and airline materials before booking and traveling.
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default TravelRequirementsModal;


