import gs from "../assets/images/team/vaishnav.jpg";
import p from "../assets/images/team/Aditya.jpg";
import vp from "../assets/images/team/harsh.jpeg";


export default function Team() {
  const level1 = [
    { name: "Aditya Naulakha", role: "President", img: p },
    { name: "Harshvardhan Gupta", role: "Vice President", img: vp },
    { name: "Vaishnav P Ramesh", role: "General Secretary", img: gs },
  ];

  const level2 = [
    { name: "Aditya", role: "Tech Head", img: "https://via.placeholder.com/200" },
    { name: "Sneha", role: "Design Head", img: "https://via.placeholder.com/200" },
    { name: "Krish", role: "Event Head", img: "https://via.placeholder.com/200" },
    { name: "Aanya", role: "Marketing Head", img: "https://via.placeholder.com/200" },
    { name: "Harsh", role: "PR Head", img: "https://via.placeholder.com/200" },
    { name: "Meera", role: "Content Head", img: "https://via.placeholder.com/200" },
    { name: "Rohan", role: "Operations Head", img: "https://via.placeholder.com/200" },
    { name: "Zoya", role: "Community Head", img: "https://via.placeholder.com/200" },
  ];

  const level3 = Array.from({ length: 12 }).map((_, i) => ({
    name: `Member ${i + 1}`,
    role: "Club Member",
    img: "https://via.placeholder.com/200",
  }));

  return (
    <div className="min-h-screen bg-[#0f0f13] text-white px-6 pt-28 pb-20">
      
      {/* Heading */}
      <h1 className="text-5xl font-bold text-center text-[#9D4EDD]"><span className="text-white">Our </span>Team</h1>
      <p className="text-center text-gray-400 mt-3 mb-16 text-lg"><i>
        Meet the creative minds leading and building our tech community.
        </i></p>

      {/* Level 1 */}
      <div className="relative text-center mb-20">
        <div className="flex justify-center gap-8 flex-wrap">
          {level1.map((p, i) => (
            <div
              key={i}
              className="bg-[#1a1a24] border border-[#9D4EDD]/30 hover:border-[#9D4EDD] 
              rounded-2xl p-6 w-64 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={p.img}
                className="w-40 h-40 mx-auto rounded-xl object-cover mb-4"
              />
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-[#9D4EDD] font-medium">{p.role}</p>
            </div>
          ))}
        </div>

        {/* Connector Line */}
        <div className="absolute left-1/2 top-full w-1 h-12 bg-[#9D4EDD] -translate-x-1/2"></div>
      </div>

      {/* Level 2 */}
      <div className="relative mb-20">
        <div className="flex flex-wrap justify-center gap-8">
          {level2.map((p, i) => (
            <div
              key={i}
              className="bg-[#1a1a24] border border-[#9D4EDD]/30 hover:border-[#9D4EDD] 
              rounded-2xl p-6 w-60 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={p.img}
                className="w-36 h-36 mx-auto rounded-xl object-cover mb-4"
              />
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="text-[#9D4EDD] font-medium">{p.role}</p>
            </div>
          ))}
        </div>

        {/* Connector Line */}
        <div className="absolute left-1/2 top-full w-1 h-12 bg-[#9D4EDD] -translate-x-1/2"></div>
      </div>

      {/* Level 3 */}
      <div>
        <div className="flex flex-wrap justify-center gap-8">
          {level3.map((p, i) => (
            <div
              key={i}
              className="bg-[#1a1a24] border border-[#9D4EDD]/20 hover:border-[#9D4EDD] 
              rounded-2xl p-5 w-52 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={p.img}
                className="w-32 h-32 mx-auto rounded-xl object-cover mb-3"
              />
              <h3 className="text-base font-bold">{p.name}</h3>
              <p className="text-[#9D4EDD] text-sm">{p.role}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
