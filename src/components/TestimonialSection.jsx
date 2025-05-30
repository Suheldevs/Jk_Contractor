import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Testimonial data - updated for contractor business
const testimonials = [
  {
    id: 1,
    name: "Rajesh Patel",
    position: "Business Owner",
    content:
      "JK Construction's extensive expertise and strategic approach were instrumental in completing our commercial project on time. Their methodical planning and quality execution secured excellent results for our business.",
    image: "/api/placeholder/64/64",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Homeowner",
    content:
      "I approached JK Construction for my home renovation. Their understanding of our needs, combined with their deep construction knowledge, provided me with both comfort and confidence throughout the project.",
    image: "/api/placeholder/64/64",
  },
  {
    id: 3,
    name: "Sunil Verma",
    position: "Corporate Client",
    content:
      "Working with JK Construction was a turning point for our infrastructure development. Their experience brings a unique perspective to construction projects. Their advice on building compliance has been invaluable.",
    image: "/api/placeholder/64/64",
  },
  {
    id: 4,
    name: "Anita Desai",
    position: "Property Developer",
    content:
      "JK Construction handled our complex building project with remarkable expertise. Their attention to detail and thorough understanding of construction standards helped us complete the project smoothly.",
    image: "/api/placeholder/64/64",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Get two testimonials for the right side
  const getVisibleTestimonials = () => {
    return [
      testimonials[currentIndex % testimonials.length],
      testimonials[(currentIndex + 1) % testimonials.length],
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  const handlePrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="space-y-6">
            
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-red-50 rounded-full mb-4">
            <span className="text-red-600 font-medium text-sm">
            Testimonials
            </span>
          </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              What Our Clients Say About{" "}
              <span className="text-red-600">JK Construction</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Trusted, professional, and dedicated construction experts delivering outstanding results with personalized service and unwavering commitment to clients.
            </p>

            {/* Navigation */}
            <div className="flex items-center space-x-4 pt-4">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white shadow-md text-red-600 hover:bg-red-50 transition-colors border border-gray-200"
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`block w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-red-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white shadow-md text-red-600 hover:bg-red-50 transition-colors border border-gray-200"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Side Testimonials */}
          <div className="space-y-6">
            {visibleTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={`${testimonial.id}-${currentIndex}`} 
                testimonial={testimonial} 
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, isFirst }) {
  return (
    <div className={`p-8 rounded-lg transition-all duration-500 ${
      isFirst ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900 shadow-md'
    }`}>
      <p className={`text-lg italic mb-6 leading-relaxed ${
        isFirst ? 'text-gray-200' : 'text-gray-600'
      }`}>
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className={`font-bold text-lg ${
            isFirst ? 'text-white' : 'text-gray-900'
          }`}>
            {testimonial.name}
          </h4>
          <p className={`text-sm ${
            isFirst ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {testimonial.position}
          </p>
        </div>
      </div>
    </div>
  );
}