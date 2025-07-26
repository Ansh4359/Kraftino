import React from 'react';

export default function KraftinoHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-cyan-500 rounded-full blur-2xl"></div>
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Title with gradient effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300 animate-pulse">
            Global Innovation
          </h1>

          {/* Content blocks */}
          <div className="space-y-8 text-gray-300">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <p className="text-lg leading-relaxed">
                When handled domestically, the potential for innovation in digital solutions, product development, and market expansion 
                are challenging enough. However, the opportunities and possibilities increase tremendously when they cross borders and 
                involve global markets and diverse technological landscapes.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <p className="text-lg leading-relaxed">
                Most of Kraftino&apos;s clients have international ambitions or presence, and we have the expertise they require to successfully 
                navigate challenging, time-sensitive projects in a dynamic global environment.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <p className="text-lg leading-relaxed">
                We advise our clients on solutions for international technology integration, scalable architecture, and digital transformation 
                initiatives. Along with helping our clients adapt to the constantly evolving demands of managing a global digital presence, 
                we also assist them in aligning their technological capabilities with their business objectives.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 hover:from-blue-500 hover:to-cyan-500">
              <span className="relative z-10">Discover More</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </button>
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-indigo-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}