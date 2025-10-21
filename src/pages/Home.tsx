import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import ImageSlideshow from '../components/ImageSlideshow';
import './Home.css';

const Home: React.FC = () => {
  const slideshowImages = [
    '/webgwork/con1.png',
    '/webgwork/con2.png',
    '/webgwork/con3.png',
    '/webgwork/con4.png',
    '/webgwork/con5.png',
    '/webgwork/con6.png',
    '/webgwork/con7.png',
    '/webgwork/con8.png',
    '/webgwork/con9.png',
    '/webgwork/con10.jpeg',
    '/webgwork/con11.jpeg',
    '/webgwork/con12.jpeg',
    '/webgwork/con13.jpeg',
    '/webgwork/con14.jpeg',
    '/webgwork/con15.jpeg'
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: [] as string[],
    hearAbout: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
      title: "Concrete Pool Installation",
      description: "Professional concrete pool construction and installation services. We build durable, custom concrete pools that provide years of enjoyment for Texas families.",
      icon: "🏊‍♂️",
      features: [
        "Custom pool design",
        "Concrete pool construction",
        "Pool deck installation",
        "Pool renovation and repair"
      ]
    },
    {
      title: "Stucco & Exterior Finishes",
      description: "Professional stucco application and exterior finishing services. We provide durable, weather-resistant finishes that enhance your property's appearance.",
      icon: "🎨",
      features: [
        "Stucco application",
        "Exterior painting",
        "Weatherproofing",
        "Color matching and design"
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

  const serviceOptions = [
    'Concrete Construction',
    'Concrete Pool Installation',
    'Stucco & Exterior Finishes', 
    'General Construction'
  ];

  const hearAboutOptions = [
    'Google Search',
    'Social Media',
    'Referral'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, value]
        : prev.services.filter(service => service !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          services: [],
          hearAbout: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home">
      {/* Hero Section with Slideshow */}
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

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="cyber-text">// ABOUT US</span>
            </h2>
            <p className="section-description">
              Web G Construction is a specialized construction company focused on delivering 
              quality concrete and stucco work across Texas. As a branch of{' '}
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

          <div className="mission-content">
            <div className="mission-text">
              <h3 className="subsection-title">Our Mission</h3>
              <p className="mission-description">
                We grow our people to grow our company. At Web G Construction, we believe that 
                quality construction starts with skilled craftsmen and the right materials. 
                We're not just building structures – we're building the foundations, walls, 
                and finishes that will stand the test of time across Texas.
              </p>
            </div>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                className="value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="value-icon">
                  <span>{value.icon}</span>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Video Showcase Section */}
          <div className="video-showcase">
            <h3 className="video-section-title">
              <span className="cyber-text">// OUR WORK IN ACTION</span>
            </h3>
            <div className="video-container">
              <video 
                className="showcase-video" 
                autoPlay 
                loop 
                muted 
                playsInline
                src="/webgwork/webgcons.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="cyber-text">// OUR SERVICES</span>
            </h2>
            <p className="section-description">
              Professional construction services specializing in concrete work, stucco application, and general construction projects across Texas.
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

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="cyber-text">// GET IN TOUCH</span>
            </h2>
            <p className="section-description">
              Ready to start your construction project? Contact us today for a free consultation and estimate.
            </p>
          </div>
          
          <div className="contact-form-container-wide">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div style={{ display: 'none' }}>
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Services Interested In *</label>
                  <div className="checkbox-group">
                    {serviceOptions.map((service, index) => (
                      <label key={index} className="checkbox-label">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          checked={formData.services.includes(service)}
                          onChange={handleCheckboxChange}
                          className="form-checkbox"
                        />
                        <span className="checkbox-text">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="hearAbout" className="form-label">How Did You Hear About Us? *</label>
                  <select
                    id="hearAbout"
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select an option</option>
                    {hearAboutOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="form-textarea"
                    rows={4}
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="form-success">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="form-error">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
          </div>
          
          <div className="contact-info-section">
            <div className="contact-methods">
              <div className="contact-method">
                <h3 className="method-title">Email Us</h3>
                <a href="mailto:jt@webgstrategies.org" className="contact-link">
                  jt@webgstrategies.org
                </a>
              </div>
              
              <div className="contact-method">
                <h3 className="method-title">Visit Our Office</h3>
                <div className="office-locations">
                  <div className="office-location">
                    <span className="location-icon">🤠</span>
                    <div className="location-details">
                      <h4>Katy, TX</h4>
                      <p>Texas Headquarters</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;