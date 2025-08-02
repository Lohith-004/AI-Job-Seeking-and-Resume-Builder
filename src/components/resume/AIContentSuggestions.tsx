import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { ResumeData } from '../../types/resume';

interface AIContentSuggestionsProps {
  section: string;
  resumeData: ResumeData;
  onApplySuggestion: (suggestion: string) => void;
}

const AIContentSuggestions: React.FC<AIContentSuggestionsProps> = ({ 
  section, 
  resumeData,
  onApplySuggestion
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get AI suggestions
    setLoading(true);
    setTimeout(() => {
      let generatedSuggestions: string[] = [];
      
      switch (section) {
        case 'title':
          generatedSuggestions = [
            'Senior Full Stack Developer',
            'Full Stack Engineering Leader',
            'Lead Software Engineer'
          ];
          break;
        case 'summary':
          generatedSuggestions = [
            'Results-driven Full Stack Developer with 5+ years of experience building responsive web applications. Proficient in JavaScript, React, Node.js, and SQL databases. Passionate about clean code and user-centric design.',
            'Innovative Full Stack Engineer with a proven track record of developing scalable applications. Expertise in modern JavaScript frameworks, RESTful APIs, and cloud services. Committed to delivering high-quality, maintainable code.',
            'Versatile Software Engineer with extensive experience in both front-end and back-end development. Strong problem-solving skills and ability to adapt quickly to new technologies. Dedicated to creating efficient, robust applications.'
          ];
          break;
        default:
          if (section.includes('experience')) {
            generatedSuggestions = [
              'Developed and maintained multiple RESTful APIs using Node.js and Express, improving system performance by 40%. Implemented responsive UI components with React, resulting in a 25% increase in user engagement.',
              'Led a team of 5 developers to deliver a complete redesign of the company\'s flagship product. Architected microservices infrastructure that reduced deployment time by 60% and improved system reliability.',
              'Collaborated with product managers and designers to implement new features based on user feedback. Optimized database queries resulting in a 30% reduction in load times.'
            ];
          }
      }
      
      setSuggestions(generatedSuggestions);
      setLoading(false);
    }, 2000);
  }, [section]);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center justify-center py-8">
          <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
          <p className="mt-4 text-gray-600">Generating AI suggestions...</p>
        </div>
      ) : (
        <div className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-md p-4 hover:border-indigo-300 transition-colors"
            >
              <p className="text-gray-800 mb-3">{suggestion}</p>
              <div className="flex justify-end">
                <button
                  onClick={() => onApplySuggestion(suggestion)}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AIContentSuggestions;