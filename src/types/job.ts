export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  posted: string;
  skills: string[];
  match?: number;
  isSaved: boolean;
}