import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Building2 } from 'lucide-react';

export default function ClientCarousel() {
  const clients = [
    { name: "Delhi International Airport Ltd. (DIAL)", logo: "DIAL" },
    { name: "GMR Goa International Airport Ltd. (GGIAL)", logo: "GGIAL" },
    { name: "CISF Unit at IGI Airport, New Delhi", logo: "CISF" },
    { name: "Integrated Solid Waste Management Centre at DIAL", logo: "ISWMC" },
    { name: "Solid Waste Management Works at GGIAL", logo: "SWM" },
    { name: "Municipal Corporation Gurugram, Haryana", logo: "MCG" },
    { name: "Public Works Department (PWD), New Delhi", logo: "PWD" },
    { name: "New Delhi Municipal Council (NDMC), New Delhi", logo: "NDMC" },
    { name: "GMR Airside & Landside Works, IGI Airport, New Delhi", logo: "GMR" },
    { name: "Knight Frank India Pvt. Ltd., Delhi Aero city and Manesar, Haryana", logo: "KF" },
    { name: "Jewar Airport Sweeping Machine Deployment", logo: "JASMD" },
    { name: "Tree Plantation at Delhi Airport", logo: "TPDA" },
    { name: "GMR Telangana (Ertiga Project)", logo: "GMRT" },
    { name: "Marko Line Sonipat Project", logo: "MLSP" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === clients.length - itemsToShow ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [clients.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? clients.length - itemsToShow : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === clients.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-red-600">Our Clients & Infrastructure Hubs</h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-red-100 hover:border-red-400 transition-all duration-300 h-full">
                    <div className="p-6 flex flex-col items-center h-full">
                      <div className="bg-red-50 p-4 rounded-full mb-4 flex items-center justify-center w-16 h-16">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-lg">
                          {client.logo}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-center text-gray-800 mt-2">{client.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-red-600 text-white rounded-full p-2 shadow-lg hover:bg-red-700 transition-colors duration-300"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-red-600 text-white rounded-full p-2 shadow-lg hover:bg-red-700 transition-colors duration-300"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          {Array.from({ length: Math.ceil(clients.length / itemsToShow) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsToShow)}
              className={`mx-1 w-3 h-3 rounded-full ${
                Math.floor(currentIndex / itemsToShow) === index ? 'bg-red-600' : 'bg-red-200'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}