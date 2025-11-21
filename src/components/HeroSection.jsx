

import { useState, useEffect } from 'react';
import { ArrowRight, Play, Shield, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import v from '../assets/jk.mp4'
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const rotatingTexts = [
    "Airport Operations",
    "Waste Management", 
    "Facility Maintenance",
    "Runway Sweeping"
  ];

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Text rotation effect
    const textTimer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    
    return () => clearInterval(textTimer);
  }, []);

  return (
    <div className="relative w-full lg:h-screen h-[95vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          // src="https://www.w3schools.com/html/mov_bbb.mp4"
          src={v}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-black/10 to-black/10"></div>
        
        {/* Animated particles overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-red-300 rounded-full animate-ping delay-3000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative mt-8 lg:mt-14 h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Welcome Badge */}
          <div className="inline-flex border border-white/30 justify-center items-center gap-3 mb-4 bg-black/20 backdrop-blur-md p-3 px-6 rounded-full md:text-lg  hover:bg-black/30 transition-all duration-300 group">
            <div className="bg-red-600 h-2.5 w-2.5 rounded-full animate-pulse"></div> 
            <span className="bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent font-medium">
              Welcome To JK Contractor
            </span>
          </div>
          
          {/* Headline with rotating text */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight ">
            <span className="block mb-2">Delivering Excellence in</span>
            <span className="block text-red-500 relative h-20 overflow-hidden">
              <span 
                key={currentText}
                className="absolute inset-0 transition-all duration-700 transform animate-in slide-in-from-bottom-10 fade-in"
              >
                {rotatingTexts[currentText]}
              </span>
            </span>
          </h1>
          
          {/* Tagline with typing effect */}
          <div className=" text-xl max-w-3xl mx-auto leading-relaxed">
            <p className="text-gray-50 font-light">
              Safe, Sustainable, and Smart Solutions for Modern Airports
            </p>
            <div className="flex items-center justify-center lg:gap-6 gap-2 mt-4 lg:text-sm text-xs text-gray-100">
              <div className="flex items-center lg:gap-2 gap-0.5">
                <Shield className="w-4 h-4 text-red-500" />
                <span>BCAS Certified</span>
              </div>
              <div className="flex items-center lg:gap-2 gap-0.5">
                <Award className="w-4 h-4 text-red-500" />
                <span>ISO 14001:2015</span>
              </div>
              <div className="flex items-center lg:gap-2 gap-0.5">
                <Zap className="w-4 h-4 text-red-500" />
                <span>Since 2007</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
            href='#service' 
              className="group relative px-10 py-3 bg-gradient-to-r from-red-600 to-red-700 rounded-xl overflow-hidden text-white font-semibold transition-all duration-500 hover:from-red-700 hover:to-red-800 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black transform-gpu"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              
              <span className="relative flex items-center justify-center text-lg">
                Our Services
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            
            <Link 
            to='/about/overview'
              className="group cursor-pointer relative px-10 py-3 bg-transparent border-2 border-white/40 backdrop-blur-sm rounded-xl overflow-hidden text-white font-semibold transition-all duration-500 hover:bg-white/10 hover:border-white/60 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transform-gpu"
            >
              {/* Play icon animation */}
              <span className="absolute inset-0 w-full h-full bg-white/5 blur-xl group-hover:blur-md transition-all duration-500 opacity-0 group-hover:opacity-100"></span>
              
              <span className="relative flex items-center justify-center text-lg">
                
                About Us
              </span>
            </Link>
          </div>

          
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col space-y-4">
        {[
          { value: "500+", label: "Projects Completed", delay: "0ms" },
          { value: "98%", label: "Client Satisfaction", delay: "200ms" },
          { value: "17+", label: "Years Experience", delay: "400ms" }
        ].map((stat, index) => (
          <div 
            key={stat.label}
            className="backdrop-blur-lg bg-white/10 rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-xl group min-w-[140px]"
            style={{ animationDelay: stat.delay }}
          >
            <div className="text-white font-bold text-2xl group-hover:text-red-400 transition-colors duration-300">
              {stat.value}
            </div>
            <div className="text-white/70 text-sm font-medium mt-1">
              {stat.label}
            </div>
            <div className="w-full h-0.5 bg-gradient-to-r from-red-500 to-transparent mt-2 rounded-full"></div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default HeroSection;