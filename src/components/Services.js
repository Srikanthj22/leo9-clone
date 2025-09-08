import React from 'react';
import '../styles/Services.css';

const Services = () => {
  return (
    <section className="services-section slide-in">
      <div className="services-container">
        <header className="services-header">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">Solutions crafted to elevate your digital presence.</p>
        </header>
        <div className="services-grid">
          <div className="service-tile service-web">
            <div className="service-icon" aria-hidden="true">🧩</div>
            <h3>Web Services Development</h3>
            <p>High-performance web apps, APIs, and delightful user interfaces tailored to your business.</p>
          </div>
          <div className="service-tile service-mobile">
            <div className="service-icon" aria-hidden="true">📱</div>
            <h3>Mobile App Development</h3>
            <p>Native and cross-platform apps with smooth UX and reliable performance on any device.</p>
          </div>
          <div className="service-tile service-cloud">
            <div className="service-icon" aria-hidden="true">☁️</div>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud architectures, CI/CD, and cost-optimized deployments to grow with you.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 