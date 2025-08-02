import React from 'react';
import { MapPin, Briefcase, Clock, Globe, Building, CreditCard, Share2, Printer, ArrowRight } from 'lucide-react';
import { Job } from '../../types/job';

interface JobDetailsProps {
  job: Job;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  return (
    <div className="p-6 overflow-y-auto max-h-[calc(100vh-13rem)]">
      <div className="flex items-start mb-6">
        <div className="flex-shrink-0 h-16 w-16 rounded bg-indigo-100 flex items-center justify-center">
          <span className="text-xl font-bold text-indigo-600">{job.company.charAt(0)}</span>
        </div>
        
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-900">{job.title}</h2>
          <p className="text-gray-600">{job.company}</p>
          
          <div className="mt-2 flex flex-wrap gap-y-2">
            <div className="flex items-center text-sm text-gray-500 mr-4">
              <MapPin className="h-4 w-4 text-gray-400 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center text-sm text-gray-500 mr-4">
              <Briefcase className="h-4 w-4 text-gray-400 mr-1" />
              {job.type}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 text-gray-400 mr-1" />
              {job.posted}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Apply Now
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Share2 className="w-5 h-5" />
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Printer className="w-5 h-5" />
        </button>
      </div>
      
      <div className="border-t border-gray-200 py-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Overview</h3>
        <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
      </div>
      
      <div className="border-t border-gray-200 py-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Job Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start">
            <Building className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-500">Company</p>
              <p className="text-gray-900">{job.company}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <CreditCard className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-500">Salary</p>
              <p className="text-gray-900">{job.salary}</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Globe className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-500">Website</p>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">Visit company website</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-200 py-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Skills & Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      <div className="border-t border-gray-200 py-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">AI Match Analysis</h3>
        <div className="bg-indigo-50 rounded-lg p-4">
          <div className="flex items-center mb-2">
            <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
              {job.match || 85}%
            </div>
            <div className="ml-4">
              <p className="font-medium text-gray-900">Match Score</p>
              <p className="text-sm text-gray-600">Based on your resume and preferences</p>
            </div>
          </div>
          <p className="text-gray-700 mt-2">
            Your experience with {job.skills.slice(0, 3).join(", ")} makes you a strong candidate for this position.
          </p>
          <button className="mt-3 text-indigo-600 font-medium text-sm flex items-center hover:text-indigo-800">
            View detailed match analysis
            <ArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;