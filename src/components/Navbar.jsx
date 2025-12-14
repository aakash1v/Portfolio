import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

        // <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        // <a href="#about" className="hover:text-green-400 transition">About</a>
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-black/80 backdrop-blur-md
        border-b border-green-500/10
        px-6 md:px-12 py-4
        flex justify-between items-center
      "
    >
      {/* Logo */}
      <div className="text-green-400 text-lg font-semibold tracking-wide">
        &gt;_Aakash
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 text-gray-300 text-sm font-medium">
        <a href="#hero" className="hover:text-green-400 transition">Hero</a>
        <a href="#skills" className="hover:text-green-400 transition">Skills</a>
        <a href="#projects" className="hover:text-green-400 transition">Projects</a>
        <a href="#experience" className="hover:text-green-400 transition">Experience</a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <FiX className="text-green-400 text-3xl" />
          ) : (
            <FiMenu className="text-green-400 text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div
          className="
            absolute top-full left-0 w-full
            bg-black/95 border-b border-green-500/20
            flex flex-col items-start
            px-6 py-4 space-y-4
            md:hidden
          "
        >
          <a href="#hero" className="text-green-400" onClick={() => setMobileOpen(false)}>Hero</a>
          <a href="#skills" className="text-green-400" onClick={() => setMobileOpen(false)}>Skills</a>
          <a href="#projects" className="text-green-400" onClick={() => setMobileOpen(false)}>Projects</a>
          <a href="#experience" className="text-green-400" onClick={() => setMobileOpen(false)}>Experience</a>
          <a href="#about" className="text-green-400" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#contact" className="text-green-400" onClick={() => setMobileOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}

