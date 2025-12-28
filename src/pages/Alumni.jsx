export default function Alumni() {

  const alumni = [
    {
      name: "Rahul Sharma",
      role: "Ex-President",
      year: "Batch 2024",
      img: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923787/rahul_jt8uag.png",
    },
    {
      name: "Shreshtha Parwani",
      role: "Ex-PR Head",
      year: "Batch 2024",
      img: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923788/shreshtha_a0otab.jpg",
    },
    {
      name: "Akash Gola",
      role: "Ex-President",
      year: "Batch 2025",
      img: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923786/Akash-gola_beranc.jpg",
    },
    {
      name: "Gagan Singh",
      role: "Ex-Vice President",
      year: "Batch 2025",
      img: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923788/Gagan-Singh_m2mufc.jpg",
    },
    {
      name: "P Bhargav",
      role: "Ex-Technical Head",
      year: "Batch 2025",
      img: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923786/bhargav_igd0vi.jpg",
    },
    {
      name: "Prakhar Singh",
      role: "Ex-GS",
      year: "Batch 2026",
      img: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923787/Prakhar_lkac5z.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f13] text-white pt-32 pb-20 px-6">

      {/* PAGE HEADING */}
      <h1 className="text-5xl font-bold text-center mb-3">
        Our <span className="text-[#9D4EDD]">Alumni</span>
      </h1>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 italic">
        The leaders who shaped our club — their legacy continues to guide us.
      </p>

      {/* ALUMNI CARDS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {alumni.map((person, i) => (
          <div
            key={i}
            className="
              bg-[#1a1a24] p-6 rounded-2xl border border-[#9D4EDD]/20 
              shadow-lg hover:shadow-purple-600/20 transition relative group
            "
          >
            {/* Glow */}
            <div
              className="
                absolute -top-2 left-1/2 -translate-x-1/2 
                w-40 h-40 rounded-xl bg-[#9D4EDD]/20 blur-3xl opacity-0 
                group-hover:opacity-100 transition
              "
            />

            <img
              src={person.img}
              alt={person.name}
              loading="lazy"
              className="
                w-40 h-40 mx-auto object-cover rounded-xl 
                border border-[#9D4EDD]/30 shadow-lg
              "
            />

            <h3 className="text-2xl font-semibold text-center mt-6">
              {person.name}
            </h3>

            <p className="text-[#9D4EDD] text-center font-medium mt-1">
              {person.role}
            </p>

            <p className="text-gray-400 text-center mt-1">
              {person.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
