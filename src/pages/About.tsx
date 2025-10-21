import React from 'react';
import Hero from '../components/Hero';
import './About.css';

const About: React.FC = () => {
  const values = [
    {
      title: "Innovation First",
      description: "We embrace cutting-edge technology while respecting traditional construction values, creating the perfect fusion of past and future.",
      icon: "🚀"
    },
    {
      title: "Texas Pride",
      description: "Born and bred in Texas, we understand the unique challenges and opportunities of building in the Lone Star State.",
      icon: "🤠"
    },
    {
      title: "Digital Excellence",
      description: "Every project is executed with precision, using advanced digital tools and methodologies to ensure superior results.",
      icon: "⚡"
    }
  ];

  const team = [
    {
      name: "John Thompson",
      role: "Founder & CEO",
      description: "Visionary leader with 20+ years in construction technology",
      specialty: "Digital Transformation"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      description: "Tech innovator specializing in AI and IoT integration",
      specialty: "Smart Systems"
    },
    {
      name: "Mike Rodriguez",
      role: "Head of Operations",
      description: "Construction veteran ensuring quality and safety standards",
      specialty: "Project Management"
    }
  ];

  return (
    <div className="about">
      <Hero
        title="About Web G Construction"
        subtitle="// BUILDING TEXAS'S DIGITAL FUTURE"
        description="Where traditional Texas craftsmanship meets cutting-edge technology to create the construction company of tomorrow."
        showButton={false}
      />
      
      <section className="section mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2 className="section-title">
                <span className="texas-primary">Our Mission</span>
              </h2>
              <p className="mission-description">
                We grow our people to grow our company. At Web G Construction, we believe that 
                the future of construction lies in the seamless integration of technology and 
                human expertise. We're not just building structures – we're building the 
                digital infrastructure that will power Texas for generations to come.
              </p>
              <div className="mission-highlight">
                <span className="cyber-text">// MISSION STATEMENT</span>
                <p className="highlight-text">
                  "To revolutionize construction through technology while maintaining the 
                  integrity and craftsmanship that Texas is known for."
                </p>
              </div>
            </div>
            <div className="mission-visual">
              <div className="tech-diagram">
                <div className="diagram-node main">
                  <span>Web G</span>
                </div>
                <div className="diagram-node">
                  <span>AI</span>
                </div>
                <div className="diagram-node">
                  <span>IoT</span>
                </div>
                <div className="diagram-node">
                  <span>Cloud</span>
                </div>
                <div className="diagram-node">
                  <span>Analytics</span>
                </div>
                <div className="connection-line"></div>
                <div className="connection-line"></div>
                <div className="connection-line"></div>
                <div className="connection-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="cyber-text">// CORE VALUES</span>
            </h2>
            <p className="section-description">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <span>{value.icon}</span>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="texas-primary">Meet Our</span>
              <span className="cyber-accent"> Team</span>
            </h2>
            </div>
            
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="team-card-header">
                    <div className="member-avatar">
                      <span className="avatar-text">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-role">{member.role}</p>
                    </div>
                  </div>
                  <div className="team-card-body">
                    <p className="member-description">{member.description}</p>
                    <div className="member-specialty">
                      <span className="specialty-label">Specialty:</span>
                      <span className="specialty-value cyber-text">{member.specialty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section vision-section">
        <div className="container">
          <div className="vision-content">
            <h2 className="section-title">
              <span className="cyber-text">// VISION</span>
            </h2>
            <div className="vision-statement">
              <p className="vision-text">
                Web G Construction is the company of choice by:
              </p>
              <ul className="vision-list">
                <li>Putting our employees' health and safety above all else</li>
                <li>Exceeding the expectations of our clients through innovation</li>
                <li>Striving for operational excellence in every project</li>
                <li>Building the digital infrastructure of tomorrow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
