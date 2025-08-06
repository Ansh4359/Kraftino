"use client"

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion, Variants } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
}

export default function TaxaTeam() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const teamMembers = [
    {
      id: 1,
      name: "Sanjeev Kumar Singh",
      role: "Founder",
      bio: "Over 10 years of extensive experience in Accounting, Finance, Taxation, and Business Management, both in India and internationally",
      image: "https://res.cloudinary.com/dicxlz6xi/image/upload/v1753941990/IMG-20250730-WA0059_vsv4xq.jpg",
      skills: ["BCom", "MCom", "MBA", "CISA"]
    },
    {
      id: 2,
      name: "Sampa Singh",
      role: "Business Consultant",
      bio: "2 years of hands-on experience in Business Administration and Operations, driving efficiency and supporting organizational growth",
      image: "https://res.cloudinary.com/dicxlz6xi/image/upload/v1753944750/IMG_20250731_122142_brpkvy.jpg",
      skills: ["BA", "MA", "MBA"]
    },
    {
      id: 3,
      name: "Mohammad Faraz",
      role: "Co-Founder and Tax Consultant",
      bio: "3 Years of Work Experience in Field of Account Taxation and Financing and other Corporate Laws",
      image: "https://res.cloudinary.com/dicxlz6xi/image/upload/v1753941989/IMG-20250730-WA0060_kdqtmx.jpg",
      skills: ["BCom"]
    },
    {
      id: 4,
      name: "Gauri Singh",
      role: "Tax Consultant",
      bio: "3 years of experience in Taxation Litigation and Business Administration, with a focus on compliance, dispute resolution, and operational management",
      image: "https://res.cloudinary.com/dicxlz6xi/image/upload/v1753941989/IMG-20250730-WA0058_yej2ka.jpg",
      skills: ["Business Strategy", "Market Analysis", "Client Relations"]
    },
    {
      id: 5,
      name: "Kundan Kumar",
      role: "Tax & Compliance Consultant",
      bio: "3 Years of Work Experience in Field of Account Taxation and Financing and other Corporate Laws",
      image: "https://res.cloudinary.com/dicxlz6xi/image/upload/v1753941989/IMG-20250730-WA0076_wjfgct.jpg",
      skills: ["BCom", "LLB"]
    },
    {
      id: 6,
      name: "Deepak Jain",
      role: "Chartered Accountant",
      bio: "15 years of comprehensive experience in Accounting, Taxation, and Finance, with a strong track record in financial planning, compliance, and strategic management",
      image: "https://res.cloudinary.com/dicxlz6xi/image/upload/v1753941989/IMG-20250730-WA0079_a6bzdf.jpg",
      skills: ["BCom", "CA"]
    },
    {
      id: 7,
      name: "Khalef Abdulla Khalef",
      role: "Tax Consultant - CPA(TANZANIA)",
      bio: "8 Year of Work Experience in the field of account Taxation and Finance",
      image: "https://res.cloudinary.com/dd3fmtksn/image/upload/v1754487495/IMG-20250805-WA0002_avhbrf.jpg",
      skills: ["CPA"]
    }
  ];

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const cardHoverVariants: Variants = {
    rest: {
      scale: 1,
      rotateY: 0,
      z: 0
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const headerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    }
  };

  const floatingElementVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
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
        damping: 25,
        duration: 0.4
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeOut"
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
      transition: { duration: 0.3 }
    }
  };

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl"
          variants={floatingElementVariants}
          animate="animate"
        ></motion.div>
        <motion.div 
          className="absolute top-40 right-32 w-24 h-24 bg-purple-500 rounded-full blur-2xl"
          variants={floatingElementVariants}
          animate="animate"
          style={{ animationDelay: '1s' }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"
          variants={floatingElementVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-20 w-28 h-28 bg-cyan-500 rounded-full blur-2xl"
          variants={floatingElementVariants}
          animate="animate"
          style={{ animationDelay: '3s' }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-10 w-36 h-36 bg-emerald-500 rounded-full blur-3xl"
          variants={floatingElementVariants}
          animate="animate"
          style={{ animationDelay: '4s' }}
        ></motion.div>
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
      <motion.div 
        className="relative z-10 px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <motion.div 
            className="text-center mb-20"
            variants={headerVariants}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300"
              animate={shouldReduceMotion ? {} : {
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Our TaxaGO Team
            </motion.h1>
            
            <motion.div 
              className="max-w-3xl mx-auto"
              variants={itemVariants}
            >
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
                <p className="text-lg leading-relaxed text-gray-300">
                  Meet the visionary minds driving our global tax advisory initiatives. Our diverse team of experts brings together decades of experience in international taxation, financial compliance, and cross-border business solutions.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Team Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                initial="rest"
                animate="rest"
                onClick={() => openModal(member)}
                className="group relative backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: 1000
                }}
              >
                <motion.div variants={cardHoverVariants}>
                  {/* Profile Image */}
                  <div className="relative mb-6 mx-auto w-32 h-32">
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.img 
                      src={member.image}
                      alt={member.name}
                      className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white/20"
                      whileHover={{ 
                        borderColor: "rgb(34 211 238 / 0.5)",
                        scale: 1.05
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <motion.h3 
                      className="text-xl font-bold text-white mb-2"
                      whileHover={{ color: "rgb(103 232 249)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {member.name}
                    </motion.h3>
                    <motion.p 
                      className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider"
                      whileHover={{ scale: 1.05 }}
                    >
                      {member.role}
                    </motion.p>
                  </div>
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
                backgroundColor: "rgb(255 255 255 / 0.1)",
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Work with TaxaGO Experts?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our team is equipped to handle your most complex international tax matters and guide your global financial and compliance transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button 
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-2xl cursor-pointer overflow-hidden"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 25px 50px -12px rgba(6 182 212 / 0.25)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                  >
                    <span className="relative z-10">Send Your Resume</span>
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-md"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating elements */}
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className={`absolute w-${[4, 3, 2, 5, 3][index]} h-${[4, 3, 2, 5, 3][index]} bg-${['blue', 'cyan', 'purple', 'indigo', 'emerald'][index]}-400 rounded-full opacity-60`}
              style={{
                top: `${[25, 33, 66, 75, 66][index]}%`,
                left: `${[2.5, 90, 25, 66, 50][index]}%`
              }}
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence mode="wait">
        {selectedMember && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            <motion.div 
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              layoutId={`member-${selectedMember.id}`}
            >
              <div className="backdrop-blur-sm bg-slate-900/95 rounded-3xl p-8 border border-white/20 shadow-2xl">
                {/* Close Button */}
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white"
                  whileHover={{ 
                    backgroundColor: "rgb(255 255 255 / 0.2)",
                    scale: 1.1 
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={20} />
                </motion.button>

                {/* Modal Content */}
                <motion.div 
                  className="text-center mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="relative mx-auto w-40 h-40 mb-6"
                    layoutId={`image-${selectedMember.id}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-50"></div>
                    <img 
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="relative z-10 w-full h-full rounded-full object-cover border-4 border-cyan-400/50"
                    />
                  </motion.div>

                  <motion.h2 
                    className="text-3xl font-bold text-white mb-2"
                    layoutId={`name-${selectedMember.id}`}
                  >
                    {selectedMember.name}
                  </motion.h2>
                  <motion.p 
                    className="text-lg font-semibold text-blue-400 mb-6 uppercase tracking-wider"
                    layoutId={`role-${selectedMember.id}`}
                  >
                    {selectedMember.role}
                  </motion.p>
                </motion.div>

                {/* Bio */}
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">About</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </motion.div>

                {/* Skills */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-xl font-semibold text-cyan-300 mb-4">Qualifications</h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {selectedMember.skills.map((skill, skillIndex) => (
                      <motion.span 
                        key={skillIndex}
                        className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600/30 to-cyan-600/30 text-cyan-300 rounded-full border border-cyan-500/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: 0.5 + skillIndex * 0.1,
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}
