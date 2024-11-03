// flightsData.ts
export interface Flight {
    id: string;
    time: string;
    airport: string;
    duration: string;
    price: string;
    airline: string;
    stops: string;
    extras: string[];
  }
  
  export const flights: Flight[] = [
    {
      id: '1',
      time: '6:00am - 9:36am',
      airport: 'BOS to LAX',
      duration: '6h 36m',
      price: '287',
      airline: 'United',
      stops: 'Nonstop',
      extras: ['Personal item included', 'Seat choice for a fee', 'Non-refundable'],
    },
    {
      id: '2',
      time: '8:30am - 12:05pm',
      airport: 'BOS to LAX',
      duration: '6h 35m',
      price: '330',
      airline: 'United',
      stops: 'Nonstop',
      extras: ['Seat choice included', '1st checked bag for a fee', 'Changes included'],
    },
    {
      id: '3',
      time: '2:26pm - 10:20pm',
      airport: 'BOS to LAX',
      duration: '10h 54m',
      price: '259',
      airline: 'Spirit',
      stops: '1 Stop',
      extras: ['Seat choice included', 'Non-refundable'],
    },
    // Return flights
    {
      id: '4',
      time: '8:35pm - 7:27pm',
      airport: 'LAX to BOS',
      duration: '19h 52m',
      price: '287',
      airline: 'Spirit Airlines',
      stops: '2 Stops',
      extras: ['Changes included'],
    },
    {
      id: '5',
      time: '10:55pm - 7:25am',
      airport: 'LAX to BOS',
      duration: '5h 30m',
      price: '421',
      airline: 'United',
      stops: 'Nonstop',
      extras: [],
    },
    {
      id: '6',
      time: '10:25pm - 2:55pm',
      airport: 'LAX to BOS',
      duration: '13h 30m',
      price: '309',
      airline: 'Spirit Airlines',
      stops: '1 Stop',
      extras: [],
    },
  ];
  