import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    description: 'San Francisco, California',
    color: 'text-rose-600'
  },
  {
    icon: Mail,
    title: 'Email',
    description: 'marketing@navya.com',
    color: 'text-purple-600'
  },
  {
    icon: Phone,
    title: 'Phone',
    description: '+1 (555) 123-4567',
    color: 'text-emerald-600'
  }
];

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
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowPopup(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      x.set(event.clientX - rect.left - rect.width / 2);
      y.set(event.clientY - rect.top - rect.height / 2);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
          className="bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2"
        >
          <div className="p-12 flex flex-col justify-center">
            <motion.h2 
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl font-bold mb-6"
            >
              Let's Collaborate
            </motion.h2>
            <motion.p
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-gray-600 mb-8"
            >
              Interested in transforming your digital presence? I'm always excited to hear about new challenges and opportunities.
            </motion.p>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-center space-x-4"
                >
                  <contact.icon className={`w-6 h-6 ${contact.color}`} />
                  <div>
                    <h3 className="font-semibold">{contact.title}</h3>
                    <p className="text-gray-600">{contact.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Your Name"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="your@email.com"
                />
              </motion.div>
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  placeholder="Tell me about your project..."
                />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-rose-600 text-white py-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-rose-700 transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Popup Message */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 z-50"
        >
          <h3 className="text-lg font-bold text-center text-rose-600">Thank You!</h3>
          <p className="text-center text-gray-600">Thanks for reaching out! We will be contacting you soon.</p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;