"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const TaxCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
      title: "Expert Tax Solutions",
      tagline: "Navigate your financial future with confidence and precision",
      gradient: "from-blue-900/70 to-purple-900/50"
    },
    {
      id: 2,
      image: "http://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?_gl=1*pwzxg5*_ga*MTYyMjUyNzU2MS4xNzU0NDk5OTkz*_ga_8JE65Q40S6*czE3NTQ0OTk5OTIkbzEkZzEkdDE3NTQ1MDAxODQkajU5JGwwJGgw",
      title: "Maximize Your Financial Returns",
      tagline: "Every deduction matters, every dollar counts - let us find them all",
      gradient: "from-emerald-900/70 to-blue-900/50"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Strategic Planning",
      tagline: "Smart tax strategies today create wealth for tomorrow",
      gradient: "from-slate-900/70 to-emerald-900/50"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "License Services",
      tagline: "Professional guidance that transforms tax season from stress to success",
      gradient: "from-indigo-900/70 to-slate-900/50"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div className="relative w-full h-[50vh] overflow-hidden bg-gray-900">
      {/* Main carousel container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
            
            {/* Content overlay */}
            <div className="relative z-10 flex items-end justify-center h-full pb-20 px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-15xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto">
                  {slide.tagline}
                </p>
                
                {/* Decorative line */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-12 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play control */}
      <button
        onClick={toggleAutoPlay}
        className="absolute top-20 right-6 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 transition-all duration-300"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Progress bar */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-1 bg-white/20">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default TaxCarousel;