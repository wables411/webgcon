import React from 'react';
import Hero from '../components/Hero';
import ImageSlideshow from '../components/ImageSlideshow';
import './About.css';

const About: React.FC = () => {
  const slideshowImages = [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  const values = [
    {
      title: "Quality First",
      description: "We use only the finest materials and proven construction techniques, ensuring every project meets the highest standards of quality and durability.",
      icon: "🏗️"
    },
    {
      title: "Texas Pride",
      description: "Born and bred in Texas, we understand the unique challenges and opportunities of building in the Lone Star State.",
      icon: "🤠"
    },
    {
      title: "Craftsmanship Excellence",
      description: "Every project is executed with precision and attention to detail, using skilled craftsmen and time-tested construction methods.",
      icon: "🔨"
    }
  ];


  return (
    <div className="about">
      <ImageSlideshow images={slideshowImages} />
      
      <section className="section hero-content-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">WEB G CONSTRUCTION</h1>
            <h2 className="hero-subtitle">Let's Build Texas Together</h2>
            <p className="hero-description">
              Where traditional Texas craftsmanship meets modern construction techniques to deliver quality projects across the Lone Star State. A{' '}
              <a 
                href="https://webgstrategies.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hero-link"
              >
                Web G Strategies
              </a>{' '}
              branch.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">
                <span className="texas-primary">Our Mission</span>
              </h2>
              <p className="mission-description">
                We grow our people to grow our company. At Web G Construction, we believe that 
                quality construction starts with skilled craftsmen and the right materials. 
                We're not just building structures – we're building the foundations, walls, 
                and finishes that will stand the test of time across Texas.
              </p>
              <div className="mission-highlight">
                <span className="cyber-text">// MISSION STATEMENT</span>
                <p className="highlight-text">
                  "To deliver exceptional construction services through skilled craftsmanship 
                  and quality materials while maintaining the integrity that Texas is known for."
                </p>
              </div>
            </div>
            <div className="mission-visual">
              <div className="tech-diagram">
                <div className="diagram-node main">
                  <span>Web G</span>
                </div>
                <div className="diagram-node">
                  <span>Concrete</span>
                </div>
                <div className="diagram-node">
                  <span>Stucco</span>
                </div>
                <div className="diagram-node">
                  <span>Build</span>
                </div>
                <div className="diagram-node">
                  <span>Finish</span>
                </div>
                <div className="connection-line"></div>
                <div className="connection-line"></div>
                <div className="connection-line"></div>
                <div className="connection-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section company-info-section">
        <div className="container">
          <div className="company-info-content">
            <h2 className="section-title">
              <span className="cyber-text">// COMPANY INFO</span>
            </h2>
            <div className="company-description">
              <p>
                Web G Construction is a specialized construction company focused on delivering 
                quality concrete and stucco work across Texas. As a branch of 
                <a 
                  href="https://webgstrategies.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="company-link"
                >
                  Web G Strategies
                </a>, we bring together traditional Texas craftsmanship with modern 
                construction techniques to build the future of the Lone Star State.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="cyber-text">// CORE VALUES</span>
            </h2>
            <p className="section-description">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <span>{value.icon}</span>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="section vision-section">
        <div className="container">
          <div className="vision-content">
            <h2 className="section-title">
              <span className="cyber-text">// VISION</span>
            </h2>
            <div className="vision-statement">
              <p className="vision-text">
                Web G Construction is the company of choice by:
              </p>
              <ul className="vision-list">
                <li>Putting our employees' health and safety above all else</li>
                <li>Exceeding the expectations of our clients through quality workmanship</li>
                <li>Striving for operational excellence in every project</li>
                <li>Building structures that stand the test of time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
