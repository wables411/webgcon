import React from 'react';
import { motion } from 'framer-motion';
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
    <motion.div 
      className={`service-card ${isHighlighted ? 'highlighted' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className="service-card-header">
        {icon && (
          <motion.div 
            className="service-icon"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <span className="cyber-text">{icon}</span>
          </motion.div>
        )}
        <h3 className="service-title">{title}</h3>
      </div>
      
      <div className="service-card-body">
        <p className="service-description">{description}</p>
        
        {features.length > 0 && (
          <ul className="service-features">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="service-feature"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="feature-marker">▶</span>
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="service-card-footer">
        <motion.div 
          className="cyber-accent"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="cyber-text">// READY TO DEPLOY</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
