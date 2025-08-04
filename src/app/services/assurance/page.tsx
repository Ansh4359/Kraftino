"use client"

import React, { useState } from 'react';
import { X, Shield, CheckCircle, FileCheck, Search, TrendingUp, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

interface AssuranceService {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  deliverables: string[];
}

export default function TaxaAssurance() {
  const [selectedService, setSelectedService] = useState<AssuranceService | null>(null);

  const assuranceServices = [
    {
      id: 1,
      name: "Financial Statement Audits",
      category: "External Auditing",
      description: "Comprehensive independent examination of your financial statements to ensure accuracy, compliance, and reliability for stakeholders and regulatory bodies.",
      icon: <FileCheck className="w-8 h-8" />,
      features: ["GAAP/IFRS Compliance", "Risk-Based Approach", "Materiality Assessment", "Internal Control Evaluation"],
      benefits: ["Enhanced Credibility", "Regulatory Compliance", "Risk Mitigation", "Investor Confidence"],
      deliverables: ["Audit Report", "Management Letter", "Financial Statement Opinion", "Compliance Certificate"]
    },
    {
      id: 2,
      name: "Internal Audit Services",
      category: "Risk Management",
      description: "Independent evaluation of your organization's risk management, control, and governance processes to enhance operational efficiency and effectiveness.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Process Evaluation", "Control Testing", "Risk Assessment", "Operational Review"],
      benefits: ["Improved Controls", "Cost Reduction", "Process Optimization", "Fraud Prevention"],
      deliverables: ["Internal Audit Report", "Risk Matrix", "Control Recommendations", "Action Plans"]
    },
    {
      id: 3,
      name: "Compliance Reviews",
      category: "Regulatory Compliance",
      description: "Thorough assessment of your adherence to applicable laws, regulations, and industry standards to minimize compliance risks and penalties.",
      icon: <CheckCircle className="w-8 h-8" />,
      features: ["Regulatory Mapping", "Gap Analysis", "Policy Review", "Training Assessment"],
      benefits: ["Penalty Avoidance", "Reputation Protection", "Operational Clarity", "Stakeholder Trust"],
      deliverables: ["Compliance Report", "Gap Analysis", "Remediation Plan", "Policy Updates"]
    },
    {
      id: 4,
      name: "Due Diligence",
      category: "Transaction Support",
      description: "Comprehensive financial and operational investigation for mergers, acquisitions, and investment decisions to identify risks and opportunities.",
      icon: <Search className="w-8 h-8" />,
      features: ["Financial Analysis", "Operational Review", "Legal Compliance", "Market Assessment"],
      benefits: ["Informed Decisions", "Risk Identification", "Value Optimization", "Deal Structuring"],
      deliverables: ["Due Diligence Report", "Risk Assessment", "Valuation Analysis", "Recommendation Summary"]
    },
    {
      id: 5,
      name: "Risk Assessment",
      category: "Risk Management",
      description: "Systematic identification, analysis, and evaluation of potential risks that could impact your business objectives and operational continuity.",
      icon: <AlertTriangle className="w-8 h-8" />,
      features: ["Risk Identification", "Impact Analysis", "Probability Assessment", "Mitigation Strategies"],
      benefits: ["Proactive Planning", "Loss Prevention", "Strategic Clarity", "Operational Resilience"],
      deliverables: ["Risk Register", "Heat Maps", "Mitigation Plans", "Monitoring Framework"]
    },
    {
      id: 6,
      name: "Forensic Accounting",
      category: "Investigation Services",
      description: "Specialized investigative accounting services to detect, investigate, and prevent fraud, financial misconduct, and disputes.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Fraud Detection", "Evidence Analysis", "Expert Testimony", "Dispute Resolution"],
      benefits: ["Asset Recovery", "Legal Support", "Deterrent Effect", "Transparency"],
      deliverables: ["Investigation Report", "Expert Opinion", "Evidence Documentation", "Legal Testimony"]
    }
  ];

  const openModal = (service: AssuranceService) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-cyan-500 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-10 w-36 h-36 bg-emerald-500 rounded-full blur-3xl"></div>
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
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300 animate-pulse">
              Assurance Services
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
                <p className="text-lg leading-relaxed text-gray-300">
                  Providing comprehensive assurance services to enhance confidence, ensure compliance, and mitigate risks. Our expert team delivers independent, objective assessments that strengthen your business foundation and build stakeholder trust.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {assuranceServices.map((service, index) => (
              <div 
                key={service.id}
                onClick={() => openModal(service)}
                className="group relative backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Service Icon */}
                <div className="relative mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 p-4 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300 text-cyan-300 group-hover:text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Service Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">
                    {service.category}
                  </p>
                  <p className="text-sm text-gray-300 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center">
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Enhance Your Business Assurance?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our comprehensive assurance services provide the confidence and clarity you need to make informed decisions and maintain stakeholder trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 hover:from-blue-500 hover:to-cyan-500 cursor-pointer">
                    <span className="relative z-10">Get Started Today</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                  </button>
                </Link>
                <Link href="/services">
                  <button className="group relative px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 cursor-pointer">
                    <span className="relative z-10">View All Services</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-cyan-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-indigo-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-2/3 left-1/2 w-3 h-3 bg-emerald-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="backdrop-blur-sm bg-slate-900/95 rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <X size={20} />
              </button>

              {/* Modal Content */}
              <div className="text-center mb-8">
                <div className="relative mx-auto w-24 h-24 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-50"></div>
                  <div className="relative z-10 p-6 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border-2 border-cyan-400/50 text-cyan-300">
                    {selectedService.icon}
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedService.name}
                </h2>
                <p className="text-lg font-semibold text-blue-400 mb-6 uppercase tracking-wider">
                  {selectedService.category}
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">Service Overview</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Three Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Key Features</h3>
                  <div className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Benefits</h3>
                  <div className="space-y-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Deliverables</h3>
                  <div className="space-y-3">
                    {selectedService.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA in Modal */}
              <div className="mt-8 text-center">
                <Link href="/contact">
                  <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="relative z-10">Request This Service</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}
