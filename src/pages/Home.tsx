import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import './Home.css';

const Home: React.FC = () => {
  const services = [
    {
      title: "Digital Construction",
      description: "Revolutionary construction technology that integrates AI, IoT, and advanced analytics to optimize every aspect of your building projects.",
      icon: "⚡",
      features: [
        "AI-powered project management",
        "Real-time progress tracking",
        "Predictive analytics",
        "Automated quality control"
      ],
      isHighlighted: true
    },
    {
      title: "Smart Building Solutions",
      description: "Transform your buildings into intelligent, connected environments that adapt to your needs and optimize energy efficiency.",
      icon: "🏗️",
      features: [
        "IoT integration",
        "Energy management systems",
        "Automated building controls",
        "Smart security systems"
      ]
    },
    {
      title: "Tech Integration",
      description: "Seamlessly integrate cutting-edge technology into existing construction processes without disrupting your workflow.",
      icon: "🔧",
      features: [
        "Legacy system integration",
        "Custom software development",
        "Training and support",
        "Ongoing maintenance"
      ]
    }
  ];

  return (
    <div className="home">
      <Hero
        title="Building Texas's Digital Future"
        subtitle="// CONSTRUCTION MEETS CYBERPUNK"
        description="Web G Construction combines traditional Texas craftsmanship with cutting-edge technology to deliver the most advanced construction solutions in the Lone Star State."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
      
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2 className="section-title">
                <span className="texas-primary">Vision Born of</span>
                <span className="cyber-accent"> Innovation</span>
              </h2>
              <p className="intro-description">
                Web G Construction was founded on the principle that the future of construction 
                lies in the seamless integration of technology and traditional craftsmanship. 
                We're not just building structures – we're building the digital infrastructure 
                that will power Texas for generations to come.
              </p>
              <div className="intro-stats">
                <div className="stat">
                  <span className="stat-number cyber-text">100+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number cyber-text">50+</span>
                  <span className="stat-label">Smart Buildings</span>
                </div>
                <div className="stat">
                  <span className="stat-number cyber-text">99.9%</span>
                  <span className="stat-label">Uptime Guarantee</span>
                </div>
              </div>
            </div>
            <div className="intro-visual">
              <div className="tech-grid">
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="cyber-text">// CORE SERVICES</span>
            </h2>
            <p className="section-description">
              Cutting-edge construction solutions powered by the latest technology
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                isHighlighted={service.isHighlighted}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Build the Future?
            </h2>
            <p className="cta-description">
              Join the digital construction revolution. Let's create something extraordinary together.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-cyber btn-large">
                Start Your Project
              </a>
              <a href="/about" className="btn btn-secondary btn-large">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
