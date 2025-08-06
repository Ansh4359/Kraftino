"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      text: "TaxaGo team is a highly professional, experienced, and knowledgeable. It is always satisfying to work with them.",
      company: "Stantech Pvt. Ltd"
    },
    {
      text: "Their expertise in financial advisory services has been instrumental in our company growth and strategic planning.",
      company: "Swarashtra Import & Export"
    },
    {
      text: "TaxaGo commitment to excellence and attention to detail sets them apart from other consulting firms in the industry.",
      company: "Gaurav Freight Forwader"
    },
    {
      text: "Working with TaxaGo has transformed our approach to business strategy. Their insights are invaluable.",
      company: "Kraftino Paper Industry"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-16 bg-gray-50">
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Clients Love Us</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative bg-white rounded-lg shadow-lg p-8 md:p-12 mx-4 md:mx-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Content */}
          <div className="text-center min-h-32 flex flex-col justify-center">
            <div className="transition-opacity duration-700 ease-in-out">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>
              <div className="flex justify-center items-center">
                <div className="text-sm text-gray-500 font-medium">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;