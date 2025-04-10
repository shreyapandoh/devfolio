import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';
import './ProjectShowcase.css';

const ProjectShowcase = ({ project }) => {
  console.log('projects and source', project, project.source);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="project-showcase"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Since project is an object, you can directly use its properties */}
      <motion.div
        variants={item}
      >
        <div className="project-header">
          <h4>{project.name}</h4>
          <div className="project-links">
            {project.source === 'github' && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                <FaGithub />
              </a>
            )}
            {project.homepage && (
                <a href={project.homepage} target="_blank" rel="noopener noreferrer" aria-label="Visit site">
                    <FaExternalLinkAlt />
                </a>
            )}
          </div>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-footer">
          {project.source === 'github' && (
            <>
              <span className="project-language">{project.language}</span>
              <div className="project-stats">
                <span className="project-stat">
                  <FaStar />
                  {project.stars}
                </span>
                <span className="project-stat">
                  <FaCodeBranch />
                  {project.forks}
                </span>
              </div>
            </>
          )}
          {project.homepage && (
            <span className="project-framework">{project.framework}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectShowcase;
