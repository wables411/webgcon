import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Web G Construction</h3>
            <p className="footer-description">
              Building the future of Texas construction with cutting-edge technology 
              and traditional craftsmanship.
            </p>
            <div className="cyber-accent">
              <span className="cyber-text">// CONNECTING TEXAS TO THE FUTURE</span>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <p>
                <span className="contact-label">Email:</span>
                <a href="mailto:jt@webgstrategies.org" className="contact-link">
                  jt@webgstrategies.org
                </a>
              </p>
              <p>
                <span className="contact-label">Offices:</span>
              </p>
              <ul className="office-list">
                <li>Katy, TX</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Services</h4>
            <ul className="service-list">
              <li>Concrete Construction</li>
              <li>Stucco & Exterior Finishes</li>
              <li>General Construction</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Web G Construction. All rights reserved.
            </p>
            <div className="footer-tech">
              <a 
                href="https://webgstrategies.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-text footer-link"
              >
                // POWERED BY WEB G STRATEGIES
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
