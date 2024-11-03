// import React, { useState } from 'react';
// import { Form, Button, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

// export function SearchBar() {
//   const [tripType, setTripType] = useState('Roundtrip');
//   const [travelerCount, setTravelerCount] = useState(1);
//   const [travelClass, setTravelClass] = useState('Economy');
//   const [departureDate, setDepartureDate] = useState('');
//   const [returnDate, setReturnDate] = useState('');

//   return (
//     <Form className="p-4 border rounded bg-light mb-4">
//       <Row className="align-items-center">
//         <Col xs={12} md={2}>
//           <DropdownButton
//             id="tripTypeDropdown"
//             title={tripType}
//             onSelect={(e) => setTripType(e || 'Roundtrip')}
//           >
//             <Dropdown.Item eventKey="Roundtrip">Roundtrip</Dropdown.Item>
//             <Dropdown.Item eventKey="One-way">One-way</Dropdown.Item>
//           </DropdownButton>
//         </Col>

//         <Col xs={12} md={3}>
//           <Form.Control type="text" placeholder="Flying from" />
//         </Col>
//         <Col xs={12} md={3}>
//           <Form.Control type="text" placeholder="Flying to" />
//         </Col>

//         <Col xs={12} md={2}>
//           <Form.Control
//             type="date"
//             value={departureDate}
//             onChange={(e) => setDepartureDate(e.target.value)}
//           />
//         </Col>

//         {tripType === 'Roundtrip' && (
//           <Col xs={12} md={2}>
//             <Form.Control
//               type="date"
//               value={returnDate}
//               onChange={(e) => setReturnDate(e.target.value)}
//             />
//           </Col>
//         )}

//         <Col xs={12} md={2}>
//           <DropdownButton
//             id="travelerDropdown"
//             title={`${travelerCount} traveler${travelerCount > 1 ? 's' : ''}`}
//             onSelect={(e) => setTravelerCount(parseInt(e || '1'))}
//           >
//             {[1, 2, 3, 4, 5].map((count) => (
//               <Dropdown.Item eventKey={count.toString()} key={count}>
//                 {count} traveler{count > 1 ? 's' : ''}
//               </Dropdown.Item>
//             ))}
//           </DropdownButton>
//         </Col>

//         <Col xs={12} md={2}>
//           <DropdownButton
//             id="classDropdown"
//             title={travelClass}
//             onSelect={(e) => setTravelClass(e || 'Economy')}
//           >
//             <Dropdown.Item eventKey="Economy">Economy</Dropdown.Item>
//             <Dropdown.Item eventKey="Business">Business</Dropdown.Item>
//             <Dropdown.Item eventKey="First">First</Dropdown.Item>
//           </DropdownButton>
//         </Col>

//         <Col xs={12} md={1}>
//           <Button variant="primary" type="submit">
//             Search
//           </Button>
//         </Col>
//       </Row>
//     </Form>
//   );
// }

// export default SearchBar;

import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';

interface SearchBarProps {
    initialTripType?: string;
    initialTravelerCount?: number;
    initialTravelClass?: string;
    initialDepartureDate?: string;
    initialReturnDate?: string;
    onSearch: (criteria: {
        from: string;
        to: string;
        tripType: string;
        travelerCount: number;
        travelClass: string;
        departureDate: string;
        returnDate?: string;
    }) => void;
}

export function SearchBar({
    initialTripType = 'Roundtrip',
    initialTravelerCount = 1,
    initialTravelClass = 'Economy',
    initialDepartureDate = '',
    initialReturnDate = '',
    onSearch,
}: SearchBarProps) {
    const [tripType, setTripType] = useState(initialTripType);
    const [travelerCount, setTravelerCount] = useState(initialTravelerCount);
    const [travelClass, setTravelClass] = useState(initialTravelClass);
    const [departureDate, setDepartureDate] = useState(initialDepartureDate);
    const [returnDate, setReturnDate] = useState(initialReturnDate);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    useEffect(() => {
        setTripType(initialTripType);
        setTravelerCount(initialTravelerCount);
        setTravelClass(initialTravelClass);
        setDepartureDate(initialDepartureDate);
        setReturnDate(initialReturnDate);
    }, [initialTripType, initialTravelerCount, initialTravelClass, initialDepartureDate, initialReturnDate]);

    const handleSearch = () => {
        onSearch({
            from,
            to,
            tripType,
            travelerCount,
            travelClass,
            departureDate,
            returnDate: tripType === 'Roundtrip' ? returnDate : undefined,
        });
    };

    return (
        <Form className="p-4 border rounded bg-light mb-4">
            <Row className="align-items-center">
                <Col xs={12} md={2}>
                    <DropdownButton
                        id="tripTypeDropdown"
                        title={tripType}
                        onSelect={(e) => setTripType(e || 'Roundtrip')}
                    >
                        <Dropdown.Item eventKey="Roundtrip">Roundtrip</Dropdown.Item>
                        <Dropdown.Item eventKey="One-way">One-way</Dropdown.Item>
                    </DropdownButton>
                </Col>

                <Col xs={12} md={3}>
                    <Form.Control
                        type="text"
                        placeholder="Flying from"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                    />
                </Col>
                <Col xs={12} md={3}>
                    <Form.Control
                        type="text"
                        placeholder="Flying to"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    />
                </Col>

                <Col xs={12} md={2}>
                    <Form.Control
                        type="date"
                        value={departureDate}
                        onChange={(e) => setDepartureDate(e.target.value)}
                    />
                </Col>

                {tripType === 'Roundtrip' && (
                    <Col xs={12} md={2}>
                        <Form.Control
                            type="date"
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                        />
                    </Col>
                )}

                <Col xs={12} md={2}>
                    <DropdownButton
                        id="travelerDropdown"
                        title={`${travelerCount} traveler${travelerCount > 1 ? 's' : ''}`}
                        onSelect={(e) => setTravelerCount(parseInt(e || '1'))}
                    >
                        {[1, 2, 3, 4, 5].map((count) => (
                            <Dropdown.Item eventKey={count.toString()} key={count}>
                                {count} traveler{count > 1 ? 's' : ''}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Col>

                <Col xs={12} md={2}>
                    <DropdownButton
                        id="classDropdown"
                        title={travelClass}
                        onSelect={(e) => setTravelClass(e || 'Economy')}
                    >
                        <Dropdown.Item eventKey="Economy">Economy</Dropdown.Item>
                        <Dropdown.Item eventKey="Business">Business</Dropdown.Item>
                        <Dropdown.Item eventKey="First">First</Dropdown.Item>
                    </DropdownButton>
                </Col>

                <Col xs={12} md={1}>
                    <Button variant="primary" onClick={handleSearch}>
                        Search
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default SearchBar;
