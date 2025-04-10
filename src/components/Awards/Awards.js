import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './Awards.css';

const Awards = () => {
  const { darkMode } = useSelector((state) => state.theme);
  const { awards, loading, error } = useSelector((state) => state.awards);
  console.log('awards', awards)

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
          <div className="loading">Loading awards...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`experience ${darkMode ? 'dark' : 'light'}`}>
        <div className="container">
          <div className="error">Error loading awards: {error}</div>
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
            <h1>Awards and Certifications</h1>
            <div className="section-underline"></div>
          </motion.div>

          <motion.div 
            className="timeline"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {awards.map((exp, index) => (
              <motion.div 
                key={exp.id}
                className="timeline-item"
                variants={item}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-date">
                {exp.achievements && exp.achievements.map((e, idx) => (
                    <>
                        <span key={idx} className="tech-tag" style={{marginRight: '30px'}}>{e.date}</span>
                        <span key={idx} className="tech-tag title">{e.text}</span>
                    </>
                    ))}
                </div>
                <div className="timeline-content">
                    {exp.awardImage && (
                        <img width="350" height="390" className="timeline-title" src={exp.awardImage} />
                    )}
                   {exp.certificateImage && (
                        <img width="350" height="330" className="timeline-title" src={exp.certificateImage} />
                    )}
                    <div>
                        {exp.achievements.map((e, idx) => (
                            <a className='btn btn-text' href={e.link} style={{color: '#6200ea', fontStyle:'italic', fontWeight: '800'}}>Link to {e.text}</a>
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

export default Awards;
