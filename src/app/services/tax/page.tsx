'use client';

import React, { useState, useCallback, lazy, Suspense, memo } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';


interface TaxService {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
  benefits?: string[];
}


// Lazy load icons for better initial load
const CalendarDays = lazy(() => import('lucide-react').then(mod => ({ default: mod.CalendarDays })));
const DollarSign = lazy(() => import('lucide-react').then(mod => ({ default: mod.DollarSign })));
const Banknote = lazy(() => import('lucide-react').then(mod => ({ default: mod.Banknote })));
const TrendingUp = lazy(() => import('lucide-react').then(mod => ({ default: mod.TrendingUp })));
const Receipt = lazy(() => import('lucide-react').then(mod => ({ default: mod.Receipt })));
const FileBarChart2 = lazy(() => import('lucide-react').then(mod => ({ default: mod.FileBarChart2 })));

// Memoized service card to avoid re-renders
const ServiceCard = memo(function ServiceCard({ service, onClick, index }: { service: TaxService, onClick: (s: TaxService) => void, index: number }) {
  return (
    <motion.div
      onClick={() => onClick(service)}
      whileHover={{ scale: 1.07, boxShadow: '0 12px 40px rgba(22, 255, 223, 0.2)' }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, duration: 0.45, type: 'spring', stiffness: 120 }}
      className="group relative backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl cursor-pointer select-none"
    >
      <div className="relative mb-6 mx-auto w-20 h-20 flex items-center justify-center">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          layoutId={`tax-service-bg-${service.id}`}
        />
        <motion.div
          className="relative z-10 p-4 rounded-full bg-gradient-to-r from-green-600/20 to-cyan-600/20 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300 text-cyan-300 group-hover:text-white"
          whileHover={{ scale: 1.15 }}
        >
          <Suspense fallback={<div className="w-8 h-8 bg-gray-500 rounded-full animate-pulse" />}>
            {service.icon}
          </Suspense>
        </motion.div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
          {service.name}
        </h3>
        <p className="text-sm font-semibold text-green-400 mb-4 uppercase tracking-wider">
          {service.category}
        </p>
        <p className="text-sm text-gray-300 line-clamp-3 group-hover:text-gray-200 transition-colors duration-200">
          {service.description}
        </p>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </motion.div>
  );
});

export default function TaxaTaxServices() {
  const [selectedService, setSelectedService] = useState<TaxService | null>(null);

  const taxServices: TaxService[] = [
    {
      id: 1,
      name: "Income Tax Filing",
      category: "Individual",
      description: "Expert preparation and filing of individual income tax returns with maximum deductions and compliance assurance.",
      icon: <CalendarDays size={32} />,
      features: ["Tax return preparation", "Deduction optimization", "E-filing services", "Amendment support"],
      benefits: ["Maximize refunds", "Ensure compliance", "Save time", "Expert guidance"]
    },
    {
      id: 2,
      name: "Business Tax Planning",
      category: "Corporate",
      description: "Strategic tax planning for businesses to minimize liability and optimize financial performance.",
      icon: <DollarSign size={32} />,
      features: ["Tax strategy development", "Quarterly planning", "Entity structuring", "Compliance management"],
      benefits: ["Reduce tax burden", "Improve cash flow", "Strategic planning", "Risk mitigation"]
    },
    {
      id: 3,
      name: "GST Compliance",
      category: "Compliance",
      description: "Complete GST registration, filing, and compliance services for businesses of all sizes.",
      icon: <Banknote size={32} />,
      features: ["GST registration", "Monthly/Quarterly returns", "Input credit optimization", "Audit support"],
      benefits: ["Full compliance", "Penalty avoidance", "Credit optimization", "Peace of mind"]
    },
    {
      id: 4,
      name: "Tax Advisory",
      category: "Consulting",
      description: "Professional tax advisory services for complex tax situations and strategic planning.",
      icon: <TrendingUp size={32} />,
      features: ["Tax consultation", "Strategic advice", "Dispute resolution", "Planning services"],
      benefits: ["Expert guidance", "Risk reduction", "Optimal strategies", "Long-term planning"]
    },
    {
      id: 5,
      name: "Audit & Assurance",
      category: "Audit",
      description: "Comprehensive audit services to ensure accuracy and compliance with tax regulations.",
      icon: <Receipt size={32} />,
      features: ["Internal audits", "Tax audits", "Compliance reviews", "Risk assessment"],
      benefits: ["Ensure accuracy", "Identify issues", "Improve processes", "Regulatory compliance"]
    },
    {
      id: 6,
      name: "Financial Reporting",
      category: "Reporting",
      description: "Professional financial reporting services to meet regulatory requirements and business needs.",
      icon: <FileBarChart2 size={32} />,
      features: ["Financial statements", "Regulatory reporting", "Management reports", "Analysis services"],
      benefits: ["Accurate reporting", "Regulatory compliance", "Business insights", "Decision support"]
    }
  ];

  // Keyboard accessibility to close modal with Esc key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSelectedService(null);
    }
  }, []);

  React.useEffect(() => {
    if (selectedService) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedService, handleKeyDown]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden select-none">
      {/* Keep your background animation & gradients - consider using CSS animation or lightweight libraries for animated background */}

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-green-300 to-cyan-400 animate-pulse">
            Tax Services
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
              <p className="text-lg leading-relaxed text-gray-300 max-w-xl mx-auto">
                Comprehensive tax consultancy to keep you compliant, optimize liabilities, and help your business thrive.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {taxServices.map((service: TaxService, i: number) => (
            <ServiceCard key={service.id} service={service} onClick={setSelectedService} index={i} />
          ))}
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl max-w-4xl mx-auto hover:bg-white/10 transition-all duration-400">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Tax Strategy?
            </h2>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let Taxago provide expert guidance for your tax needs—maximize savings and stay worry-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-cyan-600 text-white font-semibold rounded-full shadow-xl hover:shadow-cyan-500/30 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-500/40">
                  <span className="relative z-10">Get Started Today</span>
                </button>
              </Link>
              <Link href="/services">
                <button className="group relative px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-300 font-semibold rounded-full hover:bg-cyan-500/10 transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-500/40">
                  <span className="relative z-10">View All Services</span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal with smooth open/close */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.22 } }}
            exit={{ opacity: 0, transition: { duration: 0.18 } }}
            onClick={() => setSelectedService(null)} // click outside closes modal
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-slate-900/95 rounded-3xl p-8 border border-white/20 shadow-2xl"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0, transition: { duration: 0.32, type: 'spring', stiffness: 110 } }}
              exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
              onClick={e => e.stopPropagation()} // prevent closing on modal body click
              tabIndex={-1}
              aria-modal="true"
              role="dialog"
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.3 } }}
              >
                <div className="relative mx-auto w-24 h-24 mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full blur-md opacity-50"></div>
                  <div className="relative z-10 p-6 rounded-full bg-gradient-to-r from-green-600/30 to-cyan-600/30 border-2 border-cyan-400/50 text-cyan-300">
                    {selectedService.icon}
                  </div>
                </div>

                <h2 id="modal-title" className="text-3xl font-bold text-white mb-2">
                  {selectedService.name}
                </h2>
                <p className="text-lg font-semibold text-green-400 mb-6 uppercase tracking-wider">
                  {selectedService.category}
                </p>
              </motion.div>

              {/* Description & columns similarly animated */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.3 } }}
              >
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">Service Description</h3>
                <p id="modal-description" className="text-gray-300 text-lg leading-relaxed">
                  {selectedService.description}
                </p>
              </motion.div>

              {/* Features */}
              {selectedService.features && (
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.3 } }}
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedService.features.map((feature: string, index: number) => (
                      <motion.div
                        key={index}
                        className="flex items-center text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Benefits */}
              {selectedService.benefits && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } }}
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedService.benefits.map((benefit: string, index: number) => (
                      <motion.div
                        key={index}
                        className="flex items-center text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ... rest of modal content ... (keep as before) */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
