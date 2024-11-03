import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from './SearchBar';
import Filters from './Filter';
import FlightsList from './FlightList';

export function FlightSearchPage() {
  return (
    <Container fluid>
      <SearchBar />
      <Row>
        <Col md={3}>
          <Filters />
        </Col>
        <Col md={9}>
          <FlightsList />
        </Col>
      </Row>
    </Container>
  );
}

export default FlightSearchPage;
