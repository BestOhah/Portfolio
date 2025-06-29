import React from 'react';
import { ChevronDown, Database, TrendingUp, Users } from 'lucide-react';

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleViewWork = () => {
    window.open('https://www.linkedin.com/in/ohahbest/', '_blank', 'noopener,noreferrer');
  };

  const handleGetInTouch = () => {
    if (onNavigate) {
      onNavigate('contact');
    } else {
      // Fallback for direct navigation
      const element = document.getElementById('contact');
      if (element) {
        const headerHeight = 80;
        const targetPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-blue-600">Best Ohah</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              Data Analyst & Instructor
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              I solve complex business problems with data, build insightful dashboards, 
              and mentor the next generation of analysts. Transforming raw data into 
              actionable insights that drive strategic decisions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={handleViewWork}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </button>
            <button 
              onClick={handleGetInTouch}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            <div className="flex items-center space-x-2 text-gray-600">
              <Database className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-medium">Data Analysis</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="text-sm font-medium">Business Intelligence</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Database className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-medium">Data Engineering <span className="text-xs text-gray-400">(in view)</span></span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-sm font-medium">Data Mentoring</span>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;