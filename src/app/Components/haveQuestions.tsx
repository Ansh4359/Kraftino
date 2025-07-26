import Link from 'next/link';
import React from 'react';

const QuestionsSection = () => {
  return (
    <div className="relative w-full  bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 py-10 px-10 overflow-hidden">
      {/* World Map Background with Grid Pattern */}
      <div className="absolute inset-0 opacity-15">
        {/* Grid Pattern */}
        <svg 
          viewBox="0 0 1200 400" 
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white opacity-30"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* World Map Continents with glowing effect */}
          <g fill="currentColor" className="text-cyan-300">
            {/* North America */}
            {Array.from({ length: 40 }, (_, i) => (
              <circle key={`na-${i}`} 
                cx={120 + (i % 8) * 15} 
                cy={120 + Math.floor(i / 8) * 12} 
                r="2" 
                className="animate-pulse"
                style={{animationDelay: `${i * 0.1}s`}}
              />
            ))}
            {/* Mexico */}
            {Array.from({ length: 15 }, (_, i) => (
              <circle key={`mx-${i}`} 
                cx={130 + (i % 5) * 12} 
                cy={200 + Math.floor(i / 5) * 10} 
                r="2" 
                className="animate-pulse"
                style={{animationDelay: `${i * 0.15}s`}}
              />
            ))}

            {/* South America */}
            {Array.from({ length: 35 }, (_, i) => (
              <circle key={`sa-${i}`} 
                cx={200 + (i % 7) * 12} 
                cy={220 + Math.floor(i / 7) * 15} 
                r="2" 
                className="animate-pulse"
                style={{animationDelay: `${i * 0.12}s`}}
              />
            ))}

            {/* Europe */}
            {Array.from({ length: 25 }, (_, i) => (
              <circle key={`eu-${i}`} 
                cx={480 + (i % 5) * 10} 
                cy={100 + Math.floor(i / 5) * 8} 
                r="2" 
                className="animate-pulse"
                style={{animationDelay: `${i * 0.18}s`}}
              />
            ))}

            {/* Africa */}
            {Array.from({ length: 45 }, (_, i) => (
              <circle key={`af-${i}`} 
                cx={500 + (i % 9) * 12} 
                cy={150 + Math.floor(i / 9) * 18} 
                r="2" 
                className="animate-pulse"
                style={{animationDelay: `${i * 0.08}s`}}
              />
            ))}

            {/* Asia */}
            {Array.from({ length: 60 }, (_, i) => (
              <circle key={`as-${i}`} 
                cx={650 + (i % 12) * 13} 
                cy={80 + Math.floor(i / 12) * 16} 
                r="2" 
                className="animate-pulse"
                style={{animationDelay: `${i * 0.06}s`}}
              />
            ))}

            {/* Australia */}
            {Array.from({ length: 20 }, (_, i) => (
              <circle key={`oc-${i}`} 
                cx={780 + (i % 5) * 15} 
                cy={280 + Math.floor(i / 5) * 12} 
                r="2" 
                className="animate-pulse"
                style={{animationDelay: `${i * 0.2}s`}}
              />
            ))}
          </g>

          {/* Connection lines between continents */}
          <g stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" className="text-cyan-400 opacity-40">
            <line x1="260" y1="180" x2="480" y2="130" className="animate-pulse" />
            <line x1="240" y1="350" x2="520" y2="280" className="animate-pulse" />
            <line x1="575" y1="140" x2="650" y2="120" className="animate-pulse" />
            <line x1="590" y1="300" x2="780" y2="320" className="animate-pulse" />
          </g>
        </svg>
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/5 to-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Have Questions?
        </h2>

        {/* Decorative Line */}
        <div className="flex justify-center items-center mb-8">
          <div className="w-16 h-0.5 bg-white opacity-60"></div>
          <div className="w-3 h-3 border-2 border-white mx-4 rotate-45"></div>
          <div className="w-16 h-0.5 bg-white opacity-60"></div>
        </div>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white mb-12 font-light">
          We would love to answer them all
        </p>

        {/* CTA Button */}
        <Link href="/contact">
        <button  className="group relative px-8 py-4 bg-transparent border-1 border-black text-white font-semibold text-lg rounded-md hover:bg-orange-400 hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-cyan-400/25">
          <span className="relative z-10" >Get In Touch</span>
          <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-20 rounded-md transition-opacity duration-300"></div>
        </button>
        </Link>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-white opacity-20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-16 left-16 w-2 h-2 bg-white opacity-25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-32 w-2 h-2 bg-white opacity-30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
    </div>
  );
};

export default QuestionsSection;