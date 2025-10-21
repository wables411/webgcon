import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services: React.FC = () => {
  const mainServices = [
    {
      title: "Concrete Construction",
      description: "Expert concrete work including foundations, driveways, patios, and structural elements. We specialize in both residential and commercial concrete projects.",
      icon: "🏗️",
      features: [
        "Foundation construction",
        "Driveway installation",
        "Patio and walkway creation",
        "Concrete repair and restoration",
        "Stamped concrete designs",
        "Structural concrete work"
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
        "Texture matching",
        "Color consultation",
        "Maintenance services"
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
        "Roofing and siding",
        "Flooring installation",
        "Project management"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Foundation Repair",
      description: "Professional foundation repair and stabilization services to ensure your property's structural integrity.",
      icon: "🏗️"
    },
    {
      title: "Concrete Staining",
      description: "Decorative concrete staining and coloring services to enhance the appearance of your concrete surfaces.",
      icon: "🎨"
    },
    {
      title: "Stucco Texturing",
      description: "Custom stucco texturing and finish work to create unique exterior appearances for your property.",
      icon: "🏠"
    },
    {
      title: "Concrete Sealing",
      description: "Protective concrete sealing services to extend the life and appearance of your concrete surfaces.",
      icon: "🛡️"
    },
    {
      title: "Exterior Painting",
      description: "Professional exterior painting services with weather-resistant coatings for long-lasting protection.",
      icon: "🎨"
    },
    {
      title: "Concrete Cutting",
      description: "Precision concrete cutting and drilling services for modifications and installations.",
      icon: "⚡"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation & Planning",
      description: "We meet with you to understand your project needs and develop a detailed construction plan."
    },
    {
      step: "02", 
      title: "Material Selection",
      description: "Choose the right materials and finishes for your project, ensuring quality and durability."
    },
    {
      step: "03",
      title: "Construction",
      description: "Professional construction work with skilled craftsmen and attention to detail."
    },
    {
      step: "04",
      title: "Final Inspection",
      description: "Thorough quality inspection and cleanup to ensure your project meets our high standards."
    }
  ];

  return (
    <div className="services">
      <Hero
        title="Construction Services"
        subtitle="// QUALITY SOLUTIONS"
        description="Professional construction services specializing in concrete work, stucco application, and general construction projects across Texas."
        buttonText="Get Started"
        buttonLink="/contact"
      />
      
      <section className="section main-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="cyber-text">// CORE SERVICES</span>
            </h2>
            <p className="section-description">
              Comprehensive construction services with a focus on quality materials and skilled craftsmanship
            </p>
          </div>
          
          <div className="services-grid">
            {mainServices.map((service, index) => (
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

      <section className="section additional-services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="texas-primary">Additional</span>
              <span className="cyber-accent"> Solutions</span>
            </h2>
            <p className="section-description">
              Specialized technologies and innovative approaches to construction challenges
            </p>
          </div>
          
          <div className="additional-grid">
            {additionalServices.map((service, index) => (
              <div key={index} className="additional-card">
                <div className="additional-icon">
                  <span>{service.icon}</span>
                </div>
                <h3 className="additional-title">{service.title}</h3>
                <p className="additional-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="cyber-text">// OUR PROCESS</span>
            </h2>
            <p className="section-description">
              A systematic approach to digital transformation in construction
            </p>
          </div>
          
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">
                  <span>{step.step}</span>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              Ready to Start Your Construction Project?
            </h2>
            <p className="cta-description">
              Let's discuss how our construction expertise can bring your vision to life.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn btn-cyber btn-large">
                Start Your Project
              </a>
              <a href="/about" className="btn btn-secondary btn-large">
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
