import React, { useState } from 'react';
import { 
  Car, 
  Truck, 
  Settings, 
  Zap,
  Users,
  Shield,
  CheckCircle,
  Eye,
  ArrowRight,
  Wind,
  Droplet,
  Wrench,
  Calendar,
  Award,
  Filter,
  Search
} from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

const VehiclesEquipmentPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const categories = [
    { id: 'all', name: 'All Equipment', icon: Settings },
    { id: 'passenger', name: 'Passenger Vehicles', icon: Car },
    { id: 'commercial', name: 'Commercial Vehicles', icon: Truck },
    { id: 'cleaning', name: 'Cleaning Equipment', icon: Droplet },
    { id: 'sweeping', name: 'Sweeping Machinery', icon: Wind }
  ];

  const vehicles = [
    // Passenger and Light Utility Vehicles
    {
      id: 1,
      name: 'Tata Safari',
      category: 'passenger',
      type: 'SUV',
      description: 'Premium SUV for executive transportation and supervisory operations within airport premises.',
      specifications: {
        seating: '7 Passengers',
        fuelType: 'Diesel',
        transmission: 'Manual/Automatic',
        features: 'AC, GPS Navigation, Safety Features'
      },
      uses: ['Executive Transport', 'Supervisory Operations', 'Airport Transfers'],
    "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Safari/12798/1755865650056/front-left-side-47.jpg?imwidth=890&impolicy=resize",
      status: 'Active',
      quantity: 3
    },
    {
      id: 2,
      name: 'Mahindra Marazzo',
      category: 'passenger',
      type: 'MPV',
      description: 'Multi-purpose vehicle ideal for staff transportation and light cargo operations.',
      specifications: {
        seating: '8 Passengers',
        fuelType: 'Diesel',
        transmission: 'Manual',
        features: 'AC, Power Steering, Central Locking'
      },
      uses: ['Staff Transportation', 'Light Cargo', 'Multi-utility Operations'],
      image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Marazzo/10757/1758198958040/front-left-side-47.jpg',
      status: 'Active',
      quantity: 4
    },
    {
      id: 3,
      name: 'Maruti Ertiga',
      category: 'passenger',
      type: 'MPV',
      description: 'Compact MPV for efficient passenger movement and light-duty operations.',
      specifications: {
        seating: '7 Passengers',
        fuelType: 'Petrol/CNG',
        transmission: 'Manual/Automatic',
        features: 'AC, Music System, Safety Features'
      },
      uses: ['Passenger Transport', 'Light Duty Operations', 'Airport Connectivity'],
      image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga/10288/1755776579514/front-left-side-47.jpg',
      status: 'Active',
      quantity: 5
    },
    {
      id: 4,
      name: 'Maruti Brezza',
      category: 'passenger',
      type: 'Compact SUV',
      description: 'Compact SUV for urban mobility and quick response operations.',
      specifications: {
        seating: '5 Passengers',
        fuelType: 'Petrol',
        transmission: 'Manual/Automatic',
        features: 'SmartPlay Infotainment, AC, ABS'
      },
      uses: ['Quick Response', 'Urban Mobility', 'Inspection Rounds'],
      image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Brezza/10387/1755776307393/front-left-side-47.jpg',
      status: 'Active',
      quantity: 3
    },
    // Commercial and Heavy-Duty Vehicles
    {
      id: 5,
      name: 'Mahindra Bolero',
      category: 'commercial',
      type: 'Utility Vehicle',
      description: 'Rugged utility vehicle for on-ground staff movement and maintenance tasks.',
      specifications: {
        seating: '7-9 Passengers',
        fuelType: 'Diesel',
        transmission: 'Manual',
        features: '4WD Option, High Ground Clearance'
      },
      uses: ['Staff Movement', 'Maintenance Tasks', 'Rough Terrain Operations'],
      image: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Bolero/10754/1761635045988/front-left-side-47.jpg',
      status: 'Active',
      quantity: 6
    },
    {
      id: 6,
      name: 'Maruti Gypsy',
      category: 'commercial',
      type: 'Off-Road Vehicle',
      description: 'Off-road capable vehicle for challenging terrains and security operations.',
      specifications: {
        seating: '6-8 Passengers',
        fuelType: 'Petrol',
        transmission: 'Manual',
        features: '4WD, High Ground Clearance'
      },
      uses: ['Security Patrol', 'Off-Road Operations', 'Emergency Response'],
      image: 'https://th.bing.com/th/id/OIP.hjmZ2fGlxMfSfwJ1JALCVwHaEK?w=303&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
      status: 'Active',
      quantity: 4
    },
    {
      id: 7,
      name: 'Heavy Duty Trucks',
      category: 'commercial',
      type: 'Cargo Vehicle',
      description: 'Large capacity trucks for material transport and waste management operations.',
      specifications: {
        capacity: '10-25 Tonnes',
        fuelType: 'Diesel',
        transmission: 'Manual',
        features: 'Hydraulic Systems, GPS Tracking'
      },
      uses: ['Material Transport', 'Waste Collection', 'Equipment Movement'],
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=250&fit=crop',
      status: 'Active',
      quantity: 12
    },
    {
      id: 8,
      name: 'Water Tankers',
      category: 'commercial',
      type: 'Specialized Vehicle',
      description: 'Water distribution vehicles for cleaning operations and emergency supply.',
      specifications: {
        capacity: '5000-10000 Liters',
        fuelType: 'Diesel',
        transmission: 'Manual',
        features: 'High-Pressure Pumps, Distribution System'
      },
      uses: ['Water Supply', 'Cleaning Operations', 'Fire Safety Support'],
      image: 'https://th.bing.com/th/id/OIP.3w1mpwdXX235dcWqgk-R8AHaFI?w=253&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
      status: 'Active',
      quantity: 6
    },
    {
      id: 9,
      name: 'Heavy Lifting Cranes',
      category: 'commercial',
      type: 'Construction Equipment',
      description: 'Mobile cranes for heavy lifting and positioning during maintenance operations.',
      specifications: {
        capacity: '25-50 Tonnes',
        fuelType: 'Diesel',
        transmission: 'Hydraulic',
        features: 'Telescopic Boom, Outriggers'
      },
      uses: ['Heavy Lifting', 'Infrastructure Maintenance', 'Emergency Recovery'],
      image: 'https://th.bing.com/th/id/OIP.43vKfdy-gOOQhrUZiBCEXwAAAA?w=278&h=186&c=7&r=0&o=7&pid=1.7&rm=3',
      status: 'Active',
      quantity: 4
    },
    // Cleaning Equipment
    {
      id: 10,
      name: 'Industrial Vacuum Cleaners',
      category: 'cleaning',
      type: 'Cleaning Equipment',
      description: 'High-powered vacuum systems for intensive terminal and surface cleaning.',
      specifications: {
        power: '3000-5000 Watts',
        capacity: '50-100 Liters',
        type: 'Wet & Dry',
        features: 'HEPA Filters, Multiple Attachments'
      },
      uses: ['Terminal Cleaning', 'Deep Cleaning', 'Carpet Maintenance'],
      image: 'https://th.bing.com/th/id/OIP.ECZM7JOzSe1GfJKMe-AskgHaHa?w=206&h=206&c=7&r=0&o=7&pid=1.7&rm=3',
      status: 'Active',
      quantity: 25
    },
    {
      id: 11,
      name: 'Floor Scrubbing Machines',
      category: 'cleaning',
      type: 'Floor Care',
      description: 'Automated floor scrubbing machines for large area cleaning operations.',
      specifications: {
        cleaningWidth: '50-85 cm',
        tankCapacity: '70-150 Liters',
        powerSource: 'Battery/Electric',
        features: 'Auto-dosing, Edge Cleaning'
      },
      uses: ['Floor Scrubbing', 'Terminal Maintenance', 'Large Area Cleaning'],
      image: 'https://th.bing.com/th/id/OIP.W7McihAp0gTHdjn8TI-0HAHaHa?w=274&h=206&c=7&r=0&o=7&pid=1.7&rm=3',
      status: 'Active',
      quantity: 15
    },
    {
      id: 12,
      name: 'Desert Coolers',
      category: 'cleaning',
      type: 'Cooling Equipment',
      description: 'Large capacity air coolers for canteen and public zone temperature control.',
      specifications: {
        capacity: '100-200 Liters',
        airThrow: '15-25 Meters',
        powerConsumption: '200-400 Watts',
        features: 'Auto Fill, Remote Control'
      },
      uses: ['Canteen Cooling', 'Public Zone Comfort', 'Temporary Cooling'],
      image: 'https://th.bing.com/th/id/OIP.VbxGFDvbRWF1NSfc8zgk4wHaGq?w=169&h=150&c=6&o=7&pid=1.7&rm=3',
      status: 'Active',
      quantity: 20
    },
    // Sweeping Machinery
    {
      id: 13,
      name: 'Ride-on Sweeping Machines',
      category: 'sweeping',
      type: 'Model 3D/4D',
      description: 'Compact and efficient ride-on sweepers for terminal and walkway cleaning.',
      specifications: {
        sweptWidth: '1000-1200 mm',
        hopperCapacity: '80-120 Liters',
        powerSource: 'Battery',
        features: 'Dust Control, Side Brushes'
      },
      uses: ['Terminal Cleaning', 'Walkway Maintenance', 'Indoor Sweeping'],
      image: 'https://th.bing.com/th/id/OIP.UzRcti1Ih7KkJheFSPdCrQHaGc?w=214&h=187&c=7&r=0&o=7&pid=1.7&rm=3',
      status: 'Active',
      quantity: 8
    },
    {
      id: 14,
      name: 'Truck-Mounted Sweepers',
      category: 'sweeping',
      type: 'Heavy Duty',
      description: 'Large-scale sweeping units for extensive airside and roadside cleaning.',
      specifications: {
        sweptWidth: '2000-3000 mm',
        hopperCapacity: '3-8 Cubic Meters',
        powerSource: 'Diesel Engine',
        features: 'Water Spray System, High Suction'
      },
      uses: ['Runway Cleaning', 'Road Sweeping', 'Large Area Maintenance'],
      image: 'https://th.bing.com/th/id/OIP.dZPRfmbPX2_RGNV2tOK9hQHaDt?w=338&h=174&c=7&r=0&o=7&pid=1.7&rm=3',
      status: 'Active',
      quantity: 6
    },
    {
      id: 15,
      name: 'Mechanized Suction Machines',
      category: 'sweeping',
      type: 'High-Power Vacuum',
      description: 'High-powered vacuum systems for both airside and landside operations.',
      specifications: {
        suctionPower: '15000-25000 Pa',
        hopperCapacity: '200-500 Liters',
        powerSource: 'Electric/Diesel',
        features: 'HEPA Filtration, Auto-discharge'
      },
      uses: ['FOD Removal', 'Deep Cleaning', 'Debris Collection'],
      image: 'https://th.bing.com/th/id/OIP.RNuUeCFW9TtdMotoh_8yOAHaHa?w=200&h=200&c=7&r=0&o=7&pid=1.7&rm=3',
      status: 'Active',
      quantity: 10
    }
  ];

  const filteredVehicles = selectedCategory === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.category === selectedCategory);

  const stats = [
    { label: 'Total Fleet Size', value: '120+', icon: Car },
    { label: 'Vehicle Categories', value: '4', icon: Settings },
    { label: 'Operational Readiness', value: '98%', icon: CheckCircle },
    { label: 'Annual Maintenance', value: '100%', icon: Wrench }
  ];

  return (
    <>
     <Breadcrumb
        title="Vehicles & Equipment"
        items={[{name:'Vehicles & Equipment', path:'vahical'}]}
        // bgImage="/api/placeholder/1920/600"
      />
    <div className="min-h-screen bg-white">
    

      {/* Stats Section */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-gray-700">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter by Category:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-green-300 hover:text-green-600'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div 
              key={vehicle.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedVehicle(vehicle)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-900">Qty: {vehicle.quantity}</span>
                  </div>
                  <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                </div> */}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-green-600 font-medium text-sm">{vehicle.type}</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-xs font-medium">
                    {vehicle.status}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {vehicle.description}
                </p>
                {/* 
                <div className="space-y-2 mb-4">
                  {vehicle.uses.slice(0, 2).map((use, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{use}</span>
                    </div>
                  ))}
                </div> */}
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">View Details</span>
                  <div className="flex items-center gap-2 text-green-600 group-hover:text-green-700 transition-colors">
                    <Eye className="w-4 h-4" />
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-8 border border-green-200">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Award className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Quality Assurance & Maintenance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All vehicles and equipment undergo rigorous quality verification before deployment. 
                We maintain a comprehensive maintenance schedule ensuring 98% operational readiness 
                across our entire fleet.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Regular Safety Inspections</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">Preventive Maintenance</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium">GPS Tracking Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Detail Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black/50  flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img 
                src={selectedVehicle.image} 
                alt={selectedVehicle.name}
                className="w-full h-64 object-contain"
              />
              <button 
                onClick={() => setSelectedVehicle(null)}
                className="fixed top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold"
              >
                ×
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedVehicle.name}</h2>
                  <p className="text-green-600 font-medium text-lg">{selectedVehicle.type}</p>
                </div>
                <div className="text-right">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-medium mb-2">
                    {selectedVehicle.status}
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium">Quantity: </span>{selectedVehicle.quantity}
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{selectedVehicle.description}</p>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Primary Uses</h3>
                  <div className="space-y-2">
                    {selectedVehicle.uses.map((use, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{use}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                  <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                    {Object.entries(selectedVehicle.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                        <span className="font-medium text-gray-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
                <button className="flex-1 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors">
                  Request Information
                </button>
                <button 
                  onClick={() => setSelectedVehicle(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default VehiclesEquipmentPage;