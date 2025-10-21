import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import ImageSlideshow from '../components/ImageSlideshow';
import './Home.css';

const Home: React.FC = () => {
  const slideshowImages = [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  const services = [
    {
      title: "Concrete Construction",
      description: "Expert concrete work including foundations, driveways, patios, and structural elements. We specialize in both residential and commercial concrete projects.",
      icon: "🏗️",
      features: [
        "Foundation construction",
        "Driveway installation",
        "Patio and walkway creation",
        "Concrete repair and restoration"
      ],
      isHighlighted: true
    },
    {
      title: "Stucco & Exterior Finishes",
      description: "Professional stucco application and exterior finishing services. We provide durable, weather-resistant finishes that enhance your property's appearance.",
      icon: "🏠",
      features: [
        "Stucco application and repair",
        "Exterior painting",
        "Weatherproofing",
        "Texture matching"
      ]
    },
    {
      title: "General Construction",
      description: "Complete construction services from planning to completion. We handle everything from small repairs to major renovations and new construction.",
      icon: "🔨",
      features: [
        "New construction",
        "Renovation projects",
        "Kitchen and bathroom remodeling",
        "Project management"
      ]
    }
  ];

  return (
    <div className="home">
      <ImageSlideshow images={slideshowImages} />
      
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2 className="section-title">
                <span className="texas-primary">Built on</span>
                <span className="cyber-accent"> Solid Foundations</span>
              </h2>
              <p className="intro-description">
                Web G Construction has been serving Texas with quality construction services 
                for over a decade. We specialize in concrete work, stucco application, and 
                general construction projects. Our commitment to craftsmanship and attention 
                to detail ensures every project meets the highest standards of quality and durability.
              </p>
              <div className="intro-stats">
                <div className="stat">
                  <span className="stat-number cyber-text">100+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number cyber-text">50+</span>
                  <span className="stat-label">Concrete Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number cyber-text">100%</span>
                  <span className="stat-label">Satisfaction Rate</span>
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
              <span className="cyber-text">// OUR SERVICES</span>
            </h2>
            <p className="section-description">
              Professional construction services with a focus on quality and craftsmanship
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
              Ready to Start Your Project?
            </h2>
            <p className="cta-description">
              From concrete foundations to stucco finishes, we're here to bring your construction vision to life.
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
