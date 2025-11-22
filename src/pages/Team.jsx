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
import arpit from "../assets/images/team/arpit.jpg";
import tanishq from "../assets/images/team/tanishq.jpg";
import priya from "../assets/images/team/Priya.jpg";
import keshav from "../assets/images/team/keshav.jpg";
import vaidarbhi from "../assets/images/team/vaidarbhi.jpg";
import damini from "../assets/images/team/Dhamini.jpg";
import shravya from "../assets/images/team/shravya.jpg";
import shatakshi2 from "../assets/images/team/shatakshi.jpg";
import rohit2 from "../assets/images/team/rohit .jpg";
import ashi from "../assets/images/team/Ashi.jpg";
import prachi from "../assets/images/team/prachi.jpg";
import vansh from "../assets/images/team/vansh.jpg";
import kunj from "../assets/images/team/kunj.jpg";
import worship from "../assets/images/team/Worship.jpg";
import animesh from "../assets/images/team/Animesh.jpg";
import devendra from "../assets/images/team/Devendra.jpg";
import venu from "../assets/images/team/venu.JPG";


export default function Team() {

  /* ---------------- LEVEL 1 ---------------- */
  const level1 = [
    { name: "Aditya Naulakha", role: "President", img: p },
    { name: "Harshvardhan Gupta", role: "Vice President", img: vp },
    { name: "Vaishnav P Ramesh", role: "General Secretary", img: gs },
  ];

  /* ---------------- LEVEL 2: HEADS ---------------- */
  const level2 = [
    { name: "Venu Gopal", role: "Treasurer", img: venu },
    { name: "Arpit Saraswat", role: "IOT Head", img: arpit },
    { name: "Kunj Bhasin", role: "AI/ML Head", img: kunj },
    { name: "Tanishk Saxena", role: "Design Head", img: tanishq},
    { name: "Devendra Sharma", role: "Media Crew Head", img: devendra},
    { name: "Akshat Jain", role: "PR & Event Head", img: akshat },
    { name: "Vaidarbhi Goyal", role: "Content Head", img: vaidarbhi },
    { name: "Chaitanya", role: "Game Dev Head", img: Chaitanya },
    { name: "Keshav Sharma", role: "Web Dev Head", img: keshav },
  ];

  /* ---------------- LEVEL 3: CO-HEADS ---------------- */
  const level3 = [
    { name: "Shivam Gupta", role: "IOT Co-Head", img: shivam },
    { name: "Disha Gupta", role: "AI/ML Co-Head", img: disha },
    { name: "Isha Vashishtha", role: "AI/ML Co-Head", img: isha },
    { name: "Saurav Shandilya", role: "Design Co-Head", img: saurav },
    { name: "Sumit Sharma", role: "Media Crew Co-Head", img: sumit },
    { name: "Worship Agrawal", role: "Media Crew Co-Head", img: worship },
    { name: "Sohum Sabhani", role: "PR & Event Co-Head", img: sohum },
    { name: "Pratham Saini", role: "PR & Event Co-Head", img: "https://via.placeholder.com/200" },
    { name: "Priya Garg", role: "Content Co-Head", img: priya},
    { name: "Animesh", role: "Game Dev Co-Head", img: animesh},
    { name: "Nowduru Damini", role: "Game Dev Co-Head", img: damini },
    { name: "Vansh Sharma", role: "Web Dev Co-Head", img: vansh },
    { name: "Divyansh Sharma", role: "Web Dev Co-Head", img: "https://via.placeholder.com/200" },
  ];

  /* ---------------- LEVEL 4: EXECUTIVES ---------------- */
  const level4 = [
    { name: "Ashi Nauhwar", role: "Executive Member", img: ashi },
    { name: "Anshini Chaturvedi", role: "Executive Member", img: anshini },
    { name: "Sakshi", role: "Executive Member", img: sakshi },
    { name: "Shravya Pandey", role: "Executive Member", img: shravya },
    { name: "Rohit", role: "Executive Member", img:  rohit2},
    { name: "Granth Solanki", role: "Executive Member", img: "https://via.placeholder.com/200"},
    { name: "Yash Upadhyay", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Aditi Sharma", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Sheetal Solanki", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Tanishq Tiwari", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Madhav Bacharwar", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Ajitmani Gupta", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Alex Vyas", role: "Executive Member", img: "https://via.placeholder.com/200" },
    
    { name: "Aditya Rautela", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Yashendra Kumar", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Purojita Singh", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Shivansh", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Shatakshi Bajpai", role: "Executive Member", img: shatakshi2 },
    { name: "Bhumik Agrawal", role: "Executive Member", img: "https://via.placeholder.com/200" },
    { name: "Prachi Varshney", role: "Executive Member", img: prachi },
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
