"use client";
import React from "react";
import CountUp from "./countup";
function About2() {
  return (
    <div className="h-half-screen bg-gray-200 py-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-sans leading-tight">
                <span className="text-black-600">TAXAGO</span>
              </h1>
              {/* <div className='w-41 h-1 bg-blue-600 mt-3'></div> */}
            </div>

            <div className="space-y-4 text-gray-700 font-sans leading-relaxed">
              <p className="text-base">
                TaxaGo Consultancy Services is a top rated accounting, taxation, Financial and Investment advisory firm entrusted by individuals and leading organizations to deliver effective accounting, advisory, and financial solutions with diligence, vision, and responsive client service.
              </p>

              <p className="text-base">
                At TaxaGo, complex issues are solved through teamwork, putting our collective experience and expertise to work for you. Recognized as a category leader for client satisfaction, we serve clients locally, regionally, and globally.
              </p>
            </div>

            {/* Stats or Features */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-black-600 font-sans">
                  <CountUp
                    from={0}
                    to={500}
                    separator=","
                    direction="up"
                    duration={0.1}
                    className="count-up-text"
                  />+
                </div>
                <div className="text-gray-600 font-medium font-sans text-sm">
                  Clients Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black-600 font-sans">
                  <CountUp
                    from={0}
                    to={4}
                    separator=","
                    direction="up"
                    duration={0.1}
                    className="count-up-text"
                  />+
                </div>
                <div className="text-gray-600 font-medium font-sans text-sm">
                  Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 shadow-xl">
              <div className="space-y-4 text-white">
                <h2 className="text-xl font-bold font-sans">Our Mission</h2>
                <p className="text-blue-100 font-sans leading-relaxed text-sm">
                TaxaGo Consultancy Services  was established in 1 march 2022 By Sanjeev Kumar Singh and his Associates, the firm has grown in strength over the years with plethora of knowledge and experience of its professionals and consultants during last three Year.
                </p>

                <div className="space-y-3 pt-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="font-sans text-sm">Global Expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="font-sans text-sm">
                      Multi-cultural Teams
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="font-sans text-sm">
                      Comprehensive Solutions
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="font-sans text-sm">
                      Cross-border Expertise
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-blue-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
