import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ProjectShowcase from './ProjectShowcase';
import ExperiencePreview from './ExperiencePreview';
import './Home.css';
import profileImage from '../../assets/profile-image.jpg'; // Make sure to add this image to your assets folder

const Home = () => {
  const { darkMode } = useSelector((state) => state.theme);
  const { githubProjects } = useSelector((state) => state.projects);
  console.log('githubProjects', githubProjects)
  const { experiences } = useSelector((state) => state.experiences);
  console.log('experiences', experiences)

  // Featured projects (first 3)
  const featuredProjects = Array.isArray(githubProjects) ? githubProjects.slice(0, 3) : [];
  console.log('featuredProjects', featuredProjects)

  // Latest experience
  const latestExperience = experiences[0];
  console.log('latestExperience', latestExperience)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className={`home ${darkMode ? 'dark' : 'light'}`}>
      {/* Hero Section with gradient and glassmorphism effects */}
      <section className="hero-section">
        <div className="gradient-bg">
          <div className="gradient-overlay"></div>
        </div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-text">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Hi, I'm <span className="highlight">Shreya</span>
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Frontend Developer
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                I create modern web applications using React and JavaScript. Welcome to my <span style={{fontSize: '22px', textDecoration: 'overline', fontStyle: 'italic', fontWeight: '700', color: '#6200EA'}}>DevMatrix</span> where I showcase my projects and share my knowledge.

              </motion.p>
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link to="/projects" className="btn btn-primary" style={{paddingLeft: '1.5rem'}}>View My Work</Link>
                <Link to="/contact" className="btn btn-secondary" style={{paddingLeft: '1.5rem'}} >Get In Touch</Link>
              </motion.div>
              <motion.div 
                className="hero-social"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <a href="https://github.com/shreyapandoh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/shreya-pandoh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                {/* <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a> */}
              </motion.div>
            </div>
            <motion.div 
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="profile-image-wrapper">
                <img src={profileImage} alt="Shreya - Frontend Developer" className="profile-image" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>About Me</h2>
            <div className="title-underline"></div>
          </motion.div>
          
          <motion.div 
            className="glassmorphism-card about-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
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
            <Link to="/about" className="btn btn-text">
              Learn more about me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="section projects-preview-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Featured Projects</h2>
            <div className="title-underline"></div>
          </motion.div>
          
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants} className='project-card'>
                <ProjectShowcase project={project} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="view-all-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="/projects" className="btn btn-primary" style={{paddingLeft: '1.5rem'}}>
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience Preview Section */}
      <section className="section experience-preview-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Experience</h2>
            <div className="title-underline"></div>
          </motion.div>
          
          {latestExperience && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="glassmorphism-card latest-experience">
                <ExperiencePreview experience={latestExperience} isDetailed={true} />
              </div>
            </motion.div>
          )}
          
          <motion.div 
            className="view-all-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link to="/experience" className="btn btn-primary" style={{paddingLeft: '1.5rem'}}>
              View My Full Experience
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section contact-cta-section">
        <div className="container">
          <motion.div 
            className="glassmorphism-card contact-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Let's Work Together</h2>
            <p>
              Have a project idea or looking for a developer to join your team?
              I'm currently available for freelance work and full-time opportunities.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{paddingLeft: '1.5rem'}}>
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
