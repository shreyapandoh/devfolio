import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/slices/themeSlice';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { darkMode } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1>DevMatrix</h1>
          </motion.div>
        </Link>

        <div className="mobile-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={isActive('/') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={isActive('/projects') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="/experience" 
                className={isActive('/experience') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link 
                to="/certifications" 
                className={isActive('/certifications') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Certifications
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={isActive('/contact') ? 'active' : ''} 
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className="theme-toggle" 
          onClick={handleThemeToggle} 
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;