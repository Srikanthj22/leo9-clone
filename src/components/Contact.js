import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section fade-in">
      <div className="contact-container">
        <header className="contact-header">
          <h2 className="contact-title">Get in touch</h2>
          <p className="contact-subtitle">We would love to hear about your project.</p>
        </header>
        <div className="contact-cards">
          <div className="contact-card reveal" style={{ animationDelay: '0.05s' }}>
            <div className="contact-icon" aria-hidden="true">✉️</div>
            <div className="contact-body">
              <h3>Email</h3>
              <a href="mailto:hello@leo9studio.com">hello@leo9studio.com</a>
              <p className="contact-hint">Typically responds within a day</p>
            </div>
          </div>
          <div className="contact-card reveal" style={{ animationDelay: '0.15s' }}>
            <div className="contact-icon" aria-hidden="true">📞</div>
            <div className="contact-body">
              <h3>Phone</h3>
              <a href="tel:+11234567890">+91 57575 57575</a>
              <p className="contact-hint">Mon–Fri, 9:00 A.M – 6:00 P.M</p>
            </div>
          </div>
          <div className="contact-card reveal" style={{ animationDelay: '0.25s' }}>
            <div className="contact-icon" aria-hidden="true">📍</div>
            <div className="contact-body">
              <h3>Address</h3>
              <p>Shilpi Valley, Nasuja, H.no. 1-89/G/36, Plot.no. 36, near The Westin Hotel Road, Madhapur, Hyderabad, Telangana 500081</p>
              <p className="contact-hint">Open for on-site meetings by appointment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 