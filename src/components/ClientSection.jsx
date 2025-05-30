import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Building2, Star, CheckCircle } from 'lucide-react';

export default function ModernClientsSection() {
  const clients = [
    { 
      name: "Delhi International Airport Ltd. (DIAL)", 
      logo: "DIAL",
      category: "Aviation",
      project: "Terminal Infrastructure Development",
      year: "2023"
    },
    { 
      name: "GMR Goa International Airport Ltd. (GGIAL)", 
      logo: "GGIAL",
      category: "Aviation",
      project: "Airport Expansion & Maintenance",
      year: "2023"
    },
    { 
      name: "CISF Unit at IGI Airport, New Delhi", 
      logo: "CISF",
      category: "Security",
      project: "Security Infrastructure Setup",
      year: "2022"
    },
    { 
      name: "Municipal Corporation Gurugram", 
      logo: "MCG",
      category: "Municipal",
      project: "Urban Development Projects",
      year: "2023"
    },
    { 
      name: "Public Works Department (PWD)", 
      logo: "PWD",
      category: "Government",
      project: "Public Infrastructure Development",
      year: "2022"
    },
    { 
      name: "New Delhi Municipal Council (NDMC)", 
      logo: "NDMC",
      category: "Municipal",
      project: "City Infrastructure Upgrade",
      year: "2023"
    },
    { 
      name: "Knight Frank India Pvt. Ltd.", 
      logo: "KF",
      category: "Real Estate",
      project: "Commercial Complex Development",
      year: "2022"
    },
    { 
      name: "GMR Telangana (Ertiga Project)", 
      logo: "GMRT",
      category: "Infrastructure",
      project: "Large Scale Construction",
      year: "2023"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const itemsToShow = 4;

  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= clients.length - itemsToShow ? 0 : prevIndex + 1
      );
    }, 4000);
    
    return () => clearInterval(interval);
  }, [clients.length, isAutoplay]);

  const goToPrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? clients.length - itemsToShow : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex >= clients.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  const getCategoryColor = (category) => {
    const colors = {
      Aviation: "bg-blue-100 text-blue-600",
      Security: "bg-green-100 text-green-600",
      Municipal: "bg-purple-100 text-purple-600",
      Government: "bg-orange-100 text-orange-600",
      "Real Estate": "bg-pink-100 text-pink-600",
      Infrastructure: "bg-indigo-100 text-indigo-600"
    };
    return colors[category] || "bg-gray-100 text-gray-600";
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl play  font-bold text-gray-900 mb-4">
            Our <span className="text-red-600">Prestigious</span> Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with leading organizations across aviation, government, and infrastructure sectors to deliver exceptional construction solutions.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="relative mb-10">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="w-1/4 flex-shrink-0 px-3"
                >
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 h-full overflow-hidden">
                    
                    {/* Card Header */}
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 relative">
                      <div className="absolute top-4 right-4">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </div>
                      
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-lg">
                            {client.logo}
                          </span>
                        </div>
                      </div>
                      
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(client.category)}`}>
                        {client.category}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight group-hover:text-red-600 transition-colors duration-300">
                        {client.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {client.project}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">
                          {client.year}
                        </span>
                        <Building2 className="w-4 h-4 text-red-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white border border-gray-200 text-gray-600 rounded-full p-3 shadow-lg hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-300"
            aria-label="Previous clients"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white border border-gray-200 text-gray-600 rounded-full p-3 shadow-lg hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-300"
            aria-label="Next clients"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2">
          {Array.from({ length: Math.ceil(clients.length / itemsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoplay(false);
                setCurrentIndex(index * itemsToShow);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsToShow) === index 
                  ? 'bg-red-600 w-8' 
                  : 'bg-gray-300 hover:bg-red-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}