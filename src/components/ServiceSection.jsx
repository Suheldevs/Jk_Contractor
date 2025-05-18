import React, { useState } from 'react';
import {  
  ArrowRight, 
  ChevronRight
} from 'lucide-react';
import services from '../data/ServiceData';
const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'airport', name: 'Airport Services' },
    { id: 'facility', name: 'Facility Management' },
    { id: 'specialized', name: 'Specialized Services' }
  ];
  

  
  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category.includes(activeFilter));

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-red-50 rounded-full mb-4">
            <span className="text-red-600 font-medium text-sm">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive <span className="text-red-600">Airport Solutions</span></h2>
          <p className="text-gray-600 text-lg">
            JK Contractor delivers a wide range of specialized services designed to enhance airport operations, 
            maintain facilities, and ensure sustainable practices across all areas.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category.id 
                  ? 'bg-red-600 text-white shadow-lg shadow-red-200' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: hoveredCard === service.id ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'transform 0.3s ease'
              }}
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Icon */}
                <div className={`absolute top-4 right-4 ${service.color} text-white p-3 rounded-lg shadow-lg`}>
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                {/* Read More Link */}
                <a 
                  href={`/services/${service.id}`} 
                  className="inline-flex items-center font-medium text-red-600 hover:text-red-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Navigating to service: ${service.title}`);
                  }}
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                
                {/* Decorative corner element */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-50 transform rotate-45 translate-x-8 translate-y-8 opacity-50"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-16 text-center">
          <a 
            href="/services" 
            className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-200/40 group"
            onClick={(e) => {
              e.preventDefault();
              console.log("Navigating to all services page");
            }}
          >
            View All Services
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          
          {/* Background Pattern */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-24 bg-red-50 rounded-full blur-3xl opacity-70"></div>
        </div>
        
        {/* Services Overview */}
        <div className="mt-24 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-red-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Services?</h3>
              <p className="mb-6">
                At JK Contractor, we deliver more than just services - we provide comprehensive solutions 
                designed to optimize operations, enhance safety, and promote sustainability.
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span>ISO certified quality management</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span>Eco-friendly sustainable practices</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span>Trained and certified professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <span>24/7 support and emergency response</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="/api/placeholder/800/600" 
                alt="JK Contractor Service Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-black/70 to-transparent flex items-end">
                <div className="p-8">
                  <div className="text-white font-bold text-3xl mb-2">20+ Years</div>
                  <div className="text-white/80">Of service excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;