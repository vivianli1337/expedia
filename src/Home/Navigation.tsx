import React from 'react';
import './styles.css';
import { Container, Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { FaGlobe, FaBars } from 'react-icons/fa6';

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="header-navbar">
      <Container>
        <div className="d-flex align-items-center">
          <Navbar.Brand href="#home" className="brand">
            <img src="expedia-logo.png" width="120px" alt="Expedia Logo" />
          </Navbar.Brand>
          <Dropdown className="ms-2">
            <Dropdown.Toggle variant="link" className="shop-travel-button">
              Shop travel 
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#hotels">Hotels</Dropdown.Item>
              <Dropdown.Item href="#flights">Flights</Dropdown.Item>
              <Dropdown.Item href="#cars">Car Rentals</Dropdown.Item>
              <Dropdown.Item href="#packages">Vacation Packages</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Nav className="ms-auto p-4">
          <Button className="app-button">Get the app</Button>
          <Nav.Link href="#language">
            <FaGlobe /> English
          </Nav.Link>
          <Nav.Link href="#list-your-property">List your property</Nav.Link>
          <Nav.Link href="#support">Support</Nav.Link>
          <Nav.Link href="#trips">Trips</Nav.Link>
          <Nav.Link href="#account">Bean</Nav.Link>
          <Nav.Link href="#menu" className="menu-icon">
            <FaBars />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}