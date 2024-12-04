import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Navya's work on our marketing strategy was exceptional!",
    name: "John Doe",
    role: "Marketing Director, XYZ Corp"
  },
  {
    quote: "A true professional who understands the nuances of branding.",
    name: "Jane Smith",
    role: "CEO, ABC Ltd"
  },
  {
    quote: "Incredible insights and creativity that transformed our approach.",
    name: "Michael Johnson",
    role: "Product Manager, DEF Inc"
  }
];

const Testimonials = () => {
  return (
    <motion.section 
      id="testimonials" 
      className="py-20 bg-gradient-to-br from-white via-rose-50 to-white"
      initial={{ rotateX: 90, opacity: 0 }}
      animate={{ rotateX: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 
          className="text-4xl font-bold mb-8"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          What People Say
        </h2>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="border p-6 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.8, rotateZ: 45 }}
              animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ rotateZ: 10, scale: 1.1 }}
            >
              <p className="italic text-gray-600">"{testimonial.quote}"</p>
              <h4 className="font-bold mt-4">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
