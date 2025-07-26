import React from 'react';
import { Calculator, TrendingUp, Shield, Users, CheckCircle, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function MissionComponent() {
  const services = [
    { icon: Calculator, text: "Bookkeeping & Tax Preparation" },
    { icon: Users, text: "Payroll Processing" },
    { icon: BarChart3, text: "Financial Reporting & Analysis" },
    { icon: TrendingUp, text: "Cash Flow Monitoring" },
    { icon: Shield, text: "Compliance Management" },
    { icon: CheckCircle, text: "General Ledger Management" }
  ];

  const benefits = [
    "Save valuable time",
    "Reduce financial risk",
    "Gain valuable insights",
    "Ensure regulatory compliance"
  ];

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6">
            <Calculator className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Our <span className="text-blue-600">Mission</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-white leading-relaxed">
              Our expert accounting services are designed to help businesses of all sizes maintain 
              <span className="font-semibold text-blue-600"> financial clarity</span>, improve efficiency, 
              and ensure compliance with the latest regulations.
            </p>
            
            <p className="text-lg text-white leading-relaxed">
              Whether you need help with bookkeeping, tax preparation, payroll processing, or financial 
              reporting, our team of experienced accountants is here to support you every step of the way.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium">{service.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Focus on Growing Your Business
          </h3>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-4xl mx-auto leading-relaxed">
            We offer customized solutions including general ledger management, accounts payable and 
            receivable, cash flow monitoring, budgeting, and financial analysis. By leveraging the 
            latest accounting software and tools, we ensure accuracy and efficiency in every aspect 
            of your financial management.
          </p>
          <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
            <Shield className="w-5 h-5 mr-2" />
            <Link href="/contact">
            <span className="font-semibold text-black cursor-pointer" >Let us handle the stress, you focus on success</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}