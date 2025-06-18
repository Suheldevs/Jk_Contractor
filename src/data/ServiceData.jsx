  import { 
    Trash2, 
    Home, 
    Truck, 
    Sprout, 
    Droplet, 
    Coffee, 
    Settings, 
  } from 'lucide-react';

  import waste from '../assets/service/WasteManagement.webp'
 import house from '../assets/service/Housekeeping-Facilities.webp'
 import transport from '../assets/service/Transport-Logistics.webp'
 import sweeping from '../assets/service/Sweeping.webp'
 import food from '../assets/service/Food.webp'
 import Horticulture from '../assets/service/Horticulture.webp'

  const services = [
  {
    id: 1,
    title: 'Waste Management',
    slug: 'waste-management',
    description:
      'We specialize in innovative waste management solutions, offering efficient collection, segregation, and eco-friendly disposal methods. Our commitment to sustainability ensures minimal environmental impact while maintaining regulatory compliance. We operate India’s first airport-based MRF to enhance recycling and minimize landfill dependency.',
    icon: <Trash2 size={24} />,
    image: waste,
    // images: [
    //   'https://picsum.photos/600/400?random=2',
    //   'https://picsum.photos/600/400?random=3',
    //   'https://picsum.photos/600/400?random=4'
    // ],
    category: ['airport', 'facility'],
    color: 'bg-emerald-500',
    features: [
      '24x7 waste pickup service',
      'Eco-friendly disposal methods',
      'Certified recycling facilities',
      'Digital waste tracking system'
    ],
    benefits: [
      'Reduces operational waste footprint',
      'Complies with environmental regulations',
      'Improves public and employee health'
    ],
    steps: [
      'Waste collection scheduling',
      'Segregation and labeling',
      'Transportation to recycling centers',
      'Monthly performance reporting'
    ],
    faqs: [
      {
        question: "How often is waste collected?",
        answer: "We offer flexible schedules including daily, weekly, and monthly pickups."
      },
      {
        question: "Do you handle hazardous waste?",
        answer: "Yes, we are certified to manage hazardous and bio-medical waste."
      }
    ]
  },
  {
    id: 2,
    title: 'Housekeeping & Facilities',
    slug: 'housekeeping-facilities',
    description:
      'Our professional housekeeping and facility management services help maintain hygienic, organized, and welcoming environments for passengers and employees, contributing to enhanced customer experiences.',
    icon: <Home size={24} />,
    image:house,
    // images: [
    //   'https://picsum.photos/600/400?random=21',
    //   'https://picsum.photos/600/400?random=22',
    //   'https://picsum.photos/600/400?random=23'
    // ],
    category: ['facility'],
    color: 'bg-blue-500',
    features: [
      'Daily facility upkeep and cleaning',
      'Trained housekeeping staff',
      'Restroom sanitation and waste removal',
      'Routine maintenance checks'
    ],
    benefits: [
      'Creates hygienic and professional environments',
      'Enhances workplace productivity',
      'Reduces maintenance issues'
    ],
    steps: [
      'Site assessment and requirement analysis',
      'Custom scheduling and task allocation',
      'Regular supervision and reporting'
    ],
    faqs: [
      {
        question: "What types of facilities do you manage?",
        answer: "We handle offices, airports, hospitals, and commercial buildings."
      },
      {
        question: "Are your staff trained and insured?",
        answer: "Yes, all our staff are professionally trained and covered under insurance."
      }
    ]
  },
  {
    id: 3,
    title: 'Transport & Logistics',
    slug: 'transport-logistics',
    description:
      'We supply and maintain essential vehicles and equipment, including cleaning machines, transport vehicles, and operational machinery, to support seamless airport and facility management. Provision of BDDS (Bomb Detection and Disposal Squad) and DG Squad support vehicles for enhanced airport security and safety.',
    icon: <Truck size={24} />,
    image: transport,
    // images: [
    //   'https://picsum.photos/600/400?random=31',
    //   'https://picsum.photos/600/400?random=32'
    // ],
    category: ['airport', 'specialized'],
    color: 'bg-amber-500',
    features: [
      'Fleet management and cargo handling',
      'Airport logistics and support',
      'Real-time tracking solutions'
    ],
    benefits: [
      'Improved efficiency in operations',
      'Reduced delays and logistical issues',
      'Enhanced security for transported goods'
    ],
    steps: [
      'Logistics requirement gathering',
      'Fleet allocation and scheduling',
      'Real-time monitoring and delivery'
    ],
    faqs: [
      {
        question: "Do you provide airport cargo services?",
        answer: "Yes, we offer end-to-end logistics for airport cargo and baggage handling."
      },
      {
        question: "Can logistics be customized?",
        answer: "Yes, our services are fully customizable based on client needs."
      }
    ]
  },
  {
    id: 4,
    title: 'Sweeping Machines & Cleaning Solutions',
    slug: 'sweeping-machines-cleaning-solutions',
    description:
      'We provide high-performance sweeping machines and advanced cleaning equipment, ensuring spotless and well-maintained spaces in airports and commercial areas. We use state-of-the-art mechanized sweepers to keep airside and landside areas clean and foreign-object debris (FOD) free.',
    icon: <Droplet size={24} />,
    image: sweeping,
    images: [
      'https://picsum.photos/600/400?random=41',
      'https://picsum.photos/600/400?random=42'
    ],
    category: ['specialized'],
    color: 'bg-cyan-500',
    features: [
      'Industrial-grade sweeping machines',
      'Eco-friendly cleaning agents',
      'Suitable for indoor and outdoor use'
    ],
    benefits: [
      'Saves manpower and time',
      'Ensures deep cleaning',
      'Reduces dust and pollution'
    ],
    steps: [
      'Site inspection for area size/type',
      'Machine deployment and training',
      'Scheduled cleaning cycles'
    ],
    faqs: [
      {
        question: "Are machines available for rent or purchase?",
        answer: "Yes, both options are available depending on project scope."
      },
      {
        question: "Do you provide operator training?",
        answer: "Yes, operator training and support are included."
      }
    ]
  },
  {
    id: 5,
    title: 'Food & Beverage',
    slug: 'food-beverage',
    description:
      'We manage a network of well-maintained canteens and food outlets across airport locations, offering passengers and employees a variety of high-quality, nutritious, and hygienic meal options. From quick bites to full-course meals, our offerings meet the highest food safety standards, ensuring convenience and satisfaction.',
    icon: <Coffee size={24} />,
    image: food,
    // images: [
    //   'https://picsum.photos/600/400?random=61',
    //   'https://picsum.photos/600/400?random=62'
    // ],
    category: ['facility'],
    color: 'bg-red-500',
    features: [
      'Multi-cuisine catering',
      'Hygienic and FSSAI-compliant kitchens',
      'Timely food delivery and service',
      'Customizable meal plans'
    ],
    benefits: [
      'Ensures high-quality food standards',
      'Caters to diverse dietary needs',
      'Improves employee satisfaction and wellbeing'
    ],
    steps: [
      'Menu planning and customization',
      'Procurement and hygienic preparation',
      'On-site service and ongoing feedback management'
    ],
    faqs: [
      {
        question: "Do you serve vegetarian and non-vegetarian options?",
        answer: "Yes, we accommodate all dietary preferences and restrictions."
      },
      {
        question: "What food safety standards do you follow?",
        answer: "We comply with FSSAI and HACCP regulations for kitchen operations."
      }
    ]
  },

  {
    id: 6,
    title: 'Civil & Horticulture',
    slug: 'civil-horticulture',
    description:
      'We offer landscape design, green space management, and civil infrastructure services for sustainable airport environments. This includes plantation of trees, irrigation systems, and ongoing lawn maintenance to enhance both ecological value and visual appeal.',
    icon: <Sprout size={24} />,
    image: Horticulture,
    // images: [
    //   'https://picsum.photos/600/400?random=51',
    //   'https://picsum.photos/600/400?random=52'
    // ],
    category: ['specialized'],
    color: 'bg-green-500',
    features: [
      'Landscape design and maintenance',
      'Tree plantation and transplantation',
      'Drainage and walkway construction',
      'Eco-friendly horticulture practices'
    ],
    benefits: [
      'Enhances environmental sustainability',
      'Improves visual and ecological quality',
      'Promotes biodiversity and green cover'
    ],
    steps: [
      'Site planning and soil evaluation',
      'Infrastructure and irrigation setup',
      'Ongoing care and seasonal maintenance'
    ],
    faqs: [
      {
        question: "Do you use organic fertilizers or chemicals?",
        answer: "We prioritize eco-friendly and sustainable methods including organic options."
      },
      {
        question: "What is included in landscape maintenance?",
        answer: "We provide watering, trimming, fertilization, and tree health monitoring."
      }
    ]
  },

  {
    id: 7,
    title: 'Other Services',
    slug: 'other-services',
    description:
      'We provide a variety of customized support services tailored to meet unique operational requirements. From staffing and specialized vehicles to barricading, demolition, and road safety solutions — we cover the end-to-end needs of complex infrastructure and airport environments.',
    icon: <Settings size={24} />,
    image: '/api/placeholder/600/400',
    images: [
      '/api/placeholder/600/400?1',
      '/api/placeholder/600/400?2'
    ],
    category: ['airport', 'specialized'],
    color: 'bg-purple-500',
    features: [
      'Custom service design',
      'Flexible staffing and deployment',
      'Barricading and controlled demolition',
      'Paint marking and road safety implementation'
    ],
    benefits: [
      'Addresses specific project requirements',
      'Ensures safety and regulatory compliance',
      'Provides operational flexibility and scalability'
    ],
    steps: [
      'Requirement gathering and site audit',
      'Scope definition and planning',
      'Execution with compliance and reporting'
    ],
    faqs: [
      {
        question: "What kind of specialized services do you offer?",
        answer: "We offer barricading, demolition, paint marking, manpower, and more."
      },
      {
        question: "Can services be customized per airport guidelines?",
        answer: "Yes, all our services are tailored to fit client and regulatory needs."
      }
    ]
  }
];

  export default services