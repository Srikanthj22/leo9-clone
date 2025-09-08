import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section slide-in">
      <div className="about-container">
        <header className="about-header">
          <h2 className="about-title">About Us</h2>
          <p className="about-subtitle">Design-led, technology-first. We build experiences people love.</p>
        </header>
        <div className="about-content">
          <div className="about-intro">
            <p>
              We are a multidisciplinary team of designers, engineers, and strategists dedicated to crafting premium digital
              experiences. From websites and mobile apps to cloud platforms, we blend aesthetics with performance.
            </p>
          </div>
          <ul className="about-highlights">
            <li className="highlight-item">
              <span className="highlight-badge">10+ yrs</span>
              <div>
                <h3>Experience</h3>
                <p>Proven delivery across startups and enterprises worldwide.</p>
              </div>
            </li>
            <li className="highlight-item">
              <span className="highlight-badge">50+</span>
              <div>
                <h3>Projects</h3>
                <p>Meaningful products shipped with measurable business impact.</p>
              </div>
            </li>
            <li className="highlight-item">
              <span className="highlight-badge">24/7</span>
              <div>
                <h3>Support</h3>
                <p>We partner long-term to keep your product evolving.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About; 