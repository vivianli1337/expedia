import React from 'react';
import './index.css';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { FaUserAlt, FaCalendarAlt } from 'react-icons/fa';
import { Content } from './content';
import { Link, useNavigate } from 'react-router-dom';



export function Homepage() {
    return (
        <div className="homepage-container">
            {/* Header Section */}
            <div className="header-section">
                <Container>
                    <h1>Hey, Bean!</h1>
                    <h2>Where do you want to travel?</h2>
                    <Link to="/Explore/ExploreLayout">
                    <Button variant="primary" className="explore-more-button">
                    Explore more</Button>
                    </Link>
                    <div className="pill-buttons">
                        <Button variant="outline-secondary" className="pill-button active">Flights</Button>
                        <Button variant="outline-secondary" className="pill-button">Stays</Button>
                        <Button variant="outline-secondary" className="pill-button">Things to do</Button>
                        <Button variant="outline-secondary" className="pill-button">Cruises</Button>
                        <Button variant="outline-secondary" className="pill-button">Cars</Button>
                    </div>
                </Container>
            </div>

            {/* Search Section */}
            <div className="search-section">
                <Container>
                    {/* First Row: Dropdowns and Buttons */}
                    <Row className="search-container">
                        <Col className="dropdown-section">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                    Round Trip
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">One Way</Dropdown.Item>
                                    <Dropdown.Item href="#">Multi-City</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col className="traveler-section">
                            <Button variant="outline-secondary" className="traveler-button">
                                <FaUserAlt /> Travelers 1 traveler
                            </Button>
                        </Col>
                        <Col className="dropdown-section">
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                    Economy
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Economy</Dropdown.Item>
                                    <Dropdown.Item href="#">Premium economy</Dropdown.Item>
                                    <Dropdown.Item href="#">Business class</Dropdown.Item>
                                    <Dropdown.Item href="#">First class</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col className="search-button-section">
                        <Link to="/Flights">
                            <Button variant="primary" className="search-button">SEARCH</Button>
                        </Link>
                        </Col>
                    </Row>

                    <Row className="location-date-container">
                        <Col className="location-section">
                            <div>
                                <strong>Leaving from</strong>
                                <p>BOS<br />Boston, MA</p>
                            </div>
                        </Col>
                        <Col className="location-section">
                            <div>
                                <strong>Going To</strong>
                                <p>EWR<br />Newark, NJ</p>
                            </div>
                        </Col>
                        <Col className="date-section">
                            <div>
                                <strong><FaCalendarAlt /> Departure Date</strong>
                                <p>Sat. Nov 2, 2024</p>
                            </div>
                        </Col>
                        <Col className="date-section">
                            <div>
                                <strong><FaCalendarAlt /> Arrival Date</strong>
                                <p>Tues. Nov 5, 2024</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Content />
        </div>
    );
}