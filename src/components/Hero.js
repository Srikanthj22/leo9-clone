import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const goWork = () => {
    window.dispatchEvent(new CustomEvent('nav:work'));
  };

  return (
    <div className="hero-section fade-in">
      <div className="hero-content">
        <h1 className="hero-headline">
          Crafting <span className="highlight">Digital</span> Experiences
        </h1>
        <p className="hero-subheadline">
          We are a creative agency focused on delivering stunning web designs and robust digital solutions.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={goWork}>Our Work</button>
          <button className="btn btn-secondary">Get a Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;