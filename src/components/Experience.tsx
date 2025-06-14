import React from 'react';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led development of scalable web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Built CI/CD pipeline reducing deployment time by 60%',
        'Mentored 5 junior developers and conducted technical interviews'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      isPresent: true
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupX',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed MVP for fintech startup from concept to production. Collaborated with design team to create intuitive user experiences.',
      achievements: [
        'Built complete fintech platform handling $2M+ transactions',
        'Implemented real-time payment processing system',
        'Achieved 99.9% uptime with robust error handling'
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Stripe'],
      isPresent: false
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2019 - 2020',
      description: 'Created responsive websites and web applications for various clients. Focused on performance optimization and user experience.',
      achievements: [
        'Delivered 15+ client projects with 100% satisfaction rate',
        'Improved website performance scores by average 35%',
        'Established component library used across all projects'
      ],
      technologies: ['JavaScript', 'React', 'SASS', 'WordPress', 'Firebase'],
      isPresent: false
    },
    {
      title: 'Junior Web Developer',
      company: 'WebSolutions Inc',
      location: 'Boston, MA',
      period: '2018 - 2019',
      description: 'Started career building websites and learning modern web development practices. Gained experience in both frontend and backend technologies.',
      achievements: [
        'Completed 20+ website projects using modern frameworks',
        'Learned full-stack development including database design',
        'Contributed to open-source projects and team knowledge sharing'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
      isPresent: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-teal-500">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my career in web development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-cyan-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-500 rounded-full border-4 border-white dark:border-slate-800 z-10">
                  {exp.isPresent && (
                    <div className="absolute inset-0 bg-teal-500 rounded-full animate-ping"></div>
                  )}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        {exp.isPresent && (
                          <span className="px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-teal-500 mb-3">
                        {exp.company}
                      </h4>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle size={16} className="text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '15+', label: 'Technologies Mastered' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-teal-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}