import { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp India',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹25,00,000 - ₹35,00,000',
    description: 'We are looking for a skilled Full Stack Developer to join our growing team. You will be responsible for developing and maintaining our web applications, working with both front-end and back-end technologies.',
    requirements: [
      '5+ years of experience in full stack development',
      'Proficiency in JavaScript, TypeScript, React, and Node.js',
      'Experience with cloud platforms (AWS, GCP, or Azure)',
      'Strong problem-solving skills and attention to detail',
      'Excellent communication and teamwork abilities'
    ],
    responsibilities: [
      'Develop new features and maintain existing functionality',
      'Optimize applications for maximum speed and scalability',
      'Write clean, maintainable, and well-documented code',
      'Collaborate with cross-functional teams to define and implement new features',
      'Participate in code reviews and maintain code quality'
    ],
    posted: '2 days ago',
    skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    match: 92,
    isSaved: true
  },
  // Add more Indian jobs here...
];