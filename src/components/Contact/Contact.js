import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const { darkMode } = useSelector((state) => state.theme);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_2s0nrxh', // Your email service ID from EmailJS dashboard
      'template_zmyqymg', // Your email template ID from EmailJS
      e.target, // The form element
      'BO7Qf9pmmcGOhC19g' // Your EmailJS user ID
    )
    .then((result) => {
      console.log(result.text);
      setStatus({
        submitted: true,
        success: true,
        message: 'Thank you for your message! I will get back to you soon.',
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({
          submitted: false,
          success: false,
          message: '',
        });
      }, 5000);
    }, (error) => {
      console.log(error.text);
      setStatus({
        submitted: true,
        success: false,
        message: 'Oops! Something went wrong. Please try again later.',
      });
    });
  };

  return (
    <div className={`contact ${darkMode ? 'dark' : 'light'}`}>
      <section className="contact-section section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact Me</h1>
            <div className="section-underline"></div>
          </motion.div>

          <div className="contact-content">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Let's Get In Touch</h2>
              <p>
                Whether you have a question, a project idea, or just want to say hello,
                I'd love to hear from you. Fill out the form or reach out through one of the channels below.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <a href="mailto:shreyapandoh04@gmail.com">shreyapandoh04@gmail.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <FaLinkedin />
                  </div>
                  <div className="contact-details">
                    <h3>LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/shreya-pandoh/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/shreya-pandoh
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">
                    <FaGithub />
                  </div>
                  <div className="contact-details">
                    <h3>GitHub</h3>
                    <a href="https://github.com/shreyapandoh" target="_blank" rel="noopener noreferrer">
                      github.com/shreyapandoh
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-control">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-control">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
                
                {status.submitted && (
                  <div className={`form-status ${status.success ? 'success' : 'error'}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;