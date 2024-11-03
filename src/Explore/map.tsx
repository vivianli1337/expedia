// import React from 'react';
// import './styles.css'; 

// export const MapSection: React.FC = () => {
//   return (
//     <section className="map-section"> {/* Use the class defined in styles.css */}
//       <div className="map-placeholder"> {/* Use the map-placeholder class for consistent styling */}
//         {/* Placeholder for the map */}
//         <span>Map Placeholder</span>
//       </div>
//     </section>
//   );
// };
import React from 'react';
import './styles.css'; 
import mapPlaceholder from './/images/map.png'; // Adjust the path if necessary

export const MapSection: React.FC = () => {
  return (
    <section className="map-section">
      <div className="map-placeholder">
        <img 
          src={mapPlaceholder} 
          alt="Map placeholder" 
          className="map-image"
        />
      </div>
    </section>
  );
};
