import Link from 'next/link';
import React from 'react';

const OfficesComponent = () => {
  const offices = [
    {
      type: "Head Office",
      name: "TaxaGO Consultancy Services",
      address: "KH-827, NEAR BANK OF BARODA, BAMANHERI, MUZAFFARNAGAR",
      state: "Uttar Pradesh - 251001",
      email: "taxagocs@gmail.com",
      phones: ["9999473062", "8475956557"],
      isHead: true
    },
    {
      type: "Branch Office",
      name: "TaxaGO Consultancy Services",
      address: "KH-236, GREEN COLONY, AGRAULA, LONI",
      state: "GHAZIABAD - 201102",
      email: "taxagocs@gmail.com",
      phones: ["9625316526", "8475956557"],
      isHead: false
    },
    {
      type: "Branch Office",
      name: "TaxaGO Consultancy Services",
      address: "Plot No-117, Vishal Enclave, Shivam Garden, Narela",
      state: "North West Delhi - 110040",
      email: "taxagocs@gmail.com",
      phones: ["Contact for phone numbers"],
      isHead: false
    },
    {
      type: "Branch Office",
      name: "TaxaGO Consultancy Services",
      address: "F-101, Jai Vijay Nagri-2 Yashwant Gaurav, Nilemore Road, Nallasopara",
      state: "West Palghar - 401203",
      email: "taxagocs@gmail.com",
      phones: ["Contact for phone numbers"],
      isHead: false
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-teal-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
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
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-teal-300 animate-pulse">
              Our Offices
            </h1>
            
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
              {/* Hero Image/Icon */}
              <div className="lg:w-1/2">
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center justify-center h-64">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-300 text-lg">Nationwide Presence</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="lg:w-1/2 text-left">
                <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500">
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    TaxaGO Consultancy Services operates from multiple strategic locations 
                    across India to serve our clients better. Our offices are equipped with 
                    modern facilities and staffed with experienced professionals.
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    From our head office in Muzaffarnagar to our branch offices in 
                    Ghaziabad, Delhi, and Palghar, we ensure comprehensive coverage 
                    and personalized service for all your tax and consultancy needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Visit Us At Any Of Our Convenient Locations Across India
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </div>

          {/* Offices Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {offices.map((office, index) => (
              <div key={index} className={`backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 ${office.isHead ? 'ring-2 ring-emerald-500/30' : ''}`}>
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${office.isHead ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-gradient-to-r from-blue-500 to-cyan-500'} rounded-lg flex items-center justify-center mr-4`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m0 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`text-2xl font-semibold ${office.isHead ? 'text-emerald-300' : 'text-white'}`}>
                      {office.type}
                    </h3>
                    {office.isHead && (
                      <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full mt-1">
                        Headquarters
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{office.name}</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {office.address}
                    </p>
                    <p className="text-gray-300 font-medium mt-1">
                      {office.state}
                    </p>
                  </div>
                  
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center mb-2">
                      <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-300">{office.email}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-300">
                        {office.phones.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200 mb-8">
                Find Us On The Map
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Head Office Map */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-emerald-300">Head Office - Muzaffarnagar</h3>
      </div>
      <div className="bg-gray-700/50 rounded-lg h-64 overflow-hidden border border-white/10">
        <iframe 
          src="http://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.0930432866207!2d77.70239857622659!3d29.513647043523342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1de2b8255717%3A0xdc9e97b03e1611f7!2sTaxaGo%20Consultancy%20services!5e0!3m2!1sen!2sin!4v1753388544053!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="KNAV Head Office Location"
        />
      </div>
    </div>

              {/* Branch Offices Combined Map */}
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m0 0h2M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
        </div>
        <h3 className="text-xl font-semibold text-emerald-300">Branch Office - New Delhi</h3>
      </div>
      <div className="bg-gray-700/50 rounded-lg h-64 overflow-hidden border border-white/10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2479.0239508144355!2d77.70290721875598!3d29.512295577884256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKH-827%20%2CNEAR%20BANK%20OF%20BARODA%2C%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20BAMANHERI%20%2CMUZAFFARNAGAR%20!5e0!3m2!1sen!2sin!4v1753388136139!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="KNAV Head Office Location"
        />
      </div>
    </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link href="/contact">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-110 hover:from-emerald-500 hover:to-teal-500 cursor-pointer">
              <span className="relative z-10">Contact Us Today</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-emerald-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-teal-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-cyan-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0.5s'}}></div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
};

export default OfficesComponent;