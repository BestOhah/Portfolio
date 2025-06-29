import React from 'react';
import { Database, BarChart3, Code, Brain, Users, MessageSquare, Target, TrendingUp, Settings, Globe, FileSpreadsheet, Activity, BookOpen, Layers, Presentation as PresentationChart, Cog, GraduationCap, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Data Analysis Tools',
      icon: FileSpreadsheet,
      color: 'blue',
      skills: [
        'Microsoft Excel (formulas, pivot tables, conditional formatting, charts)',
        'Google Sheets',
        'SQL (Google BigQuery, PostgreSQL, Microsoft SQL Server)',
        'Python (Pandas, NumPy, Matplotlib, Seaborn)'
      ]
    },
    {
      title: 'Data Visualization',
      icon: BarChart3,
      color: 'green',
      skills: [
        'Power BI (DAX, dashboards, reporting)',
        'Tableau',
        'Looker Studio (basic)'
      ]
    },
    {
      title: 'Analytics & Techniques',
      icon: Activity,
      color: 'purple',
      skills: [
        'A/B Testing',
        'Funnel Analysis',
        'Retention & Churn Analysis',
        'Cohort Analysis',
        'Customer Segmentation',
        'Customer Lifetime Value (CLV)',
        'Customer Acquisition Cost (CAC)',
        'Product Usage Analytics'
      ]
    },
    {
      title: 'Workflow & Automation',
      icon: Settings,
      color: 'orange',
      skills: [
        'Data Cleaning and Transformation',
        'ETL/ELT Processes (basic)',
        'Dashboard Templating',
        'Reporting Automation',
        'Data Validation',
        'Quality Checks'
      ]
    }
  ];

  const otherToolsSkills = [
    'Google Analytics 4 (GA4)',
    'HubSpot CRM (light use)',
    'Git',
    'API Data Extraction (basic)',
    'Notion',
    'Slack',
    'Trello',
    'Loom'
  ];

  const coreCompetencies = [
    { 
      name: 'Data Management & Engineering', 
      icon: Database, 
      color: 'blue',
      description: 'Building scalable data systems and infrastructure to support analytics'
    },
    { 
      name: 'Analytics & Insight Generation', 
      icon: Brain, 
      color: 'green',
      description: 'Extracting meaningful insights from complex datasets to drive decisions'
    },
    { 
      name: 'Visualization and Reporting', 
      icon: PresentationChart, 
      color: 'purple',
      description: 'Creating compelling dashboards and reports that communicate data stories'
    },
    { 
      name: 'Instruction and Collaboration', 
      icon: Users, 
      color: 'orange',
      description: 'Leading training programs and mentoring aspiring data professionals'
    },
  ];

  const education = [
    {
      degree: 'Data Engineering',
      institution: 'AltSchool Africa',
      period: 'June 2025 - July 2026',
      status: 'Present',
      type: 'Postgraduate Diploma'
    },
    {
      degree: 'Data Analytics',
      institution: 'Turing College',
      period: 'May 2024 - November 2024',
      status: 'Completed',
      type: 'Postgraduate Certificate'
    },
    {
      degree: 'Bachelor in Science, Geology',
      institution: 'University of Nigeria',
      period: 'Nigeria',
      status: 'Completed',
      type: 'Bachelor\'s Degree'
    }
  ];

  const certifications = [
    {
      name: 'Google Data Analytics Certificate',
      issuer: 'Coursera',
      year: '2022',
      status: 'Active'
    },
    {
      name: 'Meta Marketing Analytics',
      issuer: 'Coursera',
      year: '2022',
      status: 'Active'
    },
    {
      name: 'Excel Skills for Business',
      issuer: 'Coursera',
      year: '2022',
      status: 'Active'
    },
    {
      name: 'The Data Analyst Course',
      issuer: 'Udemy',
      year: '2023',
      status: 'Active'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getHeaderColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 text-white',
      green: 'bg-green-600 text-white',
      yellow: 'bg-yellow-600 text-white',
      orange: 'bg-orange-600 text-white',
      purple: 'bg-purple-600 text-white',
      red: 'bg-red-600 text-white',
      indigo: 'bg-indigo-600 text-white',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning analysis, visualization, and data engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.title} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                    <div className={`p-4 ${getHeaderColorClasses(category.color)}`}>
                      <div className="flex items-center space-x-3">
                        <Icon className="h-6 w-6" />
                        <h4 className="font-semibold text-lg">{category.title}</h4>
                      </div>
                    </div>
                    <div className="p-4">
                      <ul className="space-y-2">
                        {category.skills.map((skill, index) => (
                          <li key={index} className="text-sm text-gray-700 leading-relaxed">
                            • {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}

              {/* Other Tools - Now rectangular and spans full width */}
              <div className="md:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-4 bg-indigo-600 text-white">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-6 w-6" />
                    <h4 className="font-semibold text-lg">Other Tools</h4>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {otherToolsSkills.map((skill, index) => (
                      <div key={index} className="text-sm text-gray-700 leading-relaxed">
                        • {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Competencies</h3>
            <div className="space-y-4">
              {coreCompetencies.map((competency) => {
                const Icon = competency.icon;
                return (
                  <div 
                    key={competency.name} 
                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className={`p-3 rounded-lg border ${getColorClasses(competency.color)} mb-4 inline-block`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{competency.name}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {competency.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education and Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {index < education.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-16 bg-gray-200"></div>
                  )}
                  <div className="flex items-start space-x-4">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      edu.status === 'Present' ? 'bg-blue-600' : 'bg-gray-400'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                        {edu.status === 'Present' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                      <p className="text-xs text-gray-400 mt-1">{edu.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 text-green-600 mr-3" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {cert.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;