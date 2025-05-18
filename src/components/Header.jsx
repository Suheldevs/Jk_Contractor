import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  FileText
} from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
        { name: 'Leadership Team', path: '/about/leadership' },
        { name: 'Certification', path: '/about/certification' },
      ],
    },
    {
      name: 'Our Services',
      path: '/services',
      icon: <Briefcase size={18} />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Waste Management', path: '/services/waste-management' },
        { name: 'Housekeeping & Facilities', path: '/services/housekeeping' },
        { name: 'Transport & Logistics', path: '/services/transport' },
        { name: 'Sweeping Machines & Cleaning Solutions', path: '/services/cleaning-solutions' },
        { name: 'Food & Beverage', path: '/services/food' },
        { name: 'Civil & Horticulture', path: '/services/civil' },
        { name: 'Other Services', path: '/services/other' },
      ],
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: <Grid size={18} />,
      hasDropdown: false,
    },
    {
      name: 'More',
      path: '/more',
      icon: <MapPin size={18} />,
      hasDropdown: true,
      dropdownItems: [
        { name: 'Vehicles & Equipment', path: '/more/vehicles', icon: <Truck size={16} /> },
        { name: 'Gallery', path: '/more/gallery', icon: <Image size={16} /> },
        { name: 'Blog', path: '/more/blog', icon: <FileText size={16} /> },
      ],
    },
    {
      name: 'Contact Us',
      path: '/contact',
      icon: <Contact size={18} />,
      hasDropdown: false,
    },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-red-700 shadow-lg' : 'bg-red-600'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-red-600 font-bold text-xl">
                RS
              </div>
              <span className="ml-3 text-white font-bold text-xl hidden sm:block">RedService</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button 
                    className="flex items-center px-3 py-2 text-white hover:bg-red-500 rounded-md transition-colors"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span className="mr-1">{item.icon}</span>
                    <span>{item.name}</span>
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    to={item.path} 
                    className="flex items-center px-3 py-2 text-white hover:bg-red-500 rounded-md transition-colors"
                  >
                    <span className="mr-1">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                )}
                
                {/* Dropdown for desktop */}
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg overflow-hidden z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 origin-top-left">
                    <div className="py-1">
                      {item.dropdownItems.map((dropdown) => (
                        <Link
                          key={dropdown.name}
                          to={dropdown.path}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700"
                        >
                          {dropdown.icon && <span className="mr-2">{dropdown.icon}</span>}
                          {dropdown.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-red-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 text-white hover:bg-red-500 rounded-md"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.name ? 'transform rotate-180' : ''}`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="pl-6 mt-1 space-y-1">
                        {item.dropdownItems.map((dropdown) => (
                          <Link
                            key={dropdown.name}
                            to={dropdown.path}
                            className="flex items-center px-3 py-2 text-sm text-red-100 hover:bg-red-600 rounded-md"
                            onClick={() => setIsOpen(false)}
                          >
                            {dropdown.icon && <span className="mr-2">{dropdown.icon}</span>}
                            {dropdown.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center px-3 py-2 text-white hover:bg-red-500 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;