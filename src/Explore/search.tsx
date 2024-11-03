import React from 'react';
import './styles.css'; 

export const SearchBar: React.FC = () => {
  return (
    <div className="search-bar"> {/* Apply the search-bar class */}
      <input type="text" placeholder="Departure Date" className="flex-1" />
      <input type="text" placeholder="Return Date" className="flex-1" />
      <input type="text" placeholder="Travelers" className="flex-1" />
      <input type="text" placeholder="Budget" className="flex-1" />
      <input type="text" placeholder="Continent" className="flex-1" />
    </div>
  );
};
