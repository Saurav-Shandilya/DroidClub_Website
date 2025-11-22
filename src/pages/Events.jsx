import { useState } from "react";
import codepunk from "../assets/images/about/codepunk.jpg";
import groupImg from "../assets/images/about/group.jpg";
import punk2 from "../assets/images/event/codepunk2.jpg";
import punk3 from "../assets/images/event/codepunk3.jpg";
import school1 from "../assets/images/event/school1.jpg";
import school1sub from "../assets/images/event/school1sub.jpg";
import school1sub2 from "../assets/images/event/school1sub2.jpg";
import work1 from "../assets/images/event/workshop.jpg";
import work2 from "../assets/images/event/workshop1.jpg";
import workshopb from "../assets/images/event/workshopb.jpg";
import codepunk2 from "../assets/images/home/3.png";
import robo from "../assets/images/home/4.png";
import line from "../assets/images/home/5.png";
import mech from "../assets/images/home/6.png";

export default function Events() {
  const [previewImg, setPreviewImg] = useState(null);

  const eventsData = {
    upcoming: [
      { title: "CodePunk <V2.0/>", cover: codepunk2 },
      { title: "TechFest RoboWar", cover: robo },
      { title: "TechFest LineTracing", cover: line },
      { title: "TechFest Machathon", cover: mech },
    ],

    completed: [
      {
        title: "<CodePunk V1.0/>",
        year: "2024",
        cover: codepunk,
        description:
          "A hackathon where participants built AI-powered tools, IoT systems, and automation prototypes.",
        gallery: [groupImg, punk2, punk3],
      },
      {
        title: "IoT Workshop",
        year: "2024",
        cover: workshopb,
        description:
          "Hands-on training where students built IoT circuits, explored ESP32, and deployed cloud-connected projects.",
        gallery: [work2, work1],
      },
      {
        title: "School Tech Awareness Drive",
        year: "2024",
        cover: school1,
        description:
          "We visited schools to introduce students to robotics, IoT, and cyber safety through live demos.",
        gallery: [school1sub, school1sub2],
      },
    ],
  };

  /* ========================== UPCOMING ========================== */
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
                loading="lazy"
                decoding="async"
                alt={event.title}
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                  e.currentTarget.classList.remove("blur-sm");
                }}
                className="w-full h-56 object-cover rounded-xl opacity-0 blur-sm transition-all duration-700 group-hover:scale-110"
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

  /* ========================== COMPLETED ========================== */
  const CompletedSection = ({ title, data }) => (
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
                loading="lazy"
                decoding="async"
                alt={event.title}
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                  e.currentTarget.classList.remove("blur-sm");
                }}
                className="w-full h-56 object-cover rounded-xl opacity-0 blur-sm transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
            </div>

            <h3 className="text-2xl font-bold mt-4">
              {event.title}{" "}
              <span className="text-[#9D4EDD] text-lg font-semibold">
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
                  className="relative group overflow-hidden rounded-lg border border-[#9D4EDD]/20 cursor-pointer hover:border-[#9D4EDD] transition"
                >
                  <img
                    src={img}
                    loading="lazy"
                    decoding="async"
                    alt="Gallery"
                    onLoad={(e) => {
                      e.currentTarget.classList.remove("opacity-0");
                      e.currentTarget.classList.remove("blur-sm");
                    }}
                    className="w-full h-24 object-cover opacity-0 blur-sm transition-all duration-700 group-hover:scale-110"
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

      {/* Preview Modal */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setPreviewImg(null)}
        >
          <img
            src={previewImg}
            loading="lazy"
            decoding="async"
            alt="Preview"
            onLoad={(e) => {
              e.currentTarget.classList.remove("opacity-0");
              e.currentTarget.classList.remove("blur-sm");
            }}
            className="max-w-3xl max-h-[80vh] rounded-2xl shadow-xl border border-[#9D4EDD] opacity-0 blur-sm transition-all duration-700"
          />
        </div>
      )}
    </div>
  );
}
