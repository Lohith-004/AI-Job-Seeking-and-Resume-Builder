import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Search, Sparkles } from 'lucide-react';
import Hero from '../components/sections/Hero';
import FeatureSection from '../components/sections/FeatureSection';
import TestimonialSection from '../components/sections/TestimonialSection';

const Home: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Resume Builder',
      description: 'Create impressive resumes with AI-generated content tailored to your experience and target jobs.',
      icon: <FileText className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: 'Smart Job Search',
      description: 'Find the perfect job with our AI matching technology that understands your skills and preferences.',
      icon: <Search className="w-10 h-10 text-indigo-600" />,
    },
    {
      title: 'Interview Preparation',
      description: 'Practice with our AI interview coach and get personalized feedback to improve your performance.',
      icon: <Sparkles className="w-10 h-10 text-indigo-600" />,
    },
  ];

  return (
    <div className="animate-fadeIn">
      <Hero />
      
      <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your AI-Powered Career Partner
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We're here to guide you through every step of your career journey with cutting-edge AI technology.
        </p>
      </div>
      
      <FeatureSection features={features} />
      
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your job search?</h2>
        <p className="text-white text-lg max-w-2xl mx-auto mb-8">
          Join thousands of job seekers who have successfully landed their dream jobs with our AI-powered platform.
        </p>
        <Link 
          to="/register" 
          className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-full text-lg font-medium hover:bg-opacity-90 transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
        >
          Get Started Free
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
      
      <TestimonialSection />
    </div>
  );
};

export default Home;