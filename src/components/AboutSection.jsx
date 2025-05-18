import { useState } from 'react';
import { ArrowRight, Shield, Leaf, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left side - Image with animated effect */}
          <div className="w-full md:w-1/2 relative">
            <div 
              className="relative h-80 sm:h-96 md:h-[30rem] rounded-xl overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main image */}
              <img 
                src="https://picsum.photos/800/1000?random=1" 
                alt="JK Contractor airport operations" 
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${isHovered ? 'scale-105' : 'scale-100'}`}
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-full opacity-10"></div>
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-red-600 rounded-full opacity-10"></div>
              
              {/* Stats card */}
              <div className="absolute -right-4 bottom-8 bg-white rounded-lg shadow-xl p-4 w-48">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mr-3">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Experience</p>
                    <p className="font-bold text-gray-800">Since 2005</p>
                  </div>
                </div>
                <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden my-2">
                  <div className="bg-red-600 h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-xs text-gray-500">Trusted by top airports worldwide</p>
              </div>
              
              {/* Accent border */}
              <div className="absolute inset-0 border-4 border-red-600/20 rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-1/2">
            <div className="max-w-lg">
              {/* Section label */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-600 font-medium text-sm mb-4">
                ABOUT JK CONTRACTOR
              </div>
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                We're Redefining <span className="text-red-600">Airport Services</span> with Innovation & Excellence
              </h2>
              
              {/* Description */}
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Since 2005, JK Contractor has been delivering exceptional services to airports worldwide. Our mission is to enhance airport operations through sustainable practices, cutting-edge technology, and unwavering commitment to safety. We bring expertise, reliability, and innovation to every project.
              </p>
              
              {/* Features grid */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mr-3">
                    <Shield className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Safety First</h3>
                    <p className="text-gray-600 text-sm">Rigorous safety protocols in all operations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mr-3">
                    <Leaf className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sustainability</h3>
                    <p className="text-gray-600 text-sm">Eco-friendly solutions for modern airports</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mr-3">
                    <Award className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Certified Quality</h3>
                    <p className="text-gray-600 text-sm">ISO certified processes and operations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mr-3">
                    <div className="w-5 h-5 relative">
                      <div className="absolute inset-0 bg-red-600 rounded-full opacity-20 animate-ping"></div>
                      <div className="absolute inset-0 bg-red-600 rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">24/7 Support</h3>
                    <p className="text-gray-600 text-sm">Round-the-clock operational assistance</p>
                  </div>
                </div>
              </div>
              
              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="group relative inline-flex items-center justify-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg overflow-hidden transition-all hover:bg-red-700">
                  <span className="absolute inset-0 w-full h-full bg-white/10 blur-xl group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
                  <span className="relative flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
                
                <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg transition-all hover:bg-gray-50 hover:border-gray-400">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;