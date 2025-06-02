import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo variant="light" />
            <p className="text-gray-300 text-sm leading-relaxed">
              MYOREVA is your trusted source for premium wellness, health, beauty, and household products.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-secondary transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products?category=health" className="text-gray-300 hover:text-secondary transition-colors">Health Products</Link>
              </li>
              <li>
                <Link to="/products?category=beauty" className="text-gray-300 hover:text-secondary transition-colors">Beauty & Skincare</Link>
              </li>
              <li>
                <Link to="/products?category=household" className="text-gray-300 hover:text-secondary transition-colors">Household Items</Link>
              </li>
              <li>
                <Link to="/products?category=wellness" className="text-gray-300 hover:text-secondary transition-colors">Wellness</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">Ibadan, Oyo-State, Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <a href="tel:+2348114580792" className="text-gray-300 hover:text-secondary transition-colors">+234 8114580792</a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <a href="mailto:info@myoreva.com" className="text-gray-300 hover:text-secondary transition-colors">info@myoreva.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2 text-white">Subscribe to Our Newsletter</h3>
            <p className="text-gray-300 mb-4">Stay updated with our latest products and offers</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-md text-gray-800 focus:outline-none"
                required
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} MYOREVA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;