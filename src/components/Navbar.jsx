import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white-50'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-primary">ElegantWood</h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block text-dark-300">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                to="/" 
                className="relative px-2 py-1 text-dark font-medium group transition-all duration-300"
              >
                Home
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-blue-600 w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              <Link 
                to="/products" 
                className="relative px-2 py-1 text-dark font-medium group transition-all duration-300"
              >
                Shop
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-blue-600 w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              <Link 
                to="/about" 
                className="relative px-2 py-1 text-dark font-medium group transition-all duration-300"
              >
                About Us
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-blue-600 w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              <Link 
                to="/contact" 
                className="relative px-2 py-1 text-dark font-medium group transition-all duration-300"
              >
                Contact
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-blue-600 w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </Link>
              <Link 
                to="/cart" 
                className="p-2 text-dark hover:text-blue-600 transition-all duration-300 group relative"
              >
                <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="p-2 text-dark hover:text-blue-600 mr-2 transition-all duration-300 group relative">
              <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-dark hover:text-blue-600 transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 hover:rotate-90 transition-transform" />
              ) : (
                <Menu className="w-6 h-6 hover:rotate-90 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to="/" 
                className="block px-3 py-2 text-base font-medium text-dark hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all border-l-4 border-transparent hover:border-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to="/products" 
                className="block px-3 py-2 text-base font-medium text-dark hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all border-l-4 border-transparent hover:border-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to="/about" 
                className="block px-3 py-2 text-base font-medium text-dark hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all border-l-4 border-transparent hover:border-blue-600"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link 
                to="/contact" 
                className="block px-3 py-2 text-base font-medium text-dark hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all border-l-4 border-transparent hover:border-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;