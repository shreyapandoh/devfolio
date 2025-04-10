import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const { darkMode } = useSelector((state) => state.theme);
  const { githubProjects, vercelProjects, loading, error } = useSelector((state) => state.projects);
  const [filter, setFilter] = useState('all');

  const filteredProjects = () => {
    switch (filter) {
      case 'github':
        return { githubProjects, vercelProjects: [] };
      case 'vercel':
        return { githubProjects: [], vercelProjects };
      default:
        return { githubProjects, vercelProjects };
    }
  };

  const { githubProjects: filteredGithub, vercelProjects: filteredVercel } = filteredProjects();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <div className={`projects ${darkMode ? 'dark' : 'light'}`}>
        <div className="container">
          <div className="loading">Loading projects...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`projects ${darkMode ? 'dark' : 'light'}`}>
        <div className="container">
          <div className="error">Error loading projects: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`projects ${darkMode ? 'dark' : 'light'}`}>
      <section className="projects-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1>My Projects</h1>
            <div className="section-underline"></div>
          </motion.div>

          <div className="projects-filter">
            <button 
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={filter === 'github' ? 'active' : ''}
              onClick={() => setFilter('github')}
            >
              GitHub Projects
            </button>
            <button className={filter === 'vercel' ? 'active' : ''}
              onClick={() => setFilter('vercel')}
            >
              Vercel Projects
            </button>
          </div>

          {filteredGithub.length > 0 && (
            <div className="projects-section-group">
              <h2>GitHub Projects</h2>
              <motion.div 
                className="projects-grid"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredGithub.map((project) => (
                  <motion.div 
                    key={project.id}
                    className="project-card"
                    variants={item}
                  >
                    <div className="project-header">
                      <h3>{project.name}</h3>
                      <div className="project-links">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                          <FaGithub />
                        </a>
                        {project.homepage && (
                          <a href={project.homepage} target="_blank" rel="noopener noreferrer" aria-label="Visit live site">
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-techs">
                      {project.topics && project.topics.map((topic, index) => (
                        <span key={index} className="tech-tag">{topic}</span>
                      ))}
                    </div>
                    <div className="project-footer">
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
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {filteredVercel.length > 0 && (
            <div className="projects-section-group">
              <h2>Vercel Projects</h2>
              <motion.div 
                className="projects-grid"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredVercel.map((project) => (
                  <motion.div 
                    key={project.id}
                    className="project-card"
                    variants={item}
                  >
                    <div className="project-header">
                      <h3>{project.name}</h3>
                      <div className="project-links">
                        {project.url && (
                          <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label="Visit site">
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-techs">
                      {project.technologies && project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-footer">
                      <span className="project-framework">{project.framework}</span>
                      <span className="project-date">{new Date(project.updatedAt).toLocaleDateString()}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {filteredGithub.length === 0 && filteredVercel.length === 0 && (
            <div className="no-projects">
              <p>No projects found with the selected filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;