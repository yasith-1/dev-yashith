import React from 'react';
import { 
  Globe, 
  Server, 
  Smartphone, 
  Cpu, 
  Database, 
  Link 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Frontend Web Experiences',
      description: 'Crafting modern, responsive websites using React and Next.js — focused on clean design, intuitive navigation, and a smooth user experience across all devices.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Server,
      title: 'Backend Systems & Architecture',
      description: 'Building secure, high-performance backends using Java (Spring Boot) and Node.js — handling data, user management, and the core logic that powers your app.',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform Mobile Apps',
      description: 'Designing mobile apps that run beautifully on Android and iOS using React Native and native Android tools — with fast performance and user-friendly interfaces.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Cpu,
      title: 'Smart IoT Solutions',
      description: 'Creating connected systems with ESP32 and Arduino — bringing sensors, devices, and automation together for smart homes, agriculture, or industrial use.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: Database,
      title: 'Data & Database Management',
      description: 'Designing structured, efficient, and scalable databases with MySQL, PostgreSQL, and Firebase — ensuring fast access, data integrity, and seamless integration.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: Link,
      title: 'API Design & Integration',
      description: 'Developing robust APIs and integrating third-party services — enabling smooth data flow between frontend, backend, and external platforms.',
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-teal-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From concept to deployment, I provide end-to-end development solutions
            that bring your ideas to life with modern technology and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700"
              >
                <div className={`inline-flex p-4 rounded-xl ${service.bgColor} ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 rounded-2xl ${service.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}