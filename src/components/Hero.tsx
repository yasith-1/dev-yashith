import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import FloatingShapes from './FloatingShapes';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <FloatingShapes />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <p className="text-teal-400 text-lg mb-4 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-teal-400">Yashith Prabhashwara</span>,<br />
                Full-Stack Developer
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                A passionate developer crafting smart, innovative solutions with 
                <span className="text-teal-400"> React, Node.js, and modern technologies</span> — 
                bringing ideas to life through code.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Email' },
                { icon: FileText, href: '#', label: 'Resume' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 bg-slate-800/50 hover:bg-teal-500 text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                View My Projects
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-transparent border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 p-2">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <img
                    src="/src/images/me2.png"
                    alt="Profile"
                    className="w-96 h-96 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}