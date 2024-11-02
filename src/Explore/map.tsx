import React from 'react';
import './styles.css'; 

export const MapSection: React.FC = () => {
  return (
    <section className="map-section"> {/* Use the class defined in styles.css */}
      <div className="map-placeholder"> {/* Use the map-placeholder class for consistent styling */}
        {/* Placeholder for the map */}
        <span>Map Placeholder</span>
      </div>
    </section>
  );
};
