


import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Users,
  Zap,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import axios from "axios";
import services from "../data/ServiceData";

export default function ContactUsPage() {
  const backend_url = import.meta.env.VITE_BACKEND_URL || 'https://jk-contractor-backend.onrender.com'
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone:'',
    service:'',
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState(false);
  const [activeMethod, setActiveMethod] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
      setFormStatus({loading:true})
      const response = await axios.post(`${backend_url}/inquiry/save`, formState);
      console.log(response)
      setFormStatus({submitted:true})
      alert('Your Form Has Been Submitted!')
      setFormState({
        name: "",
        email: "",
        phone:'',
        service:'',
        message: "",
      })
    }
    catch(err){
      setError('Something Went Wrong , Try Later !')
    }
    finally{
      setFormStatus({loading:false})
    }
  };

  const breadcrumbItems = [
    { name: "Contact Us", path: "/contact" },
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Call Us",
      content: "+91 9560424031",
      details: "Monday to Friday, 9am to 6pm",
      link:'tel:+91 9560424031',
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Email Us",
      content: "jkcontractor786@gmail.com",
      details: "We'll respond within 24 hours",
      link:'mailto:jkcontractor786@gmail.com',
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100"
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Visit Us",
      content: "306, SHAHBAD MOHD .PUR, NEAR IGI AIRPORT, NEW DELHI",
      details: "Find us on Google Maps",
      link:'https://maps.app.goo.gl/wEXetkDwPhHMhEpU7',
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "500+", text: "Happy Clients" },
    { icon: <MessageCircle className="w-6 h-6" />, number: "24/7", text: "Support" },
    { icon: <Zap className="w-6 h-6" />, number: "< 24h", text: "Response Time" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Breadcrumb */}
      <Breadcrumb
        title="Contact Us"
        items={breadcrumbItems}
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-orange-500">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Build Something 
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Ready to transform your vision into reality? Get in touch with our expert team today.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm opacity-80">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 -mt-10 relative z-10">
          {contactMethods.map((method, index) => (
            <a 
              aria-label={method.title}
              href={method.link}
              key={index}
              className={`relative group transform transition-all duration-500 hover:scale-105 ${
                activeMethod === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setActiveMethod(index)}
              onMouseLeave={() => setActiveMethod(null)}
            >
              <div className={`bg-gradient-to-br ${method.bgGradient} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center border border-white/50 backdrop-blur-sm`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${method.gradient} text-white mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                  {method.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {method.title}
                </h3>
                <p className="text-lg text-gray-700 font-medium mb-2">
                  {method.content}
                </p>
                <p className="text-sm text-gray-600">{method.details}</p>
                
                {/* Hover indicator */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r ${method.gradient.replace('from-', 'group-hover:border-').replace('to-', 'group-hover:border-')} transition-all duration-300 opacity-0 group-hover:opacity-100`}></div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-100 to-orange-100 rounded-full transform translate-x-20 -translate-y-20 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full transform -translate-x-16 translate-y-16 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Send us a Message
                </h3>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {formStatus.submitted ? (
                <div className="flex flex-col items-center justify-center h-96 text-center">
                  <div className="bg-gradient-to-r from-green-400 to-green-500 rounded-full p-6 mb-8 animate-bounce">
                    <CheckCircle className="h-16 w-16 text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-lg text-gray-600 mb-8 max-w-md">
                    Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormStatus({ submitted: false, loading: false })}
                    className="group flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Send Another Message
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-xl text-center font-medium">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300 group-hover:border-gray-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300 group-hover:border-gray-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 items-center gap-6">
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="^[6-9]\d{9}$" 
                        title="Phone Number should be 10 digits and start with 6 to 9" 
                        inputMode="numeric" 
                        maxLength="10"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300 group-hover:border-gray-300"
                        placeholder="Enter 10 digit number"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300 group-hover:border-gray-300 bg-white"
                        required
                      >
                        <option value="">Select a Service</option>
                        {services.map((item, i) => (
                          <option key={i} value={item.title}>
                            {item.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:ring-4 focus:ring-red-100 focus:border-red-400 transition-all duration-300 group-hover:border-gray-300 resize-none"
                      placeholder="Tell us about your project requirements..."
                      required
                    />
                  </div>

                  <div>
                    <button
                      disabled={formStatus.loading}
                      type="submit"
                      className="group w-full flex items-center justify-center px-8 py-5 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {formStatus.loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className={`ml-3 h-5 w-5 transition-all duration-300 ${
                            isHovered ? 'translate-x-1 rotate-12' : ''
                          }`} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Business Info */}
        
        </div>

        {/* Map Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Located conveniently near IGI Airport. Drop by for a face-to-face consultation.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9 w-full h-96 lg:h-[500px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.442408029244!2d77.06615637408423!3d28.5564750220151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ba5cb180599%3A0xd9a5b31232ceadaf!2sJK%20Contractor%2C%20365%20Shahabad%20Mohd.%20Pur%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1748574582617!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              
              {/* Map overlay info */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center text-gray-800">
                  <MapPin className="h-5 w-5 text-red-500 mr-2" />
                  <div>
                    <p className="font-semibold text-sm">JK Contractor</p>
                    <p className="text-xs text-gray-600">Near IGI Airport</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}