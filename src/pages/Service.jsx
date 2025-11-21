import { Link } from "react-router-dom";

const services = [
  { label: "Waste Management", path: "/services/waste-management", pos: "top-[8%] left-1/2 -translate-x-1/2" },
  { label: "Housekeeping & Facility Management", path: "/services/housekeeping", pos: "top-[12%] right-[18%]" },
  { label: "Sweeping Machines & Cleaning Solutions", path: "/services/sweeping", pos: "top-[28%] right-[8%]" },
  { label: "Specialized Vehicles & Equipment", path: "/services/vehicles", pos: "top-[48%] right-[4%]" },
  { label: "Paint Marking & Road Safety Solutions", path: "/services/road-safety", pos: "bottom-[20%] right-[10%]" },
  { label: "Manpower Solutions", path: "/services/manpower", pos: "bottom-[10%] right-[24%]" },
  { label: "Civil Works & Maintenance", path: "/services/civil-works", pos: "bottom-[4%] left-1/2 -translate-x-1/2" },
  { label: "Towaway Cranes Operations", path: "/services/towaway", pos: "bottom-[10%] left-[22%]" },
  { label: "Bio gas Plants", path: "/services/biogas", pos: "bottom-[20%] left-[10%]" },
  { label: "Canteen & Food Outlets", path: "/services/canteen", pos: "top-[48%] left-[4%]" },
  { label: "Horticulture Services", path: "/services/horticulture", pos: "top-[28%] left-[8%]" },
  { label: "Barricading & Demolition Services", path: "/services/barricading", pos: "top-[12%] left-[18%]" },
];

export default function Service() {
  return (
    <>
        <div className="h-20 bg-black"></div>
    <div className="grid   h-[90vh]">
      {/* Right bg + bubbles */}
      <div className="relative bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/03/17/21/25/lufthansa-2152712_1280.jpg')" }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60"></div>

        {/* SVG Lines connecting center to bubbles */}
        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
          {services.map((_, idx) => {
            const angles = [
              0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330
            ];
            const angle = angles[idx];
            const rad = (angle * Math.PI) / 180;
            const centerX = 50;
            const centerY = 50;
            const radius = 35;
            const endX = centerX + radius * Math.cos(rad);
            const endY = centerY + radius * Math.sin(rad);

            return (
              <line
                key={idx}
                x1={`${centerX}%`}
                y1={`${centerY}%`}
                x2={`${endX}%`}
                y2={`${endY}%`}
                stroke="#000"
                strokeWidth="1.5"
                opacity="0.6"
              />
            );
          })}
        </svg>

        {/* Center bubble */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[130px] rounded-full bg-neutral-900 text-white flex flex-col items-center justify-center text-[20px] font-bold z-20 shadow-xl border-2 border-neutral-900">
          <span>J.K.</span>
          <span>CONTRACTOR</span>
        </div>

        {/* Service bubbles */}
        {services.map((item) => (
          <div key={item.label} className={`absolute ${item.pos} z-20`}>
            <Link
              to={item.path}
              className="flex items-center justify-center w-[180px] h-[90px] rounded-full bg-neutral-900 text-white text-[13px] leading-tight text-center px-5 py-3 font-semibold transition-all hover:bg-neutral-900 hover:scale-105 hover:shadow-2xl shadow-lg border-2 border-neutral-900"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
