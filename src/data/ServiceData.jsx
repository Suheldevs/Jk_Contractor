  import { 
    Trash2, 
    Home, 
    Truck, 
    Sprout, 
    Droplet, 
    Coffee, 
    Building2, 
    Settings, 
    ArrowRight, 
    ChevronRight
  } from 'lucide-react';
  const services = [
    {
      id: 1,
      title: 'Waste Management',
      description: 'Comprehensive waste disposal, recycling, and sustainable waste management solutions for airports and commercial facilities.',
      icon: <Trash2 size={24} />,
      image: 'https://picsum.photos/600/400?random=1',
      category: ['airport', 'facility'],
      color: 'bg-emerald-500'
    },
    {
      id: 2,
      title: 'Housekeeping & Facilities',
      description: 'Professional cleaning, maintenance, and facility management services that ensure pristine and functional environments.',
      icon: <Home size={24} />,
      image: 'https://picsum.photos/600/400?random=2',
      category: ['facility'],
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Transport & Logistics',
      description: 'Efficient transportation, cargo handling, and logistics solutions tailored for airport operations and beyond.',
      icon: <Truck size={24} />,
      image: 'https://picsum.photos/600/400?random=3',
      category: ['airport', 'specialized'],
      color: 'bg-amber-500'
    },
    {
      id: 4,
      title: 'Sweeping Machines & Cleaning Solutions',
      description: 'State-of-the-art cleaning equipment, sweeping machines, and specialized cleaning solutions for various environments.',
      icon: <Droplet size={24} />,
      image: 'https://picsum.photos/600/400?random=4',
      category: ['specialized'],
      color: 'bg-cyan-500'
    },
    {
      id: 5,
      title: 'Food & Beverage',
      description: 'Catering services, food management, and beverage solutions that meet diverse needs and high standards.',
      icon: <Coffee size={24} />,
      image: 'https://picsum.photos/600/400?random=6',
      category: ['facility'],
      color: 'bg-red-500'
    },
    {
      id: 6,
      title: 'Civil & Horticulture',
      description: 'Landscape design, green space management, and civil engineering services for sustainable airport environments.',
      icon: <Sprout size={24} />,
      image: 'https://picsum.photos/600/400?random=5',
      category: ['specialized'],
      color: 'bg-green-500'
    },
    {
      id: 7,
      title: 'Other Services',
      description: 'Customized support services and specialized solutions tailored to meet unique operational requirements.',
      icon: <Settings size={24} />,
      image: '/api/placeholder/600/400',
      category: ['airport', 'specialized'],
      color: 'bg-purple-500'
    }
  ];
  export default services