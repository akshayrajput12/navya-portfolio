import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const menuItems = ['Home', 'About', 'Projects', 'Gallery', 'Case Studies', 'Contact'];

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    open: {
      opacity: 1,
      x: '0%',
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-purple-600">
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                className="p-2 text-white hover:text-rose-200 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
            </div>

            <nav className="mt-8">
              <ul className="flex flex-col items-center space-y-6">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item}
                    custom={i}
                    variants={itemVariants}
                    className="text-white text-2xl font-playfair"
                  >
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      onClick={onClose}
                      className="hover:text-rose-200 transition-colors"
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
