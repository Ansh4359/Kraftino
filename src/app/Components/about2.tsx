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
                <span className="text-black-600">TaxaGO</span>
              </h1>
              <div className='text-1xl font-bold mt-3'>Global Experts in Taxation,Accounting,Finance, Legal & Business Advisory</div>
            </div>

            <div className="space-y-4 text-gray-700 font-sans leading-relaxed">
              <p className="text-base">
              TaxaGo Consultancy Services, established by Sanjeev Kumar Singh in 2021, is a leading multi-disciplinary consultancy firm committed to providing end-to-end business solutions. The firm specializes in accounting and financial management, taxation and strategic tax planning, legal and regulatory compliance, and business management consulting.
              </p>

              <p className="text-base">
              What sets TaxaGo apart is its strong foundation in India and strategic presence across the Gulf and African regions. This geographic reach enables the firm to combine global expertise with deep local insights, delivering world-class consultancy tailored to diverse market needs.              </p>
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
                To deliver reliable, technology-driven, and region-specific consulting services that help businesses stay compliant, competitive, and confident—wherever they operate.
                </p>

              </div>

              <div className="space-y-4 text-white my-5">
                <h2 className="text-xl font-bold font-sans">Our Vision</h2>
                <p className="text-blue-100 font-sans leading-relaxed text-sm">
              To be the preferred partner for businesses worldwide seeking ethical, transparent, and growth-oriented advisory services.
                </p>

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
