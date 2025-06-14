import React from 'react';
import { Code, Database, Smartphone, Zap } from 'lucide-react';

function About() {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 95, color: 'bg-yellow-500' },
    { name: 'React/Next.js', level: 90, color: 'bg-blue-500' },
    { name: 'Node.js/Express', level: 85, color: 'bg-green-500' },
    { name: 'Python/Django', level: 80, color: 'bg-purple-500' },
    { name: 'SQL/NoSQL', level: 88, color: 'bg-teal-500' },
    { name: 'Cloud Services', level: 75, color: 'bg-orange-500' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-teal-500">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a full-stack developer who loves turning caffeine into code — especially when it 
            involves backend logic, mobile apps, or IoT gadgets blinking to life. I enjoy building 
            tech that actually works (and doesn't just crash beautifully).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ✅ Left Side - Profile Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 overflow-hidden shadow-xl">
              <img
                src="/src/images/collectionicon.png"
                alt="My profile"
                className="w-full h-fit max-h-fit object-cover rounded-xl mx-auto"
              />
            </div>
          </div>

          {/* ✅ Right Side - Skills */}
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold  text-gray-900 dark:text-white mb-4">
                Tech Stack
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                My toolkit includes JavaScript, React, Android, and embedded systems, with solid 
                experience wrangling SQL databases and Firebase for smooth backend magic. If it 
                connects, I've probably built it (or at least tried to debug it at 2 AM).
              </p>
            </div>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
