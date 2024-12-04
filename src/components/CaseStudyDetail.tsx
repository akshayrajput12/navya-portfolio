import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import img1 from '../assets/projects/1.jpg';
import img2 from '../assets/projects/2.jpg';
import img3 from '../assets/projects/3.jpg';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = {
  'brand-revival': {
    title: 'Brand Revival Campaign',
    client: 'Tech Innovators Inc.',
    category: 'Branding & Strategy',
    duration: '6 months',
    year: '2023',
    headerImage: img1,
    challenge: 'Tech Innovators Inc. faced declining market relevance and needed to reconnect with modern consumers while preserving their legacy of innovation.',
    solution: 'We developed a comprehensive brand revival strategy that honored their heritage while positioning them for the future. This included a visual identity refresh, targeted digital campaigns, and strategic partnerships.',
    process: [
      {
        title: 'Research & Discovery',
        description: 'Conducted extensive market research and stakeholder interviews to understand brand perception and opportunities.'
      },
      {
        title: 'Strategy Development',
        description: 'Created a multi-channel strategy focusing on digital transformation and audience engagement.'
      },
      {
        title: 'Implementation',
        description: 'Executed the strategy across various channels with continuous optimization based on real-time data.'
      }
    ],
    results: [
      '40% increase in brand awareness',
      '2.5x social media engagement',
      '1.8M campaign reach',
      '35% increase in website traffic',
      '28% improvement in brand sentiment'
    ],
    gallery: [
      'https://source.unsplash.com/random/800x600?tech',
      'https://source.unsplash.com/random/800x600?marketing',
      'https://source.unsplash.com/random/800x600?business'
    ]
  },
  'ai-platform-design': {
    title: 'AI-Powered Platform Design',
    client: 'DataSphere Solutions',
    category: 'Product Design & UX',
    duration: '8 months',
    year: '2023',
    headerImage: 'https://source.unsplash.com/random/1920x1080?technology',
    challenge: 'DataSphere needed a user-friendly interface for their complex AI analytics platform that would cater to both technical and non-technical users.',
    solution: 'We created an intuitive, adaptive interface that simplifies complex data visualization while maintaining advanced functionality for power users.',
    process: [
      {
        title: 'User Research',
        description: 'Conducted extensive user interviews and usability testing to understand diverse user needs.'
      },
      {
        title: 'Design System',
        description: 'Developed a comprehensive design system that ensures consistency and accessibility.'
      },
      {
        title: 'Iterative Design',
        description: 'Implemented continuous feedback loops with stakeholders for optimal user experience.'
      }
    ],
    results: [
      '45% reduction in user onboarding time',
      '92% user satisfaction rate',
      '3x increase in daily active users',
      '60% decrease in support tickets',
      '25% improvement in task completion rates'
    ],
    gallery: [
      'https://source.unsplash.com/random/800x600?artificial-intelligence',
      'https://source.unsplash.com/random/800x600?data',
      'https://source.unsplash.com/random/800x600?design'
    ]
  }
};

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies[id as keyof typeof caseStudies];

  useEffect(() => {
    const sections = document.querySelectorAll('.animate-section');
    
    sections.forEach((section) => {
      gsap.fromTo(section,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    gsap.to('.parallax-header', {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-header",
        start: "top top",
        scrub: true
      }
    });
  }, []);

  if (!study) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
          <Link 
            to="/" 
            className="text-rose-600 hover:text-rose-700 inline-flex items-center transition-colors"
          >
            <ArrowLeft className="mr-2" /> Return Home
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white transition-colors duration-300"
      >
        {/* Hero Section with Parallax */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[70vh] overflow-hidden parallax-header"
        >
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.6, 0.05, 0.01, 0.9] }}
            src={study.headerImage}
            alt={study.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute inset-0 bg-black/50" 
          />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link
                  to="/"
                  className="inline-flex items-center text-white mb-8 hover:text-rose-200 transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Link>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4"
                >
                  {study.title}
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-center text-white/80 space-x-4"
                >
                  <span>{study.client}</span>
                  <ChevronRight className="w-4 h-4" />
                  <span>{study.category}</span>
                  <ChevronRight className="w-4 h-4" />
                  <span>{study.year}</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Overview */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="animate-section grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                The Challenge
              </h2>
              <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                Our Solution
              </h2>
              <p className="text-gray-600 leading-relaxed">{study.solution}</p>
            </div>
          </motion.div>

          {/* Process */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="animate-section mb-20"
          >
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-12 text-center">
              Our Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {study.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    type: 'spring',
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                  className="relative p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold group-hover:rotate-12 transition-transform">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 mt-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="animate-section mb-20"
          >
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-12 text-center">
              The Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {study.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    type: 'spring',
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                  className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-3 h-3 bg-rose-600 rounded-full mb-4 group-hover:animate-pulse" />
                  <p className="text-lg font-medium text-gray-900">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate-section"
          >
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-12 text-center">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {study.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    type: 'spring',
                    stiffness: 300
                  }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-lg aspect-w-4 aspect-h-3 group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CaseStudyDetail;
