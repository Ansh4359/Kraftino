"use client"

import React, { JSX, useState } from 'react';
import { X, Shield, CheckCircle, FileCheck, Search, TrendingUp, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

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

// Animation variants with proper TypeScript typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const cardVariants: Variants = {
  hidden: { 
    scale: 0.8, 
    opacity: 0,
    y: 60
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15
    }
  },
  hover: {
    scale: 1.05,
    y: -10,
    boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2
    }
  }
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

const floatingVariants: Variants = {
  animate: {
    y: [-10, 10, -10],
    x: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const backgroundBlobVariants: Variants = {
  animate: {
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export default function TaxaAssurance(): JSX.Element {
  const [selectedService, setSelectedService] = useState<AssuranceService | null>(null);

  const assuranceServices: AssuranceService[] = [
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

  const openModal = (service: AssuranceService): void => {
    setSelectedService(service);
  };

  const closeModal = (): void => {
    setSelectedService(null);
  };

  return (
    <motion.div 
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Background Pattern */}
      <motion.div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"
          variants={backgroundBlobVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 right-32 w-24 h-24 bg-purple-500 rounded-full blur-2xl"
          variants={backgroundBlobVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"
          variants={backgroundBlobVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-28 h-28 bg-cyan-500 rounded-full blur-2xl"
          variants={backgroundBlobVariants}
          animate="animate"
          transition={{ delay: 6 }}
        />
        <motion.div 
          className="absolute top-1/2 left-10 w-36 h-36 bg-emerald-500 rounded-full blur-3xl"
          variants={backgroundBlobVariants}
          animate="animate"
          transition={{ delay: 8 }}
        />
      </motion.div>

      {/* Animated Grid Background */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="w-full h-full" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2
              }}
            >
              Assurance Services
            </motion.h1>
            
            <motion.div 
              className="max-w-3xl mx-auto"
              variants={itemVariants}
            >
              <motion.div 
                className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 255, 255, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.p 
                  className="text-lg leading-relaxed text-gray-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Providing comprehensive assurance services to enhance confidence, ensure compliance, and mitigate risks. Our expert team delivers independent, objective assessments that strengthen your business foundation and build stakeholder trust.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {assuranceServices.map((service: AssuranceService, index: number) => (
              <motion.div 
                key={service.id}
                onClick={() => openModal(service)}
                className="group relative backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                custom={index}
              >
                {/* Service Icon */}
                <motion.div 
                  className="relative mb-6 mx-auto w-20 h-20 flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                  />
                  <motion.div 
                    className="relative z-10 p-4 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300 text-cyan-300 group-hover:text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    {service.icon}
                  </motion.div>
                </motion.div>

                {/* Service Info */}
                <motion.div 
                  className="text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.name}
                  </motion.h3>
                  <motion.p 
                    className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    {service.category}
                  </motion.p>
                  <motion.p 
                    className="text-sm text-gray-300 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                  >
                    {service.description}
                  </motion.p>
                </motion.div>

                {/* Hover Effect Overlay */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <motion.div 
              className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl max-w-4xl mx-auto"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 255, 255, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.h2 
                className="text-3xl font-bold text-white mb-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                Ready to Enhance Your Business Assurance?
              </motion.h2>
              <motion.p 
                className="text-gray-300 mb-8 text-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our comprehensive assurance services provide the confidence and clarity you need to make informed decisions and maintain stakeholder trust.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contact">
                  <motion.button 
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-2xl cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">Get Started Today</span>
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-md"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </motion.button>
                </Link>
                <Link href="/services">
                  <motion.button 
                    className="group relative px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-300 font-semibold rounded-full cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(6, 182, 212, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">View All Services</span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Floating elements */}
          <motion.div 
            className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div 
            className="absolute top-1/3 right-20 w-3 h-3 bg-cyan-400 rounded-full opacity-60"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1 }}
          />
          <motion.div 
            className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 2 }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-indigo-400 rounded-full opacity-60"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 0.5 }}
          />
          <motion.div 
            className="absolute top-2/3 left-1/2 w-3 h-3 bg-emerald-400 rounded-full opacity-60"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 1.5 }}
          />
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
          >
            <motion.div 
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <motion.div 
                className="backdrop-blur-sm bg-slate-900/95 rounded-3xl p-8 border border-white/20 shadow-2xl"
                layoutId={`service-${selectedService.id}`}
              >
                {/* Close Button */}
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>

                {/* Modal Content */}
                <motion.div 
                  className="text-center mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="relative mx-auto w-24 h-24 mb-6 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-50"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative z-10 p-6 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-600/30 border-2 border-cyan-400/50 text-cyan-300">
                      {selectedService.icon}
                    </div>
                  </motion.div>

                  <motion.h2 
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {selectedService.name}
                  </motion.h2>
                  <motion.p 
                    className="text-lg font-semibold text-blue-400 mb-6 uppercase tracking-wider"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {selectedService.category}
                  </motion.p>
                </motion.div>

                {/* Description */}
                <motion.div 
                  className="mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Service Overview</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedService.description}
                  </p>
                </motion.div>

                {/* Three Column Layout */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {/* Features */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4">Key Features</h3>
                    <div className="space-y-3">
                      {selectedService.features.map((feature: string, index: number) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center space-x-3"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.9 + index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Benefits */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4">Benefits</h3>
                    <div className="space-y-3">
                      {selectedService.benefits.map((benefit: string, index: number) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center space-x-3"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 1.0 + index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Deliverables */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                  >
                    <h3 className="text-xl font-semibold text-cyan-300 mb-4">Deliverables</h3>
                    <div className="space-y-3">
                      {selectedService.deliverables.map((deliverable: string, index: number) => (
                        <motion.div 
                          key={index} 
                          className="flex items-center space-x-3"
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 1.1 + index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{deliverable}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* CTA in Modal */}
                <motion.div 
                  className="mt-8 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <Link href="/contact">
                    <motion.button 
                      className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-xl cursor-pointer"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Request This Service</span>
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom gradient fade */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </motion.div>
  );
}
