import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { X, Download, Share2 } from 'lucide-react';
import img1 from '../assets/projects/1.jpg';
import img2 from '../assets/projects/2.jpg';
import img3 from '../assets/projects/3.jpg';

const galleryImages = [
  {
    src: img1,
    title: 'Strategic Marketing Campaign',
    description: 'Innovative approach to digital marketing and brand storytelling',
    tags: ['Marketing', 'Digital Strategy', 'Branding']
  },
  {
    src: img2,
    title: 'Corporate Branding Session',
    description: 'Capturing the essence of modern business communication',
    tags: ['Business', 'Corporate', 'Branding']
  },
  {
    src: img3,
    title: 'Tech Innovation Showcase',
    description: 'Visualizing cutting-edge technological advancements',
    tags: ['Technology', 'Innovation', 'Design']
  },
  {
    src: img1,
    title: 'Creative Design Workshop',
    description: 'Exploring innovative design concepts and creative processes',
    tags: ['Design', 'Creativity', 'Workshop']
  },
  {
    src: img2,
    title: 'Strategic Planning Session',
    description: 'Mapping out comprehensive business and marketing strategies',
    tags: ['Strategy', 'Planning', 'Business']
  },
  {
    src: img3,
    title: 'Brand Identity Development',
    description: 'Creating unique and impactful visual brand identities',
    tags: ['Branding', 'Visual Identity', 'Design']
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.section 
      id="gallery" 
      className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Background Elements */}
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
          <motion.h2 
            className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Creative Gallery
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Explore our collection of innovative designs and creative works
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {galleryImages.map((image, index) => (
            <GalleryImage 
              key={index} 
              image={image} 
              onSelect={() => setSelectedImage(image)}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <ImageDetailModal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

const GalleryImage = ({ image, onSelect, index }) => {
  return (
    <motion.div
      key={index}
      className="relative cursor-pointer overflow-hidden group"
      onClick={() => onSelect(image)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <motion.img
        src={image.src}
        alt={image.title}
        className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-bold">{image.title}</h3>
      </div>
    </motion.div>
  );
};

const ImageDetailModal = ({ image, onClose }) => {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={image.src} alt={image.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{image.title}</h2>
              <p className="text-gray-600 mb-4">{image.description}</p>
              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
              onClick={onClose}
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Gallery;
