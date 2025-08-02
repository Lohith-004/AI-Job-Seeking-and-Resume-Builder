import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Search, Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">CareerAI</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering your job search with AI-driven tools to help you land your dream job.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-indigo-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-300 hover:text-indigo-400 transition-colors">Resume Builder</Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-indigo-400 transition-colors">Job Search</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-indigo-400 transition-colors">Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-indigo-400 transition-colors">Sign Up</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FileText className="h-4 w-4 mr-2 text-indigo-400" />
                <span className="text-gray-300">AI Resume Builder</span>
              </li>
              <li className="flex items-center">
                <Search className="h-4 w-4 mr-2 text-indigo-400" />
                <span className="text-gray-300">Smart Job Search</span>
              </li>
              <li className="flex items-center">
                <Sparkles className="h-4 w-4 mr-2 text-indigo-400" />
                <span className="text-gray-300">Interview Preparation</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-indigo-400" />
                <a href="mailto:info@careerai.com" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  info@careerai.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-indigo-400" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-indigo-400 mt-1" />
                <span className="text-gray-300">
                  123 AI Drive, Suite 456<br />
                  San Francisco, CA 94105
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} CareerAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;