export type Template = 'modern' | 'classic' | 'minimal';

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa: string;
  achievements: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  startDate: string;
  endDate: string;
}

export interface Contact {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Skills {
  technical: string[];
  soft: string[];
  languages: string[];
  certifications: string[];
}

export interface ResumeData {
  contact: Contact;
  summary: string;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  achievements: string[];
  interests: string[];
}