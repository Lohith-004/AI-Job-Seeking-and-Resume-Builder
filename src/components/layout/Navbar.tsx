import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, Search, User, Sparkles } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Resume Builder', path: '/resume', icon: <FileText className="w-5 h-5 mr-1" /> },
    { name: 'Job Search', path: '/jobs', icon: <Search className="w-5 h-5 mr-1" /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Sparkles className="h-8 w-8 text-indigo-600" />
              <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                CareerAI
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-indigo-600 text-white'
                    : scrolled
                    ? 'text-gray-900 hover:bg-gray-100'
                    : 'text-white hover:bg-indigo-700 hover:bg-opacity-30'
                }`}
              >
                <div className="flex items-center">
                  {link.icon}
                  {link.name}
                </div>
              </Link>
            ))}
            
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/dashboard')
                      ? 'bg-indigo-600 text-white'
                      : scrolled
                      ? 'text-gray-900 hover:bg-gray-100'
                      : 'text-white hover:bg-indigo-700 hover:bg-opacity-30'
                  }`}
                >
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-1" />
                    Dashboard
                  </div>
                </Link>
                <button
                  onClick={logout}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-indigo-700 hover:bg-opacity-30'
                  }`}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-indigo-700 hover:bg-opacity-30'
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-indigo-700 hover:bg-opacity-30'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.path)
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
              onClick={closeMenu}
            >
              <div className="flex items-center">
                {link.icon}
                {link.name}
              </div>
            </Link>
          ))}
          
          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/dashboard')
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-900 hover:bg-gray-100'
                }`}
                onClick={closeMenu}
              >
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-1" />
                  Dashboard
                </div>
              </Link>
              <button
                onClick={() => {
                  logout();
                  closeMenu();
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={closeMenu}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                onClick={closeMenu}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;