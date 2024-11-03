// import React from 'react';
// import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import NavigationBar from './Home/Navigation';
// import { Homepage } from './Home/Homepage';
// import ExploreLayout from './Explore/ExploreLayout';
// import ConfirmationPage from './Flights/Confirmation';
// import FlightSearchPage from './Flights';
// import PaymentPage from './Flights/PaymentPage';

// function App() {
//   return (
//     <HashRouter>
//       <NavigationBar />
//       <div>
//         <Routes>
//           <Route path="/" element={<Navigate to="/Home" />} />
//           <Route path="/Home/*" element={<Homepage />} />
//           <Route path="/Explore/ExploreLayout" element={<ExploreLayout />} /> 
//           <Route path="/confirmation" element={<ConfirmationPage />} /> 
//           <Route path="/flights" element={<FlightSearchPage />} />
//           <Route path="/payment" element={<PaymentWrapper />} />
//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }

// // Wrapper for PaymentPage to access state passed via Link
// function PaymentWrapper() {
//   const location = useLocation();
//   const { outboundFlight, returnFlight } = location.state || {};

//   // Ensure both flights are provided, otherwise redirect back to the flights page
//   if (!outboundFlight || !returnFlight) {
//     return <Navigate to="/flights" replace />;
//   }

//   return <PaymentPage outboundFlight={outboundFlight} returnFlight={returnFlight} />;
// }

// export default App;


// import React from 'react';
// import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import NavigationBar from './Home/Navigation';
// import { Homepage } from './Home/Homepage';
// import ExploreLayout from './Explore/ExploreLayout';
// import ConfirmationPage from './Flights/Confirmation';
// import FlightSearchPage from './Flights';
// import PaymentPage from './Flights/PaymentPage';

// function App() {
//   return (
//     <HashRouter>
//       <NavigationBar />
//       <div>
//         <Routes>
//           <Route path="/" element={<Navigate to="/Home" />} />
//           <Route path="/Home/*" element={<Homepage />} />
//           <Route path="/Explore/ExploreLayout" element={<ExploreLayout />} />
//           <Route path="/confirmation" element={<ConfirmationPage />} />
//           <Route path="/flights" element={<FlightSearchPage />} />
//           <Route path="/payment" element={<PaymentWrapper />} />
//         </Routes>
//       </div>
//     </HashRouter>
//   );
// }

// // Wrapper for PaymentPage to access state passed via Link
// function PaymentWrapper() {
//   const location = useLocation();
//   const { outboundFlight, returnFlight } = location.state || {};

//   // Ensure both flights are provided, otherwise redirect back to the flights page
//   if (!outboundFlight || !returnFlight) {
//     return <Navigate to="/flights" replace />;
//   }

//   return <PaymentPage outboundFlight={outboundFlight} returnFlight={returnFlight} />;
// }

// export default App;

import React from 'react';
import { HashRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import NavigationBar from './Home/Navigation';
import { Homepage } from './Home/Homepage';
import ExploreLayout from './Explore/ExploreLayout';
import ConfirmationPage from './Flights/Confirmation';
import FlightSearchPage from './Flights';
import PaymentPage from './Flights/PaymentPage';

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home/*" element={<Homepage />} />
          <Route path="/Explore/ExploreLayout" element={<ExploreLayout />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/flights" element={<FlightSearchPage />} />
          <Route path="/Flights/PaymentPage" element={<PaymentWrapper />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

// Wrapper for PaymentPage to access state passed via Link
function PaymentWrapper() {
  const location = useLocation();
  const { outboundFlight, returnFlight } = location.state || {};
  return <PaymentPage outboundFlight={outboundFlight} returnFlight={returnFlight} />;
}

export default App;
