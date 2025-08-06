
import React from 'react';

export default function OurPracticesSection() {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          {/* Section Title */}
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Our Practices</h2>
          
          {/* Decorative Divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="w-20 h-0.5 bg-gray-300"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full mx-3"></div>
            <div className="w-20 h-0.5 bg-gray-300"></div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Tax Column */}
          <div className="space-y-6">
            {/* Tax Image */}
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2226&q=80" 
                alt="Tax services - calculator and financial documents" 
                className="w-full h-48 object-cover rounded-lg shadow-sm"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Accounting and Taxation</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Our team combines deep expertise in Federal and State Tax compliance to guide you through complex tax regulations and help you stay compliant always.
            </p>
            
            <a 
              href="#" 
              className="inline-block font-semibold text-orange-500 underline hover:text-orange-600 transition-colors duration-200 text-sm"
            >
              Explore
            </a>
          </div>

          {/* Advisory Column */}
          <div className="space-y-6">
            {/* Advisory Image */}
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                alt="Advisory services - business analytics and charts" 
                className="w-full h-48 object-cover rounded-lg shadow-sm"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Legal & Corporate Compliance</h3>
            
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Gain a competitive edge with our advisory services. We assist you in assessing, evaluating, and analyzing your business interests, providing valuable insights necessary to navigate the intricate landscape of the business environment.
            </p>
            
            <a 
              href="#" 
              className="inline-block font-semibold text-orange-500 underline hover:text-orange-600 transition-colors duration-200 text-sm"
            >
              Explore
            </a>
          </div>
        </div>
        <div>
          Financial Taxation
        </div>
        <div>
          Buisness Consultancy
        </div>

      {/* Financial Advisory */}
      

      </div>
    </div>
  );
}