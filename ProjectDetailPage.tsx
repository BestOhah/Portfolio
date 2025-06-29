import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Target, Users, Code, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === projectId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToProjects = () => {
    navigate('/');
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        const headerHeight = 80;
        const targetPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <button 
            onClick={scrollToProjects}
            className="text-blue-600 hover:text-blue-700"
          >
            Return to Projects
          </button>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  const getBreakdownColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-l-blue-500 text-blue-900',
      green: 'bg-green-50 border-l-green-500 text-green-900',
      purple: 'bg-purple-50 border-l-purple-500 text-purple-900',
      orange: 'bg-orange-50 border-l-orange-500 text-orange-900',
      red: 'bg-red-50 border-l-red-500 text-red-900',
      indigo: 'bg-indigo-50 border-l-indigo-500 text-indigo-900',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={scrollToProjects}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Projects
          </button>
        </div>
      </header>

      {/* Project Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`inline-flex p-4 rounded-2xl mb-6 ${
              project.color === 'blue' ? 'bg-blue-100 text-blue-600' :
              project.color === 'green' ? 'bg-green-100 text-green-600' :
              project.color === 'purple' ? 'bg-purple-100 text-purple-600' :
              project.color === 'orange' ? 'bg-orange-100 text-orange-600' :
              project.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
              'bg-teal-100 text-teal-600'
            }`}>
              <Icon className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {project.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
                {project.impact}
              </div>
              {/* View Full Project Link for A/B Testing project */}
              {project.id === 'ab-testing-analysis' && project.links.case && project.links.case !== '#' && (
                <a
                  href={project.links.case}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Full Project
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
                
                {project.details && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Objective</h3>
                      <p className="text-gray-600 leading-relaxed">{project.details.objective}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Methodology</h3>
                      <p className="text-gray-600 leading-relaxed">{project.details.methodology}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Outcome</h3>
                      <p className="text-gray-600 leading-relaxed">{project.details.outcome}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Dashboard Images - For projects with dashboard visualizations */}
              {project.details?.dashboardImages && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Visualization</h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {project.details.dashboardImages.description}
                  </p>

                  <div className="space-y-8">
                    {/* Page 1 */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {project.id === 'adventureworks-dashboard' ? 'Sales Analysis Overview' : 
                         project.id === 'xyz-media-analysis' ? 'Cross-Channel Performance Summary' : 'Dashboard Page 1'}
                      </h3>
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={project.details.dashboardImages.page1}
                          alt={`${project.title} Dashboard - Page 1`}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>

                    {/* Page 2 */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {project.id === 'adventureworks-dashboard' ? 'Product Analysis Deep Dive' : 
                         project.id === 'xyz-media-analysis' ? 'XYZ Media Sales Breakdown' : 'Dashboard Page 2'}
                      </h3>
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={project.details.dashboardImages.page2}
                          alt={`${project.title} Dashboard - Page 2`}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Features - Specific to each project */}
                  <div className={`mt-8 rounded-lg p-6 ${
                    project.id === 'adventureworks-dashboard' ? 'bg-indigo-50' :
                    project.id === 'xyz-media-analysis' ? 'bg-blue-50' : 'bg-gray-50'
                  }`}>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Dashboard Features</h4>
                    <ul className="space-y-2 text-gray-700">
                      {project.id === 'adventureworks-dashboard' ? (
                        <>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-600 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">1</span>
                            <span>Comprehensive sales overview with $141M total sales, 31,465 orders, and 19,119 customers</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-600 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">2</span>
                            <span>Geographical sales distribution showing United States as the top market with $82M in sales</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-600 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">3</span>
                            <span>Product category analysis with detailed profit margins and inventory insights</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-indigo-600 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">4</span>
                            <span>Top vendor performance analysis and year-over-year growth tracking</span>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">1</span>
                            <span>Cross-channel performance comparison with key metrics (Revenue, Orders, CAC, ROAS)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">2</span>
                            <span>XYZ Media specific analysis with commission tracking and creator performance insights</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">3</span>
                            <span>Monthly trend analysis and channel viability assessment</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              )}

              {/* RFM Dashboard - For RFM Analysis project */}
              {project.id === 'rfm-analysis' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">RFM Segmentation Dashboard</h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Interactive Power BI dashboard showcasing customer segmentation based on RFM analysis with detailed performance metrics and segment insights.
                  </p>

                  <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                    <img 
                      src="/RFM_page-0001.jpg"
                      alt="RFM Segmentation Dashboard - Customer Analysis and Segmentation"
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Dashboard Highlights</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-600 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">1</span>
                        <span>Key Performance Indexes showing 4,331 customers, $7.96M total sales, and $1.84K average purchase value</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-600 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">2</span>
                        <span>RFM segment visualization with bubble chart showing customer distribution across recency and frequency dimensions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-600 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">3</span>
                        <span>Detailed segment breakdown with Champions (580 customers), Loyal Customers (672), and other strategic segments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-600 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">4</span>
                        <span>Interactive filters for segment-specific analysis and drill-down capabilities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Visual Analysis - For Sales Funnel Analysis */}
              {project.id === 'sales-funnel-analysis' && project.details?.visuals && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Visual Analysis</h2>
                  
                  {/* Funnel Data Table */}
                  <div className="mb-8 overflow-x-auto">
                    <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Funnel Data by Country</h3>
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-300">
                            <th className="text-left p-3 font-semibold text-gray-900">Event Order</th>
                            <th className="text-left p-3 font-semibold text-gray-900">Event Name</th>
                            <th className="text-center p-3 font-semibold text-blue-600">US Events</th>
                            <th className="text-center p-3 font-semibold text-blue-600">India Events</th>
                            <th className="text-center p-3 font-semibold text-orange-600">Canada Events</th>
                            <th className="text-center p-3 font-semibold text-gray-900">Total Events</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-medium">1</td>
                            <td className="p-3 font-medium">add_to_cart</td>
                            <td className="text-center p-3">1162</td>
                            <td className="text-center p-3">993</td>
                            <td className="text-center p-3">593</td>
                            <td className="text-center p-3 font-semibold">2748</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-medium">2</td>
                            <td className="p-3 font-medium">begin_checkout</td>
                            <td className="text-center p-3">4310</td>
                            <td className="text-center p-3">875</td>
                            <td className="text-center p-3">764</td>
                            <td className="text-center p-3 font-semibold">5949</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="p-3 font-medium">3</td>
                            <td className="p-3 font-medium">add_payment_info</td>
                            <td className="text-center p-3">2516</td>
                            <td className="text-center p-3">524</td>
                            <td className="text-center p-3">465</td>
                            <td className="text-center p-3 font-semibold">3505</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-medium">4</td>
                            <td className="p-3 font-medium">purchase</td>
                            <td className="text-center p-3">1942</td>
                            <td className="text-center p-3">406</td>
                            <td className="text-center p-3">355</td>
                            <td className="text-center p-3 font-semibold">2703</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Funnel Charts */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* US Funnel */}
                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-center text-gray-900 mb-6">US Funnel Chart</h4>
                      <div className="space-y-3">
                        <div className="bg-blue-500 text-white text-center py-3 rounded-lg font-semibold">
                          add_to_cart<br />100.00%
                        </div>
                        <div className="bg-blue-500 text-white text-center py-3 rounded-lg font-semibold" style={{width: '76.92%', margin: '0 auto'}}>
                          begin_checkout<br />76.92%
                        </div>
                        <div className="bg-blue-500 text-white text-center py-3 rounded-lg font-semibold" style={{width: '44.90%', margin: '0 auto'}}>
                          add_payment_info<br />44.90%
                        </div>
                        <div className="bg-blue-500 text-white text-center py-3 rounded-lg font-semibold" style={{width: '34.66%', margin: '0 auto'}}>
                          purchase<br />34.66%
                        </div>
                      </div>
                    </div>

                    {/* India Funnel */}
                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-center text-gray-900 mb-6">India Funnel Chart</h4>
                      <div className="space-y-3">
                        <div className="bg-blue-500 text-white text-center py-3 rounded-lg font-semibold">
                          add_to_cart<br />100.00%
                        </div>
                        <div className="bg-blue-500 text-white text-center py-3 rounded-lg font-semibold" style={{width: '75.56%', margin: '0 auto'}}>
                          begin_checkout<br />75.56%
                        </div>
                        <div className="bg-blue-500 text-white text-center py-3 rounded-lg font-semibold" style={{width: '45.09%', margin: '0 auto'}}>
                          add_payment_info<br />45.09%
                        </div>
                        <div className="bg-blue-500 text-white text-center py-3 rounded-lg font-semibold" style={{width: '34.94%', margin: '0 auto'}}>
                          purchase<br />34.94%
                        </div>
                      </div>
                    </div>

                    {/* Canada Funnel */}
                    <div className="bg-gradient-to-b from-orange-50 to-orange-100 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-center text-gray-900 mb-6">Canada Funnel Chart</h4>
                      <div className="space-y-3">
                        <div className="bg-orange-500 text-white text-center py-3 rounded-lg font-semibold">
                          add_to_cart<br />100.00%
                        </div>
                        <div className="bg-orange-500 text-white text-center py-3 rounded-lg font-semibold" style={{width: '78.84%', margin: '0 auto'}}>
                          begin_checkout<br />78.84%
                        </div>
                        <div className="bg-orange-500 text-white text-center py-3 rounded-lg font-semibold" style={{width: '46.83%', margin: '0 auto'}}>
                          add_payment_info<br />46.83%
                        </div>
                        <div className="bg-orange-500 text-white text-center py-3 rounded-lg font-semibold" style={{width: '35.75%', margin: '0 auto'}}>
                          purchase<br />35.75%
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Insights */}
                  <div className="bg-gray-900 text-white rounded-lg p-6">
                    <h4 className="text-xl font-bold text-center mb-6">Insights</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-800 rounded-lg p-4">
                        <p className="text-sm leading-relaxed">
                          <span className="font-semibold text-blue-300">1.</span> The drop-off rates are remarkably similar across all three regions, 
                          suggesting that the e-commerce funnel faces consistent challenges globally.
                        </p>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <p className="text-sm leading-relaxed">
                          <span className="font-semibold text-orange-300">2.</span> Canada performs slightly better in the transition from Add Payment 
                          Info to Purchase, indicating potentially more user-friendly payment processes or fewer barriers to completing the purchase.
                        </p>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4">
                        <p className="text-sm leading-relaxed">
                          <span className="font-semibold text-red-300">3.</span> The most significant drop-off occurs at the Add Payment Info stage 
                          across all regions, which is a critical area to investigate and optimize.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SQL Implementation - For projects with SQL code */}
              {project.details?.sqlImplementation && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Code className="h-6 w-6 mr-3 text-blue-600" />
                    SQL Implementation
                  </h2>
                  
                  <div className="space-y-8">
                    {project.details.sqlImplementation.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                          <p className="text-gray-600 leading-relaxed mb-6">{section.description}</p>
                        </div>

                        {/* SQL Query */}
                        <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                          <pre className="text-green-400 text-sm leading-relaxed whitespace-pre-wrap">
                            {section.query}
                          </pre>
                        </div>

                        {/* Query Breakdown */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-gray-900">Code Breakdown</h4>
                          <div className="space-y-3">
                            {section.breakdown.map((item, itemIndex) => (
                              <div 
                                key={itemIndex} 
                                className={`p-4 rounded-lg border-l-4 ${getBreakdownColorClasses(item.color)}`}
                              >
                                <h5 className="font-semibold mb-2">{item.title}</h5>
                                <p className="text-sm leading-relaxed">{item.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SQL Implementation - Legacy for Subscription Retention Analysis */}
              {project.id === 'subscription-retention' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Code className="h-6 w-6 mr-3 text-blue-600" />
                    SQL Implementation
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-gray-600 leading-relaxed">
                      The retention analysis was implemented using a multi-CTE approach in Google BigQuery. 
                      Below is the complete SQL query structure used to generate the weekly cohort retention analysis.
                    </p>

                    {/* Complete SQL Query */}
                    <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
                      <pre className="text-green-400 text-sm leading-relaxed">
{`-- Weekly Subscription Retention Analysis
-- Analyzing cohorts from November 1, 2020 to January 31, 2021

WITH calc_dates AS (
  SELECT 
    start_date,
    DATE_ADD(start_date, INTERVAL 6 DAY) AS end_date
  FROM UNNEST(
    GENERATE_DATE_ARRAY(
      DATE('2020-11-01'), 
      DATE('2021-01-31'), 
      INTERVAL 1 WEEK
    )
  ) AS start_date
),

start_subscriptions AS (
  SELECT 
    cd.start_date,
    cd.end_date,
    s.subscription_id,
    s.subscription_start_date,
    s.subscription_end_date
  FROM calc_dates cd
  INNER JOIN subscriptions s
    ON s.subscription_start_date >= cd.start_date
    AND s.subscription_start_date <= cd.end_date
),

weekly_retention AS (
  SELECT 
    ss.start_date,
    week_number,
    DATE_ADD(ss.start_date, INTERVAL week_number WEEK) AS cohort_week_start,
    DATE_ADD(ss.start_date, INTERVAL week_number + 1 WEEK) AS cohort_week_end,
    COUNT(DISTINCT ss.subscription_id) AS start_count,
    COUNT(DISTINCT 
      CASE 
        WHEN ss.subscription_end_date IS NULL 
          OR ss.subscription_end_date >= DATE_ADD(ss.start_date, INTERVAL week_number + 1 WEEK)
        THEN ss.subscription_id 
      END
    ) AS active_count
  FROM start_subscriptions ss
  CROSS JOIN UNNEST(GENERATE_ARRAY(0, 6)) AS week_number
  GROUP BY 
    ss.start_date, 
    week_number, 
    cohort_week_start, 
    cohort_week_end
)

SELECT 
  start_date,
  week_number,
  start_count,
  active_count,
  ROUND(active_count / start_count, 2) AS retention_rate
FROM weekly_retention
ORDER BY start_date, week_number;`}
                      </pre>
                    </div>

                    {/* Query Breakdown */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900">Query Breakdown</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-900 mb-2">1. calc_dates CTE</h4>
                          <p className="text-sm text-blue-800">
                            Generates weekly start dates using <code className="bg-blue-100 px-1 rounded">GENERATE_DATE_ARRAY</code> 
                            with 1-week intervals from Nov 1, 2020 to Jan 31, 2021.
                          </p>
                        </div>
                        
                        <div className="bg-green-50 rounded-lg p-4">
                          <h4 className="font-semibold text-green-900 mb-2">2. start_subscriptions CTE</h4>
                          <p className="text-sm text-green-800">
                            Joins subscriptions table with calc_dates using <code className="bg-green-100 px-1 rounded">INNER JOIN</code> 
                            to identify subscriptions starting within each weekly period.
                          </p>
                        </div>
                        
                        <div className="bg-purple-50 rounded-lg p-4">
                          <h4 className="font-semibold text-purple-900 mb-2">3. weekly_retention CTE</h4>
                          <p className="text-sm text-purple-800">
                            Uses <code className="bg-purple-100 px-1 rounded">CROSS JOIN</code> with 
                            <code className="bg-purple-100 px-1 rounded">GENERATE_ARRAY(0, 6)</code> to create 
                            0-6 week intervals for each cohort.
                          </p>
                        </div>
                        
                        <div className="bg-orange-50 rounded-lg p-4">
                          <h4 className="font-semibold text-orange-900 mb-2">4. Final Query</h4>
                          <p className="text-sm text-orange-800">
                            Calculates retention rates using <code className="bg-orange-100 px-1 rounded">ROUND(active_count / start_count, 2)</code> 
                            and orders by start_date and week_number.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Key SQL Techniques */}
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key SQL Techniques Used</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">GENERATE_DATE_ARRAY</code>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                            <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">CROSS JOIN</code>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                            <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">GENERATE_ARRAY</code>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">CASE WHEN</code>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">DATE_ADD</code>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                            <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">COUNT DISTINCT</code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Visual Analysis - Only for Subscription Retention Analysis */}
              {project.id === 'subscription-retention' && project.details?.visuals && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Visual Analysis</h2>
                  
                  {/* Retention Heatmap Table */}
                  <div className="mb-6 overflow-x-auto">
                    <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Retention Cohort Heatmap</h3>
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-300">
                            <th className="text-left p-2 font-semibold text-gray-900">Start Date</th>
                            <th className="text-center p-2 font-semibold text-gray-900">Week 0</th>
                            <th className="text-center p-2 font-semibold text-gray-900">Week 1</th>
                            <th className="text-center p-2 font-semibold text-gray-900">Week 2</th>
                            <th className="text-center p-2 font-semibold text-gray-900">Week 3</th>
                            <th className="text-center p-2 font-semibold text-gray-900">Week 4</th>
                            <th className="text-center p-2 font-semibold text-gray-900">Week 5</th>
                            <th className="text-center p-2 font-semibold text-gray-900">Week 6</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100"><td className="p-2 font-medium">Sunday, November 1, 2020</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2 bg-orange-100">94.0%</td><td className="text-center p-2 bg-orange-100">90.0%</td><td className="text-center p-2 bg-orange-100">89.0%</td><td className="text-center p-2 bg-orange-100">88.0%</td><td className="text-center p-2 bg-orange-100">87.0%</td><td className="text-center p-2 bg-orange-100">86.0%</td></tr>
                          <tr className="border-b border-gray-100"><td className="p-2 font-medium">Sunday, November 8, 2020</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2 bg-orange-100">94.0%</td><td className="text-center p-2 bg-orange-100">90.0%</td><td className="text-center p-2 bg-orange-100">89.0%</td><td className="text-center p-2 bg-orange-100">87.0%</td><td className="text-center p-2 bg-orange-100">86.0%</td><td className="text-center p-2 bg-orange-100">86.0%</td></tr>
                          <tr className="border-b border-gray-100"><td className="p-2 font-medium">Sunday, November 15, 2020</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2 bg-orange-100">94.0%</td><td className="text-center p-2 bg-orange-100">91.0%</td><td className="text-center p-2 bg-orange-100">89.0%</td><td className="text-center p-2 bg-orange-100">88.0%</td><td className="text-center p-2 bg-orange-100">87.0%</td><td className="text-center p-2 bg-orange-100">87.0%</td></tr>
                          <tr className="border-b border-gray-100"><td className="p-2 font-medium">Sunday, November 22, 2020</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2 bg-orange-100">94.0%</td><td className="text-center p-2 bg-orange-100">91.0%</td><td className="text-center p-2 bg-orange-100">89.0%</td><td className="text-center p-2 bg-orange-100">88.0%</td><td className="text-center p-2 bg-orange-100">88.0%</td><td className="text-center p-2 bg-orange-100">88.0%</td></tr>
                          <tr className="border-b border-gray-100"><td className="p-2 font-medium">Sunday, November 29, 2020</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2 bg-orange-100">94.0%</td><td className="text-center p-2 bg-orange-100">91.0%</td><td className="text-center p-2 bg-orange-100">90.0%</td><td className="text-center p-2 bg-orange-100">89.0%</td><td className="text-center p-2 bg-orange-100">89.0%</td><td className="text-center p-2 bg-orange-100">89.0%</td></tr>
                          <tr className="border-b border-gray-100"><td className="p-2 font-medium">Sunday, December 6, 2020</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2 bg-orange-100">95.0%</td><td className="text-center p-2 bg-orange-100">93.0%</td><td className="text-center p-2 bg-orange-100">92.0%</td><td className="text-center p-2 bg-orange-100">92.0%</td><td className="text-center p-2 bg-orange-100">91.0%</td><td className="text-center p-2 bg-orange-100">91.0%</td></tr>
                          <tr className="border-b border-gray-100"><td className="p-2 font-medium">Sunday, December 13, 2020</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2 bg-green-200">96.0%</td><td className="text-center p-2 bg-orange-100">94.0%</td><td className="text-center p-2 bg-orange-100">94.0%</td><td className="text-center p-2 bg-orange-100">93.0%</td><td className="text-center p-2 bg-orange-100">93.0%</td><td className="text-center p-2 bg-orange-100">92.0%</td></tr>
                          <tr className="border-b border-gray-100 bg-blue-50"><td className="p-2 font-bold text-blue-900">Sunday, December 20, 2020</td><td className="text-center p-2 bg-green-100 font-bold text-green-900">100.0%</td><td className="text-center p-2 bg-green-200 font-bold text-green-900">97.0%</td><td className="text-center p-2 bg-green-200 font-bold text-green-900">95.0%</td><td className="text-center p-2 bg-green-200 font-bold text-green-900">95.0%</td><td className="text-center p-2 bg-green-200 font-bold text-green-900">94.0%</td><td className="text-center p-2 bg-green-200 font-bold text-green-900">94.0%</td><td className="text-center p-2 bg-green-200 font-bold text-green-900">94.0%</td></tr>
                          <tr className="border-b border-gray-100"><td className="p-2 font-medium">Sunday, December 27, 2020</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2 bg-green-200">96.0%</td><td className="text-center p-2 bg-orange-100">95.0%</td><td className="text-center p-2 bg-orange-100">94.0%</td><td className="text-center p-2 bg-orange-100">93.0%</td><td className="text-center p-2 bg-orange-100">93.0%</td><td className="text-center p-2"></td></tr>
                          <tr className="border-b border-gray-100"><td className="p-2 font-medium">Sunday, January 3, 2021</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2 bg-green-200">96.0%</td><td className="text-center p-2 bg-orange-100">94.0%</td><td className="text-center p-2 bg-orange-100">93.0%</td><td className="text-center p-2 bg-orange-100">92.0%</td><td className="text-center p-2"></td><td className="text-center p-2"></td></tr>
                          <tr className="border-b border-gray-100"><td className="p-2 font-medium">Sunday, January 10, 2021</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2 bg-green-200">96.0%</td><td className="text-center p-2 bg-orange-100">93.0%</td><td className="text-center p-2 bg-orange-100">92.0%</td><td className="text-center p-2"></td><td className="text-center p-2"></td><td className="text-center p-2"></td></tr>
                          <tr className="border-b border-gray-100"><td className="p-2 font-medium">Sunday, January 17, 2021</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2 bg-orange-100">95.0%</td><td className="text-center p-2 bg-orange-100">92.0%</td><td className="text-center p-2"></td><td className="text-center p-2"></td><td className="text-center p-2"></td><td className="text-center p-2"></td></tr>
                          <tr className="border-b border-gray-100"><td className="p-2 font-medium">Sunday, January 24, 2021</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2 bg-orange-100">94.0%</td><td className="text-center p-2"></td><td className="text-center p-2"></td><td className="text-center p-2"></td><td className="text-center p-2"></td><td className="text-center p-2"></td></tr>
                          <tr><td className="p-2 font-medium">Sunday, January 31, 2021</td><td className="text-center p-2 bg-green-100 font-medium">100.0%</td><td className="text-center p-2"></td><td className="text-center p-2"></td><td className="text-center p-2"></td><td className="text-center p-2"></td><td className="text-center p-2"></td><td className="text-center p-2"></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Findings</h4>
                    <p className="text-gray-700 mb-4">{project.details.visuals.description}</p>
                    <ol className="space-y-3">
                      {project.details.visuals.findings.map((finding, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-sm font-bold rounded-full mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </span>
                          <span className="text-gray-700 leading-relaxed">{finding}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Impact</p>
                      <p className="text-sm text-gray-600">{project.impact}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Team Size</p>
                      <p className="text-sm text-gray-600">Solo project</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Back to Portfolio Button at Bottom */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <button 
              onClick={scrollToProjects}
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;