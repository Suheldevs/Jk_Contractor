import React, { useState } from 'react';
import { 
  Award, 
  Shield, 
  FileText, 
  CheckCircle, 
  Calendar,
  Building2,
  Users,
  Recycle,
  Lock,
  CreditCard,
  UserCheck,
  Globe,
  Star,
  Eye,
  Download
} from 'lucide-react';

const CertificatesPage = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "ISO 14001:2015",
      subtitle: "Environmental Management System",
      description: "International standard for environmental management systems, demonstrating our commitment to environmental sustainability and regulatory compliance.",
      icon: Globe,
      category: "Quality Management",
      issueDate: "2023",
      validUntil: "2026",
      color: "bg-green-500",
      status: "Active"
    },
    {
      id: 2,
      title: "BCAS Certification",
      subtitle: "Security Programme & Security Clearance",
      description: "Bureau of Civil Aviation Security certification ensuring compliance with aviation security standards and protocols.",
      icon: Shield,
      category: "Security Clearance",
      issueDate: "2023",
      validUntil: "2025",
      color: "bg-red-500",
      status: "Active"
    },
    {
      id: 3,
      title: "GST Registration",
      subtitle: "Goods and Services Tax Certificate",
      description: "Valid GST registration certificate for legal business operations and tax compliance across India.",
      icon: FileText,
      category: "Tax Compliance",
      issueDate: "2017",
      validUntil: "Active",
      color: "bg-blue-500",
      status: "Active"
    },
    {
      id: 4,
      title: "DGCA Approval",
      subtitle: "Directorate General of Civil Aviation",
      description: "Official DGCA approval for operating Material Recovery Facility (MRF) at airports - India's first of its kind.",
      icon: Award,
      category: "Aviation Authority",
      issueDate: "2022",
      validUntil: "2027",
      color: "bg-red-600",
      status: "Active"
    },
    {
      id: 5,
      title: "MCD Approval",
      subtitle: "Municipal Corporation of Delhi",
      description: "Municipal approval for waste management operations and environmental services within Delhi jurisdiction.",
      icon: Building2,
      category: "Municipal Authority",
      issueDate: "2021",
      validUntil: "2026",
      color: "bg-orange-500",
      status: "Active"
    },
    {
      id: 6,
      title: "ESIC Registration",
      subtitle: "Employee State Insurance Corporation",
      description: "Valid ESIC registration ensuring social security and medical care for employees as per Indian labor laws.",
      icon: Users,
      category: "Employee Welfare",
      issueDate: "2018",
      validUntil: "Active",
      color: "bg-purple-500",
      status: "Active"
    }
  ];

  const policies = [
    {
      title: "Waste Management Policy",
      description: "Comprehensive policy for eco-friendly waste disposal, segregation, and sustainable practices.",
      icon: Recycle,
      color: "text-green-600"
    },
    {
      title: "Safety Policy",
      description: "Ensuring safe working environment through adherence to safety protocols and risk prevention.",
      icon: Shield,
      color: "text-red-600"
    },
    {
      title: "Quality Assurance Policy",
      description: "Commitment to delivering superior service quality across all operational domains.",
      icon: Star,
      color: "text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-12 h-12 text-red-200" />
              <h1 className="text-5xl font-bold">Certifications & Approvals</h1>
            </div>
            <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is validated through multiple certifications, 
              approvals, and compliance standards ensuring quality, safety, and reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">6+</div>
              <div className="text-gray-600">Active Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">17+</div>
              <div className="text-gray-600">Years of Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">Regulatory Adherence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">3</div>
              <div className="text-gray-600">Core Policies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Certifications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each certification represents our unwavering commitment to maintaining the highest standards 
            in quality, safety, environmental responsibility, and operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 cursor-pointer group"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 ${cert.color} rounded-xl flex items-center justify-center`}>
                  <cert.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-600 font-medium">{cert.status}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-red-600 font-medium mb-3">{cert.subtitle}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>
              
              <div className="flex items-center justify-between text-sm">
                <div>
                  <span className="text-gray-500">Valid Until: </span>
                  <span className="font-medium text-gray-900">{cert.validUntil}</span>
                </div>
                <div className="flex items-center gap-2 text-red-600 group-hover:text-red-700 transition-colors">
                  <Eye className="w-4 h-4" />
                  <span className="font-medium">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Policies Section */}
        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Policies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape our operations and ensure consistent delivery of excellence across all services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {policies.map((policy, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <policy.icon className={`w-8 h-8 ${policy.color}`} />
                  <h3 className="text-lg font-bold text-gray-900">{policy.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Highlight */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-red-100 rounded-3xl p-8 border border-red-200">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Star className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Industry First Achievement</h3>
              <p className="text-gray-700 leading-relaxed">
                JK Contractor is proud to operate <strong>India's first Material Recovery Facility (MRF) at airports</strong>, 
                approved by DGCA. This pioneering initiative revolutionizes waste management practices in the aviation 
                industry and sets new benchmarks for environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${selectedCert.color} rounded-xl flex items-center justify-center`}>
                    <selectedCert.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedCert.title}</h2>
                    <p className="text-red-600 font-medium">{selectedCert.subtitle}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="font-medium text-gray-900">Status: </span>
                  <span className="text-green-600">{selectedCert.status}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="font-medium text-gray-900">Issue Date: </span>
                  <span className="text-gray-600">{selectedCert.issueDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="font-medium text-gray-900">Valid Until: </span>
                  <span className="text-gray-600">{selectedCert.validUntil}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-500" />
                  <span className="font-medium text-gray-900">Category: </span>
                  <span className="text-gray-600">{selectedCert.category}</span>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="font-bold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{selectedCert.description}</p>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Certificate
                </button>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;