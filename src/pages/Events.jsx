import { useState } from "react";

export default function Events() {
  const [previewImg, setPreviewImg] = useState(null);

  const eventsData = {
    upcoming: [
      {
        title: "CodePunk <V2.0/>",
        cover:
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923794/3_b4lbpp.png",
      },
      {
        title: "TechFest RoboWar",
        cover:
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923795/4_wl27q5.png",
      },
      {
        title: "TechFest LineTracing",
        cover:
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923795/5_ze5xci.png",
      },
      {
        title: "TechFest Machathon",
        cover:
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923796/6_ehzswu.png",
      },
    ],

    completed: [
      {
        title: "<CodePunk V1.0/>",
        year: "2024",
        cover:
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923779/codepunk_mdhn6o.webp",
        description:
          "A hackathon where participants built AI-powered tools, IoT systems, and automation prototypes.",
        gallery: [
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923785/group_mw2lle.webp",
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923789/codepunk2_fektr3.jpg",
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923793/codepunk3_vufjuo.jpg",
        ],
      },

      {
        title: "IoT Workshop",
        year: "2024",
        cover:
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923793/workshopb_gbfuis.jpg",
        description:
          "Hands-on training where students built IoT circuits, explored ESP32, and deployed cloud-connected projects.",
        gallery: [
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923793/workshop1_f23sdo.jpg",
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923799/workshop_duanq2.jpg",
        ],
      },

      {
        title: "School Tech Awareness Drive",
        year: "2024",
        cover:
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923793/school1_abiqkf.jpg",
        description:
          "We visited schools to introduce students to robotics, IoT, and cyber safety through live demos.",
        gallery: [
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923798/school1sub2_og3frv.jpg",
          "https://res.cloudinary.com/duxiduyke/image/upload/v1766923791/school1sub_mmihsd.jpg",
        ],
      },
    ],
  };

  /* ================= UPCOMING ================= */
  const UpcomingSection = ({ title, data }) => (
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-[#9D4EDD] mb-10">{title}</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((event, index) => (
          <div
            key={index}
            className="bg-[#1a1a24] border border-[#9D4EDD]/20 rounded-2xl shadow-xl p-5 hover:border-[#9D4EDD]/60 transition"
          >
            <div className="relative overflow-hidden rounded-xl group">
              <img
                src={event.cover}
                alt={event.title}
                loading="lazy"
                className="w-full h-56 object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
            </div>

            <h3 className="text-2xl font-bold mt-4">
              {event.title}
              <span className="block text-[#9D4EDD] text-lg font-semibold mt-1">
                Coming Soon
              </span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );

  /* ================= COMPLETED ================= */
  const CompletedSection = ({ title, data }) => (
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-[#9D4EDD] mb-10">{title}</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((event, index) => (
          <div
            key={index}
            className="bg-[#1a1a24] border border-[#9D4EDD]/20 rounded-2xl shadow-xl p-5 hover:border-[#9D4EDD]/60 transition"
          >
            <img
              src={event.cover}
              alt={event.title}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <h3 className="text-2xl font-bold">
              {event.title}{" "}
              <span className="text-[#9D4EDD] text-lg">
                ({event.year})
              </span>
            </h3>

            <p className="text-gray-300 text-sm mt-3 mb-5">
              {event.description}
            </p>

            <div className="grid grid-cols-3 gap-3">
              {event.gallery.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setPreviewImg(img)}
                  className="overflow-hidden rounded-lg cursor-pointer border border-[#9D4EDD]/20 hover:border-[#9D4EDD] transition"
                >
                  <img
                    src={img}
                    alt="Gallery"
                    className="h-24 w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#0f0f13] text-white min-h-screen pt-32 pb-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-4">
        Our <span className="text-[#9D4EDD]">Events</span>
      </h1>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 italic">
        Explore our upcoming and completed events.
      </p>

      <UpcomingSection title="Upcoming Events" data={eventsData.upcoming} />
      <CompletedSection title="Completed Events" data={eventsData.completed} />

      {/* IMAGE PREVIEW MODAL */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewImg(null)}
        >
          <img
            src={previewImg}
            alt="Preview"
            className="max-w-4xl max-h-[80vh] rounded-2xl border border-[#9D4EDD] shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
