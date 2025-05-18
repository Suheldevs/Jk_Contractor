import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Placeholder for video - in a real implementation this would be a video element */}
        <div 
          className={`w-full h-full bg-gradientto-r from-gray-900 to-gray-800 transition-opacity duration-1000 `}
        >
       <video
  src="https://www.w3schools.com/html/mov_bbb.mp4"
  className="w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  Your browser does not support the video tag.
</video>

        </div>
        
        {/* Overlay gradient */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-black/70"></div> */}
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Logo/Brand */}
          <div className="mb-8 inline-flex">
            <div className="relative">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-red-600">
                <span className="text-red-600 font-bold text-3xl">JK</span>
              </div>
              <div className="absolute -right-2 -bottom-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
                SINCE 2005
              </div>
            </div>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            <span className="block">Delivering Excellence in</span>
            <span className="block text-red-400">Airport Operations</span>
          </h1>
          
          {/* Tagline */}
          <p className="mt-6 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Safe, Sustainable, and Smart Solutions for Modern Airports
          </p>
          
          {/* Buttons with blur effect */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button 
              className="group relative px-8 py-4 bg-red-600 rounded-lg overflow-hidden text-white font-medium transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-red-900"
            >
              {/* Blur effect element */}
              <span className="absolute inset-0 w-full h-full bg-white/10 blur-xl group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
              
              <span className="relative flex items-center justify-center">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </button>
            
            <button 
              className="group relative px-8 py-4 bg-transparent border-2 border-white/70 rounded-lg overflow-hidden text-white font-medium transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-900"
            >
              {/* Blur effect element */}
              <span className="absolute inset-0 w-full h-full bg-white/5 blur-xl group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
              
              <span className="relative">
                Contact Us
              </span>
            </button>
          </div>

         
        </div>
      </div>
      
      {/* Floating achievements badges */}
      <div className="absolute bottom-6 right-6 hidden md:flex space-x-4">
        <div className="backdrop-blur-md bg-white/10 rounded-lg p-3 border border-white/20">
          <div className="text-white font-semibold">500+</div>
          <div className="text-white/70 text-sm">Projects</div>
        </div>
        <div className="backdrop-blur-md bg-white/10 rounded-lg p-3 border border-white/20">
          <div className="text-white font-semibold">98%</div>
          <div className="text-white/70 text-sm">Client Satisfaction</div>
        </div>
        <div className="backdrop-blur-md bg-white/10 rounded-lg p-3 border border-white/20">
          <div className="text-white font-semibold">20+</div>
          <div className="text-white/70 text-sm">Years Experience</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;