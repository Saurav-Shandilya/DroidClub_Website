import React, { useEffect, useState } from "react";

export default function JoinDroidClub() {

  // Time-left removed because not needed — but keeping structure if you want later
  const [timeLeft] = useState("Registration Closed");

  return (
    <section className="relative w-full min-h-screen text-white overflow-hidden bg-[#000003] flex flex-col items-center justify-start pt-32 pb-20">

      {/* --- BACKGROUND BLURS --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/15 blur-[180px] rounded-full"></div>
      </div>

      {/* ===== PAGE CONTENT ===== */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-6">

        {/* PAGE HEADING */}
        <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
          Join the  
          <span className="text-purple-500"> Droid Club</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          The community of innovators, creators, developers & leaders.  
          Applications for the 2025 cycle are now closed — join us early next year!
        </p>

        {/* CLOSED NOTICE CARD */}
        <div className="mt-10 max-w-2xl mx-auto bg-white/5 border border-red-500/30 rounded-3xl p-10 shadow-[0_0_45px_rgba(255,0,0,0.25)]">
          <h2 className="text-4xl font-extrabold text-red-400 mb-4">
            🚫 Registration Closed for 2025
          </h2>
          <p className="text-lg text-white/80 font-medium">
            Come early next year to be part of something bigger.  
            Stay connected with us on social media!
          </p>

          {/* Timer Style (but static) */}
          <div className="mt-8 font-mono font-extrabold">
            <span
              className="px-6 py-3 rounded-xl border border-purple-400/60 backdrop-blur-xl inline-block bg-white/5 tracking-wider text-xl shadow-[0_0_18px_rgba(139,43,226,0.8)]"
            >
              {timeLeft}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
