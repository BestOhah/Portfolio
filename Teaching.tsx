import React from 'react';
import { Users, BookOpen, Award, Star, Quote } from 'lucide-react';

const Teaching: React.FC = () => {
  const institutions = [
    {
      name: 'DataCamp',
      role: 'Course Instructor',
      logo: '🎓',
      students: '2,500+',
      rating: 4.8,
      courses: ['SQL for Data Analysis', 'Power BI Fundamentals']
    },
    {
      name: 'Coursera',
      role: 'Specialization Mentor',
      logo: '📚',
      students: '1,200+',
      rating: 4.9,
      courses: ['Business Intelligence Specialization']
    },
    {
      name: 'Local University',
      role: 'Guest Lecturer',
      logo: '🏫',
      students: '300+',
      rating: 4.7,
      courses: ['Data Analytics Workshop', 'Career in Data Science']
    }
  ];

  const testimonials = [
    {
      name: 'Emily Rodriguez',
      role: 'Data Analyst at Microsoft',
      text: 'Sarah\'s teaching style made complex SQL concepts easy to understand. I landed my dream job thanks to her guidance!',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Business Intelligence Developer',
      text: 'The Power BI course was incredibly practical. I could immediately apply what I learned to my work projects.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'Data Science Student',
      text: 'Sarah goes above and beyond to help her students succeed. Her real-world examples made all the difference.',
      rating: 5
    }
  ];

  const achievements = [
    { icon: Users, value: '4,000+', label: 'Students Taught' },
    { icon: BookOpen, value: '12', label: 'Courses Created' },
    { icon: Award, value: '4.8/5', label: 'Average Rating' },
    { icon: Star, value: '95%', label: 'Completion Rate' }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="teaching" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Teaching & Mentoring</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the next generation of data professionals with practical skills and industry insights
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div key={achievement.label} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                <div className="text-sm text-gray-600">{achievement.label}</div>
              </div>
            );
          })}
        </div>

        {/* Institutions */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Teaching Platforms</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {institutions.map((institution) => (
              <div 
                key={institution.name}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-4xl mb-4">{institution.logo}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{institution.name}</h4>
                <p className="text-blue-600 font-semibold mb-4">{institution.role}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-center space-x-1">
                    {renderStars(Math.floor(institution.rating))}
                    <span className="text-sm text-gray-600 ml-2">{institution.rating}</span>
                  </div>
                  <p className="text-sm text-gray-600">{institution.students} students</p>
                </div>

                <div className="space-y-1">
                  {institution.courses.map((course) => (
                    <div 
                      key={course}
                      className="text-xs bg-white text-gray-700 px-3 py-1 rounded-full inline-block mr-1 mb-1"
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Student Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.name}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg relative"
              >
                <Quote className="h-8 w-8 text-blue-300 mb-4" />
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-6 py-3 rounded-lg">
            <Users className="h-5 w-5" />
            <span className="font-semibold">Currently accepting new mentoring opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teaching;