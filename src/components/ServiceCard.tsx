import React from 'react';
import './ServiceCard.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  isHighlighted?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features = [],
  isHighlighted = false
}) => {
  return (
    <div className={`service-card ${isHighlighted ? 'highlighted' : ''}`}>
      <div className="service-card-header">
        {icon && (
          <div className="service-icon">
            <span className="cyber-text">{icon}</span>
          </div>
        )}
        <h3 className="service-title">{title}</h3>
      </div>
      
      <div className="service-card-body">
        <p className="service-description">{description}</p>
        
        {features.length > 0 && (
          <ul className="service-features">
            {features.map((feature, index) => (
              <li key={index} className="service-feature">
                <span className="feature-marker">▶</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="service-card-footer">
        <div className="cyber-accent">
          <span className="cyber-text">// READY TO DEPLOY</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
