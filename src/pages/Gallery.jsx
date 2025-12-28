export default function Gallery() {
  const galleryData = {
    2024: [
      { img: "https://via.placeholder.com/500", tag: "IoT Workshop" },
      { img: "https://via.placeholder.com/420", tag: "Hackathon" },
      { img: "https://via.placeholder.com/350", tag: "Team Meetup" },
      { img: "https://via.placeholder.com/300", tag: "School Visit" },
      { img: "https://via.placeholder.com/400", tag: "Design Session" },
      { img: "https://via.placeholder.com/390", tag: "Project Demo" },
    ],
    2023: [
      { img: "https://via.placeholder.com/450", tag: "Robotics" },
      { img: "https://via.placeholder.com/500", tag: "Coding Event" },
      { img: "https://via.placeholder.com/300", tag: "Team Meetup" },
      { img: "https://via.placeholder.com/380", tag: "Workshop" },
      { img: "https://via.placeholder.com/480", tag: "Presentation" },
      { img: "https://via.placeholder.com/350", tag: "Campus Event" },
    ],
    2022: [
      { img: "https://via.placeholder.com/500", tag: "Club Launch" },
      { img: "https://via.placeholder.com/350", tag: "Tech Talk" },
      { img: "https://via.placeholder.com/450", tag: "Hackathon" },
      { img: "https://via.placeholder.com/300", tag: "Workshop" },
      { img: "https://via.placeholder.com/400", tag: "Team Meetup" },
      { img: "https://via.placeholder.com/380", tag: "Seminar" },
    ],
  };

  return (
    <div className="bg-[#0f0f13] min-h-screen text-white pt-32 px-4 pb-20">

      {/* MAIN HEADING */}
      <h1 className="text-5xl font-bold text-center mb-3">
        Our <span className="text-[#9D4EDD]">Memories</span>
      </h1>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 italic">
        A journey of innovation, learning, collaboration, and unforgettable moments.
      </p>

      {/* YEAR-WISE SECTIONS */}
      {Object.keys(galleryData).map((year) => (
        <div key={year} className="mb-20 max-w-5xl mx-auto">

          {/* YEAR TITLE */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-[#9D4EDD] rounded-full shadow-lg"></div>
            <h2 className="text-3xl font-bold">{year}</h2>
          </div>

          {/* CLEAN GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {galleryData[year].map((item, i) => (
              <div
                key={i}
                className="
                  relative overflow-hidden rounded-xl group 
                  shadow-lg bg-[#1a1a24] 
                  border border-[#9D4EDD]/10 hover:border-[#9D4EDD]/40 
                  transition
                "
              >

                {/* IMAGE - Landscape / Square Only */}
                <img
                  src={item.img}
                  alt={item.tag}
                  className="
                    w-full h-48 sm:h-52 object-cover 
                    group-hover:scale-110 transition duration-700
                  "
                />

                {/* OVERLAY */}
                <div className="
                  absolute inset-0 bg-gradient-to-t 
                  from-[#9D4EDD]/40 to-transparent 
                  opacity-0 group-hover:opacity-100 
                  transition duration-500
                "></div>

                {/* TAG / MINI DESCRIPTION */}
                <div className="
                  absolute bottom-0 left-0 right-0 
                  p-3
                  translate-y-6 group-hover:translate-y-0 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-500
                  bg-black/40 backdrop-blur-xl
                ">
                  <p className="text-sm font-semibold text-white">
                    {item.tag}
                  </p>
                  <p className="text-xs text-gray-300">Year {year}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      ))}

    </div>
  );
}
