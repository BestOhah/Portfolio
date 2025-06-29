import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bridging data analysis with infrastructure to build systems that power meaningful insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                Data analyst with over three years of experience helping organizations make better decisions through data. My background spans health tech, logistics, education, and blockchain, where I've worked on everything from retention analysis to funnel optimization, and built dashboards that have influenced both product and business strategy.
              </p>
              
              <p>
                I've delivered insights that shaped logistics expansion plans, guided public health stakeholders through data-backed planning, and helped define core metrics at early-stage startups. I work comfortably with tools like SQL, Power BI, Python, Excel, and Tableau, and I approach every project with a strong focus on clarity, context, and impact.
              </p>
              
              <p>
                Beyond analysis, I've led data training programs for hundreds of learners. As a Data Analytics Instructor and Academy Lead, I've built curriculums, facilitated live classes, and mentored aspiring analysts from different backgrounds. Teaching has shaped how I communicate with both technical and non-technical stakeholders, I've learned to simplify complexity without watering things down.
              </p>
              
              <p>
                Right now, I'm continuing to grow, especially in the direction of scalable data systems. I'm currently pursuing a postgraduate diploma in Data Engineering as I work toward bridging analysis with infrastructure. My goal is to not just surface insights, but to help build the systems that power them.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="/WhatsApp Image 2024-05-21 at 12.23.02_ac6e4f01.jpg" 
                alt="Best Ohah - Data Analyst & Instructor"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Currently Pursuing - Centered across full width */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Currently Pursuing</h3>
            <h4 className="text-xl font-semibold mb-4">
              Post-graduate Diploma in Data Engineering - AltSchool Africa
            </h4>
            <div className="text-lg text-blue-100">
              🔧 Building scalable data systems • 🚀 Bridging analysis with infrastructure
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;