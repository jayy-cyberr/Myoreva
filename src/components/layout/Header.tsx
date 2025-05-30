import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-secondary ${
                  location.pathname === link.path ? 'text-secondary' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              aria-label="Search"
              className="text-gray-700 hover:text-secondary transition-colors"
            >
              <Search size={20} />
            </button>
            <Link
              to="/cart"
              className="text-gray-700 hover:text-secondary transition-colors relative"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link
              to={isAuthenticated ? "/profile" : "/login"}
              className="text-gray-700 hover:text-secondary transition-colors"
            >
              <User size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link
              to="/cart"
              className="text-gray-700 hover:text-secondary transition-colors relative"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-50 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="container mx-auto p-6 pt-20">
          <button
            onClick={closeMenu}
            className="absolute top-5 right-5 text-gray-700 hover:text-secondary"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-medium transition-colors hover:text-secondary ${
                  location.pathname === link.path ? 'text-secondary' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-6">
              <Link
                to={isAuthenticated ? "/profile" : "/login"}
                className="flex items-center space-x-2 text-xl font-medium text-gray-700 hover:text-secondary"
              >
                <User size={20} />
                <span>{isAuthenticated ? "My Account" : "Sign In"}</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;