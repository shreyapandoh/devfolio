import React from 'react';
import { motion } from 'framer-motion';
import './ExperiencePreview.css';

const ExperiencePreview = ({ experience = [] }) => {
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="experience-preview"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
        <motion.div 
          key={experience.id}
          className="experience-card"
          variants={item}
        >
          <div className="experience-header">
            <h3 className="experience-role">{experience.role}</h3>
            <span className="experience-period">{experience.period}</span>
          </div>
          <div className="experience-company">{experience.company}</div>
          <p className="experience-description">{experience.description}</p>
          <div className="experience-technologies">
            {experience.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </motion.div>
    </motion.div>
  );
};

export default ExperiencePreview;
