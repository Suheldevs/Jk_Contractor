import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import services from "../data/ServiceData";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-white overflow-hidden">
      <div className="relative pt-14 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-5">
                <div className="flex-shrink-0 group">
                  <Link to="/" className="flex items-center space-x-3">
                    <div
                      className={`relative w-12 h-12 rounded-2xl transition-all duration-300 bg-gradient-to-br from-red-600 to-red-600 shadow-lg shadow-orange-500/25 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-orange-500/40`}
                    >
                      <div className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur-sm" />
                      <div className="relative flex items-center justify-center w-full h-full text-white font-bold text-lg">
                        JK
                      </div>
                      <div className="absolute inset-0 rounded-2xl border border-white/30" />
                    </div>
                    <div className="block">
                      <div
                        className={`font-bold text-xl transition-colors duration-300 `}
                      >
                        JKContractor
                      </div>
                      <div
                        className={`text-xs font-medium transition-colors duration-300 `}
                      >
                        Building Excellence
                      </div>
                    </div>
                  </Link>
                </div>
                {/* <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6"></div> */}
                <p className="text-gray-300 leading-relaxed text-sm mt-4">
                  Leading the future of infrastructure with innovative solutions
                  and sustainable practices. Excellence in every project since
                  2005.
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-gray-200 mb-4">
                  Connect With Us
                </h4>
                <div className="flex space-x-3">
                  {[
                    { Icon: Facebook, label: "Facebook" },
                    { Icon: Twitter, label: "Twitter" },
                    { Icon: Instagram, label: "Instagram" },
                    { Icon: Linkedin, label: "LinkedIn" },
                  ].map(({ Icon, label }, index) => (
                    <a
                      key={index}
                      href="#"
                      aria-label={label}
                      className="group relative w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 hover:from-red-600 hover:to-red-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/25"
                    >
                      <Icon
                        size={18}
                        className="text-red-600 group-hover:text-white transition-colors duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-2xl play font-bold text-white mb-6">
                Our Services
              </h3>
              <ul className="space-y-3">
               {services.slice(0,6)?.map((service, index) => (
                  <li key={index} className="group">
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-2"
                    >
                      <div className="w-1 h-1 bg-white rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                      <span className="text-sm group-hover:text-red-400">
                        {service.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl play font-bold text-white mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "About Us", path: "/about" },
                  // { name: "Our Team", path: "/team" },
                  // { name: "Careers", path: "/careers" },
                  { name: "Projects", path: "/project" },
                  { name: "Equipment & Machinary", path: "/vehicles" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "Blogs", path: "/blog" },
                  { name: "Our Team", path: "/about/team" },
               
                ].map((link, index) => (
                  <li key={index} className="group">
                    <Link
                      to={link.path}
                      className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group-hover:translate-x-2"
                    >
                      <div className="w-1 h-1 bg-white rounded-full mr-3 group-hover:w-2 group-hover:h-2 transition-all duration-300"></div>
                      <span className="text-sm group-hover:text-red-400">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Map */}
            <div>
              <h3 className="text-2xl play font-bold text-white mb-6">
                Get In Touch
              </h3>

              {/* Contact Info */}
              <ul className="space-y-3">
                <li className="flex items-center group">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:from-red-500/30 group-hover:to-red-600/30 transition-all duration-300">
                    <Phone size={16} className="text-red-500" />
                  </div>
                  <a
                    href="tel:+911234567890"
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm"
                  >
                    +91 123 456 7890
                  </a>
                </li>
                <li className="flex items-center group">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:from-red-500/30 group-hover:to-red-600/30 transition-all duration-300">
                    <Mail size={16} className="text-red-500" />
                  </div>
                  <a
                    href="mailto:jkcontractor786@gmail.com"
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-sm"
                  >
                    jkcontractor786@gmail.com
                  </a>
                </li>
                <li>
                  <iframe
                  className="h-32 w-full p-0 lg:mt-0 mt-2  rounded-2xl"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.442408029244!2d77.06615637408423!3d28.5564750220151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ba5cb180599%3A0xd9a5b31232ceadaf!2sJK%20Contractor%2C%20365%20Shahabad%20Mohd.%20Pur%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1748574582617!5m2!1sen!2sin"
                   allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </li>
              </ul>

              {/* Interactive Map */}
              {/* <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700/50">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-200 text-sm">Our Location</h4>
                  <a
                    href="https://maps.google.com/?q=New+Delhi+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-red-400 hover:text-red-300 transition-colors duration-300 text-xs"
                  >
                    View on Maps
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
                <div className="w-full h-32 bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-lg flex items-center justify-center border border-red-500/20">
                  <div className="text-center">
                    <MapPin size={24} className="text-red-500 mx-auto mb-2" />
                    <p className="text-gray-400 text-xs">New Delhi, India</p>
                    <p className="text-gray-500 text-xs">Click "View on Maps" above</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-14 pt-8 border-t border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                <p className="text-gray-400 text-sm text-center md:text-left">
                  © {new Date().getFullYear()} JK Contractor. All rights
                  reserved.
                </p>
                <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
                <p className="text-gray-500 text-xs">
                  Building Tomorrow's Infrastructure Today
                </p>
              </div>

              <div className="flex items-center space-x-6">
                {[
                  // { name: "Terms of Service", path: "/terms" },
                  { name: "Privacy Policy", path: "/privacy-policy" },
                  { name: "Admin Login", path: "/https://jkcontractor-admin.netlify.app/" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-red-400 transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
