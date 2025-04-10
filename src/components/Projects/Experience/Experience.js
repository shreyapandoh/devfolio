import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const { darkMode } = useSelector((state) => state.theme);
  const { experiences, loading, error } = useSelector((state) => state.experiences);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 }
  };

  if (loading) {
    return (
      <div className={`experience ${darkMode ? 'dark' : 'light'}`}>
        <div className="container">
          <div className="loading">Loading experiences...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`experience ${darkMode ? 'dark' : 'light'}`}>
        <div className="container">
          <div className="error">Error loading experiences: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`experience ${darkMode ? 'dark' : 'light'}`}>
      <section className="experience-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Work Experience</h1>
            <div className="section-underline"></div>
          </motion.div>

          <motion.div 
            className="timeline"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className="timeline-item"
                variants={item}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-date">
                  <span>{exp.period}</span>
                </div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{exp.role}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>
                  <ul className="timeline-achievements">
                    {exp.achievement && exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement.text}</li>
                    ))}
                  </ul>
                  <div className="timeline-technologies">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
