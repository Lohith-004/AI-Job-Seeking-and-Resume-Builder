import React from 'react';
import { ResumeData, Template } from '../../types/resume';
import ModernTemplate from './templates/ModernTemplate';
import ClassicTemplate from './templates/ClassicTemplate';
import MinimalTemplate from './templates/MinimalTemplate';

interface ResumePreviewProps {
  resumeData: ResumeData;
  template: Template;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData, template }) => {
  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return <ModernTemplate resumeData={resumeData} />;
      case 'classic':
        return <ClassicTemplate resumeData={resumeData} />;
      case 'minimal':
        return <MinimalTemplate resumeData={resumeData} />;
      default:
        return <ModernTemplate resumeData={resumeData} />;
    }
  };

  return (
    <div className="bg-white p-4 border border-gray-200 shadow-sm">
      <div className="w-full aspect-[1/1.4] overflow-y-auto bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;