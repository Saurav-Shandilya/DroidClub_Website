import { ArrowRight, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

/* ================= CLOUDINARY IMAGES ================= */
const IMAGES = {
  hero: [
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923782/e1_b749h2.webp",
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923778/e2_ngucmf.webp",
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923780/e3_y1cupa.webp",
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923781/e4_rxlslj.webp",
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923784/school_pxel9z.webp",
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923785/workshop_akeqt2.webp",
  ],

  mentor:
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923798/toshit_phbd9h.png",

  events: [
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923794/3_b4lbpp.png", // Codepunk
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923795/4_wl27q5.png", // RoboWar
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923795/5_ze5xci.png", // Line Tracing
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923796/6_ehzswu.png", // Mechathon
  ],

  leadership: {
    president:
      "https://res.cloudinary.com/duxiduyke/image/upload/v1766923776/aditya_xp00oy.webp",
    vicePresident:
      "https://res.cloudinary.com/duxiduyke/image/upload/v1766923783/harsh_dcyx7l.webp",
    secretary:
      "https://res.cloudinary.com/duxiduyke/image/upload/v1766923785/vaishnav_wphgb2.webp",
  },
};
/* ===================================================== */

export default function Home() {
  return (
    <div className="text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full pt-32 pb-24 overflow-hidden">

        <div className="absolute inset-0 -z-20">
          <iframe
            src="https://my.spline.design/squarechipsfallinginplace-aYX0RY7fkZchvQzgcpI1p9az/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f0f13]/40 via-[#0f0f13]/70 to-[#0f0f13]/95"></div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            <span className="text-2xl text-[#9D4EDD]">Welcome to</span>
            <span className="block">DROID CLUB</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 italic">
            The official technical club of GLA University — where innovation meets teamwork,
            ideas become real projects, and students grow into leaders.
          </p>

          <Link
            to="/about"
            className="mt-8 px-10 py-3 rounded-full bg-[#9D4EDD] hover:bg-[#7B2CBF] transition font-bold flex items-center gap-2 mx-auto w-max"
          >
            Explore More <ArrowRight size={22} />
          </Link>

          {/* Hero Image Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-14">
            {IMAGES.hero.map((img, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transition"
              >
                <img
                  src={img}
                  alt={`Hero ${i}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 px-5 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div className="grid grid-cols-2 gap-4">
            {IMAGES.hero.slice(0, 4).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`About ${i}`}
                className={`rounded-2xl h-60 w-full object-cover ${
                  i % 2 === 1 ? "mt-10" : ""
                }`}
              />
            ))}
          </div>

          <div>
            <h2 className="text-4xl font-extrabold mb-4">
              Who <span className="text-[#9D4EDD]">We Are</span>
            </h2>

            <p className="text-gray-300 text-lg">
              DROID Club is the multidisciplinary technical club of GLA University.
              We build real-world projects, conduct workshops, hackathons, and outreach programs.
            </p>

            <div className="flex gap-6 mt-10">
              <div className="flex items-center gap-3">
                <Users className="text-[#9D4EDD]" size={32} />
                <p className="font-bold text-lg">40+ Members</p>
              </div>

              <div className="flex items-center gap-3">
                <Star className="text-[#9D4EDD]" size={30} />
                <p className="font-bold text-lg">10+ Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= UPCOMING EVENTS ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          Upcoming <span className="text-[#9D4EDD]">Events</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {IMAGES.events.map((img, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl bg-[#1c1c24] border border-white/10"
            >
              <img
                src={img}
                alt={`Event ${i}`}
                className="rounded-xl h-52 w-full object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Event Coming Soon</h4>
              <p className="text-gray-400 text-sm mt-2">
                Stay tuned for announcements.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MENTOR ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10">
          Our <span className="text-[#9D4EDD]">Mentor</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src={IMAGES.mentor}
            alt="Mentor Toshit Jain"
            className="rounded-3xl h-[350px] w-full object-cover"
          />

          <div>
            <h3 className="text-3xl font-bold mb-4">Toshit Jain</h3>
            <p className="text-gray-300 text-lg">
              The guiding force behind the DROID Club — providing vision, academic
              support, leadership guidance, and innovation direction.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12">
          Our <span className="text-[#9D4EDD]">Leadership</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              name: "Aditya Naulakha",
              role: "President",
              img: IMAGES.leadership.president,
            },
            {
              name: "Harshvardhan Gupta",
              role: "Vice President",
              img: IMAGES.leadership.vicePresident,
            },
            {
              name: "Vaishnav P Ramesh",
              role: "General Secretary",
              img: IMAGES.leadership.secretary,
            },
          ].map((p, i) => (
            <div key={i} className="bg-[#1a1a24] rounded-xl p-6">
              <img
                src={p.img}
                alt={p.name}
                className="rounded-xl h-56 w-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-[#9D4EDD] font-semibold">{p.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
