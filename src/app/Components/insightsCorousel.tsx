'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, User } from 'lucide-react';

const InsightsCarousel = () => {
  // Sample data based on the HTML structure
  const insights = [
    {
      id: 1,
      title: "New Regime for overseas investment from India",
      date: "08/17/2022",
      author: "admin",
      category: ["india", "Uday Ved"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=533&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "Accounting acquirer vs legal acquirer – US GAAP under a SPAC transaction",
      date: "12/17/2022",
      author: "admin",
      category: ["india", "Navin Sankhala"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=533&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "India GST Update – Recommendations of the 48th GST council meeting",
      date: "12/17/2022",
      author: "admin",
      category: ["Amitabh Khemka", "india"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=533&fit=crop",
      link: "#"
    },
    {
      id: 4,
      title: "2023 Outlook- Technology Sector",
      date: "01/17/2023",
      author: "admin",
      category: ["india", "Vaibhav Manek"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=533&fit=crop",
      link: "#"
    },
    {
      id: 5,
      title: "India Union Budget 2023 – Wishlist and Expectations",
      date: "02/17/2023",
      author: "admin",
      category: ["india", "Uday Ved"],
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&h=533&fit=crop",
      link: "#"
    },
    {
      id: 6,
      title: "India Economic Survey 2022 – 2023",
      date: "02/17/2023",
      author: "admin",
      category: ["india", "Uday Ved"],
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=533&fit=crop",
      link: "#"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const slidesToShow = isMobile ? 1 : 3;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 1 >= insights.length ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, insights.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? insights.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex + 1 >= insights.length ? 0 : currentIndex + 1);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentIndex + i) % insights.length;
      slides.push(insights[index]);
    }
    return slides;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 drop-shadow-xl/50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Insights</h2>
        <div className="flex items-center justify-center">
          <div className="h-px bg-gray-300 flex-1 max-w-20"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full mx-4"></div>
          <div className="h-px bg-gray-300 flex-1 max-w-20"></div>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 ${
            isMobile ? '-ml-2' : ''
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <button
          onClick={goToNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 ${
            isMobile ? '-mr-2' : ''
          }`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* Slides Container */}
        <div className={`flex gap-6 ${isMobile ? 'px-8' : 'px-12'}`}>
          {getVisibleSlides().map((insight, index) => (
            <div key={`${insight.id}-${index}`} className="flex-1 min-w-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Date */}
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    {insight.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 line-clamp-2 hover:text-blue-600 transition-colors">
                    <a href={insight.link} className="block">
                      {insight.title}
                    </a>
                  </h3>

                  {/* Author */}
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
        >
          <span>View More</span>
          <ChevronRight className="w-4 h-4 ml-2" />
        </a>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {insights.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Control
      <div className="text-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
        </button>
      </div> */}
    </div>
  );
};

export default InsightsCarousel;