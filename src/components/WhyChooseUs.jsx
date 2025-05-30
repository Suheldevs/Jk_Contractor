import { Shield, Users, Clock, Award, CheckCircle, Star } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "ISO Certified Quality",
      description: "Certified quality management systems ensuring excellence in every project"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Trained and certified professionals with years of industry experience"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock support and emergency response services"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "Sustainable practices and environmentally responsible solutions"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "20+", label: "Years Experience" },
    { number: "50+", label: "Expert Team Members" }
  ];

  return (
    <section className=" bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Left Content Section */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-red-600 to-red-700 text-white">
              <div className="mb-8">
                <h3 className="text-4xl play lg:text-4xl font-bold mb-4">
                  Why Choose JK Construction?
                </h3>
                <p className="text-red-100 text-lg leading-relaxed">
                  We deliver more than just construction services - we provide comprehensive solutions 
                  designed to exceed expectations, ensure safety, and build lasting relationships.
                </p>
              </div>
              
              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-red-100 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Get Free Consultation
              </button>
            </div>
            
            {/* Right Image Section */}
            <div className="relative">
              <img 
                src="https://picsum.photos/800/600?random=2" 
                alt="JK Construction Team at Work" 
                className="w-full h-full object-cover min-h-[500px]"
              />
              
              {/* Overlay with Stats */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                          {stat.number}
                        </div>
                        <div className="text-white/80 text-sm">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white rounded-full p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <div className="text-sm font-semibold text-gray-900">4.9/5</div>
                </div>
                <div className="text-xs text-gray-500 text-center">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;