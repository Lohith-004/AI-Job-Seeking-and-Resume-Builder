import React from 'react';
import { MapPin, Briefcase, Clock, Star, Star as StarFilled } from 'lucide-react';
import { Job } from '../../types/job';

interface JobCardProps {
  job: Job;
  isSelected: boolean;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white shadow rounded-lg p-6 cursor-pointer transition-all duration-200 transform hover:-translate-y-1 hover:shadow-md ${
        isSelected ? 'ring-2 ring-indigo-500' : ''
      }`}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 h-16 w-16 rounded bg-indigo-100 flex items-center justify-center">
          <span className="text-xl font-bold text-indigo-600">{job.company.charAt(0)}</span>
        </div>
        
        <div className="ml-4 flex-1">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
            <button className="text-gray-400 hover:text-yellow-500">
              {job.isSaved ? (
                <StarFilled className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              ) : (
                <Star className="h-5 w-5" />
              )}
            </button>
          </div>
          
          <p className="text-gray-600">{job.company}</p>
          
          <div className="mt-2 flex flex-wrap gap-y-2">
            <div className="flex items-center text-sm text-gray-500 mr-4">
              <MapPin className="flex-shrink-0 h-4 w-4 text-gray-400 mr-1" />
              {job.location}
            </div>
            <div className="flex items-center text-sm text-gray-500 mr-4">
              <Briefcase className="flex-shrink-0 h-4 w-4 text-gray-400 mr-1" />
              {job.type}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="flex-shrink-0 h-4 w-4 text-gray-400 mr-1" />
              {job.posted}
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {job.skills.slice(0, 3).map((skill, index) => (
              <span 
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
              >
                {skill}
              </span>
            ))}
            {job.skills.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                +{job.skills.length - 3} more
              </span>
            )}
          </div>
          
          <div className="mt-4 text-sm">
            <span className="font-medium text-indigo-600">{job.salary}</span>
            <span className="mx-2">•</span>
            <span className="font-medium text-green-600">
              {job.match ? `${job.match}% Match` : 'New'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;