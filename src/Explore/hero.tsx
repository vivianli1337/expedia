import React from 'react';
import './styles.css'; 

export const HeroSection: React.FC = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: "url('https://cdn.britannica.com/10/241010-049-3EB67AA2/highest-mountains-of-the-world-on-each-continent.jpg')" }} // Using the external image link
    >
      <div className="content">
        <h1 className="text-2xl font-semibold">Travel your own path and save</h1>
        <p className="text-sm my-2">Discover somewhere new and save 20% or more with Platinum Member Prices on over 10,000 hotels.</p>
        <button className="button">Unlock deals</button> 
      </div>
    </section>
  );
};