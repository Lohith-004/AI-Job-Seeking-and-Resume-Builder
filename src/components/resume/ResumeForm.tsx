import React from 'react';
import { Wand } from 'lucide-react';
import { ResumeData } from '../../types/resume';

interface ResumeFormProps {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  onRequestAiSuggestions: (section: string) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ 
  resumeData, 
  setResumeData,
  onRequestAiSuggestions
}) => {
  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      contact: {
        ...resumeData.contact,
        [name]: value
      }
    });
  };

  const handleSummaryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResumeData({
      ...resumeData,
      summary: e.target.value
    });
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const updatedExperiences = [...resumeData.experience];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value
    };
    
    setResumeData({
      ...resumeData,
      experience: updatedExperiences
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        { company: '', position: '', startDate: '', endDate: '', description: '' }
      ]
    });
  };

  const removeExperience = (index: number) => {
    const updatedExperiences = [...resumeData.experience];
    updatedExperiences.splice(index, 1);
    
    setResumeData({
      ...resumeData,
      experience: updatedExperiences
    });
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value
    };
    
    setResumeData({
      ...resumeData,
      education: updatedEducation
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { institution: '', degree: '', field: '', gpa: '', startDate: '', endDate: '', achievements: [] }
      ]
    });
  };

  const removeEducation = (index: number) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation.splice(index, 1);
    
    setResumeData({
      ...resumeData,
      education: updatedEducation
    });
  };

  const handleProjectChange = (index: number, field: string, value: string) => {
    const updatedProjects = [...resumeData.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value
    };
    
    setResumeData({
      ...resumeData,
      projects: updatedProjects
    });
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        { title: '', link: '', description: '', technologies: [] }
      ]
    });
  };

  const removeProject = (index: number) => {
    const updatedProjects = [...resumeData.projects];
    updatedProjects.splice(index, 1);
    
    setResumeData({
      ...resumeData,
      projects: updatedProjects
    });
  };

  const handleSkillsChange = (category: string, values: string[]) => {
    setResumeData({
      ...resumeData,
      skills: {
        ...resumeData.skills,
        [category]: values
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={resumeData.contact.fullName}
              onChange={handleContactChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Professional Title
            </label>
            <div className="mt-1 flex">
              <input
                type="text"
                id="title"
                name="title"
                value={resumeData.contact.title}
                onChange={handleContactChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={() => onRequestAiSuggestions('title')}
                className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Wand className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={resumeData.contact.email}
              onChange={handleContactChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={resumeData.contact.phone}
              onChange={handleContactChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={resumeData.contact.location}
              onChange={handleContactChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
              LinkedIn
            </label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={resumeData.contact.linkedin}
              onChange={handleContactChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="github" className="block text-sm font-medium text-gray-700">
              GitHub
            </label>
            <input
              type="text"
              id="github"
              name="github"
              value={resumeData.contact.github}
              onChange={handleContactChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">
              Portfolio Website
            </label>
            <input
              type="text"
              id="portfolio"
              name="portfolio"
              value={resumeData.contact.portfolio}
              onChange={handleContactChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium text-gray-900">Professional Summary</h3>
          <button
            type="button"
            onClick={() => onRequestAiSuggestions('summary')}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Wand className="h-4 w-4 mr-1" />
            AI Suggest
          </button>
        </div>
        <textarea
          id="summary"
          rows={4}
          value={resumeData.summary}
          onChange={handleSummaryChange}
          className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Write a compelling summary of your professional background, skills, and career goals..."
        />
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium text-gray-900">Work Experience</h3>
          <button
            type="button"
            onClick={addExperience}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Experience
          </button>
        </div>
        
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-6 p-4 border border-gray-200 rounded-md">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-medium text-gray-900">Experience {index + 1}</h4>
              <button
                type="button"
                onClick={() => removeExperience(index)}
                className="text-red-600 hover:text-red-800 text-sm"
              >
                Remove
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Position
                </label>
                <div className="mt-1 flex">
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => onRequestAiSuggestions(`experience-${index}-position`)}
                    className="ml-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Wand className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Start Date
                </label>
                <input
                  type="text"
                  value={exp.startDate}
                  onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., Jan 2022"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  End Date
                </label>
                <input
                  type="text"
                  value={exp.endDate}
                  onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g., Present"
                />
              </div>
            </div>
            
            <div className="mt-3">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <button
                  type="button"
                  onClick={() => onRequestAiSuggestions(`experience-${index}-description`)}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Wand className="h-4 w-4 mr-1" />
                  Enhance
                </button>
              </div>
              <textarea
                rows={3}
                value={exp.description}
                onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Describe your responsibilities and achievements..."
              />
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium text-gray-900">Education</h3>
          <button
            type="button"
            onClick={addEducation}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Education
          </button>
        </div>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Institution</label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Field of Study</label>
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) => handleEducationChange(index, 'field', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">GPA</label>
                <input
                  type="text"
                  value={edu.gpa}
                  onChange={(e) => handleEducationChange(index, 'gpa', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  value={edu.startDate}
                  onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  value={edu.endDate}
                  onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Achievements</label>
              <textarea
                value={edu.achievements.join('\n')}
                onChange={(e) => handleEducationChange(index, 'achievements', e.target.value.split('\n'))}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                rows={3}
                placeholder="Enter achievements (one per line)"
              />
            </div>
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="mt-2 text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium text-gray-900">Projects</h3>
          <button
            type="button"
            onClick={addProject}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Project
          </button>
        </div>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="mb-4 p-4 border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Project Title</label>
                <input
                  type="text"
                  value={project.title}
                  onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Project Link</label>
                <input
                  type="text"
                  value={project.link}
                  onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={project.description}
                  onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows={3}
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Technologies Used</label>
                <input
                  type="text"
                  value={project.technologies.join(', ')}
                  onChange={(e) => handleProjectChange(index, 'technologies', e.target.value.split(', '))}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="e.g. React, Node.js, MongoDB"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => removeProject(index)}
              className="mt-2 text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-3">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Technical Skills</label>
            <textarea
              value={resumeData.skills.technical.join('\n')}
              onChange={(e) => handleSkillsChange('technical', e.target.value.split('\n'))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={4}
              placeholder="Enter technical skills (one per line)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Soft Skills</label>
            <textarea
              value={resumeData.skills.soft.join('\n')}
              onChange={(e) => handleSkillsChange('soft', e.target.value.split('\n'))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={4}
              placeholder="Enter soft skills (one per line)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Languages</label>
            <textarea
              value={resumeData.skills.languages.join('\n')}
              onChange={(e) => handleSkillsChange('languages', e.target.value.split('\n'))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={4}
              placeholder="Enter languages (one per line)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Certifications</label>
            <textarea
              value={resumeData.skills.certifications.join('\n')}
              onChange={(e) => handleSkillsChange('certifications', e.target.value.split('\n'))}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows={4}
              placeholder="Enter certifications (one per line)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;