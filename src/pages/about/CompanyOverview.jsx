import React from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Calendar, 
  Award, 
  Recycle, 
  Shield, 
  Plane, 
  Users, 
  Target,
  CheckCircle,
  Star,
  TreePine,
  Truck,
  Coffee
} from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';
import VisionMission from '../../components/VisionMission';

const CompanyOverview = () => {
  const highlights = [
    {
      icon: Calendar,
      title: "Established 2007",
      description: "17+ years of excellence"
    },
    {
      icon: Award,
      title: "Multi-Certified",
      description: "ISO 14001:2015 & BCAS"
    },
    {
      icon: Plane,
      title: "Airport Specialist",
      description: "Major presence at IGI & Goa"
    },
    {
      icon: Recycle,
      title: "India's First MRF",
      description: "At airports - DGCA approved"
    }
  ];

  const services = [
    { icon: Recycle, name: "Waste Management", color: "text-green-600" },
    { icon: Building2, name: "Housekeeping & Facility Management", color: "text-red-600" },
    { icon: Truck, name: "Sweeping Machines & Cleaning", color: "text-purple-600" },
    { icon: Users, name: "Manpower Solutions", color: "text-orange-600" },
    { icon: TreePine, name: "Horticulture Services", color: "text-emerald-600" },
    { icon: Coffee, name: "Canteen & Food Outlets", color: "text-amber-600" }
  ];

  return (
    <>
     <Breadcrumb
        title="About Us"
        items={[
    { name: "about", path: "/about" },]}
      />
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      {/* <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-red-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              JK CONTRACTOR
            </h1>
            <div className="flex items-center justify-center gap-2 text-red-200 mb-6">
              <MapPin className="w-5 h-5" />
              <p className="text-lg">306, Shahbad Mohd. Pur, Near IGI Airport, New Delhi</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-red-200 mb-8">
              <Mail className="w-5 h-5" />
              <p className="text-lg">jkcontractor786@gmail.com</p>
            </div>
            <p className="text-xl text-red-100 max-w-4xl mx-auto leading-relaxed">
              Professionally managed, multi-certified service provider specializing in 
              environmental sustainability, safety, and operational efficiency in the aviation sector
            </p>
          </div>
        </div>
      </div> */}

      {/* Key Highlights */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-4 mx-auto">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold play text-gray-800 mb-6">About the Company</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                JK Contractor is a professionally managed, multi-certified service provider, established in 2007. 
                We operate with a strong focus on environmental sustainability, safety, operational efficiency, 
                and infrastructure support, especially in the aviation sector.
              </p>
              <p>
                Holding ISO 14001:2015 and BCAS certifications, we adhere to the highest standards in quality, 
                safety, and environmental compliance. Our portfolio prominently features waste management as 
                the core pillar of our services.
              </p>
              <p>
                We have a significant presence at India's busiest airports, including Delhi International Airport 
                and GMR Goa International Airport, where we uphold stringent standards of quality, safety, and 
                environmental responsibility in every project we undertake.
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">ISO 14001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-red-600">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">BCAS Certified</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold">Our Specialization</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Plane className="w-6 h-6 text-red-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Airport Operations</h4>
                  <p className="text-red-100 text-sm">Advanced runway sweeping, FOD elimination, and airfield maintenance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Recycle className="w-6 h-6 text-green-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Waste Management</h4>
                  <p className="text-red-100 text-sm">India's first airport-based MRF with eco-friendly solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Coffee className="w-6 h-6 text-amber-300 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Food & Beverage</h4>
                  <p className="text-red-100 text-sm">Second Cup coffee franchise operations at airports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
<VisionMission/>
        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold play text-gray-800 text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-gray-100 transition-colors`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-sm leading-tight">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100">
          <h2 className="text-3xl font-bold play text-gray-800 text-center mb-8">Key Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">India's First Airport MRF</h3>
                <p className="text-gray-600">Established the first Material Recovery Facility at airports, approved by DGCA, revolutionizing waste management in aviation industry.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Advanced Sweeping Technology</h3>
                <p className="text-gray-600">Deployed state-of-the-art sweeping machines for enhanced efficiency, automation, and eco-friendly airport maintenance operations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CompanyOverview;