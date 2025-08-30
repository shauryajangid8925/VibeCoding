/**
 * File: src/App.js
 * Purpose: College demo site – added explanatory comments for readability.
 * Note: No functional code was changed.
 */

import React, { useState } from 'react';
import PreLoader from './components/PreLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import About from './components/About';
import Admissions from './components/Admissions';
import Courses from './components/Courses';
import Facilities from './components/Facilities';
import Placements from './components/Placements';
import ExtraCurricular from './components/ExtraCurricular';
import Events from './components/Events';
import NoticeBoard from './components/NoticeBoard';
import Footer from './components/Footer';
import Contact from './components/Contact';  // 👈 Contact import

// Regular function declaration
function App() {
  const [PreLoaderComplete, setPreLoaderComplete] = useState(false);
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); // 👈 common state yahan

  const handleVirtualTourClick = () => {
    setShowVirtualTour(true);
    setTimeout(() => {
      document.getElementById('campus3d').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!PreLoaderComplete) {
    return <PreLoader onComplete={() => setPreLoaderComplete(true)} />;
  }

  return (
    <div className="App">
      <Navbar onContactOpen={() => setIsContactOpen(true)} />
      <Hero 
        onVirtualTourClick={handleVirtualTourClick} 
        onContactOpen={() => setIsContactOpen(true)} 
      />
      <Highlights />
      <About />
      <Admissions />
      <Courses />
      <Facilities />
      <Placements />
      <ExtraCurricular />
      <Events />
      <NoticeBoard />
      <Footer />

      {/* 👇 Global Contact Modal */}
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

// Exporting the main component
export default App;
