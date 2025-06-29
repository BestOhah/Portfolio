import React from 'react';
import { BookOpen, Users, Award, Trophy, GraduationCap, Code, Calculator, BarChart3 } from 'lucide-react';

const EducationImpact: React.FC = () => {
  return (
    <section id="education-impact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">📊 Analytics for Impact</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Empowering communities through data education, mentoring aspiring analysts, and creating meaningful learning experiences that drive real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Data Analytics Instructor */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg mr-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">📘 Data Analytics Instructor</h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Taught foundational and advanced data analytics to aspiring analysts and non-tech professionals across various cohorts.
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 mb-3">Companies I've worked with:</h4>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Correlation One</p>
                    <p className="text-sm text-gray-600">Lead Instructor - Global data analytics training programs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Axia Hub</p>
                    <p className="text-sm text-gray-600">Data Analytics Instructor & Head of Academy</p>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold text-gray-900 mb-3 mt-6">Courses delivered include:</h4>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Excel for Data Analysis</p>
                    <p className="text-sm text-gray-600">Pivot tables, conditional formatting, lookup functions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Code className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">SQL using MySQL Workbench</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <BarChart3 className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Power BI</p>
                    <p className="text-sm text-gray-600">Data modeling and visualization</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Code className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Python for Data Analysis</p>
                    <p className="text-sm text-gray-600">Using NumPy, Pandas, Matplotlib, Seaborn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Python & Math Competition */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-lg mr-4">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">🧠 Python & Math Program</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Axia Tech Challenge</h4>
              <p className="text-gray-600 mb-4">An inter secondary school competition for senior secondary schools</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Calculator className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  Spearheaded the development of the competition curriculum, designing challenging yet engaging math and Python programming questions to stimulate students' problem-solving skills.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  Coordinated with fellow educators to create a well-rounded educational experience, ensuring the competition aligns with current educational standards.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  Member of the planning and arrangement team, overseeing logistics, venue setup, and participant coordination to guarantee a smooth and successful event.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <GraduationCap className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600 leading-relaxed">
                  Mentored participating students, providing guidance and encouragement to enhance their understanding of mathematical concepts and programming logic.
                </p>
              </div>
            </div>

            {/* Documentary Link */}
            <div className="mt-4">
              <a 
                href="https://youtu.be/HXdld9Uajl4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                📹 Watch Competition Documentary →
              </a>
            </div>
          </div>

          {/* University Workshop */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 text-green-600 rounded-lg mr-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">University Partnership</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                The Data Team of{' '}
                <a 
                  href="https://www.linkedin.com/company/axia-hub/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Axia Technology and Innovation Hub (Axia Hub)
                </a>
                {' '}was invited by the Faculty of Pharmaceutical Sciences, University of Jos for their professional preparedness and resilience program.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Workshop Focus:</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We introduced PharmD students to essential decision-making tools, specifically Microsoft Excel and Google Sheets. 
                  Focusing on building proficiency in using these spreadsheet software for data analysis, calculation, and decision support in pharmacy practice.
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Key Topics Covered:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>Data analysis fundamentals</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Excel formulas and functions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>Decision support systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    <span>Pharmacy practice applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Student Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Student Success Story</h4>
                <p className="text-sm text-gray-600 mb-4">Data Analytics Training</p>
                <a 
                  href="https://youtu.be/QkijEXcUnZE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  🎥 Watch Testimonial →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Student Journey</h4>
                <p className="text-sm text-gray-600 mb-4">From Beginner to Analyst</p>
                <a 
                  href="https://youtu.be/XrC1-pckNVk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  🎥 Watch Testimonial →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 mb-2">Career Transformation</h4>
                <p className="text-sm text-gray-600 mb-4">Analytics Success</p>
                <a 
                  href="https://youtu.be/G9d29HnKlEQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  🎥 Watch Testimonial →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationImpact;