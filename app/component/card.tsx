export default function Card() {
  const data = [
    {
      img: "/assets/brandphotography.jpg?w=800&h=600&fit=crop",
      title: "Brand photography",
      description:
        "Transform your brand with stunning visuals that tell your story.",
      linke: "/photography",
      gradient: "from-[#209EBB]/20 to-[#209EBB]/20",
      accent: "bg-[#209EBB]",
    },
    {
      img: "/assets/websitedesign.jpg?w=800&h=600&fit=crop",
      title: "Website and app design",
      description:
        "Turning your vision into a website that’s as powerful as it is beautiful.",
      linke: "/webdesign",
      gradient: "from-green-400/20 to-green-400/20",
      accent: "bg-green-400",
    },
    {
      img: "/assets/marketing.jpg?w=800&h=600&fit=crop",
      title: "Marketing strategy",
      description:
        "Unlock your brand's potential with tailored marketing strategies.",
      linke: "/marketing",
      gradient: "from-[#fc8500]/20 to-[#fc8500]/20",
      accent: "bg-[#fc8500]",
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 w-full overflow-hidden"
      id="service"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 xl:px-20 md:px-20 py-20">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#209EBB] mb-3">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#209EBB] via-green-400 to-[#fc8500] mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {data.map((item, index) => (
            <a href={item.linke} key={index} className="group">
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container with Overlay */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Accent Bar */}
                  <div
                    className={`absolute top-0 left-0 w-1 h-0 ${item.accent} group-hover:h-full transition-all duration-500`}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[#023047] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#023047] group-hover:to-blue-600 transition-all duration-300">
                      {item.title}
                    </h3>
                    {/* Arrow Icon */}
                    <div className="mt-1 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-[#023047]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-orange-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
