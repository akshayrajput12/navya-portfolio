import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Instagram, Twitter, Sparkles, Star, Rocket } from 'lucide-react';
import navyaImage from '../assets/navya.jpg';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Advanced 3D Transformation Hooks
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const scale = useTransform(
    [x, y], 
    ([latestX, latestY]) => 1 + Math.sqrt(latestX * latestX + latestY * latestY) / 5000
  );

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/navya', 
      color: 'text-indigo-600 hover:text-indigo-700',
      bgColor: 'bg-indigo-50',
      hoverEffect: { 
        scale: 1.2, 
        rotate: 5, 
        boxShadow: "0 10px 20px rgba(79, 70, 229, 0.2)"
      }
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/navya_marketing', 
      color: 'text-pink-600 hover:text-pink-700',
      bgColor: 'bg-pink-50',
      hoverEffect: { 
        scale: 1.2, 
        rotate: -5, 
        boxShadow: "0 10px 20px rgba(219, 39, 119, 0.2)"
      }
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/navya_marketing', 
      color: 'text-teal-600 hover:text-teal-700',
      bgColor: 'bg-teal-50',
      hoverEffect: { 
        scale: 1.2, 
        rotate: 5, 
        boxShadow: "0 10px 20px rgba(13, 148, 136, 0.2)"
      }
    }
  ];

  // Mouse Movement Handler
  const handleMouseMove = (event: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = (cardRef.current as HTMLDivElement).getBoundingClientRect();
      x.set(event.clientX - rect.left - rect.width / 2);
      y.set(event.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Advanced Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      rotateX: -15,
      rotateY: 15
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-rose-50 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 1,
        type: 'spring',
        stiffness: 50
      }}
    >
      {/* Decorative Background Elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Hero Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight"
              initial={{ 
                opacity: 0, 
                x: -50,
                textShadow: "0 10px 20px rgba(0,0,0,0)"
              }}
              animate={{ 
                opacity: 1, 
                x: 0,
                textShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }}
              transition={{ 
                duration: 0.6, 
                type: 'spring',
                stiffness: 120 
              }}
              whileHover={{
                scale: 1.02,
                textShadow: "0 10px 20px rgba(0,0,0,0.2)"
              }}
            >
              Navya Sharma
            </motion.h1>
            <motion.h2 
              className="text-3xl text-[rgb(225,29,72)] font-semibold"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                type: 'spring',
                stiffness: 120 
              }}
              whileHover={{
                scale: 1.05,
                rotate: 1
              }}
            >
              Marketing Strategist
            </motion.h2>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-slate-700 mb-6"
            whileHover="hover"
          >
            Transforming brands through innovative marketing strategies, 
            data-driven insights, and creative storytelling.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex space-x-4"
          >
            <motion.a 
              href="/Navya_Sharma_Resume.pdf" 
              download
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 25px rgba(225,29,72,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-[rgb(225,29,72)] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
            >
              <Download className="mr-2" /> Download CV
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgb(225,29,72)",
                color: "rgb(225,29,72)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center border border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:border-[rgb(225,29,72)] transition"
            >
              Contact Me <ArrowRight className="ml-2" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex space-x-4 mt-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={social.hoverEffect}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition-all duration-300 ${social.color}`}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Hero Image */}
        <motion.div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            rotateX, 
            rotateY,
            scale,
            transformStyle: 'preserve-3d' 
          }}
          className="flex justify-center items-center perspective-1000"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
          }}
        >
          <motion.div
            initial={{ 
              opacity: 0, 
              y: 50,
              rotateX: 15,
              rotateY: -15,
              scale: 0.8
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              rotateX: 0,
              rotateY: 0,
              scale: 1
            }}
            transition={{ 
              duration: 0.8,
              type: 'spring',
              stiffness: 120
            }}
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
            className="relative group"
          >
            <motion.img 
              src={navyaImage}
              alt="Navya Sharma"
              className="w-96 h-96 object-cover rounded-3xl shadow-2xl"
              style={{
                transform: 'translateZ(50px)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
              }}
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="absolute inset-0 bg-[rgb(225,29,72)] rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;