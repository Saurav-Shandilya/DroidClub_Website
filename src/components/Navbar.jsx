import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // for active link detection

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Alumni", path: "/Alumni" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#1a1a24]/90 backdrop-blur-md text-white rounded-full shadow-lg w-[90%] md:w-[80%] px-6 py-3 flex items-center justify-between border border-[#9D4EDD]/30">
      
      {/* Logo (Image added) */}
      <Link to="/" className="font-bold text-xl tracking-wide flex items-center gap-2">
        <img 
          src="/droid.png" 
          alt="Droid Club Logo" 
          className="h-8 w-8 object-contain"
        />
        <span>Droid Club</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {links.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`font-medium transition ${
              location.pathname === item.path
                ? "text-[#9D4EDD] font-semibold"
                : "text-gray-300 hover:text-[#9D4EDD]"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-3">

        {/* JOIN — now working */}
        <Link
          to="/join"
          className="px-4 py-2 rounded-full bg-[#9D4EDD] hover:bg-[#7B2CBF] transition font-semibold"
        >
          Join Us
        </Link>

        {/* CONTACT BUTTON */}
        <Link
          to="/contact"
          className="px-4 py-2 rounded-full border border-[#9D4EDD] text-[#9D4EDD] hover:bg-[#9D4EDD] hover:text-white transition font-semibold"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden p-2 rounded-full border border-[#9D4EDD]/30"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#1a1a24]/95 backdrop-blur-lg rounded-3xl border border-[#9D4EDD]/20 p-6 flex flex-col items-center space-y-4 md:hidden">
          
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`text-lg transition ${
                location.pathname === item.path
                  ? "text-[#9D4EDD] font-semibold"
                  : "text-gray-300 hover:text-[#9D4EDD]"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* MOBILE BUTTONS */}
          <div className="flex space-x-3 pt-4">
            <Link
              to="/join"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-full bg-[#9D4EDD] hover:bg-[#7B2CBF] transition font-semibold"
            >
              Join Us
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-full border border-[#9D4EDD] text-[#9D4EDD] hover:bg-[#9D4EDD] hover:text-white transition font-semibold"
            >
              Contact
            </Link>
          </div>

        </div>
      )}
    </nav>
  );
}
