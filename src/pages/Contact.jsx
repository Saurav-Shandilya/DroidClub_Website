export default function Contact() {
  return (
    <div className="bg-[#0f0f13] min-h-screen text-white px-6 pt-36 pb-24">

      {/* PAGE TITLE */}
      <h1 className="text-5xl font-bold text-center mb-4">
        Contact <span className="text-[#9D4EDD]">Us</span>
      </h1>

      {/* SUBTITLE BELOW TITLE */}
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
        We’re always open to your ideas, suggestions, collaboration requests, or club-related queries.  
        Reach out using the form below — our team will respond shortly.
      </p>

      {/* CONTACT FORM CENTERED */}
      <div className="max-w-2xl mx-auto bg-[#1a1a24]/50 p-10 rounded-2xl border border-[#9D4EDD]/20 shadow-xl">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-[#0f0f13] border border-[#9D4EDD]/30 rounded-xl px-5 py-4 mb-5 focus:border-[#9D4EDD] outline-none transition"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-[#0f0f13] border border-[#9D4EDD]/30 rounded-xl px-5 py-4 mb-5 focus:border-[#9D4EDD] outline-none transition"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full bg-[#0f0f13] border border-[#9D4EDD]/30 rounded-xl px-5 py-4 mb-6 focus:border-[#9D4EDD] outline-none transition"
        ></textarea>

        <button className="w-full bg-[#9D4EDD] hover:bg-[#7B2CBF] transition py-4 rounded-xl font-semibold text-lg shadow-lg">
          Send Message
        </button>
      </div>

      {/* CONTACT DETAILS BOX */}
      <div className="max-w-4xl mx-auto mt-16 bg-[#1a1a24]/60 border border-[#9D4EDD]/20 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">

        {/* EMAIL */}
        <div className="flex items-center gap-3">
          <span className="text-[#9D4EDD] text-2xl">📧</span>
          <p className="text-gray-300">Droidclub@gla.ac.in</p>
        </div>

        {/* PHONE */}
        <div className="flex items-center gap-3">
          <span className="text-[#9D4EDD] text-2xl">📞</span>
          <p className="text-gray-300">+91 74549 16178 (Aditya Naulakha "President")</p>
        </div>

        {/* LOCATION */}
        <div className="flex items-center gap-3">
          <span className="text-[#9D4EDD] text-2xl">📍</span>
          <p className="text-gray-300">
            GLA University, Mathura — Academic Block III (AB3)
          </p>
        </div>
      </div>
    </div>
  );
}
