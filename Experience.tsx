import React from 'react';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Strategic Data & Insights Lead',
      company: 'Ruto AI',
      location: 'Nigeria',
      period: 'May 2025 - Present',
      achievements: [
        'Leading the development of RutoAI\'s data infrastructure by defining KPIs such as vendor lifetime value, escrow velocity, and dispute resolution rates to inform performance tracking',
        'Built foundational dashboards using SQL and Power BI to monitor vendor segmentation, conversion funnels, escrow lifecycle, and product usage metrics',
        'Analyzed patterns in vendor acquisition and retention, helping uncover high-value behaviors and friction points in onboarding and platform engagement',
        'Collaborated with the product and engineering teams to structure internal datasets for fraud detection, pricing calibration, and AI integration workflows',
        'Contributed to internal data strategy by designing core business process documentation, drafting initial metrics frameworks, and surfacing insights for product and fundraising decisions'
      ],
      type: 'current'
    },
    {
      title: 'Lead Instructor: Data Analytics',
      company: 'Correlation One',
      location: 'United States (Remote)',
      period: 'April 2025 - Present',
      achievements: [
        'Delivered live, hands-on training sessions to global cohorts, teaching key data analysis skills including Microsoft Excel, SQL, and data visualization techniques using Power BI and Tableau',
        'Designed and refined curriculum modules in collaboration with the instructional design team, ensuring alignment with industry standards and learner needs',
        'Provided mentorship and academic support to learners, answering questions in real time, offering personalized guidance, and supporting project-based learning',
        'Contributed to improving course delivery by analyzing learner engagement data and suggesting enhancements to the instructional approach and scheduling'
      ],
      type: 'current'
    },
    {
      title: 'Data Analyst',
      company: 'EHealth4Everyone',
      location: 'Nigeria',
      period: 'February 2025 - June 2025',
      achievements: [
        'Developed an interactive Tableau dashboard to visualize over 40,000+ health facility records across Nigeria, enabling stakeholders to make data-informed decisions around healthcare planning',
        'Validated large volumes of health-related data using Excel to ensure data integrity, consistency, and readiness for integration into centralized databases',
        'Conducted structured data entry from field surveys, supporting timely and accurate reporting for government and donor-funded health programs',
        'Collaborated with internal teams to maintain data accuracy, resolve discrepancies, and enhance data quality protocols used for health analytics'
      ],
      type: 'past'
    },
    {
      title: 'Head of Academy',
      company: 'Axia Hub',
      location: 'Nigeria',
      period: 'February 2024 - July 2024',
      achievements: [
        'Oversaw academy operations across recruitment, training delivery, and instructor support, enabling seamless execution of programs across software development, data analysis, graphics design and digital marketing',
        'Coordinated staff scheduling, learning resources, and internal systems to enhance training quality and participant satisfaction',
        'Introduced operational improvements that reduced training overhead by 15% while improving learner feedback scores',
        'Collaborated with leadership to align training strategies with industry demand, helping the academy achieve a 25% increase in enrollment within 6 months'
      ],
      type: 'past'
    },
    {
      title: 'Data Analyst & Instructor',
      company: 'Axia Hub',
      location: 'Nigeria',
      period: 'April 2022 - August 2024',
      achievements: [
        'Delivered a comprehensive analysis for a transport and logistics company, evaluating year-on-year business growth, user retention, and revenue trends — findings directly supported strategic expansion decisions',
        'Conducted A/B testing initiatives in collaboration with product and marketing teams, generating insights that improved campaign effectiveness and user engagement',
        'Facilitated in-person and virtual training for aspiring data analysts in SQL, Power BI, Excel, and Python, incorporating real-world projects and hands-on exercises',
        'Designed data-driven lesson plans, course modules, and assessments, contributing to a 20% increase in student course completion rates and job readiness'
      ],
      type: 'past'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A progressive career journey focused on delivering data-driven business impact across multiple industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className={`w-4 h-4 rounded-full border-4 ${
                    exp.type === 'current' 
                      ? 'bg-blue-600 border-blue-200' 
                      : 'bg-white border-gray-300'
                  }`}></div>
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                } md:w-1/2`}>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`${index % 2 === 0 ? 'md:order-2' : ''}`}>
                        {exp.type === 'current' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <div className="text-blue-600 font-semibold mb-2">{exp.company}</div>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-gray-600">
                          <Award className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-lg">
            <Briefcase className="h-5 w-5" />
            <span className="font-semibold">3+ Years of Data Analytics Excellence</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;