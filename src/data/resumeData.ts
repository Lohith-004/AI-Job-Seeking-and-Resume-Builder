import { ResumeData } from '../types/resume';

export const initialResumeData: ResumeData = {
  contact: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    portfolio: ''
  },
  summary: '',
  education: [
    {
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
      achievements: []
    }
  ],
  experience: [
    {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      achievements: []
    }
  ],
  projects: [
    {
      title: '',
      description: '',
      technologies: [],
      link: '',
      startDate: '',
      endDate: ''
    }
  ],
  skills: {
    technical: [],
    soft: [],
    languages: [],
    certifications: []
  },
  achievements: [],
  interests: []
};

export const defaultJobLocations = [
  'Bangalore, Karnataka',
  'Mumbai, Maharashtra',
  'Delhi NCR',
  'Hyderabad, Telangana',
  'Chennai, Tamil Nadu',
  'Pune, Maharashtra',
  'Kolkata, West Bengal',
  'Ahmedabad, Gujarat',
  'Noida, Uttar Pradesh',
  'Gurgaon, Haryana'
];

export const defaultTechCompanies = [
  'Infosys',
  'TCS',
  'Wipro',
  'HCL Technologies',
  'Tech Mahindra',
  'Amazon India',
  'Microsoft India',
  'Google India',
  'Flipkart',
  'Accenture India',
  'IBM India',
  'Oracle India',
  'Adobe India',
  'Cognizant',
  'Capgemini India'
];

export const defaultStudentTitles = [
  'Computer Science Student',
  'Software Engineering Intern',
  'Web Development Intern',
  'Data Science Student',
  'AI/ML Student',
  'Full Stack Developer Intern',
  'Frontend Developer Intern',
  'Backend Developer Intern',
  'Mobile App Developer Intern',
  'DevOps Intern'
];