"use client"

import React, { useState } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export default function TaxaTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sanjeev Kumar Singh",
      role: "Founder & Investment Consultant",
      bio: "Over 10 years of extensive experience in Accounting, Finance, Taxation, and Business Management, both in India and internationally",
      image: "https://res.cloudinary.com/dicxlz6xi/image/upload/v1753941990/IMG-20250730-WA0059_vsv4xq.jpg",
      skills: ["BCom", "MCom", "MBA","CISA"]
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
    }
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
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
              Our TaxaGO Team
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
                <p className="text-lg leading-relaxed text-gray-300">
                  Meet the visionary minds driving our global tax advisory initiatives. Our diverse team of experts brings together decades of experience in international taxation, financial compliance, and cross-border business solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                onClick={() => openModal(member)}
                className="group relative backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20 cursor-pointer"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Profile Image */}
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white/20 group-hover:border-cyan-400/50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">
                    {member.role}
                  </p>
                  
                  {/* Click indicator */}
                  <div className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                    Click to view bio
                  </div>
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
                Ready to Work with TaxaGO Experts?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our team is equipped to handle your most complex international tax matters and guide your global financial and compliance transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 hover:from-blue-500 hover:to-cyan-500 cursor-pointer">
                  <span className="relative z-10">Send Your Resume</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
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
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="backdrop-blur-sm bg-slate-900/95 rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
              >
                <X size={20} />
              </button>

              {/* Modal Content */}
              <div className="text-center mb-6">
                <div className="relative mx-auto w-40 h-40 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-50"></div>
                  <img 
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="relative z-10 w-full h-full rounded-full object-cover border-4 border-cyan-400/50"
                  />
                </div>

                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-lg font-semibold text-blue-400 mb-6 uppercase tracking-wider">
                  {selectedMember.role}
                </p>
              </div>

              {/* Bio */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">About</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-4">Qualifications</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {selectedMember.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600/30 to-cyan-600/30 text-cyan-300 rounded-full border border-cyan-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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