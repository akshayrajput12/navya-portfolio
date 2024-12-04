import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
        <Navbar 
          onMenuClick={() => setIsMobileMenuOpen(true)} 
          navLinks={[
            { label: 'About', href: '#about' },
            { label: 'Skills', href: '#skills' },
            { label: 'Testimonials', href: '#testimonials' },
            { label: 'Contact', href: '#contact' },
          ]}
        />
        
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Gallery />
              <Testimonials />
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
