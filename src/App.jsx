import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import Alumni from "./pages/Alumni";
import Admin from "./pages/Admin";

// Layout for the main Droid Club website
function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Droid website routes (with Navbar and Footer) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Completely independent standalone Admin single-page dashboard */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}
