import React, { useState } from 'react';
import Hero from '../components/Hero';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: [] as string[],
    hearAbout: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const serviceOptions = [
    'Digital Construction Management',
    'Smart Building Integration', 
    'Advanced Tech Integration'
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
    setSubmitStatus('idle');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
          services: formData.services.join(', ')
        })
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
    <div className="contact">
      <Hero
        title="Get In Touch"
        subtitle="// CONNECT WITH US"
        description="Ready to start your digital transformation? Let's connect and discuss how we can revolutionize your construction projects."
        showButton={false}
      />
      
      <section className="section contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-title">
                <span className="texas-primary">Ready to Build</span>
                <span className="cyber-accent"> the Future?</span>
              </h2>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <h3 className="method-title">Submit a Request</h3>
                  <p className="method-description">
                    Fill out the form below or reach out directly at{' '}
                    <a href="mailto:jt@webgstrategies.org" className="contact-link">
                      jt@webgstrategies.org
                    </a>
                  </p>
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
            
            <div className="contact-form-container">
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
                
                <div className="form-group">
                  <label className="form-label">Services Interested In *</label>
                  <div className="checkbox-group">
                    {serviceOptions.map((service, index) => (
                      <div key={index} className="form-checkbox">
                        <input
                          type="checkbox"
                          id={`service-${index}`}
                          name="services"
                          value={service}
                          checked={formData.services.includes(service)}
                          onChange={handleCheckboxChange}
                          className="checkbox-input"
                        />
                        <label htmlFor={`service-${index}`} className="checkbox-label">
                          {service}
                        </label>
                      </div>
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
                    rows={5}
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <div className="form-actions">
                  <button 
                    type="submit" 
                    className={`btn btn-cyber btn-large ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="form-message success">
                    <span className="cyber-text">✓ Message sent successfully!</span>
                    <p>We'll get back to you soon.</p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="form-message error">
                    <span className="cyber-text">✗ Error sending message</span>
                    <p>Please try again or contact us directly.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
