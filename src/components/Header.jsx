import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  Info, 
  Briefcase, 
  Grid, 
  Contact, 
  MapPin,
  Truck,
  Image,
  FileText,
  Phone,
  Mail,
  AlignRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import services from '../data/ServiceData';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: <Home size={18} />,
      hasDropdown: false,
    },
    {
      name: 'About',
      path: '/about',
      icon: <Info size={18} />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Company Overview', path: '/about/overview' },
        { name: 'Leadership Team', path: '/about/team' },
        { name: 'Certification', path: '/about/certification' },
      ],
    },
    {
      name: 'Our Services',
      path: '/services',
      icon: <Briefcase size={18} />,
      hasDropdown: true,
      dropdownItems: 
services.map((item)=>{
 return  { name: item.title, path: `/services/${item.slug}`}
}),

    },
    {
      name: 'Projects',
      path: '/project',
      icon: <Grid size={18} />,
      hasDropdown: false,
    },
    {
      name: 'More',
      path: '/more',
      icon: <MapPin size={18} />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Equipment & Machinery', path: '/vehicles', icon: <Truck size={16} /> },
        { name: 'Project Gallery', path: '/gallery', icon: <Image size={16} /> },
        { name: 'Blog & Updates', path: '/blog', icon: <FileText size={16} /> },
      ],
    },
  ];

  return (
    <>

      <header className={`fixed w-full border-b border-slate-400/10 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-zinc-950 backdrop-blur-xl shadow-2xl' 
          : 'bg-gradient-to-r'
      }`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0 group">
              <a href="/" className="flex items-center space-x-3">
                <div className={`relative w-12 h-12 rounded-2xl transition-all duration-300 ${
                  scrolled 
                    ? 'bg-gradient-to-br from-red-600 to-red-600 shadow-lg shadow-red-500/25' 
                    : 'bg-gradient-to-br from-red-600 to-red-600'
                } group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-red-500/40`}>
                  <div className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur-sm" />
                  <div className="relative flex items-center justify-center w-full h-full text-white font-bold text-lg">
                    JK
                  </div>
                  <div className="absolute inset-0 rounded-2xl border border-white/30" />
                </div>
                <div className="block">
                  <div className={`font-bold lg:text-xl  transition-colors duration-300 ${
                    scrolled ? 'text-slate-100' : 'text-white'
                  }`}>
                    JKContractor
                  </div>
                  <div className={`text-xs font-medium transition-colors duration-300 ${
                    scrolled ? 'text-slate-200' : 'text-red-200'
                  }`}>
                    Building Excellence
                  </div>
                </div>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button className={`flex items-center px-4 py-2.5 rounded-xl transition-all duration-300 ${
                      scrolled 
                        ? 'text-slate-100 hover:bg-slate-100 hover:text-slate-900' 
                        : 'text-white hover:bg-white/10 hover:backdrop-blur-sm'
                    } group-hover:scale-105`}>
                      <span className="mr-2">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link to={item.path} className={`flex items-center px-4 py-2.5 rounded-xl transition-all duration-300 ${
                      scrolled 
                        ? 'text-slate-100 hover:bg-slate-100 hover:text-slate-900' 
                        : 'text-white hover:bg-white/10 hover:backdrop-blur-sm'
                    } hover:scale-105`}>
                      <span className="mr-2">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                  
                  {/* Desktop Dropdown */}
                  {item.hasDropdown && (
                    <div className="absolute left-0 mt-2 w-64 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden">
                        <div className="py-2">
                          {item.dropdownItems.map((dropdown) => (
                            <Link
                              key={dropdown.name}
                              to={dropdown.path}
                              className="flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-50 hover:text-red-600 transition-all duration-200"
                            >
                              {dropdown.icon && <span className="mr-3 text-red-500">{dropdown.icon}</span>}
                              <span className="font-medium">{dropdown.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Contact Us Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Contact Us Button - Enhanced */}
              <div className="hidden md:block">
                <Link to="/contact" className={`group block relative overflow-hidden px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40' 
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20'
                }`}>
                  <div className="relative flex items-center space-x-2 z-10">
                    <Contact size={18} />
                    <span>Contact Us</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  type="button"
                  className={`inline-flex items-center justify-center p-2.5 rounded-xl transition-all duration-300 ${
                    scrolled 
                      ? 'text-slate-300 hover:bg-slate-100' 
                      : 'text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? <X className="h-7 w-7" /> : <AlignRight className="h-7 w-7" />}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-xl">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-50 hover:text-red-600 rounded-xl transition-all duration-200"
                          onClick={() => toggleDropdown(item.name)}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-red-500">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {activeDropdown === item.name && (
                          <div className="pl-8 mt-2 space-y-1">
                            {item.dropdownItems.map((dropdown) => (
                              <Link
                                key={dropdown.name}
                                 to={dropdown.path}
                                className="flex items-center px-4 py-2.5 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdown.icon && <span className="mr-3 text-red-400">{dropdown.icon}</span>}
                                <span>{dropdown.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-50 hover:text-red-600 rounded-xl transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="mr-3 text-red-500">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Contact Button */}
                <div className="pt-4 border-t border-slate-200 mt-4">
                  <Link 
                    to="/contact"
                    className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-500 to-red-500 text-white rounded-xl font-semibold shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <Contact className="mr-2" size={18} />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;