import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import CaseStudies from './components/CaseStudies';
import CaseStudyDetail from './components/CaseStudyDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
        <Navbar onMenuClick={() => setIsMobileMenuOpen(true)} />
        
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
};

export default App;
