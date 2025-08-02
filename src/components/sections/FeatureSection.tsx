import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureSectionProps {
  features: Feature[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ features }) => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our AI-powered platform helps you create professional resumes and find the perfect job match.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-md">
                    {feature.icon}
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-4 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;