import React from 'react';
import './styles.css';
import { Container, Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { FaGlobe, FaBars } from 'react-icons/fa6';
import { FaArrowDown } from 'react-icons/fa';
import { BsChatRightTextFill } from "react-icons/bs";
import { FaFlagUsa } from "react-icons/fa";


export default function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" className="header-navbar p-0 me-0">
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
          <Nav className="ms-auto p-4 me-1">
            <Button variant="outline-primary" className="app-button me-3 rounded-pill d-flex align-items-center custom-hover-button">
              <FaArrowDown className="me-2" />
              Get the app
            </Button>
            <Nav.Link href="#language" className="me-3">
              <FaGlobe /> English
            </Nav.Link>
            <Nav.Link href="#list-your-property" className="me-3">List your property</Nav.Link>
            <Nav.Link href="#support" className="me-3">Support</Nav.Link>
            <Nav.Link href="#trips" className="me-3">Trips</Nav.Link>
            <Nav.Link href="#inbox" className="me-3"><BsChatRightTextFill /></Nav.Link>
            <Nav.Link href="#account/password" className="me-3" style={{ display: 'inline-flex'}}>
              USA <FaFlagUsa style={{ marginLeft: '5px' }} />
            </Nav.Link>
            <Nav.Link href="#account" className="me-3">Bean</Nav.Link>
            <Nav.Link href="#menu" className="menu-icon me-3">
              <FaBars />
            </Nav.Link>
          </Nav>
          <hr />
        </Container>
      </Navbar>
      <hr />
    </>
  );
}