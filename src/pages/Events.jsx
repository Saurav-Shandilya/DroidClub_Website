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

export default function Events() {
  const eventsData = {
    hackathons: [
      {
        title: "<CodePunk V1.0/>",
        year: "2024",
        cover:
          codepunk,
        description:
          "An intense 36-hour coding sprint where students collaborated to build AI-driven and IoT-based prototypes. Mentors from various industries guided participants throughout the challenge.",
        gallery: [
          groupImg,
          punk2,
          punk3,
        ],
      },
    ],
    workshops: [
      {
        title: "IOT Workshop",
        year: "2024",
        cover:
          workshopb,
        description:
          "A hands-on workshop of IoT fundamentals with collaboration, and real project .",
        gallery: [
          work2,
          work1,
        ],
      },
    ],
    schoolVisits: [
      {
        title: "Tech Awareness Drive – Mount Hill Mathura",
        year: "2024",
        cover:
          school1,
        description:
          "Our team visited DPS Mathura to teach school students about robotics, coding fundamentals, and cyber safety.",
        gallery: [
          school1sub,
          school1sub2,
        ],
      },
      
    ],
  };

  const Section = ({ title, data }) => (
    <div className="mb-20">
      <h2 className="text-4xl font-bold text-[#9D4EDD] mb-10">{title}</h2>

      {data.map((event, index) => (
        <div
          key={index}
          className="mb-16 bg-[#1a1a24] border border-[#9D4EDD]/20 p-6 rounded-2xl shadow-lg"
        >
          {/* COVER IMAGE */}
          <img
            src={event.cover}
            className="w-full h-64 object-cover rounded-xl mb-6"
            alt="Event"
          />

          {/* TITLE & DESCRIPTION */}
          <h3 className="text-2xl font-semibold mb-2">
            {event.title} –{" "}
            <span className="text-[#9D4EDD] font-bold">{event.year}</span>
          </h3>

          <p className="text-gray-300 mb-6">{event.description}</p>

          {/* MINI GALLERY */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {event.gallery.map((img, i) => (
              <div
                key={i}
                className="relative group overflow-hidden rounded-xl border border-[#9D4EDD]/20"
              >
                <img
                  src={img}
                  alt="event-img"
                  className="w-full h-40 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-[#9D4EDD]/20 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#0f0f13] text-white min-h-screen pt-32 pb-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-4">
        Our <span className="text-[#9D4EDD]">Events</span>
      </h1>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16"><i>
        Explore our hackathons, skill-building workshops, and impactful school
        outreach programs.</i>
      </p>

      {/* RENDERING SECTIONS */}
      <Section title="Hackathons" data={eventsData.hackathons} />
      <Section title="Workshops" data={eventsData.workshops} />
      <Section title="School Visits" data={eventsData.schoolVisits} />
    </div>
  );
}
