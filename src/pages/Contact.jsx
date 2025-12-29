import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://sheetdb.io/api/v1/lrx9o4okmr2b9",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                Name: formData.name,
                Email: formData.email,
                Message: formData.message,
                Date: new Date().toLocaleString(),
              },
            ],
          }),
        }
      );

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0f0f13] min-h-screen text-white px-6 pt-36 pb-24">

      {/* PAGE TITLE */}
      <h1 className="text-5xl font-bold text-center mb-4">
        Contact <span className="text-[#9D4EDD]">Us</span>
      </h1>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
        We’re always open to your ideas, suggestions, collaboration requests, or club-related queries.
        Reach out using the form below — our team will respond shortly.
      </p>

      {/* CONTACT FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-[#1a1a24]/50 p-10 rounded-2xl border border-[#9D4EDD]/20 shadow-xl"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-[#0f0f13] border border-[#9D4EDD]/30 rounded-xl px-5 py-4 mb-5 focus:border-[#9D4EDD] outline-none transition"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-[#0f0f13] border border-[#9D4EDD]/30 rounded-xl px-5 py-4 mb-5 focus:border-[#9D4EDD] outline-none transition"
        />

        <textarea
          name="message"
          required
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#0f0f13] border border-[#9D4EDD]/30 rounded-xl px-5 py-4 mb-6 focus:border-[#9D4EDD] outline-none transition"
        />

        <button
          disabled={loading}
          className="w-full bg-[#9D4EDD] hover:bg-[#7B2CBF] transition py-4 rounded-xl font-semibold text-lg shadow-lg disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {/* STATUS MESSAGE */}
        {status === "success" && (
          <p className="text-green-400 text-center mt-4">
            ✅ Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-400 text-center mt-4">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>

      {/* CONTACT DETAILS */}
      <div className="max-w-4xl mx-auto mt-16 bg-[#1a1a24]/60 border border-[#9D4EDD]/20 rounded-2xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">

        <div className="flex items-center gap-3">
          <span className="text-[#9D4EDD] text-2xl">📧</span>
          <p className="text-gray-300">Droidclub@gla.ac.in</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[#9D4EDD] text-2xl">📞</span>
          <p className="text-gray-300">
            +91 74549 16178 (Aditya Naulakha – President)
          </p>
        </div>

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
