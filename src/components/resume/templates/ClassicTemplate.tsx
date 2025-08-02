import React from 'react';
import { ResumeData } from '../../../types/resume';

interface ClassicTemplateProps {
  resumeData: ResumeData;
}

const ClassicTemplate: React.FC<ClassicTemplateProps> = ({ resumeData }) => {
  return (
    <div className="p-6 text-gray-800 font-serif">
      <header className="text-center mb-6">
        <h1 className="text-2xl font-bold uppercase tracking-wider text-gray-900 mb-1">
          {resumeData.contact.fullName}
        </h1>
        
        <p className="text-lg">{resumeData.contact.title}</p>
        
        <div className="mt-2 text-sm">
          {resumeData.contact.email && (
            <span className="mr-3">{resumeData.contact.email}</span>
          )}
          
          {resumeData.contact.phone && (
            <span className="mr-3">{resumeData.contact.phone}</span>
          )}
          
          {resumeData.contact.location && (
            <span className="mr-3">{resumeData.contact.location}</span>
          )}
          
          {resumeData.contact.linkedin && (
            <span>{resumeData.contact.linkedin}</span>
          )}
        </div>
      </header>
      
      {resumeData.summary && (
        <section className="mb-5">
          <h2 className="text-lg font-bold border-b border-gray-300 mb-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-sm">{resumeData.summary}</p>
        </section>
      )}
      
      {resumeData.experience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-lg font-bold border-b border-gray-300 mb-2">WORK EXPERIENCE</h2>
          
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-3">
              <div className="flex justify-between">
                <h3 className="font-bold">{exp.position}</h3>
                <span className="text-sm">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="italic">{exp.company}</p>
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

export default ClassicTemplate;