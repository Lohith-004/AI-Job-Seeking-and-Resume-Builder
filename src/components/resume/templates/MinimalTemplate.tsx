import React from 'react';
import { ResumeData } from '../../../types/resume';

interface MinimalTemplateProps {
  resumeData: ResumeData;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ resumeData }) => {
  return (
    <div className="p-6 text-gray-800 font-sans">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{resumeData.contact.fullName}</h1>
        <p className="text-gray-600">{resumeData.contact.title}</p>
        
        <div className="mt-2 text-sm text-gray-600">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {resumeData.contact.email && <span>{resumeData.contact.email}</span>}
            {resumeData.contact.phone && <span>{resumeData.contact.phone}</span>}
            {resumeData.contact.location && <span>{resumeData.contact.location}</span>}
            {resumeData.contact.linkedin && <span>{resumeData.contact.linkedin}</span>}
          </div>
        </div>
      </header>
      
      {resumeData.summary && (
        <section className="mb-5">
          <h2 className="text-base font-semibold uppercase tracking-wide mb-2">About</h2>
          <p className="text-sm">{resumeData.summary}</p>
        </section>
      )}
      
      {resumeData.experience.length > 0 && (
        <section className="mb-5">
          <h2 className="text-base font-semibold uppercase tracking-wide mb-2">Experience</h2>
          
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-3 pb-3 border-b border-gray-100 last:border-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h3 className="font-medium">{exp.position} · {exp.company}</h3>
                <span className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</span>
              </div>
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

export default MinimalTemplate;