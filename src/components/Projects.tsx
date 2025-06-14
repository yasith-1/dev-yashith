import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Ceylon Canvas - e-Commerce',
      description: 'Full-stack e-commerce platform featuring user authentication, product management, and payment integration. Backend built with Java EE and Hibernate ORM, with MySQL as the database.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java EE', 'Hibernate', 'JavaScript', 'MySQL'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'HandyHub - Bluecollar Marketplace',
      description: 'Marketplace for blue-collar workers to connect with clients, featuring job listings and user profiles.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Android(Java)', 'Firebase'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Ceylon Wisdom Library - Management System',
      description: 'A library management system for Ceylon Wisdom Library, featuring book management and user authentication.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Java', 'Java Swing', 'MySQL'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Smart Home IoT System',
      description: 'Connected home automation system with ESP32 and sensors for monitoring temperature, humidity, and controlling appliances remotely.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['ESP32', 'Arduino', 'React', 'Firebase'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Real-time Chat Application',
      description: 'Modern chat application with real-time messaging, file sharing, and group chat functionality using Socket.io and React.',
      image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Task Management Dashboard',
      description: 'Comprehensive project management tool with kanban boards, team collaboration, and progress tracking features.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-teal-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, from full-stack web applications to mobile apps 
            and IoT solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    aria-label="View code on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}