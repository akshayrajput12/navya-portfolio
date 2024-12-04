import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import CaseStudies from './components/CaseStudies';
import CaseStudyDetail from './components/CaseStudyDetail';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import MobileMenu from './components/MobileMenu';
import Footer from './components/Footer';
import '@fontsource/playfair-display';
import '@fontsource/montserrat';
import './styles/globals.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
        <CustomCursor />
        <Navbar onMenuClick={() => setIsMobileMenuOpen(true)} />
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        
        <Routes>
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Projects />
              <Gallery />
              <CaseStudies />
              <Contact />
              <Footer />
            </main>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;