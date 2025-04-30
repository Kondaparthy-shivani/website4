import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">ElegantWood</h2>
            <p className="text-sm mb-4">
              Crafting beautiful furniture for beautiful homes since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-light hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-light hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-light hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-sm hover:text-accent transition-colors">Shop</Link></li>
              <li><Link to="/about" className="text-sm hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-accent transition-colors">Living Room</a></li>
              <li><a href="#" className="text-sm hover:text-accent transition-colors">Bedroom</a></li>
              <li><a href="#" className="text-sm hover:text-accent transition-colors">Dining</a></li>
              <li><a href="#" className="text-sm hover:text-accent transition-colors">Office</a></li>
              <li><a href="#" className="text-sm hover:text-accent transition-colors">Outdoor</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">123 Furniture St, Design City</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">info@elegantwood.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2025 ElegantWood. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-sm hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;