export default function VisionMission() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f5f5f5] to-white py-10 px-12">
      
      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* VISION */}
        <div className="relative">
          <h2 className="text-center text-3xl font-bold tracking-wide text-gray-800 mb-6">
            VISION
          </h2>

          <p className="text-gray-700 leading-relaxed text-[15px]">
            Our vision is to be the premier multi-service provider, setting new
            benchmarks in operational efficiency, sustainability, and customer
            satisfaction. We aim to revolutionize the service industry by
            integrating innovative technologies, best practices, and eco-friendly
            solutions to create a cleaner, safer, and more efficient environment.
            Through continuous growth and expansion, we aspire to become a global
            leader in delivering high-quality solutions for airports and other
            high-traffic infrastructures.
          </p>

          <ul className="mt-4 space-y-2 text-gray-700 text-[15px]">
            <li>
              <span className="font-semibold">Waste Management Policy:</span>{" "}
              We prioritize eco-friendly disposal using segregation, recycling,
              and responsible handling aligned with environmental standards.
            </li>

            <li>
              <span className="font-semibold">Safety Policy:</span>{" "}
              We ensure a safe working environment with strict safety protocols,
              regular training, and risk-prevention practices.
            </li>
          </ul>

          {/* Illustration */}
          {/* <img
            src="/images/vision-illustration.png"
            className="w-full max-w-xs mx-auto mt-6 opacity-90"
            alt="Vision illustration"
          /> */}
        </div>

        {/* MISSION */}
        <div className="relative">
          <h2 className="text-center text-3xl font-bold tracking-wide text-gray-800 mb-6">
            MISSION
          </h2>

          <p className="text-gray-700 leading-relaxed text-[15px]">
            Our mission is to deliver superior, innovative, and sustainable
            solutions that enhance operational performance, improve customer
            experiences, and contribute to environmental well-being.
          </p>

          <ul className="mt-4 space-y-3 text-gray-700 text-[15px]">
            <li>
              <span className="font-semibold">Providing Excellence:</span>{" "}
              Ensuring high-quality service delivery across all business segments.
            </li>

            <li>
              <span className="font-semibold">Driving Innovation:</span>{" "}
              Using the latest technologies and best practices.
            </li>

            <li>
              <span className="font-semibold">Prioritizing Sustainability:</span>{" "}
              Implementing eco-friendly solutions that reduce environmental impact.
            </li>

            <li>
              <span className="font-semibold">Enhancing Customer Experience:</span>{" "}
              Creating efficient and comfortable environments.
            </li>

            <li>
              <span className="font-semibold">Expanding Our Reach:</span>{" "}
              Continuously adapting to new markets and opportunities.
            </li>
          </ul>

          {/* Illustration */}
          {/* <img
            src="/images/mission-illustration.png"
            className="w-full max-w-xs mx-auto mt-6 opacity-90"
            alt="Mission illustration"
          /> */}
        </div>
      </div>
    </section>
  );
}
