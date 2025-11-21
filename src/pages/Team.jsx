import gs from "../assets/images/team/vaishnav.jpg";
import p from "../assets/images/team/Aditya.jpg";
import vp from "../assets/images/team/harsh.jpeg";
import saurav from "../assets/images/team/saurav.jpeg";
import anshini from "../assets/images/team/Anshini.jpg";
import akshat from "../assets/images/team/Akshat.png";
import sumit from "../assets/images/team/Sumit.jpg";
import isha from "../assets/images/team/Isha.png";
import disha from "../assets/images/team/Disha.jpg";
import shivam from "../assets/images/team/shivam.jpg";
import sohum from "../assets/images/team/sohum.png";
import Chaitanya from "../assets/images/team/Chaitanya.jpeg";
import sakshi from "../assets/images/team/sakshi.png";

export default function Team() {

  /* ---------------- LEVEL 1 ---------------- */
  const level1 = [
    { name: "Aditya Naulakha", role: "President", img: p },
    { name: "Harshvardhan Gupta", role: "Vice President", img: vp },
    { name: "Vaishnav P Ramesh", role: "General Secretary", img: gs },
  ];

  /* ---------------- LEVEL 2: HEADS ---------------- */
  const level2 = [
    { name: "Arpit Saraswat", role: "IOT Head", img: "https://via.placeholder.com/200" },
    { name: "Kunj Bhasin", role: "AI/ML Head", img: "https://via.placeholder.com/200" },
    { name: "Tanishk Saxena", role: "Design Head", img: "https://via.placeholder.com/200" },
    { name: "Devendra Sharma", role: "Media Crew Head", img: "https://via.placeholder.com/200" },
    { name: "Akshat Jain", role: "PR & Event Head", img: akshat },
    { name: "Vaidarbhi Goyal", role: "Content Head", img: "https://via.placeholder.com/200" },
    { name: "Chaitanya", role: "Game Dev Head", img: Chaitanya },
    { name: "Keshav Sharma", role: "Web Dev Head", img: "https://via.placeholder.com/200" },
  ];

  /* ---------------- LEVEL 3: CO-HEADS ---------------- */
  const level3 = [
    { name: "Shivam Gupta", role: "IOT Co-Head", img: shivam },
    { name: "Disha Gupta", role: "AI/ML Co-Head", img: disha },
    { name: "Isha Vashishtha", role: "AI/ML Co-Head", img: isha },
    { name: "Saurav Shandilya", role: "Design Co-Head", img: saurav },
    { name: "Sumit Sharma", role: "Media Crew Co-Head", img: sumit },
    { name: "Worship Agrawal", role: "Media Crew Co-Head", img: "https://via.placeholder.com/200" },
    { name: "Sohum Sabhani", role: "PR & Event Co-Head", img: sohum },
    { name: "Pratham Saini", role: "PR & Event Co-Head", img: "https://via.placeholder.com/200" },
    { name: "Priya Garg", role: "Content Co-Head", img: "https://via.placeholder.com/200" },
    { name: "Animesh", role: "Game Dev Co-Head", img: "https://via.placeholder.com/200" },
    { name: "Nowduru Damini", role: "Game Dev Co-Head", img: "https://via.placeholder.com/200" },
    { name: "Vansh Sharma", role: "Web Dev Co-Head", img: "https://via.placeholder.com/200" },
    { name: "Divyansh Sharma", role: "Web Dev Co-Head", img: "https://via.placeholder.com/200" },
  ];

  /* ---------------- LEVEL 4: EXECUTIVES ---------------- */
  const level4 = [
    { name: "Anshini Chaturvedi", role: "Executive Member", img: anshini },
    { name: "Rohit", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Granth Solanki", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Yash Upadhyay", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Aditi Sharma", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Sheetal Solanki", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Tanishq Tiwari", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Madhav Bacharwar", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Ajitmani Gupta", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Alex Vyas", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Sakshi", role: "Executive Member", img: sakshi },
    { name: "Shravya Pandey", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Ashi Nauhwar", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Aditya Rautela", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Yashendra Kumar", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Purojita Singh", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Shivansh", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Shatakshi Bajpai", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Bhumik Agrawal", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Prachi Varshney", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Akshita Singh", role: "Executive Member", img: "https://via.placeholder.com/200" },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f13] text-white px-6 pt-28 pb-20">

      <h1 className="text-5xl font-bold text-center text-[#9D4EDD]">
        <span className="text-white">Our </span>Team
      </h1>

      <p className="text-center text-gray-400 mt-3 mb-16 text-lg italic">
        Meet the creative minds leading and building our tech community.
      </p>

      <Section level={level1} size="large" />
      <Section level={level2} size="medium" />
      <Section level={level3} size="small" />
      <Section level={level4} size="xsmall" />
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Section({ level, size }) {
  return (
    <div className="relative mb-20">
      <div className="flex flex-wrap justify-center gap-8">
        {level.map((p, i) => (
          <TeamCard key={i} data={p} size={size} />
        ))}
      </div>
      <Connector />
    </div>
  );
}

function TeamCard({ data, size }) {

  // ✔️ FIXED — valid tailwind portrait sizes (no auto-resize)
  const sizes = {
    large: "w-56 h-44",
    medium: "w-48 h-40",
    small: "w-40 h-36",
    xsmall: "w-36 h-32",
  };

  return (
    <div className="bg-[#1a1a24] border border-[#9D4EDD]/30 hover:border-[#9D4EDD]
      rounded-2xl p-6 w-60 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">

      <div className="mx-auto rounded-xl overflow-hidden">
        <img
          src={data.img}
          className={`${sizes[size]} object-cover`}
        />
      </div>

      <h3 className="text-lg font-bold text-center mt-4">{data.name}</h3>
      <p className="text-[#9D4EDD] text-center font-medium">{data.role}</p>
    </div>
  );
}

function Connector() {
  return (
    <div className="absolute left-1/2 top-full w-1 h-12 bg-[#9D4EDD] -translate-x-1/2"></div>
  );
}
