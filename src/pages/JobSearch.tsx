import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Briefcase, Clock, Star, X } from 'lucide-react';
import JobCard from '../components/jobs/JobCard';
import JobFilters from '../components/jobs/JobFilters';
import JobDetails from '../components/jobs/JobDetails';
import { Job } from '../types/job';
import { mockJobs } from '../data/jobData';

const JobSearch: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setJobs(mockJobs);
      setFilteredJobs(mockJobs);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const results = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           job.company.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation = location === '' || 
                             job.location.toLowerCase().includes(location.toLowerCase());
      return matchesSearch && matchesLocation;
    });
    
    setFilteredJobs(results);
  }, [searchTerm, location, jobs]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Additional search logic if needed
  };

  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
  };

  const handleCloseJobDetails = () => {
    setSelectedJob(null);
  };

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Find Your Dream Job</h1>
          <p className="mt-2 text-gray-600">
            Discover opportunities matched to your skills and experience
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <form onSubmit={handleSearch}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="City, state, or remote"
                  className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <button
                type="submit"
                className="bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Search Jobs
              </button>
              
              <button
                type="button"
                className="inline-flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>
            </div>
            
            {showFilters && (
              <div className="mt-4 p-4 border border-gray-200 rounded-md bg-gray-50 animate-fadeIn">
                <JobFilters />
              </div>
            )}
          </form>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`lg:w-${selectedJob ? '1/2' : 'full'} space-y-4`}>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {filteredJobs.length} Jobs Found
              </h2>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                Updated just now
              </div>
            </div>
            
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              </div>
            ) : filteredJobs.length > 0 ? (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    isSelected={selectedJob?.id === job.id}
                    onClick={() => handleJobSelect(job)} 
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white shadow rounded-lg p-8 text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
                  <Search className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No jobs found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search criteria or location
                </p>
              </div>
            )}
          </div>
          
          {selectedJob && (
            <div className="lg:w-1/2 animate-slideIn">
              <div className="sticky top-24 bg-white shadow rounded-lg overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b">
                  <h3 className="text-lg font-medium text-gray-900">Job Details</h3>
                  <button 
                    onClick={handleCloseJobDetails}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <JobDetails job={selectedJob} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobSearch;