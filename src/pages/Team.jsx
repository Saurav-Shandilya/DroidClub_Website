/* ================= CLOUDINARY TEAM IMAGES ================= */
const IMAGES = {
  aditya: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923776/aditya_xp00oy.webp",
  harsh: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923783/harsh_dcyx7l.webp",
  vaishnav: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923785/vaishnav_wphgb2.webp",

  venu: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923775/venu_efcls6.webp",
  arpit: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923758/arpit_klwwui.webp",
  kunj: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923761/kunj_mrxwxk.webp",
  rohan: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923762/rohan_vuaz2z.webp",
  tanishq: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923774/tanishq_daulwk.webp",
  devendra: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923757/Devendra_diobjv.webp",
  akshat: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923753/akshat_a5emmr.webp",
  chaitanya: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923752/Chaitanya_hnnp33.webp",
  keshav: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923759/keshav_nvgdlk.webp",

  shivam: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923765/shivam_ujfxet.webp",
  disha: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923758/disha_mp0bot.webp",
  isha: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923758/Isha_xxnrph.webp",
  saurav: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923762/saurav_vnciga.webp",
  sumit: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923767/sumit_mqztrq.webp",
  worship: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923775/Worship_j7mkl0.webp",
  sohum: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923767/sohum_ip8pht.webp",
  pratham: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923761/pratham_lcm5l7.webp",
  priya: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923761/Priya_nytl1t.webp",
  animesh: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923755/Animesh_hbfmfx.webp",
  damini: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923756/Dhamini_lb9z9i.webp",
  vansh: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923774/vansh_es9ufj.webp",
  divyansh: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923757/divyansh_wsk8x6.webp",

  ashi: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923751/Ashi_cfxmdc.webp",
  anshini: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923755/anshini_n6iqqk.webp",
  sakshi: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923762/sakshi_m86nho.webp",
  shravya: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923766/shravya_ldngu8.webp",
  rohit: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923772/rohit_arbnvt.webp",
  granth: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923757/Granth_i04gvi.webp",
  yash: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923775/yash_pfcgip.webp",
  shivamsh: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923774/shivamsh_woonzv.webp",
  aditi: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923758/aditi_plllct.webp",
  sheetal: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923764/sheetal_ha6tmr.webp",
  tanishqjr: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923770/tanishqjr_zgkvaw.webp",
  madhav: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923760/Madhav_hje3vk.webp",
  ajitmani: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923752/ajitmani_y75yab.webp",
  alex: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923753/Alexx_yim6fg.webp",
  adijr: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923753/adijr_rbwc6b.webp",
  yashendra: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923778/yashendra_agkm8f.webp",
  purojita: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923761/purojita_lqqhog.webp",
  shivansh: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923765/shivansh_vorgvj.webp",
  bhumik: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923752/bhumik_j5qlgo.webp",
  prachi: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923761/prachi_g5njad.webp",
  akshita: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923754/akshita_ofnkqd.webp",
  shatakshi: "https://res.cloudinary.com/duxiduyke/image/upload/v1766923763/shatakshi_legxoq.webp",
};
/* ===================================================== */

export default function Team() {

  const level1 = [
    { name: "Aditya Naulakha", role: "President", img: IMAGES.aditya },
    { name: "Harshvardhan Gupta", role: "Vice President", img: IMAGES.harsh },
    { name: "Vaishnav P Ramesh", role: "General Secretary", img: IMAGES.vaishnav },
  ];

  const level2 = [
    { name: "Venu Gopal", role: "Treasurer", img: IMAGES.venu },
    { name: "Arpit Saraswat", role: "IOT Head", img: IMAGES.arpit },
    { name: "Kunj Bhasin", role: "AI/ML Head", img: IMAGES.kunj },
    { name: "Rohan Prajapati", role: "Technical Head", img: IMAGES.rohan },
    { name: "Tanishk Saxena", role: "Design Head", img: IMAGES.tanishq },
    { name: "Devendra Sharma", role: "Media Crew Head", img: IMAGES.devendra },
    { name: "Akshat Jain", role: "PR & Event Head", img: IMAGES.akshat },
    { name: "Vaidarbhi Goyal", role: "Content Head", img: IMAGES.vaidarbhi },
    { name: "Chaitanya", role: "Game Dev Head", img: IMAGES.chaitanya },
    { name: "Keshav Sharma", role: "Web Dev Head", img: IMAGES.keshav },
  ];

  const level3 = [
    { name: "Shivam Gupta", role: "IOT Co-Head", img: IMAGES.shivam },
    { name: "Disha Gupta", role: "AI/ML Co-Head", img: IMAGES.disha },
    { name: "Isha Vashishtha", role: "AI/ML Co-Head", img: IMAGES.isha },
    { name: "Saurav Shandilya", role: "Design Co-Head", img: IMAGES.saurav },
    { name: "Sumit Sharma", role: "Media Crew Co-Head", img: IMAGES.sumit },
    { name: "Worship Agrawal", role: "Media Crew Co-Head", img: IMAGES.worship },
    { name: "Sohum Sabhani", role: "PR & Event Co-Head", img: IMAGES.sohum },
    { name: "Pratham Saini", role: "PR & Event Co-Head", img: IMAGES.pratham },
    { name: "Priya Garg", role: "Content Co-Head", img: IMAGES.priya },
    { name: "Animesh", role: "Game Dev Co-Head", img: IMAGES.animesh },
    { name: "Nowduru Damini", role: "Game Dev Co-Head", img: IMAGES.damini },
    { name: "Vansh Sharma", role: "Web Dev Co-Head", img: IMAGES.vansh },
    { name: "Divyansh Sharma", role: "Web Dev Co-Head", img: IMAGES.divyansh },
  ];

  const level4 = [
    { name: "Ashi Nauhwar", role: "Executive Member", img: IMAGES.ashi },
    { name: "Anshini Chaturvedi", role: "Executive Member", img: IMAGES.anshini },
    { name: "Sakshi", role: "Executive Member", img: IMAGES.sakshi },
    { name: "Shravya Pandey", role: "Executive Member", img: IMAGES.shravya },
    { name: "Rohit", role: "Executive Member", img: IMAGES.rohit },
    { name: "Granth Solanki", role: "Executive Member", img: IMAGES.granth },
    { name: "Yash Upadhyay", role: "Executive Member", img: IMAGES.yash },
    { name: "Shivam Sharma", role: "Executive Member", img: IMAGES.shivamsh },
    { name: "Aditi Sharma", role: "Executive Member", img: IMAGES.aditi },
    { name: "Sheetal Solanki", role: "Executive Member", img: IMAGES.sheetal },
    { name: "Tanishq Tiwari", role: "Executive Member", img: IMAGES.tanishqjr },
    { name: "Madhav Bacharwar", role: "Executive Member", img: IMAGES.madhav },
    { name: "Ajitmani Gupta", role: "Executive Member", img: IMAGES.ajitmani },
    { name: "Alex Vyas", role: "Executive Member", img: IMAGES.alex },
    { name: "Aditya Rautela", role: "Executive Member", img: IMAGES.adijr },
    { name: "Yashendra Kumar", role: "Executive Member", img: IMAGES.yashendra },
    { name: "Purojita Singh", role: "Executive Member", img: IMAGES.purojita },
    { name: "Shivansh", role: "Executive Member", img: IMAGES.shivansh },
    { name: "Shatakshi Bajpai", role: "Executive Member", img: IMAGES.shatakshi },
    { name: "Bhumik Agrawal", role: "Executive Member", img: IMAGES.bhumik },
    { name: "Prachi Varshney", role: "Executive Member", img: IMAGES.prachi },
    { name: "Akshita Singh", role: "Executive Member", img: IMAGES.akshita },
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
          alt={data.name}
          loading="lazy"
          className={`${sizes[size]} object-cover transition-all duration-700`}
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
