import { Shield, Eye, Lock, Users, FileText, Phone, Mail, MapPin, Calendar, AlertCircle, CheckCircle } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const PrivacyPolicyPage = () => {
  const lastUpdated = "December 2024";

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: FileText,
      content: [
        "Personal identification information (Name, email address, phone number, postal address)",
        "Business contact details for client communications",
        "Employment information for recruitment and HR purposes",
        "Site access and security clearance information for airport operations",
        "Vehicle and equipment operation logs",
        "Financial and billing information for service contracts",
        "CCTV footage and security monitoring data at work sites"
      ]
    },
    {
      id: "how-we-use",
      title: "How We Use Your Information",
      icon: Users,
      content: [
        "Providing airport facility management and maintenance services",
        "Processing service contracts and billing",
        "Ensuring security compliance at DIAL, GGIAL, and other airport locations",
        "Managing waste disposal and environmental compliance records",
        "Communicating about service schedules and operational updates",
        "Recruitment and employee management",
        "Regulatory reporting and compliance with BCAS, DGCA, and ISO standards"
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing",
      icon: Shield,
      content: [
        "We share information with airport authorities (DIAL, GGIAL) for security clearance",
        "Regulatory bodies including BCAS, DGCA, and environmental agencies",
        "Our certified partners and subcontractors for service delivery",
        "Legal authorities when required by law or court orders",
        "Emergency services for safety and security purposes",
        "We never sell personal information to third parties for marketing"
      ]
    },
    {
      id: "data-security",
      title: "Data Security Measures",
      icon: Lock,
      content: [
        "ISO 14001:2015 certified data management practices",
        "Secure storage of employee and client records",
        "Encrypted transmission of sensitive information",
        "Regular security audits and compliance checks",
        "Limited access to personal data on need-to-know basis",
        "Secure disposal of confidential documents and data",
        "BCAS-compliant security protocols for airport operations"
      ]
    }
  ];

  const contactInfo = {
    address: "306, Shahbad Mohd. Pur, Near IGI Airport, New Delhi",
    email: "jkcontractor786@gmail.com",
    phone: "+91-XXXXX XXXXX"
  };

  return (
    <>
    <Breadcrumb
                   title='Privacy Policy'
                   items={[  
            { name: "Privacy", path: "/privacy-policy" }]}
            />

    <div className="min-h-screen bg-gray-50">
      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <div className="flex items-start">
              <AlertCircle className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  About This Privacy Policy
                </h3>
                <p className="text-blue-800 leading-relaxed">
                  JK Contractor, established in 2007, is committed to protecting your privacy. 
                  As a multi-certified service provider specializing in airport operations, waste management, 
                  and facility maintenance at India's busiest airports including Delhi International Airport (DIAL) 
                  and GMR Goa International Airport (GGIAL), we handle sensitive information in compliance with 
                  BCAS, DGCA, and ISO 14001:2015 standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div key={section.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-red-50 to-red-100 px-8 py-6">
                    <div className="flex items-center">
                      <div className="bg-red-500 p-3 rounded-full mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  <div className="px-8 py-6">
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-500 p-3 rounded-full mr-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Data Retention Policy
              </h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4">
                We retain personal information for different periods based on the type of data and legal requirements:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Employee Records:</strong> As per labor law requirements and company policy</li>
                <li><strong>Client Information:</strong> Duration of contract plus 7 years for audit purposes</li>
                <li><strong>Security Clearance Data:</strong> As mandated by BCAS and airport security protocols</li>
                <li><strong>Environmental Compliance Records:</strong> As required by ISO 14001:2015 standards</li>
                <li><strong>Financial Records:</strong> As per GST and tax regulations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-500 p-3 rounded-full mr-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Your Privacy Rights
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Access Your Data</h4>
                    <p className="text-gray-600">Request copies of your personal information</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Update Information</h4>
                    <p className="text-gray-600">Correct any inaccurate personal data</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Data Portability</h4>
                    <p className="text-gray-600">Receive your data in a structured format</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Withdrawal of Consent</h4>
                    <p className="text-gray-600">Opt-out of non-essential data processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
        </>
  );
};

export default PrivacyPolicyPage;