import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHeart, FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { darkMode } = useSelector((state) => state.theme);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/" className="logo">
              <span className="logo-text">Portfolio</span>
            </Link>
            <p className="footer-tagline">Building the web, one pixel at a time</p>
          </div>

          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Navigation</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3>Social</h3>
              <div className="footer-social">
                <a href="https://www.linkedin.com/in/shreya-pandoh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/shreyapandoh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                {/* <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a> */}
                <a href="mailto:shreyapandoh04@gmail.com" aria-label="Email">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Your Name. All rights reserved. Made with <FaHeart className="heart-icon" /> using React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
