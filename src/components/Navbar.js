import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../leo9-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [heroDark, setHeroDark] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const next = !heroDark;
    setHeroDark(next);
    const body = document.body;
    if (next) {
      body.setAttribute('data-hero-theme', 'dark');
    } else {
      body.removeAttribute('data-hero-theme');
    }
  };

  const go = (name) => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent(name));
  };

  const triggerContact = (e) => {
    e.preventDefault();
    go('nav:contact');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo" onClick={(e) => { e.preventDefault(); go('nav:home'); }}>
          <img src={logo} alt="Leo9Studio logo" className="navbar-logo-mark" />
          Leo9Studio
        </a>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item services-item">
            <a href="#services" className="nav-links" onClick={(e) => { e.preventDefault(); go('nav:services'); }}>Services</a>
            <div className="services-submenu">
              <a href="#service-web" className="service-card service-web">Web Services Development</a>
              <a href="#service-mobile" className="service-card service-mobile">Mobile App Development</a>
              <a href="#service-cloud" className="service-card service-cloud">Cloud Solutions</a>
            </div>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-links" onClick={(e) => { e.preventDefault(); go('nav:home'); }}>Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={(e) => { e.preventDefault(); go('nav:about'); }}>About Us</a>
          </li>
          <li className="nav-item">
            <button className="nav-action contact-link" onClick={triggerContact}>Contact</button>
          </li>
          <li className="nav-item">
            <button className={`nav-action theme-toggle ${heroDark ? 'is-dark' : 'is-light'}`} onClick={toggleTheme} aria-label="Toggle hero theme">
              <span className="icon-sun" aria-hidden="true"></span>
              <span className="icon-moon" aria-hidden="true"></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;