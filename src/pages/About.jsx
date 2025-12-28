/* ================= CLOUDINARY IMAGES ================= */
const IMAGES = {
  group:
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923785/group_mw2lle.webp",

  codepunk:
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923794/3_b4lbpp.png",

  school:
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923784/school_pxel9z.webp",

  workshop:
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923785/workshop_akeqt2.webp",

  mentor:
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923798/toshit_phbd9h.png",

  leadership: {
    president:
      "https://res.cloudinary.com/duxiduyke/image/upload/v1766923776/aditya_xp00oy.webp",
    vicePresident:
      "https://res.cloudinary.com/duxiduyke/image/upload/v1766923783/harsh_dcyx7l.webp",
    secretary:
      "https://res.cloudinary.com/duxiduyke/image/upload/v1766923785/vaishnav_wphgb2.webp",
  },

  experience: [
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923782/e1_b749h2.webp",
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923778/e2_ngucmf.webp",
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923780/e3_y1cupa.webp",
    "https://res.cloudinary.com/duxiduyke/image/upload/v1766923781/e4_rxlslj.webp",
  ],
};
/* ===================================================== */

export default function About() {
  return (
    <div className="bg-[#0f0f13] min-h-screen text-white pt-32 px-6 pb-20">

      {/* MAIN HEADING */}
      <h1 className="text-5xl font-bold text-center mb-3">
        About <span className="text-[#9D4EDD]">Droid Club</span>
      </h1>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 italic">
        A space where technology, creativity, leadership and innovation come together.
      </p>

      {/* WHO WE ARE */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#9D4EDD]">Who We Are</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={IMAGES.group}
            alt="Droid Club Group"
            loading="lazy"
            className="rounded-xl shadow-lg border border-[#9D4EDD]/30"
          />

          <p className="text-gray-300 leading-relaxed text-lg">
            DROID Club is a student-driven tech innovation community dedicated to exploring
            IoT, robotics, and automation.
            <br /><br />
            Our mission is to provide a collaborative space where students can experiment
            with technology, share ideas, and turn concepts into working prototypes.
          </p>
        </div>
      </div>

      {/* WHAT WE DO */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#9D4EDD]">What We Do</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Workshops",
              img: IMAGES.workshop,
              description:
                "We organize practical workshops and guided sessions that help students learn new technologies and build real projects.",
            },
            {
              title: "Hackathons",
              img: IMAGES.codepunk,
              description:
                "We host creative hackathons that encourage teamwork, rapid prototyping, and real-world problem solving.",
            },
            {
              title: "School Visits",
              img: IMAGES.school,
              description:
                "We conduct school outreach programs to inspire young learners with robotics, IoT, and technology basics.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1a1a24] p-5 rounded-xl border border-[#9D4EDD]/20 hover:border-[#9D4EDD] transition"
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="rounded-lg mb-4 h-48 w-full object-cover"
              />

              <h3 className="text-xl font-semibold text-[#9D4EDD] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MENTOR */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#9D4EDD]">Our Mentor</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={IMAGES.mentor}
            alt="Mentor Toshit Jain"
            loading="lazy"
            className="rounded-xl shadow-lg border border-[#9D4EDD]/30"
          />

          <div>
            <h3 className="text-2xl font-bold mb-2">Toshit Jain</h3>
            <p className="text-gray-400 leading-relaxed">
              Our mentor guides us in leadership, technical excellence,
              research directions, and project development.
            </p>
          </div>
        </div>
      </div>

      {/* LEADERSHIP */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#9D4EDD]">Leadership Team</h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
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
            <div
              key={i}
              className="bg-[#1a1a24] rounded-xl p-5 border border-[#9D4EDD]/20 hover:border-[#9D4EDD] transition"
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="rounded-xl mb-4 w-full h-52 object-cover"
              />
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-[#9D4EDD] font-semibold">{p.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCES */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-[#9D4EDD]">Our Experiences</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <p className="text-gray-300 text-lg leading-relaxed">
            Over the years, DROID Club has conducted workshops, hackathons, and hands-on
            sessions covering robotics, IoT, automation, and embedded systems.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {IMAGES.experience.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Experience"
                loading="lazy"
                className="rounded-lg h-40 w-full object-cover shadow-md shadow-[#9D4EDD]/30"
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
