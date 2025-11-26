import React, { useState } from 'react';
import {  
  ArrowRight, 
  ChevronRight
} from 'lucide-react';
import services from '../data/ServiceData';
import {Link} from 'react-router-dom'
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
    <section className="lg:py-10 py-14 bg-gray-50" id='service'>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-green-50 rounded-full mb-4">
            <span className="text-green-600 font-medium text-sm">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl play font-bold text-gray-900 mb-4">Comprehensive <span className="text-green-600">Airport Solutions</span></h2>
          <p className="text-gray-600 text-lg">
            JK Contractor delivers a wide range of specialized services designed to enhance airport operations, 
            maintain facilities, and ensure sustainable practices across all areas.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {serviceCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === category.id 
                  ? 'bg-green-600 text-white shadow-lg shadow-green-200' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.slice(0,6).map((service, index) => (
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
              <div className=" p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{service.description}</p>
                
                {/* Read More Link */}
                <Link  
                  to={`/services/${service.slug}`} 
                  className="inline-flex items-center font-medium text-green-600 hover:text-green-700 transition-colors"
                 
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                {/* Decorative corner element */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gray-50 transform rotate-45 translate-x-8 translate-y-8 opacity-50"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        {/* <div className="mt-10 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg shadow-green-200/40 group"
          >
            View All Services
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-24 bg-green-50 rounded-full blur-3xl opacity-70"></div>
        </div> */}
        
        {/* Services Overview */}
        
      </div>
    </section>
  );
};

export default ServicesSection;