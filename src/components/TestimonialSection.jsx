import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Rajesh Patel",
    position: "Business Owner",
    content:
      "Advocate Ashok Kumar's extensive legal expertise and strategic approach were instrumental in resolving our complex commercial dispute. His methodical preparation and persuasive arguments in court secured a favorable outcome for our business.",
    rating: 5,
    image: "/api/placeholder/64/64",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Family Law Client",
    content:
      "I approached Judge Kumar for my family settlement case. His empathetic understanding of sensitive matters, combined with his deep knowledge of family law, provided me with both comfort and confidence throughout the proceedings.",
    rating: 5,
    image: "/api/placeholder/64/64",
  },
  {
    id: 3,
    name: "Sunil Verma",
    position: "Corporate Client",
    content:
      "Working with Ashok Kumar was a turning point for our corporate legal strategy. His judicial background brings a unique perspective to legal consultations. His advice on regulatory compliance has been invaluable for our organization's growth.",
    rating: 5,
    image: "/api/placeholder/64/64",
  },
  {
    id: 4,
    name: "Anita Desai",
    position: "Property Dispute Client",
    content:
      "Judge Kumar handled my property dispute with remarkable expertise. His attention to detail and thorough understanding of property laws helped me navigate a complicated legal situation with ease and confidence.",
    rating: 5,
    image: "/api/placeholder/64/64",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen size on mount and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    if (isLargeScreen) {
      // Show 3 testimonials on large screens
      return [
        testimonials[currentIndex % testimonials.length],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
      ];
    } else {
      // Show 1 testimonial on small screens
      return [testimonials[currentIndex % testimonials.length]];
    }
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

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${
            i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }`}
        />
      ));
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-red-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from clients who have benefited from Judge Ashok Kumar's
            extensive legal expertise and commitment to justice.
          </p>
        </div>

        {/* Desktop view with multiple testimonials */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} renderStars={renderStars} />
            ))}
          </div>
        </div>

        {/* Mobile view with single testimonials */}
        <div className="lg:hidden">
          <TestimonialCard testimonial={visibleTestimonials[0]} renderStars={renderStars} />
        </div>

        {/* Navigation */}
        <div className="flex justify-center mt-10 space-x-4">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full bg-white shadow-md text-red-600 hover:bg-red-50 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`block w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-red-600" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white shadow-md text-red-600 hover:bg-red-50 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, renderStars }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-4 transition-all hover:shadow-xl relative">
      <div className="absolute -top-5 left-8 bg-red-600 p-2 rounded-full text-white">
        <Quote size={24} />
      </div>
      <div className="mt-4">
        <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
        <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-red-600 text-sm">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}