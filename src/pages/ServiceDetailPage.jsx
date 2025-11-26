import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Check, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Award,
  Users,
  Clock,
  Shield
} from 'lucide-react';
import services from '../data/ServiceData';
import Breadcrumb from '../components/Breadcrumb';
import VisionMission from '../components/VisionMission';

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    const foundService = services.find(s => s.slug === slug);
    setService(foundService);
  }, [slug]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-xl font-medium text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  const allImages = [service.image, ...(service.images || [])];

  return (
    <>
    <Breadcrumb
               title={service.title}
               items={[  
        { name: "Services", path: "/" }]}
        />
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      

      {/* Hero Section */}
      <div className="bg-white pt-14 pb-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-10 px-4 sm:px-6 lg:px-8">
          {/* Service Main Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-full h-80  object-cover"
            />
          </div>
          
          <p className="text-lg sm:text-xl italic text-gray-700 leading-relaxed max-w-4xl">
            " {service.description} "

            {/* <div className='mt-10'>
                <button className='bg-green-600 text-white rounded-md px-6 py-3'>Learn more</button>
            </div> */}
          </p>
        </div>
      </div>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Content */}
          <div className="lg:col-span-2">
            
            {/* Additional Images Gallery */}
            {/* {service.images && service.images.length > 0 && (
              <div className="mb-12">
                <h3 className="text-3xl play font-bold text-gray-900 mb-6">Other Details</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {service.images.map((img, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={img} 
                        alt={`${service.title} ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )} */}

            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-300">
              {['features', 'benefits', 'steps'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-semibold rounded-t-lg transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              {activeTab === 'features' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="text-gray-700 font-medium text-lg">{benefit}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'steps' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Process Steps</h3>
                  <div className="space-y-6">
                    {service.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1 pt-2">
                          <p className="text-gray-700 font-medium text-lg">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-green-100 mb-6">Contact us today for a free consultation and quote.</p>
                <Link to='/contact' className="w-full bg-white text-green-600 font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                  Contact Us
                </Link>
              </div>

              {/* Contact Info */}
              {/* <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Need Help?</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm">Call us directly</p>
                    <p className="font-semibold text-lg">+91 98765 43210</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Email us</p>
                    <p className="font-semibold">info@company.com</p>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Working hours</p>
                    <p className="font-semibold">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div> */}

              {/* Related Services */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Services</h3>
                <div className="space-y-3">
                  {services.filter(s => s.id !== service.id).slice(0, 3).map((relatedService) => (
                    <Link
                      key={relatedService.id}
                      to={`/services/${relatedService.slug}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${relatedService.color}`}>
                          {relatedService.icon}
                        </div>
                        <span className="font-medium group-hover:text-green-600 transition-colors duration-300">
                          {relatedService.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <VisionMission/>
    </div>
    </>
  );
}