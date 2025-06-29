import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
      indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
      teal: 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handleViewProject = (projectId: string) => {
    navigate(`/project/${projectId}`);
  };

  const handleExternalLink = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Show only first 6 projects
  const displayedProjects = projectsData.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of impactful data analysis projects that drove real business results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div 
                key={project.id}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => handleViewProject(project.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg transition-all duration-300 ${getColorClasses(project.color)}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewProject(project.id);
                      }}
                      className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      title="View Details"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={(e) => handleExternalLink(e, project.links.case)}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      title="View Case Study"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={(e) => handleExternalLink(e, project.links.github)}
                      className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      title="View Code"
                    >
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.impact}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                  <span>View Project Details</span>
                  <Eye className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;