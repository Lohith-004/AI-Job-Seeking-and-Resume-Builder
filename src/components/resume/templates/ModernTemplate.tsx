import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { ResumeData } from '../../../types/resume';

interface ModernTemplateProps {
  resumeData: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ resumeData }) => {
  return (
    <div className="p-6 text-gray-800">
      <header className="border-b-4 border-indigo-600 pb-4 mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{resumeData.contact.fullName}</h1>
        <p className="text-xl text-indigo-600 mt-1">{resumeData.contact.title}</p>
        
        <div className="flex flex-wrap mt-4 text-sm gap-y-1">
          {resumeData.contact.email && (
            <div className="flex items-center mr-4">
              <Mail className="h-4 w-4 mr-1 text-indigo-600" />
              <span>{resumeData.contact.email}</span>
            </div>
          )}
          
          {resumeData.contact.phone && (
            <div className="flex items-center mr-4">
              <Phone className="h-4 w-4 mr-1 text-indigo-600" />
              <span>{resumeData.contact.phone}</span>
            </div>
          )}
          
          {resumeData.contact.location && (
            <div className="flex items-center mr-4">
              <MapPin className="h-4 w-4 mr-1 text-indigo-600" />
              <span>{resumeData.contact.location}</span>
            </div>
          )}
          
          {resumeData.contact.linkedin && (
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1 text-indigo-600" />
              <span>{resumeData.contact.linkedin}</span>
            </div>
          )}
        </div>
      </header>
      
      {resumeData.summary && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold text-indigo-600 mb-2 uppercase tracking-wide">Professional Summary</h2>
          <p className="text-sm">{resumeData.summary}</p>
        </section>
      )}
      
      {resumeData.experience.length > 0 && (
        <section className="mb-4">
          <h2 className="text-lg font-semibold text-indigo-600 mb-2 uppercase tracking-wide">Work Experience</h2>
          
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium">{exp.position}</h3>
                <span className="text-sm text-gray-600">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-sm text-indigo-600">{exp.company}</p>
              <p className="text-sm mt-1">{exp.description}</p>
            </div>
          ))}
        </section>
      )}
      
      {/* Education section would go here */}
      
      {/* Skills section would go here */}
    </div>
  );
};

export default ModernTemplate;