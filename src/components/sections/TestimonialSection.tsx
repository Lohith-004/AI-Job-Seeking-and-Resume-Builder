import React, { useEffect, useRef } from 'react';

const testimonials = [
  {
    content: "The AI resume builder helped me craft a resume that got me interviews at top tech companies. I landed my dream job within a month!",
    author: "Sarah Johnson",
    role: "Software Engineer"
  },
  {
    content: "I was struggling to find relevant jobs until I used this platform. The AI job recommendations were spot on and saved me hours of searching.",
    author: "Michael Chen",
    role: "Marketing Manager"
  },
  {
    content: "The interview practice feature prepared me perfectly for tough questions. I felt confident and ready for my interviews.",
    author: "Emily Rodriguez",
    role: "Data Analyst"
  }
];

const TestimonialSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const testimonialElements = document.querySelectorAll('.testimonial-card');
            testimonialElements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What our users are saying
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Join thousands of satisfied job seekers who have successfully advanced their careers using our platform.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card bg-white rounded-lg shadow-md p-8 opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="flex-1">
                <div className="relative">
                  <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-lg font-medium text-gray-800">
                    {testimonial.content}
                  </p>
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 text-white">
                        {testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;