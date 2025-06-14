import React from 'react';

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-teal-500/10 rounded-lg rotate-45 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-cyan-500/10 rounded-full animate-float-delay-1"></div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-teal-400/10 rounded-lg rotate-12 animate-float-delay-2"></div>
      <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-cyan-400/10 rounded-full animate-float-delay-3"></div>
      <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-teal-500/10 rounded-lg rotate-45 animate-float"></div>
      
      {/* Larger background shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </div>
  );
}