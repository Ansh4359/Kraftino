import React from 'react';

const TechnologyFocus = () => {
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
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300 animate-pulse">
              Technology Focus
            </h1>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              {/* Hero Image/Icon */}
              <div className="lg:w-1/2">
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-lg">Advanced Workspace Technology</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:w-1/2 text-left">
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500">
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    The workplace is rapidly evolving in the age of Industry 4.0. The emergence 
                    of new technologies like Robotics Process Automation and Artificial 
                    Intelligence has a consequential impact on the services that KNAV gives its 
                    end clients and how we choose to harness new technologies in our quest to 
                    boost the quality and cost of our services.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    To help you improve your performance and add more value to your 
                    business without having to learn all the newest technology, KNAV uses the 
                    most advanced AI, machine learning, and analytics technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 max-w-4xl mx-auto leading-relaxed mb-8">
              We Use Advanced Technologies To Cater To The Right Solution For Different Businesses.
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Cyber Security */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Cyber Security</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                With each passing day, digital attacks inside and outside your company's network become more sophisticated. KNAV collaborates with partners to ensure 
                your company knows network security risks, prevents data breaches, and stops information theft.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We provide a complete solution through our partners, including tools for monitoring, enforcing policy, auditing, and reporting.
              </p>
            </div>

            {/* Data Analytics */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Data Analytics</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                In 2017, we started working with MindBridge AI, the industry-leading artificial intelligence tool for forensic analysis and auditing anomaly identification. 
                Our use of AI and automation tools speed up repetitive and time-consuming procedures. Still, more importantly, it provides our auditors with more 
                excellent knowledge to compare and examine data from several dimensions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                To give you the clarity and capacity to support decisions, it is essential to provide a broad understanding of your organization while allowing you to drill 
                down to the intricacies.
              </p>
            </div>

            {/* Client Data Security */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white">Client Data Security</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                At KNAV, we emphasize maintaining the security and accessibility of our client's data. While working with sensitive client data, we must take precautions 
                to prevent the breach of private data. We use a renowned cloud-based file-sharing platform with excellent data encryption, making sharing massive files 
                very simple. In addition, information sharing is made simple and secure through our client data gateway.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 hover:from-blue-500 hover:to-cyan-500">
              <span className="relative z-10">Explore Our Solutions</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-indigo-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};

export default TechnologyFocus;