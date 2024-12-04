import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  Send
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Digital Marketing', href: '#services' },
        { name: 'Brand Strategy', href: '#services' },
        { name: 'Content Marketing', href: '#services' },
        { name: 'Marketing Consulting', href: '#services' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#blog' },
        { name: 'Case Studies', href: '#projects' },
        { name: 'Marketing Guides', href: '#resources' },
        { name: 'Webinars', href: '#resources' }
      ]
    }
  ];

  const contactInfo = [
    { 
      icon: Mail, 
      text: 'navya.marketing@gmail.com',
      color: 'text-rose-600'
    },
    { 
      icon: Phone, 
      text: '+1 (555) 123-4567',
      color: 'text-emerald-600'
    },
    { 
      icon: MapPin, 
      text: 'San Francisco, CA, USA',
      color: 'text-sky-600'
    }
  ];

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/navya', 
      color: 'text-blue-600 hover:text-blue-700' 
    },
    { 
      icon: Instagram, 
      href: 'https://instagram.com/navya_marketing', 
      color: 'text-pink-600 hover:text-pink-700' 
    },
    { 
      icon: Twitter, 
      href: 'https://twitter.com/navya_marketing', 
      color: 'text-sky-600 hover:text-sky-700' 
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-rose-500">Navya Sharma</h2>
          <p className="text-gray-400 mb-6">
            Innovative marketing strategist transforming brands through 
            creative storytelling and data-driven insights.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`${social.color} transition`}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-6 text-white">
              {section.title}
            </h3>
            <ul className="space-y-4">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <motion.a
                    href={link.href}
                    whileHover={{ 
                      x: 5,
                      color: '#F43F5E'
                    }}
                    className="text-gray-400 hover:text-rose-500 transition"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">
            Contact Information
          </h3>
          <ul className="space-y-4">
            {contactInfo.map((contact, index) => (
              <li 
                key={index} 
                className="flex items-center space-x-3"
              >
                <contact.icon className={`h-5 w-5 ${contact.color}`} />
                <span className="text-gray-400">{contact.text}</span>
              </li>
            ))}
          </ul>

          {/* Newsletter Signup */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Subscribe to My Newsletter
            </h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rose-600 text-white px-4 py-2 rounded-r-lg hover:bg-rose-700 transition"
              >
                <Send className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p className="text-gray-500">
          © {currentYear} Navya Sharma. All Rights Reserved.
          <br />
          Designed with ❤️ by Navya Sharma
        </p>
      </div>
    </footer>
  );
};

export default Footer;
