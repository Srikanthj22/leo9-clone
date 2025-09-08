import React from 'react';
import '../styles/Work.css';

const Work = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      desc: 'Scalable storefront with blazing-fast checkout and personalized recommendations.',
      tag: 'Web App',
      accent: 'accent-blue'
    },
    {
      title: 'Fitness Mobile App',
      desc: 'Cross-platform app with real-time tracking, community, and gamified goals.',
      tag: 'Mobile',
      accent: 'accent-green'
    },
    {
      title: 'Cloud Analytics Dashboard',
      desc: 'Interactive dashboards and automated reports powered by serverless data pipelines.',
      tag: 'Cloud',
      accent: 'accent-orange'
    },
    {
      title: 'Banking Onboarding',
      desc: 'Secure KYC flow with delightful UI, high conversion and compliance built-in.',
      tag: 'Fintech',
      accent: 'accent-purple'
    }
  ];

  return (
    <section className="work-section slide-in">
      <div className="work-container">
        <header className="work-header">
          <h2 className="work-title">Delivered Products</h2>
          <p className="work-subtitle">A selection of recent projects shipped with quality and care.</p>
        </header>
        <div className="work-grid">
          {projects.map((p, idx) => (
            <article key={idx} className={`work-card reveal ${p.accent}`} style={{ animationDelay: `${0.05 + idx * 0.08}s` }}>
              <div className="work-tag">{p.tag}</div>
              <h3 className="work-card-title">{p.title}</h3>
              <p className="work-card-desc">{p.desc}</p>
              <button className="work-cta" type="button">View Case Study</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work; 