import React, { useState } from 'react';
import { AlertCircle, FileText, Save, Download, Wand } from 'lucide-react';
import ResumeForm from '../components/resume/ResumeForm';
import ResumePreview from '../components/resume/ResumePreview';
import ResumeTemplateSelector from '../components/resume/ResumeTemplateSelector';
import AIContentSuggestions from '../components/resume/AIContentSuggestions';
import { ResumeData, Template } from '../types/resume';
import { initialResumeData } from '../data/resumeData';

const ResumeBuilder: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<Template>('modern');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>('');
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveResume = () => {
    // In a real app, this would save to a database
    localStorage.setItem('savedResume', JSON.stringify(resumeData));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleRequestAiSuggestions = (section: string) => {
    setCurrentSection(section);
    setShowSuggestions(true);
  };

  const handleApplySuggestion = (suggestion: string) => {
    // This would update the specific field with AI content
    setShowSuggestions(false);
  };

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">AI-Powered Resume Builder</h1>
          <p className="mt-2 text-gray-600">
            Create a professional resume with the help of our AI suggestions
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-indigo-600" />
                  Resume Information
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={handleSaveResume}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    <Save className="w-4 h-4 mr-1" />
                    Save
                  </button>
                  <button
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download PDF
                  </button>
                </div>
              </div>

              {isSaved && (
                <div className="mb-4 p-3 bg-green-50 text-green-800 rounded-md flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Resume saved successfully!
                </div>
              )}

              <ResumeForm 
                resumeData={resumeData} 
                setResumeData={setResumeData} 
                onRequestAiSuggestions={handleRequestAiSuggestions}
              />
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Choose Template</h2>
              <ResumeTemplateSelector 
                selectedTemplate={selectedTemplate}
                onSelectTemplate={setSelectedTemplate}
              />
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Preview</h2>
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <ResumePreview resumeData={resumeData} template={selectedTemplate} />
              </div>
            </div>
          </div>
        </div>

        {showSuggestions && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900 flex items-center">
                  <Wand className="w-5 h-5 mr-2 text-indigo-600" />
                  AI Suggestions for {currentSection}
                </h3>
                <button 
                  onClick={() => setShowSuggestions(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <AIContentSuggestions 
                section={currentSection} 
                resumeData={resumeData}
                onApplySuggestion={handleApplySuggestion} 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeBuilder;