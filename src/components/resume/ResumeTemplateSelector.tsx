import React from 'react';
import { Check } from 'lucide-react';
import { Template } from '../../types/resume';

interface ResumeTemplateSelectorProps {
  selectedTemplate: Template;
  onSelectTemplate: (template: Template) => void;
}

const ResumeTemplateSelector: React.FC<ResumeTemplateSelectorProps> = ({ 
  selectedTemplate, 
  onSelectTemplate 
}) => {
  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean design with a touch of color' },
    { id: 'classic', name: 'Classic', description: 'Traditional format trusted by employers' },
    { id: 'minimal', name: 'Minimal', description: 'Simple and elegant with focus on content' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {templates.map((template) => (
        <div
          key={template.id}
          onClick={() => onSelectTemplate(template.id as Template)}
          className={`cursor-pointer border ${
            selectedTemplate === template.id
              ? 'border-indigo-500 ring-2 ring-indigo-500 ring-opacity-50'
              : 'border-gray-200 hover:border-gray-300'
          } rounded-lg p-4 transition-all duration-200`}
        >
          <div className="relative">
            <div className="aspect-w-3 aspect-h-4 mb-3 bg-gray-100 rounded overflow-hidden">
              {/* Template thumbnail would go here */}
              <div className={`w-full h-full flex items-center justify-center bg-${template.id === 'modern' ? 'indigo' : template.id === 'classic' ? 'gray' : 'white'}-50`}>
                <span className="text-lg font-medium text-gray-700">{template.name}</span>
              </div>
            </div>
            
            {selectedTemplate === template.id && (
              <div className="absolute -top-2 -right-2 bg-indigo-600 rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
            )}
          </div>
          
          <h4 className="font-medium text-gray-900">{template.name}</h4>
          <p className="text-sm text-gray-500">{template.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeTemplateSelector;