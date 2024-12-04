import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Image, BookOpen, Send, Star } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { 
      name: 'Home', 
      href: '#home', 
      icon: Home,
      color: 'text-rose-500'
    },
    { 
      name: 'About', 
      href: '#about', 
      icon: User,
      color: 'text-indigo-500'
    },
    { 
      name: 'Skills', 
      href: '#skills', 
      icon: Briefcase,
      color: 'text-teal-500'
    },
    { 
      name: 'Testimonials', 
      href: '#testimonials', 
      icon: Image,
      color: 'text-pink-500'
    },
    { 
      name: 'Projects', 
      href: '#projects', 
      icon: Briefcase,
      color: 'text-orange-500'
    },
    { 
      name: 'Contact', 
      href: '#contact', 
      icon: Send,
      color: 'text-emerald-500'
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileNavItemVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      rotate: 15
    },
    visible: {
      opacity: 1, 
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-2xl font-playfair font-bold transition-colors duration-300 ${
                isScrolled ? 'text-rose-600' : 'text-white'
              }`}
            >
              Navya
            </motion.span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                  className={`transition-colors duration-300 group relative ${
                    isScrolled ? 'text-gray-700 hover:text-rose-600' : 'text-white hover:text-rose-200'
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:hidden"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`} />
              ) : (
                <Menu className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`} />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 bg-gradient-to-br from-rose-50 via-indigo-50 to-white"
          >
            <motion.div 
              className="flex flex-col justify-center items-center h-full space-y-8 px-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={mobileNavItemVariants}
                  whileTap="tap"
                  onClick={toggleMobileMenu}
                  className="flex items-center space-x-4 text-3xl font-bold group"
                >
                  <link.icon 
                    className={`h-8 w-8 ${link.color} group-hover:scale-110 transition-transform`} 
                  />
                  <span className="text-slate-800 group-hover:text-rose-600 transition-colors">
                    {link.name}
                  </span>
                </motion.a>
              ))}
              
              {/* Social Links */}
              <motion.div 
                className="flex space-x-6 mt-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
              >
                {['Linkedin', 'Instagram', 'Twitter'].map((social, index) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 5 : -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-slate-600 hover:text-rose-600"
                  >
                    {social}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;