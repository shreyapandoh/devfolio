import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaDownload, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './About.css';
import profileImage from '../../assets/profile-image.jpg'; 

const About = () => {
  const { darkMode } = useSelector((state) => state.theme);
  const { skills } = useSelector((state) => state.skills);
  
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className={`about ${darkMode ? 'dark' : 'light'}`}>
      <section className="about-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1>About Me</h1>
            <div className="section-underline"></div>
          </motion.div>

          <div className="about-content-wrapper">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="profile-image-wrapper">
                <img src={profileImage} alt="Shreya - Frontend Developer" className="profile-image" />
              </div>
              <div className="about-social" style={{marginTop: '19px'}}>
                <a href="https://www.linkedin.com/in/shreya-pandoh/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/shreyapandoh" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                {/* <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a> */}
              </div>
              <div className="download-resume">
                <a href="/assets/SDE_Frontend_ShreyaPandoh_Resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer" download="ShreyaPandoh_Resume.pdf" style={{paddingLeft: '1.5rem'}}>
                  <FaDownload /> Download Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              className="about-details"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="about-introduction">
                <h2>Hey, I'm Shreya Pandoh</h2>
                <h3>Frontend Developer & UI/UX Enthusiast</h3>
                <p>
                    I'm a passionate Frontend Engineer with 4+ years of experience building intuitive, high-performance web applications.
                    I've contributed to startups and enterprise-level teams, with a proven track record of delivering impactful products in 
                    fast-paced environments.
                </p>
                <p>
                    Currently at Plivo, I lead frontend initiatives for the Contacto platform — integrating real-time messaging, 
                    and scalable UI solutions that improve both user experience and business outcomes.
                </p>
                <p>
                    Previously at Infosys and XenonStack, I helped architect and modernize banking and e-commerce solutions, led cross-functional teams, 
                    and mentored junior developers — always focused on clean code, performance, and customer-centric design.
                </p>
                <p>
                    I love working at the intersection of design and engineering, constantly learning, and pushing the limits of what frontend can do.
                </p>
              </div>

              <div className="about-skills-section">
                <h2>My Skills</h2>
                {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                  <div key={category} className="skill-category">
                    <h3>{category}</h3>
                    <div className="skills-container">
                      {categorySkills.map((skill) => (
                        <div key={skill.id} className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                          </div>
                          <div className="skill-bar">
                            <div 
                              className="skill-progress" 
                              style={{ width: `${skill.proficiency}%` }}
                              data-progress={`${skill.proficiency}%`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;