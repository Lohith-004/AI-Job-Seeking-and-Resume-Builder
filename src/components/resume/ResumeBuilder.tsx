import React, { useState } from 'react';
import { AlertCircle, FileText, Save, Download, Wand, Moon, Sun } from 'lucide-react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ResumeForm from '../components/resume/ResumeForm';
import ResumePreview from '../components/resume/ResumePreview';
import ResumeTemplateSelector from '../components/resume/ResumeTemplateSelector';
import AIContentSuggestions from '../components/resume/AIContentSuggestions';
import { ResumeData, Template } from '../types/resume';
import { initialResumeData } from '../data/resumeData';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  section: {
    marginBottom: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    color: '#2563eb',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 15,
    color: '#4b5563',
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#1f2937',
    borderBottom: '1 solid #e5e7eb',
    paddingBottom: 5,
  },
  text: {
    fontSize: 11,
    marginBottom: 5,
    color: '#374151',
  },
  link: {
    fontSize: 11,
    color: '#2563eb',
    textDecoration: 'underline',
  },
  contactRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  contactLabel: {
    fontSize: 11,
    color: '#6b7280',
    width: 60,
  },
  contactValue: {
    fontSize: 11,
    color: '#374151',
    flex: 1,
  },
  listItem: {
    fontSize: 11,
    marginBottom: 3,
    marginLeft: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  gridItem: {
    width: '50%',
    marginBottom: 5,
  },
});

const ResumePDF = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>{data.contact.fullName}</Text>
        <Text style={styles.subtitle}>{data.contact.title}</Text>
        
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Email:</Text>
          <Text style={styles.contactValue}>{data.contact.email}</Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Phone:</Text>
          <Text style={styles.contactValue}>{data.contact.phone}</Text>
        </View>
        <View style={styles.contactRow}>
          <Text style={styles.contactLabel}>Location:</Text>
          <Text style={styles.contactValue}>{data.contact.location}</Text>
        </View>
        {data.contact.linkedin && (
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>LinkedIn:</Text>
            <Text style={styles.link}>{data.contact.linkedin}</Text>
          </View>
        )}
        {data.contact.github && (
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>GitHub:</Text>
            <Text style={styles.link}>{data.contact.github}</Text>
          </View>
        )}
        {data.contact.portfolio && (
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Portfolio:</Text>
            <Text style={styles.link}>{data.contact.portfolio}</Text>
          </View>
        )}
      </View>

      {/* Summary Section */}
      {data.summary && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.text}>{data.summary}</Text>
        </View>
      )}

      {/* Education Section */}
      {data.education.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={styles.text}>
                {edu.degree} in {edu.field}
              </Text>
              <Text style={styles.text}>{edu.institution}</Text>
              <Text style={styles.text}>
                {edu.startDate} - {edu.endDate} | GPA: {edu.gpa}
              </Text>
              {edu.achievements.length > 0 && (
                <View style={{ marginLeft: 10 }}>
                  {edu.achievements.map((achievement, i) => (
                    <Text key={i} style={styles.listItem}>• {achievement}</Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Experience Section */}
      {data.experience.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {data.experience.map((exp, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={styles.text}>
                {exp.position} at {exp.company}
              </Text>
              <Text style={styles.text}>
                {exp.startDate} - {exp.endDate}
              </Text>
              <Text style={styles.text}>{exp.description}</Text>
              {exp.achievements.length > 0 && (
                <View style={{ marginLeft: 10 }}>
                  {exp.achievements.map((achievement, i) => (
                    <Text key={i} style={styles.listItem}>• {achievement}</Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Projects Section */}
      {data.projects.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>
          {data.projects.map((project, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={styles.text}>{project.title}</Text>
              {project.link && <Text style={styles.link}>{project.link}</Text>}
              <Text style={styles.text}>{project.description}</Text>
              {project.technologies.length > 0 && (
                <Text style={styles.text}>
                  Technologies: {project.technologies.join(', ')}
                </Text>
              )}
            </View>
          ))}
        </View>
      )}

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.grid}>
          {data.skills.technical.length > 0 && (
            <View style={styles.gridItem}>
              <Text style={styles.text}>Technical Skills:</Text>
              {data.skills.technical.map((skill, index) => (
                <Text key={index} style={styles.listItem}>• {skill}</Text>
              ))}
            </View>
          )}
          {data.skills.soft.length > 0 && (
            <View style={styles.gridItem}>
              <Text style={styles.text}>Soft Skills:</Text>
              {data.skills.soft.map((skill, index) => (
                <Text key={index} style={styles.listItem}>• {skill}</Text>
              ))}
            </View>
          )}
          {data.skills.languages.length > 0 && (
            <View style={styles.gridItem}>
              <Text style={styles.text}>Languages:</Text>
              {data.skills.languages.map((lang, index) => (
                <Text key={index} style={styles.listItem}>• {lang}</Text>
              ))}
            </View>
          )}
          {data.skills.certifications.length > 0 && (
            <View style={styles.gridItem}>
              <Text style={styles.text}>Certifications:</Text>
              {data.skills.certifications.map((cert, index) => (
                <Text key={index} style={styles.listItem}>• {cert}</Text>
              ))}
            </View>
          )}
        </View>
      </View>
    </Page>
  </Document>
);

const ResumeBuilder: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<Template>('modern');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentSection, setCurrentSection] = useState<string>('');
  const [isSaved, setIsSaved] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSaveResume = () => {
    localStorage.setItem('savedResume', JSON.stringify(resumeData));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleRequestAiSuggestions = async (section: string) => {
    setCurrentSection(section);
    setShowSuggestions(true);
    
    try {
      // Make API call to AI service here
      const response = await fetch('/api/ai-suggestions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          section,
          currentContent: resumeData,
        }),
      });
      
      const suggestions = await response.json();
      // Handle suggestions...
    } catch (error) {
      console.error('Failed to get AI suggestions:', error);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`pt-16 min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              AI-Powered Resume Builder
            </h1>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Create a professional resume with the help of our AI suggestions
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} hover:bg-opacity-80`}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Rest of your existing JSX */}
        
        <div className="mt-4">
          <PDFDownloadLink
            document={<ResumePDF data={resumeData} />}
            fileName="resume.pdf"
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
              isDarkMode ? 'text-gray-900 bg-white hover:bg-gray-100' : 'text-white bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Generating PDF...' : 'Download PDF'
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;