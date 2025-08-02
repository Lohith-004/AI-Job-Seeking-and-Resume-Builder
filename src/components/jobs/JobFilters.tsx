import React, { useState } from 'react';
import { Briefcase, CreditCard, Calendar, Sparkles } from 'lucide-react';

const JobFilters: React.FC = () => {
  const [experienceLevel, setExperienceLevel] = useState<string[]>([]);
  const [jobType, setJobType] = useState<string[]>([]);
  const [datePosted, setDatePosted] = useState<string>('');
  const [salary, setSalary] = useState<string>('');

  const handleExperienceChange = (level: string) => {
    if (experienceLevel.includes(level)) {
      setExperienceLevel(experienceLevel.filter(l => l !== level));
    } else {
      setExperienceLevel([...experienceLevel, level]);
    }
  };
  
  const handleJobTypeChange = (type: string) => {
    if (jobType.includes(type)) {
      setJobType(jobType.filter(t => t !== type));
    } else {
      setJobType([...jobType, type]);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div>
        <h3 className="text-sm font-medium text-gray-700 flex items-center mb-3">
          <Briefcase className="w-4 h-4 mr-1" />
          Experience Level
        </h3>
        <div className="space-y-2">
          {['Entry level', 'Mid level', 'Senior level', 'Director', 'Executive'].map((level) => (
            <div key={level} className="flex items-center">
              <input
                id={`experience-${level}`}
                name="experience-level"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={experienceLevel.includes(level)}
                onChange={() => handleExperienceChange(level)}
              />
              <label htmlFor={`experience-${level}`} className="ml-2 text-sm text-gray-700">
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 flex items-center mb-3">
          <Briefcase className="w-4 h-4 mr-1" />
          Job Type
        </h3>
        <div className="space-y-2">
          {['Full-time', 'Part-time', 'Contract', 'Temporary', 'Internship', 'Remote'].map((type) => (
            <div key={type} className="flex items-center">
              <input
                id={`job-type-${type}`}
                name="job-type"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={jobType.includes(type)}
                onChange={() => handleJobTypeChange(type)}
              />
              <label htmlFor={`job-type-${type}`} className="ml-2 text-sm text-gray-700">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 flex items-center mb-3">
          <Calendar className="w-4 h-4 mr-1" />
          Date Posted
        </h3>
        <div className="space-y-2">
          {['All time', 'Past 24 hours', 'Past week', 'Past month'].map((option) => (
            <div key={option} className="flex items-center">
              <input
                id={`date-${option}`}
                name="date-posted"
                type="radio"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                checked={datePosted === option}
                onChange={() => setDatePosted(option)}
              />
              <label htmlFor={`date-${option}`} className="ml-2 text-sm text-gray-700">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-700 flex items-center mb-3">
          <CreditCard className="w-4 h-4 mr-1" />
          Salary Range
        </h3>
        <div className="space-y-2">
          {['Any', '$30,000+', '$50,000+', '$80,000+', '$100,000+', '$150,000+'].map((range) => (
            <div key={range} className="flex items-center">
              <input
                id={`salary-${range}`}
                name="salary-range"
                type="radio"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                checked={salary === range}
                onChange={() => setSalary(range)}
              />
              <label htmlFor={`salary-${range}`} className="ml-2 text-sm text-gray-700">
                {range}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobFilters;