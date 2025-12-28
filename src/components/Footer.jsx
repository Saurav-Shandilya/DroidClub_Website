import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [faqOpen, setFaqOpen] = useState(null);

  const faqs = [
    {
      q: "What is Droid Club?",
      a: "Droid Club is a technical community at GLA University focused on innovation and collaboration.",
    },
    {
      q: "How can I join the club?",
      a: "Registrations open during recruitment drives. You can also reach us via the contact form.",
    },
    {
      q: "Who can participate in events?",
      a: "All students from any branch with interest in technology can participate.",
    },
  ];

  return (
    <footer className="bg-[#0f0f13] text-white pt-20 pb-10 px-8 mt-0 border-t border-[#9D4EDD]/20">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">

        {/* LEFT — CONTACT INFO */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#9D4EDD]">Contact</h2>

          <div className="space-y-4 text-gray-300">
            <div>
              <p className="font-semibold">Aditya Naulakha (President)</p>
              <p className="text-sm text-gray-400">📞 +91 7454916178</p>
            </div>

            <div>
              <p className="font-semibold">Harshvardhan Gupta (Vice President)</p>
              <p className="text-sm text-gray-400">📞 +91 7037500363</p>
            </div>

            <div className="pt-2">
              <p className="font-semibold">📧 Email</p>
              <p className="text-sm text-gray-400">Droidclub@gla.ac.in</p>
            </div>
          </div>
        </div>

        {/* CENTER — LOCATION INFO */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#9D4EDD]">Location</h2>

          <div className="space-y-2 text-gray-300">
            <p>GLA University</p>
            <p>Mathura Campus</p>
            <p>Academic Block III (AB3)</p>
          </div>
        </div>

        {/* RIGHT — FAQ DROPDOWN */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#9D4EDD]">FAQs</h2>

          <div className="space-y-3">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-[#1a1a24] border border-[#9D4EDD]/20 rounded-lg p-4"
              >
                <button
                  className="w-full flex justify-between items-center text-left text-gray-300 font-medium"
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  {item.q}
                  <FaChevronDown
                    className={`transition ${
                      faqOpen === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {faqOpen === index && (
                  <p className="mt-3 text-gray-400 text-sm">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="mt-12 flex justify-center gap-8 text-2xl text-gray-300">
        {/* <a href="#" className="hover:text-[#9D4EDD] transition">
          <FaTwitter />
        </a> */}
        <a href="https://www.instagram.com/droid_glau/" className="hover:text-[#9D4EDD] transition">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/company/droid-glau" className="hover:text-[#9D4EDD] transition">
          <FaLinkedin />
        </a>
      </div>

      {/* <p className="text-center text-gray-500 mt-6 text-sm">
        © {new Date().getFullYear()} Droid Club — All Rights Reserved
      </p> */}
    </footer>
  );
}
