export default function Gallery() {
  const galleryData = {
    2024: [
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/420",
      "https://via.placeholder.com/350",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/400",
      "https://via.placeholder.com/390",
    ],
    2023: [
      "https://via.placeholder.com/450",
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/380",
      "https://via.placeholder.com/480",
      "https://via.placeholder.com/350",
    ],
    2022: [
      "https://via.placeholder.com/500",
      "https://via.placeholder.com/350",
      "https://via.placeholder.com/450",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/400",
      "https://via.placeholder.com/380",
    ],
  };

  const patternClasses = [
    "row-span-2 col-span-1",
    "col-span-2",
    "row-span-2",
    "",
  ];

  return (
    <div className="bg-[#0f0f13] min-h-screen text-white pt-32 px-6 pb-20">
      
      {/* MAIN HEADING */}
      <h1 className="text-5xl font-bold text-center mb-3">
        Our <span className="text-[#9D4EDD]">Memories</span>
      </h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        <i>A journey of innovation, learning, collaboration, and unforgettable moments — year by year.</i>
      </p>

      {/* YEAR-WISE SECTIONS */}
      {Object.keys(galleryData).map((year, index) => (
        <div key={index} className="mb-24">

          {/* YEAR BADGE */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-10 bg-[#9D4EDD] rounded-full shadow-lg shadow-[#9D4EDD]/40"></div>
            <h2 className="text-3xl font-semibold tracking-wide">{year}</h2>
          </div>

          {/* MASONRY GRID WITH BETTER PATTERN */}
          <div
            className="
              grid 
              grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
              gap-5 
              auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[260px]
            "
          >
            {galleryData[year].map((img, i) => (
              <div
                key={i}
                className={`
                  relative overflow-hidden rounded-xl group 
                  shadow-lg shadow-black/30 
                  bg-[#1a1a24] border border-[#9D4EDD]/10 
                  hover:border-[#9D4EDD]/40 hover:shadow-[#9D4EDD]/20 
                  ${patternClasses[i % patternClasses.length]}
                `}
              >
                {/* IMAGE */}
                <img
                  src={img}
                  alt={`Gallery ${year} ${i}`}
                  className="
                    w-full h-full object-cover rounded-xl 
                    group-hover:scale-110 transition-all duration-700
                  "
                />

                {/* HOVER OVERLAY */}
                <div
                  className="
                    absolute inset-0 
                    bg-gradient-to-t from-[#9D4EDD]/50 to-transparent 
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-500
                  "
                ></div>

                {/* HOVER TEXT INFO */}
                <div
                  className="
                    absolute bottom-0 left-0 right-0 
                    p-4 
                    translate-y-10 group-hover:translate-y-0 
                    opacity-0 group-hover:opacity-100 
                    transition-all duration-500
                    bg-black/40 backdrop-blur-md
                  "
                >
                  <h4 className="text-sm font-semibold text-white">Tech Club Event</h4>
                  <p className="text-xs text-gray-300">Year {year}</p>
                </div>

                {/* GLOW BEHIND IMAGE */}
                <div className="
                  absolute inset-0 
                  rounded-xl 
                  opacity-0 group-hover:opacity-40 
                  transition duration-700 
                  blur-xl bg-[#9D4EDD]
                "></div>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}
