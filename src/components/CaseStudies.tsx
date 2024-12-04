import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import img1 from '../assets/projects/1.jpg';
import img2 from '../assets/projects/2.jpg';
import img3 from '../assets/projects/3.jpg';

const caseStudies = [
  {
    id: 'brand-revival',
    title: 'Brand Revival Campaign',
    client: 'Tech Innovators Inc.',
    category: 'Branding & Strategy',
    image: img1,
    brief: 'Revitalizing a legacy tech brand for the modern era',
    objectives: 'To reposition the brand in the market and increase brand awareness.',
    challenges: 'Overcoming outdated brand perceptions and reaching a younger audience.',
    solutions: 'Developed a modern brand identity and launched a digital-first marketing campaign.',
    outcomes: 'Achieved a 40% increase in brand awareness and doubled social media engagement.',
    images: [
      img1,
      img2,
      img3
    ]
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    client: 'Global Retail Co.',
    category: 'Digital Strategy',
    image: img2,
    brief: 'Leading a complete digital transformation initiative',
    objectives: 'To enhance online sales and improve customer satisfaction.',
    challenges: 'Integrating new technologies with existing systems.',
    solutions: 'Implemented an e-commerce platform and optimized user experience.',
    outcomes: 'Increased online sales by 300% and improved customer satisfaction by 65%.',
    images: [
      img2,
      img3
    ]
  },
  {
    id: 'social-impact',
    title: 'Social Impact Campaign',
    client: 'EcoFriendly Solutions',
    category: 'Social Media & Impact',
    image: img3,
    brief: 'Creating awareness for sustainable practices',
    objectives: 'To raise awareness about sustainability and drive community engagement.',
    challenges: 'Engaging a diverse audience and maintaining campaign momentum.',
    solutions: 'Launched a multi-channel campaign with influencer partnerships.',
    outcomes: 'Generated over 1M impressions and secured 200K pledge signatures.',
    images: [
      img3,
      img2,
      img1
    ]
  }
];

const CaseStudies = () => {
  return (
    <motion.section 
      id="case-studies" 
      className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-rose-200/30 blur-3xl"
          animate={{
            x: ['-25%', '25%'],
            y: ['-25%', '25%'],
            scale: [0.8, 1.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-blue-200/20 blur-3xl"
          animate={{
            x: ['25%', '-25%'],
            y: ['25%', '-25%'],
            scale: [1.2, 0.8],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into our most impactful marketing campaigns
          </p>
        </motion.div>

        <div className="grid gap-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0 
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.2
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <Link
                to={`/case-study/${study.id}`}
                className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-[400px] object-cover transform transition-transform duration-500"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-black/20"
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <div className="p-8 md:p-12">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mb-4"
                  >
                    <span className="inline-block px-4 py-2 bg-rose-100 text-rose-600 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-4"
                  >
                    {study.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-gray-600 mb-6"
                  >
                    {study.brief}
                  </motion.p>
                  <motion.ul 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="space-y-2 mb-8"
                  >
                    {[
                      { label: 'Objectives', content: study.objectives },
                      { label: 'Challenges', content: study.challenges },
                      { label: 'Solutions', content: study.solutions },
                      { label: 'Outcomes', content: study.outcomes }
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + idx * 0.1, duration: 0.6 }}
                        className="flex items-center text-gray-700"
                      >
                        <span className="w-2 h-2 bg-rose-500 rounded-full mr-3" />
                        <strong className="mr-2">{item.label}:</strong> {item.content}
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="flex items-center text-rose-600 font-medium group/link"
                  >
                    <span className="mr-2">View Case Study</span>
                    <ArrowRight className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;