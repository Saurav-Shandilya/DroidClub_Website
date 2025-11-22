import groupImg from "../assets/images/about/group.jpg";
import codepunk from "../assets/images/about/codepunk.jpg";
import president from "../assets/images/about/aditya.jpg";
import gs from "../assets/images/about/vaishnav.jpg";
import vp from "../assets/images/about/harsh.jpeg";
import school from "../assets/images/about/school.jpg";
import workshop from "../assets/images/about/workshop.jpg";
import mentor from "../assets/images/home/toshit.png";

import e1 from "../assets/images/about/e1.jpg";
import e2 from "../assets/images/about/e2.jpg";
import e3 from "../assets/images/about/e3.jpg";
import e4 from "../assets/images/about/e4.jpg";

const experienceImages = [e1, e2, e3, e4];

export default function About() {
  return (
    <div className="bg-[#0f0f13] min-h-screen text-white pt-32 px-6 pb-20">

      {/* MAIN HEADING */}
      <h1 className="text-5xl font-bold text-center mb-3">
        About <span className="text-[#9D4EDD]">Droid Club</span>
      </h1>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        <i>A space where technology, creativity, leadership and innovation come together.</i>
      </p>

      {/* SECTION: WHO WE ARE */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#9D4EDD]">Who We Are</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={groupImg}
            loading="lazy"
            decoding="async"
            alt="Group"
            onLoad={(e) => {
              e.currentTarget.classList.remove("opacity-0");
              e.currentTarget.classList.remove("blur-sm");
            }}
            className="rounded-xl shadow-lg border border-[#9D4EDD]/30 opacity-0 blur-sm transition-all duration-700"
          />

          <p className="text-gray-300 leading-relaxed text-lg">
            DROID Club is a student-driven tech innovation community dedicated to exploring IoT, robotics, and automation.
            <br /><br />
            Our mission is to provide a collaborative space where students can experiment with technology, share ideas, and turn concepts into working prototypes.
            Through hands-on learning, mentorship, and teamwork, we help students grow into confident engineers and innovators.
          </p>
        </div>
      </div>

      {/* SECTION: WHAT WE DO */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#9D4EDD]">What We Do</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Workshops",
              img: workshop,
              description:
                "We organize practical workshops and guided sessions that help students learn new technologies and build real projects.",
            },
            {
              title: "Hackathons",
              img: codepunk,
              description:
                "We host creative hackathons that encourage teamwork, rapid prototyping, and problem-solving through real-world challenges.",
            },
            {
              title: "School Visits",
              img: school,
              description:
                "We conduct school outreach programs to inspire young learners with interactive sessions on robotics, IoT, and technology basics.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1a1a24] p-5 rounded-xl border border-[#9D4EDD]/20 hover:border-[#9D4EDD] transition"
            >
              <img
                src={item.img}
                loading="lazy"
                decoding="async"
                alt={item.title}
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                  e.currentTarget.classList.remove("blur-sm");
                }}
                className="rounded-lg mb-4 h-48 w-full object-cover opacity-0 blur-sm transition-all duration-700"
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

      {/* SECTION: OUR MENTOR */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#9D4EDD]">Our Mentor</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={mentor}
            loading="lazy"
            decoding="async"
            alt="Mentor"
            onLoad={(e) => {
              e.currentTarget.classList.remove("opacity-0");
              e.currentTarget.classList.remove("blur-sm");
            }}
            className="rounded-xl shadow-lg border border-[#9D4EDD]/30 opacity-0 blur-sm transition-all duration-700"
          />

          <div>
            <h3 className="text-2xl font-bold mb-2">Toshit Jain</h3>
            <p className="text-gray-400 leading-relaxed">
              Our mentor guides us in leadership, technical excellence,
              research directions, and project development.
              <br /><br />
              Under their supervision, the club has grown into one of the most active
              student-driven technical communities in the university.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION: LEADERSHIP TEAM */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#9D4EDD]">Leadership Team</h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { name: "Aditya Naulakha", role: "President", img: president },
            { name: "Harshvardhan Gupta", role: "Vice President", img: vp },
            { name: "Vaishnav P Ramesh", role: "General Secretary", img: gs },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-[#1a1a24] rounded-xl p-5 border border-[#9D4EDD]/20 hover:border-[#9D4EDD] transition shadow-lg"
            >
              <img
                src={p.img}
                loading="lazy"
                decoding="async"
                alt={p.name}
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                  e.currentTarget.classList.remove("blur-sm");
                }}
                className="rounded-xl mb-4 w-full h-52 object-cover shadow-md shadow-[#9D4EDD]/20 opacity-0 blur-sm transition-all duration-700"
              />
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-[#9D4EDD] font-semibold">{p.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION: EXPERIENCES */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#9D4EDD]">Our Experiences</h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Over the years, DROID Club has worked on a wide range of technical projects and learning experiences that help students develop practical skills beyond the classroom.
              <br /><br />
              We have conducted workshops, hackathons, and hands-on sessions covering microcontrollers, sensors, embedded systems, automation workflows, and robotics.
              Many students have built their first IoT devices, automation tools, and robotics prototypes through our guidance.
              <br /><br />
              Our team has worked on real-world industry-style projects, collaborated with campus clubs, and supported juniors in building their portfolios and showcasing innovative work.
              Every event, project, and mentorship cycle adds to our journey of continuous learning, experimentation, and technological growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {experienceImages.map((img, i) => (
              <img
                key={i}
                src={img}
                loading="lazy"
                decoding="async"
                alt="Experience"
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                  e.currentTarget.classList.remove("blur-sm");
                }}
                className="rounded-lg h-40 w-full object-cover shadow-md shadow-[#9D4EDD]/30 opacity-0 blur-sm transition-all duration-700"
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
