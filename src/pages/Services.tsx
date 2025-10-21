import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import './Services.css';

const Services: React.FC = () => {
  const mainServices = [
    {
      title: "Digital Construction Management",
      description: "Revolutionary project management using AI, IoT, and advanced analytics to optimize every aspect of your construction projects from planning to completion.",
      icon: "⚡",
      features: [
        "AI-powered project scheduling",
        "Real-time progress tracking",
        "Predictive cost analysis",
        "Automated quality control",
        "Resource optimization",
        "Risk assessment and mitigation"
      ],
      isHighlighted: true
    },
    {
      title: "Smart Building Integration",
      description: "Transform your buildings into intelligent, connected environments that adapt to your needs and optimize energy efficiency through cutting-edge IoT technology.",
      icon: "🏗️",
      features: [
        "IoT sensor integration",
        "Energy management systems",
        "Automated building controls",
        "Smart security systems",
        "Environmental monitoring",
        "Predictive maintenance"
      ]
    },
    {
      title: "Advanced Tech Integration",
      description: "Seamlessly integrate cutting-edge technology into existing construction processes without disrupting your workflow, ensuring smooth digital transformation.",
      icon: "🔧",
      features: [
        "Legacy system integration",
        "Custom software development",
        "Cloud infrastructure setup",
        "Data migration services",
        "Training and support",
        "Ongoing maintenance"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Virtual Reality Planning",
      description: "Experience your project before it's built with immersive VR technology that allows you to walk through and modify designs in real-time.",
      icon: "🥽"
    },
    {
      title: "Drone Surveying",
      description: "High-precision aerial surveying and monitoring using advanced drone technology for accurate site analysis and progress tracking.",
      icon: "🚁"
    },
    {
      title: "3D Printing Solutions",
      description: "Revolutionary 3D printing technology for rapid prototyping, custom components, and innovative construction materials.",
      icon: "🖨️"
    },
    {
      title: "Blockchain Documentation",
      description: "Secure, tamper-proof project documentation and contract management using blockchain technology for complete transparency.",
      icon: "⛓️"
    },
    {
      title: "AI Safety Monitoring",
      description: "Advanced AI-powered safety systems that monitor job sites 24/7 to prevent accidents and ensure compliance with safety regulations.",
      icon: "🛡️"
    },
    {
      title: "Green Tech Solutions",
      description: "Sustainable construction technologies including solar integration, energy storage, and eco-friendly building materials.",
      icon: "🌱"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current systems and identify opportunities for digital transformation."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Custom digital strategy tailored to your specific needs and goals."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Seamless integration of technology solutions with minimal disruption."
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and optimization to ensure maximum efficiency."
    }
  ];

  return (
    <div className="services">
      <Hero
        title="Digital Construction Services"
        subtitle="// CUTTING-EDGE SOLUTIONS"
        description="Revolutionary construction technology that transforms how buildings are designed, built, and managed in the digital age."
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
              Comprehensive digital construction solutions powered by the latest technology
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
              Ready to Transform Your Construction Process?
            </h2>
            <p className="cta-description">
              Let's discuss how our digital solutions can revolutionize your next project.
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
