import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }
    
    return () => {
      if (headlineRef.current) {
        observer.unobserve(headlineRef.current);
      }
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-8 animate-pulse transition-all duration-300 hover:text-white hover:bg-none"
            style={{
              textShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)',
              letterSpacing: '0.05em',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Your AI-Powered Career Partner
          </h2>
          <h1 
            ref={headlineRef}
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl opacity-0 transition-all duration-1000 translate-y-4 ease-out"
          >
            <span className="block">Elevate Your Career with</span>
            <span className="block text-indigo-300">AI-Powered Job Tools</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-100">
            Create standout resumes and find your dream job with our advanced AI technology that understands your unique skills and career goals.
          </p>
          
          <div className="mt-10 max-w-md mx-auto flex flex-col sm:flex-row gap-4 sm:max-w-none sm:justify-center">
            <Link
              to="/resume"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-all hover:shadow-lg transform hover:scale-105"
            >
              Build Your Resume
            </Link>
            <Link
              to="/jobs"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all hover:shadow-lg transform hover:scale-105"
            >
              Find Jobs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;