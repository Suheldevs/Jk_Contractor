import {
  User,
  Mail,
  Phone,
  MapPin,
  Award,
  Users,
  Building2,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "ANAND KUMAR",
      position: "MANAGING DIRECTOR",
      image: "/api/placeholder/300/300",
      email: "anand@company.com",
      phone: "+91 98765 43210",
    },
    {
      name: "DRON SOLANKI",
      position: "VICE PRESIDENT",
      image: "/api/placeholder/300/300",
      email: "dron@company.com",
      phone: "+91 98765 43213",
    },
    {
      name: "SANDEEP KUMAR",
      position: "CHIEF EXECUTIVE OFFICER",
      image: "/api/placeholder/300/300",
      email: "sandeep@company.com",
      phone: "+91 98765 43216",
    },
    {
      name: "VIPIN RATHEE",
      position: "HOD (ADMIN)",
      image: "/api/placeholder/300/300",
      email: "vipin@company.com",
      phone: "+91 98765 43211",
    },
    {
      name: "RAMESH KUMAR",
      position: "GENERAL MANAGER",
      image: "/api/placeholder/300/300",
      email: "ramesh@company.com",
      phone: "+91 98765 43214",
    },
    {
      name: "SHYAM SINGH",
      position: "PROJECT MANAGER GGIAL OPERATIONS",
      image: "/api/placeholder/300/300",
      email: "shyam@company.com",
      phone: "+91 98765 43217",
    },
    {
      name: "HEMANT KUMAR",
      position: "P.R.O.",
      image: "/api/placeholder/300/300",
      email: "hemant@company.com",
      phone: "+91 98765 43212",
    },
    {
      name: "ROBIN MISHRA",
      position: "OPERATION & MAINTENANCE MANAGER",
      image: "/api/placeholder/300/300",
      email: "robin@company.com",
      phone: "+91 98765 43215",
    },
    {
      name: "PRADEEP JHA",
      position: "EXECUTIVE MANAGER",
      image: "/api/placeholder/300/300",
      email: "pradeep@company.com",
      phone: "+91 98765 43218",
    },
  ];

  const stats = [
    { icon: Users, label: "Team Members", value: "50+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Building2, label: "Airports Served", value: "25+" },
    { icon: MapPin, label: "Cities", value: "10+" },
  ];

  return (
    <>
      <Breadcrumb
        title="Meet Our Expert Team"
        items={[{ name: "Leadership Team", path: "/team" }]}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Team Members Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
                >
                  <div className="relative">
                    <div className="w-full h-56 bg-gray-200 flex items-center justify-center overflow-hidden">
                      <User className="w-24 h-24 text-gray-400" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-red-600 font-semibold mb-4 text-sm">
                      {member.position}
                    </p>

                    {/* <div className="space-y-3">
                    <div className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                      <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                      <span className="text-sm">{member.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                      <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                      <span className="text-sm">{member.phone}</span>
                    </div>
                  </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;
