import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Experience from './components/Projects/Experience/Experience';
import Contact from './components/Contact/Contact';
import Awards from './components/Awards/Awards';

// Actions
import { fetchProjects } from './redux/slices/projectsSlice';
import { fetchExperiences } from './redux/slices/experiencesSlice';
import { fetchSkills } from './redux/slices/skillsSlice';
import { fetchAwards } from './redux/slices/awardsSlice';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    // Fetch data when app loads
    dispatch(fetchProjects());
    dispatch(fetchExperiences());
    dispatch(fetchSkills());
    dispatch(fetchAwards())
  }, [dispatch]);

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Awards />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;