import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  showButton = true,
  buttonText = "Get Started",
  buttonLink = "/contact",
  backgroundImage
}) => {
  return (
    <section className="hero" style={{ backgroundImage: backgroundImage }}>
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            {subtitle && (
              <div className="hero-subtitle cyber-text">
                {subtitle}
              </div>
            )}
            <h1 className="hero-title">
              {title}
            </h1>
            {description && (
              <p className="hero-description">
                {description}
              </p>
            )}
            {showButton && (
              <div className="hero-actions">
                <Link to={buttonLink} className="btn btn-primary btn-large">
                  {buttonText}
                </Link>
                <Link to="/about" className="btn btn-secondary btn-large">
                  Learn More
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hero-tech-lines">
        <div className="tech-line"></div>
        <div className="tech-line"></div>
        <div className="tech-line"></div>
      </div>
    </section>
  );
};

export default Hero;
