import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function SimpleClientsSection() {
  const clients = [
    { 
      name: "Delhi International Airport Ltd. (DIAL)", 
      logo: "DIAL"
    },
    { 
      name: "GMR Goa International Airport Ltd. (GGIAL)", 
      logo: "GGIAL"
    },
    { 
      name: "CISF Unit at IGI Airport, New Delhi", 
      logo: "CISF"
    },
    { 
      name: "Municipal Corporation Gurugram", 
      logo: "MCG"
    },
    { 
      name: "Public Works Department (PWD)", 
      logo: "PWD"
    },
    { 
      name: "New Delhi Municipal Council (NDMC)", 
      logo: "NDMC"
    },
    { 
      name: "Knight Frank India Pvt. Ltd.", 
      logo: "KF"
    },
    { 
      name: "GMR Telangana (Ertiga Project)", 
      logo: "GMRT"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive items count
  const getItemsToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4; // lg screens
      if (window.innerWidth >= 768) return 3;  // md screens
      if (window.innerWidth >= 640) return 2;  // sm screens
      return 1; // mobile
    }
    return 4;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(getItemsToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex >= clients.length - itemsToShow ? 0 : prevIndex + 1
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }, [clients.length, itemsToShow]);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 mr-2" />
            Our Trusted Partners
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Prestigious</span> Clients
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations across various sectors
          </p>
        </div>

        {/* Clients Slider */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out" 
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
              width: `${(clients.length / itemsToShow) * 100}%`
            }}
          >
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / clients.length}%` }}
              >
                <div className="group bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-green-200 p-4 sm:p-6 text-center min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
                  
                  {/* Logo */}
                  <div className="flex items-center justify-center mb-3 sm:mb-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm sm:text-lg">
                        {client.logo}
                      </span>
                    </div>
                  </div>
                  
                  {/* Company Name */}
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base leading-tight group-hover:text-green-600 transition-colors duration-300 line-clamp-2">
                    {client.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          {Array.from({ length: Math.ceil(clients.length / itemsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsToShow)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsToShow) === index 
                  ? 'bg-green-600 w-6 sm:w-8' 
                  : 'bg-gray-300 hover:bg-green-300 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}