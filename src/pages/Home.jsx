import { ArrowRight, Users, Star } from "lucide-react";
import e1 from "../assets/images/about/e1.webp";
import e2 from "../assets/images/about/e2.webp";
import e3 from "../assets/images/about/e3.webp";
import e4 from "../assets/images/about/e4.webp";
import e5 from "../assets/images/about/school.webp";
import mentor from "../assets/images/home/toshit.png";
import codepunk2 from "../assets/images/home/3.png";
import robo from "../assets/images/home/4.png";
import line from "../assets/images/home/5.png";
import mech from "../assets/images/home/6.png";
import e6 from "../assets/images/about/workshop.webp";
import { Link } from "react-router-dom";
import p from "../assets/images/about/aditya.webp";
import gs from "../assets/images/about/vaishnav.webp";
import vp from "../assets/images/about/harsh.webp";

export default function Home() {
  return (
    <div className="text-white overflow-hidden ">

      {/* ================================================= HERO ================================================= */}
      <section className="relative w-full pt-32 pb-24 overflow-hidden bg-transparent">

        {/* Background */}
        <div className="absolute inset-0 -z-20">
          <iframe
            src="https://my.spline.design/squarechipsfallinginplace-aYX0RY7fkZchvQzgcpI1p9az/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f0f13]/40 via-[#0f0f13]/70 to-[#0f0f13]/95"></div>

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-purple-500/20 rounded-full blur-[200px]"></div>
        </div>

        {/* HERO CONTENT */}
        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            <span className="text-2xl text-[#9D4EDD]">Welcome to</span>
            <span className="block text-white">DROID CLUB</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mt-6"><i>
            The official technical club of GLA University — where innovation meets teamwork,
            ideas become real projects, and students grow into leaders.</i>
          </p>

          <Link
            to="/about"
            className="mt-8 px-10 py-3 rounded-full bg-[#9D4EDD] hover:bg-[#7B2CBF] transition text-lg font-bold flex items-center gap-2 mx-auto w-max"
          >
            Explore More <ArrowRight size={22} />
          </Link>

          {/* Hero image grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-14">
            {[e1, e2, e3, e4, e5, e6].map((image, i) => (
              <div key={i}
                className="aspect-square rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transition"
              >
                <img
                  src={image}
                  loading="lazy"
                  decoding="async"
                  alt={`Hero grid ${i}`}
                  onLoad={(e) => {
                    e.currentTarget.classList.remove("opacity-0");
                    e.currentTarget.classList.remove("blur-sm");
                  }}
                  className="w-full h-full object-cover opacity-0 blur-sm transition-all duration-700"
                />
              </div>
            ))}
          </div>

        </div>
      </section>



      {/* ================================================= WHO WE ARE ================================================= */}
      <section className="py-24 px-5 max-w-6xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            {[e3, e2, e4, e1].map((src, i) => (
              <img
                key={i}
                src={src}
                loading="lazy"
                decoding="async"
                alt={`Who we are ${i}`}
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                  e.currentTarget.classList.remove("blur-sm");
                }}
                className={`rounded-2xl object-cover h-60 w-full opacity-0 blur-sm transition-all duration-700 shadow-[0_0_25px_rgba(157,78,221,0.4)] ${
                  i % 2 === 1 ? "mt-10" : ""
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl font-extrabold mb-4">
              Who <span className="text-[#9D4EDD]">We Are</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              DROID Club is the multidisciplinary technical club of GLA University.
              We build real-world projects, participate in hackathons, conduct workshops,
              school outreach programs, and guide students into becoming future innovators.
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

            <Link
              to="/about"
              className="mt-8 inline-block px-8 py-3 rounded-full bg-[#9D4EDD] hover:bg-[#7B2CBF] transition font-bold"
            >
              Explore More
            </Link>
          </div>

        </div>
      </section>



      {/* ================================================= STATS SECTION ================================================= */}
      <section className="py-20 bg-[#13131a] text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            { number: "40+", label: "Active Members" },
            { number: "10+", label: "Projects & Events" },
            { number: "15+", label: "School Outreach Drives" }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#1c1c24] border border-white/10 shadow-lg hover:scale-105 hover:border-[#9D4EDD] transition">
              <h3 className="text-5xl font-extrabold text-[#9D4EDD]">{item.number}</h3>
              <p className="text-gray-300 text-lg mt-3">{item.label}</p>
            </div>
          ))}

        </div>
      </section>



      {/* ================================================= UPCOMING EVENTS ================================================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          Upcoming <span className="text-[#9D4EDD]">Events</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[codepunk2, robo, line, mech].map((i, index) => (
            <div key={index}
              className="p-4 rounded-2xl bg-[#1c1c24] border border-white/10 hover:border-[#9D4EDD] transition"
            >
              <img
                src={i}
                loading="lazy"
                decoding="async"
                alt={`Upcoming event ${index}`}
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                  e.currentTarget.classList.remove("blur-sm");
                }}
                className="rounded-xl h-52 w-full object-cover mb-4 opacity-0 blur-sm transition-all duration-700"
              />
              <h4 className="text-xl font-bold">Event Coming Soon</h4>
              <p className="text-gray-400 text-sm mt-2">
                Stay tuned for announcements.
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/events"
            className="px-8 py-3 rounded-full bg-[#9D4EDD] hover:bg-[#7B2CBF] transition font-bold"
          >
            View All Events
          </Link>
        </div>
      </section>



      {/* ================================================= MENTOR SECTION ================================================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-10">
          Our <span className="text-[#9D4EDD]">Mentor</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <img
            src={mentor}
            loading="lazy"
            decoding="async"
            alt="Mentor Toshit Jain"
            onLoad={(e) => {
              e.currentTarget.classList.remove("opacity-0");
              e.currentTarget.classList.remove("blur-sm");
            }}
            className="rounded-3xl w-full h-[350px] object-cover shadow-[0_0_40px_rgba(157,78,221,0.5)] opacity-0 blur-sm transition-all duration-700"
          />

          <div>
            <h3 className="text-3xl font-bold mb-4">Toshit Jain</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              The guiding force behind the DROID Club — providing vision, academic support,
              direction, leadership guidance and helping the club grow year after year.
              His mentorship ensures the club stays innovative, focused and impactful.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-block px-8 py-3 rounded-full bg-[#9D4EDD] hover:bg-[#7B2CBF] transition font-bold"
            >
              Know More
            </Link>
          </div>

        </div>
      </section>



      {/* ================================================= LEADERSHIP SECTION ================================================= */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          Our <span className="text-[#9D4EDD]">Leadership</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">

          {[
            { name: "Aditya Naulakha", role: "President", img: p },
            { name: "Harshvardhan Gupta", role: "Vice President", img: vp },
            { name: "Vaishnav P Ramesh", role: "General Secretary", img: gs },
          ].map((p, i) => (
            <div key={i} className="bg-[#1a1a24] rounded-xl p-6 border border-[#9D4EDD]/20 hover:border-[#9D4EDD] transition shadow-lg">
              <img
                src={p.img}
                loading="lazy"
                decoding="async"
                alt={p.name}
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                  e.currentTarget.classList.remove("blur-sm");
                }}
                className="rounded-xl mb-4 w-full h-56 object-cover shadow-md shadow-[#9D4EDD]/20 opacity-0 blur-sm transition-all duration-700"
              />
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-[#9D4EDD] font-semibold">{p.role}</p>
            </div>
          ))}

        </div>

        <div className="text-center mt-10">
          <Link
            to="/team"
            className="px-8 py-3 rounded-full bg-[#9D4EDD] hover:bg-[#7B2CBF] transition font-bold"
          >
            Explore Team
          </Link>
        </div>
      </section>



      {/* ================================================= HIGHLIGHTS SECTION ================================================= */}
      <section className="py-24 bg-[#13131a] px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Club <span className="text-[#9D4EDD]">Highlights</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Journey</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                From conducting massive workshops and hackathons to inspiring school students 
                across Mathura — our journey has been full of learning, leadership, teamwork, 
                and impact.  
                <br /><br />
                With each passing year, the club expands its capabilities, 
                strengthens its teams, and achieves bigger milestones that 
                contribute to the technical culture of the entire campus.
              </p>

              <Link
                to="/gallery"
                className="mt-8 inline-block px-8 py-3 rounded-full bg-[#9D4EDD] hover:bg-[#7B2CBF] transition font-bold"
              >
                Explore Gallery
              </Link>
            </div>

            {/* Patterned image grid */}
            <div className="grid grid-cols-3 gap-4">
              {[e1, e2, e3, e4, e5, e6].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  loading="lazy"
                  decoding="async"
                  alt={`Highlight ${i}`}
                  onLoad={(e) => {
                    e.currentTarget.classList.remove("opacity-0");
                    e.currentTarget.classList.remove("blur-sm");
                  }}
                  className={`rounded-xl object-cover w-full opacity-0 blur-sm transition-all duration-700 ${
                    i % 2 === 0 ? "h-32" : "h-48"
                  } hover:scale-105 transition`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>



    </div>
  );
}
