import React from 'react'

function About() {
  return (
    <div className='min-h-screen bg-gray-100 py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Content Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left Side - Content */}
          <div className='space-y-8'>
            <div>
              <h1 className='text-4xl md:text-5xl font-bold text-gray-900 font-sans leading-tight'>
                About <span className='text-blue-600'>KRAFTINO</span>
              </h1>
              <div className='w-24 h-1 bg-blue-600 mt-4'></div>
            </div>
            
            <div className='space-y-6 text-gray-700 font-sans leading-relaxed'>
              <p className='text-lg'>
               TaxaGO Consultancy Services is a top rated accounting, taxation, Financial and Investment advisory firm entrusted by individuals and leading organizations to deliver effective accounting, advisory, and financial solutions with diligence, vision, and responsive client service. At TaxaGo, complex issues are solved through teamwork, putting our collective experience and expertise to work for you. Recognized as a category leader for client satisfaction, we serve clients locally, regionally, and globally.
              </p>
              
              <p className='text-lg'>
                With our multi-cultural experienced teams and shared knowledge of cross-border laws and regulations, we assist in filing mandated audit reports, tax filings and advise on all tax transactions resulting from M&A across locations.
              </p>
              
              <p className='text-lg'>
                Our gamut of advisory services includes technical accounting, client accounting and advisory services, valuations, fairness opinions, readiness for big organizational shifts and transaction advisory.
              </p>
            </div>

            {/* Stats or Features */}
            <div className='grid grid-cols-2 gap-8 pt-8'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-blue-600 font-sans'>500+</div>
                <div className='text-gray-600 font-medium font-sans'>Clients Served</div>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-blue-600 font-sans'>15+</div>
                <div className='text-gray-600 font-medium font-sans'>Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className='relative'>
            <div className='bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl'>
              <div className='space-y-6 text-white'>
                <h2 className='text-2xl font-bold font-sans'>Our Mission</h2>
                <p className='text-blue-100 font-sans leading-relaxed'>
                  To provide exceptional accounting and advisory services that empower businesses to achieve sustainable growth and navigate complex financial landscapes with confidence.
                </p>
                
                <div className='space-y-4 pt-4'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-3 h-3 bg-blue-300 rounded-full'></div>
                    <span className='font-sans'>Global Expertise</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-3 h-3 bg-blue-300 rounded-full'></div>
                    <span className='font-sans'>Multi-cultural Teams</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-3 h-3 bg-blue-300 rounded-full'></div>
                    <span className='font-sans'>Comprehensive Solutions</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-3 h-3 bg-blue-300 rounded-full'></div>
                    <span className='font-sans'>Cross-border Expertise</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className='absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20'></div>
            <div className='absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-30'></div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className='mt-20'>
          <h2 className='text-3xl font-bold text-center text-gray-900 font-sans mb-12'>
            Our Core Services
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6'>
                <div className='w-6 h-6 bg-blue-600 rounded'></div>
              </div>
              <h3 className='text-xl font-bold text-gray-900 font-sans mb-4'>Tax Services</h3>
              <p className='text-gray-600 font-sans leading-relaxed'>
                Comprehensive tax planning, compliance, and advisory services across multiple jurisdictions.
              </p>
            </div>

            <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6'>
                <div className='w-6 h-6 bg-blue-600 rounded'></div>
              </div>
              <h3 className='text-xl font-bold text-gray-900 font-sans mb-4'>Assurance</h3>
              <p className='text-gray-600 font-sans leading-relaxed'>
                Independent audit and assurance services to ensure accuracy and compliance.
              </p>
            </div>

            <div className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
              <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6'>
                <div className='w-6 h-6 bg-blue-600 rounded'></div>
              </div>
              <h3 className='text-xl font-bold text-gray-900 font-sans mb-4'>Advisory</h3>
              <p className='text-gray-600 font-sans leading-relaxed'>
                Strategic business advisory services including valuations and transaction support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;