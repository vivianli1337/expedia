import React, { useState } from 'react';
import { Form, Accordion } from 'react-bootstrap';

export function Filters() {
  return (
    <Accordion defaultActiveKey="0" className="p-3 border rounded bg-light mb-4">
      <h5>Filter by</h5>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Stops</Accordion.Header>
        <Accordion.Body>
          <Form.Check type="checkbox" label="Nonstop" />
          <Form.Check type="checkbox" label="1 Stop" />
          <Form.Check type="checkbox" label="2+ Stops" />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Airlines</Accordion.Header>
        <Accordion.Body>
          <Form.Check type="checkbox" label="United Airlines" />
          <Form.Check type="checkbox" label="Delta Airlines" />
          <Form.Check type="checkbox" label="JetBlue Airways" />
          <Form.Check type="checkbox" label="American Airlines" />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Departure Time</Accordion.Header>
        <Accordion.Body>
          <Form.Check type="checkbox" label="Morning (6:00 am - 12:00 pm)" />
          <Form.Check type="checkbox" label="Afternoon (12:00 pm - 6:00 pm)" />
          <Form.Check type="checkbox" label="Evening (6:00 pm - 12:00 am)" />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Price Range</Accordion.Header>
        <Accordion.Body>
          <Form.Check type="checkbox" label="Under $300" />
          <Form.Check type="checkbox" label="$300 - $500" />
          <Form.Check type="checkbox" label="Above $500" />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Filters;
