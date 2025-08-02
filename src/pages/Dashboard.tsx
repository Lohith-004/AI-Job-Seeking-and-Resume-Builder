import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Briefcase, FileText, User, Settings, LogOut, ChevronRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  
  if (!user) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">Please log in to view your dashboard</h2>
          <p className="mt-2 text-gray-600">You need to be logged in to access this page.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-indigo-600 rounded-lg shadow-lg p-6 text-white mb-8">
          <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
          <p className="mt-1">Track your job applications and resume progress here.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-indigo-600">{user.name.charAt(0)}</span>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-medium text-gray-900">{user.name}</h2>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>
              </div>
              
              <nav className="px-3 py-4">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                    activeTab === 'overview' 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <User className="mr-3 h-5 w-5" />
                  <span>Overview</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('applications')}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                    activeTab === 'applications' 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Briefcase className="mr-3 h-5 w-5" />
                  <span>Applications</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('resumes')}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                    activeTab === 'resumes' 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <FileText className="mr-3 h-5 w-5" />
                  <span>My Resumes</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md w-full ${
                    activeTab === 'settings' 
                      ? 'bg-indigo-50 text-indigo-600' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="mr-3 h-5 w-5" />
                  <span>Settings</span>
                </button>
                
                <button
                  onClick={logout}
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md w-full text-red-600 hover:text-red-800 hover:bg-red-50"
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  <span>Logout</span>
                </button>
              </nav>
            </div>
          </div>
          
          <div className="lg:w-3/4">
            {activeTab === 'overview' && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Dashboard Overview</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                    <h3 className="font-medium text-indigo-800 mb-1">Active Applications</h3>
                    <p className="text-3xl font-bold text-indigo-600">5</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <h3 className="font-medium text-green-800 mb-1">Interviews</h3>
                    <p className="text-3xl font-bold text-green-600">2</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                    <h3 className="font-medium text-purple-800 mb-1">Saved Jobs</h3>
                    <p className="text-3xl font-bold text-purple-600">12</p>
                  </div>
                </div>
                
                <h3 className="font-medium text-gray-900 mb-3">Recent Activity</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded bg-indigo-100 flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Applied to Frontend Developer at TechCorp</p>
                        <p className="text-xs text-gray-500">2 days ago</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded bg-green-100 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Updated your Developer Resume</p>
                        <p className="text-xs text-gray-500">3 days ago</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded bg-purple-100 flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">Saved UX Designer job at DesignHub</p>
                        <p className="text-xs text-gray-500">4 days ago</p>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'applications' && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Job Applications</h2>
                {/* Job applications content would go here */}
              </div>
            )}
            
            {activeTab === 'resumes' && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">My Resumes</h2>
                {/* Resumes content would go here */}
              </div>
            )}
            
            {activeTab === 'settings' && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Account Settings</h2>
                {/* Settings content would go here */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;