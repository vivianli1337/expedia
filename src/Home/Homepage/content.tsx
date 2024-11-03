import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './index.css';

interface Flight {
    route: string;
    dates: string;
    details: string;
    price: string;
}

interface Trip {
    destination: string;
    dates: string;
    saves: number;
    imageUrl: string;
}

interface Search {
    title: string;
    dates: string;
    details: string;
}

interface Stay {
    name: string;
    location: string;
    rating: string;
    reviews: string;
    imageUrl: string;
}

// Mock data
const flightsTracking: Flight[] = [
    { route: "BOS - EWR", dates: "Nov 22 - Dec 2", details: "Roundtrip · 1 traveler · Economy", price: "$230 No price change" },
    { route: "BOS - EWR", dates: "Nov 23 - Dec 2", details: "Roundtrip · 1 traveler · Economy", price: "$230 No price change" }
];

const trips: Trip[] = [
    { destination: "New York", dates: "Fri, Nov 15 – Sat, Nov 16", saves: 2, imageUrl: "https://example.com/image1.jpg" },
    { destination: "New York", dates: "Fri, Nov 22 – Mon, Dec 2", saves: 2, imageUrl: "https://example.com/image2.jpg" }
];

const recentSearches: Search[] = [
    { title: "Flights from Logan International Airport to...", dates: "Fri, Nov 22 – Mon, Dec 2", details: "Roundtrip · 1 traveler" },
    { title: "Flights from Logan International Airport to...", dates: "Fri, Nov 22 – Mon, Dec 2", details: "Roundtrip · 1 traveler" },
    { title: "Packages from Boston, MA, United States of...", dates: "Wed, Jan 1 – Thu, Jan 9", details: "Hotel + Flight" },
    { title: "Stays in Boston", dates: "Sat, Nov 16 – Sun, Nov 17", details: "2 travelers · 1 room" }
];

const recommendedStays: Stay[] = [
    { name: "Senderos Aparts & Suites", location: "El Chalten", rating: "7.6 Good", reviews: "(4 reviews)", imageUrl: "https://example.com/stay1.jpg" },
    { name: "Los Cerros del Chalten Boutique Hotel", location: "El Chalten", rating: "9.6 Exceptional", reviews: "(107 reviews)", imageUrl: "https://example.com/stay2.jpg" },
    { name: "Destino Sur Hotel & Spa de Montaña", location: "El Chalten", rating: "9.4 Exceptional", reviews: "(205 reviews)", imageUrl: "https://example.com/stay3.jpg" },
    { name: "Posada y Cabañas El Barranco", location: "El Chalten", rating: "9.0 Wonderful", reviews: "(66 reviews)", imageUrl: "https://example.com/stay4.jpg" },
    { name: "Fitz Roy Hosteria", location: "El Chalten", rating: "8.8 Excellent", reviews: "(50 reviews)", imageUrl: "https://example.com/stay5.jpg" }
];

const amenities = [
    { label: "Pet friendly", imageUrl: "https://example.com/pet-friendly.jpg" },
    { label: "Family friendly", imageUrl: "https://example.com/family-friendly.jpg" },
    { label: "Hot tub", imageUrl: "https://example.com/hot-tub.jpg" },
    { label: "Pool", imageUrl: "https://example.com/pool.jpg" },
    { label: "Spa", imageUrl: "https://example.com/spa.jpg" }
];

const userName = "Bean";
const oneKeyCash = "$500";

export function Content() {
    return (
        <Container className="content-container">
            {/* Notification Section */}
            <Row className="notification-section">
                <Col>
                    <div className="notification">
                        <span>⚙️</span> {userName}, you have {oneKeyCash} in OneKeyCash to use on your next trip.
                    </div>
                </Col>
            </Row>

            {/* Flights Tracking Section */}
            <Row>
                <Col>
                    <h2 className="section-title">Flights you're tracking</h2>
                    <Row className="flight-cards">
                        {flightsTracking.map((flight, index) => (
                            <Col key={index} md={6} lg={4}>
                                <Card className="flight-card">
                                    <Card.Body>
                                        <Card.Title>{flight.route}</Card.Title>
                                        <Card.Text>{flight.dates}</Card.Text>
                                        <Card.Text>{flight.details}</Card.Text>
                                        <Card.Text>{flight.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

            {/* Your Trips Section */}
            <Row>
                <Col>
                    <h2 className="section-title">Your trips</h2>
                    <Row className="trip-cards">
                        {trips.map((trip, index) => (
                            <Col key={index} md={6}>
                                <Card className="trip-card">
                                    <Card.Img variant="top" src={trip.imageUrl} />
                                    <Card.Body>
                                        <Card.Title>{trip.destination}</Card.Title>
                                        <Card.Text>{trip.dates}</Card.Text>
                                        <Card.Text>❤️ {trip.saves} saves</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

            {/* Recent Searches Section */}
            <Row>
                <Col>
                    <h2 className="section-title">Your recent searches</h2>
                    <Row className="recent-searches">
                        {recentSearches.map((search, index) => (
                            <Col key={index} md={6} lg={3}>
                                <Card className="search-card">
                                    <Card.Body>
                                        <Card.Title>{search.title}</Card.Title>
                                        <Card.Text>{search.dates}</Card.Text>
                                        <Card.Text>{search.details}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

            {/* OneKeyCash Promotion Section */}
            <Row>
                <Col>
                    <Card className="promo-card">
                        <Card.Img variant="top" src="https://example.com/onekeycash-cover.jpg" className="promo-image" />
                        <Card.Body>
                            <h5 className="promo-title">Earn up to $600 in OneKeyCash™</h5>
                            <p>after qualifying purchases. Terms apply. OneKeyCash is not redeemable for cash.</p>
                            <Button variant="primary">Learn more</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Go Beyond Typical Stays Section */}
            <Row>
                <Col>
                    <h2 className="section-title">Go beyond your typical stay in Boston</h2>
                    <Row className="beyond-stays">
                        {amenities.map((amenity, index) => (
                            <Col key={index} md={4} lg={2}>
                                <Card className="beyond-card">
                                    <Card.Img variant="top" src={amenity.imageUrl} />
                                    <Card.ImgOverlay className="amenity-overlay">
                                        <Card.Title>{amenity.label}</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

            {/* Recommended Stays for You Section */}
            <Row>
                <Col>
                    <h2 className="section-title">Recommended stays for you</h2>
                    <Row className="recommended-stays">
                        {recommendedStays.map((stay, index) => (
                            <Col key={index} md={6} lg={3}>
                                <Card className="stay-card">
                                    <Card.Img variant="top" src={stay.imageUrl} />
                                    <Card.Body>
                                        <Card.Title>{stay.name}</Card.Title>
                                        <Card.Text>{stay.location}</Card.Text>
                                        <Card.Text>{stay.rating} {stay.reviews}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Button variant="link" className="see-all-button">See all properties →</Button>
                </Col>
            </Row>
        </Container>
    );
}
