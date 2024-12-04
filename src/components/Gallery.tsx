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
  const ref = useRef(null);
  
  // Spring animations for smoother movement
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  // Transform values with increased range for more dramatic effect
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const scale = useTransform(
    [x, y],
    ([latestX, latestY]) => 1 + Math.sqrt(latestX * latestX + latestY * latestY) / 1000
  );

  const handleMouseMove = (event) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { 
          opacity: 0,
          y: 50,
          rotateX: 10,
          rotateY: -10
        },
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 20,
            delay: index * 0.1
          }
        }
      }}
      whileHover={{ scale: 1.02 }}
      className="relative h-[400px] rounded-xl overflow-hidden group cursor-pointer"
      style={{
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onSelect}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d'
        }}
      >
        <motion.img
          src={image.src}
          alt={image.title}
          className="w-full h-full object-cover"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(20px)'
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            transform: 'translateZ(30px)'
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
            <div className="flex flex-wrap gap-2">
              {image.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-rose-500/80 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ImageDetailModal = ({ image, onClose }) => {
  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      rotateX: 10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      rotateX: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 bg-rose-600 text-white">
          <h2 className="text-2xl font-bold">{image.title}</h2>
          <motion.button
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={24} />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="relative group">
            <motion.img
              src={image.src}
              alt={image.title}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white"
              >
                <Download size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white"
              >
                <Share2 size={20} />
              </motion.button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-rose-600 mb-4">
              Project Details
            </h3>
            <p className="text-gray-700 mb-6">
              {image.description}
            </p>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
