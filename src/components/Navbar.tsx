import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
  ];
  

  return (
    <nav className="navbar-fixed fixed top-0 left-0 right-0 z-50 navbar-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Avatar Section */}
          <div className="flex items-center gap-3">
            <img
              src="/avatar.jpg"
              alt="Avatar"
              className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-lg"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-bold text-lg playfair">Le Duy Manh</span>
              <span className="text-purple-100 text-xs">Full-Stack Developer</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white hover:text-purple-200 transition duration-300 font-medium inter text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section - Theme Toggle */}
          <div className="flex items-center gap-4">
           

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-white hover:text-purple-200 py-2 px-4 rounded transition duration-300 font-medium inter text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
