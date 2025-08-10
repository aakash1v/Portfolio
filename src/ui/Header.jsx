import React, { useState } from "react";
import { FaHome, FaUserTie, FaBars, FaTimes } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome className="size-5" /> },
    { path: "/projects", label: "Projects", icon: <GrProjects className="size-5" /> },
    { path: "/experience", label: "Experience", icon: <FaUserTie className="size-5" /> },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black/70 via-black/50 to-black/70 backdrop-blur-lg border-b border-purple-500/20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-purple-400 font-extrabold text-lg tracking-wider hover:text-purple-300 transition"
        >
          Aakash Kumar
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-gray-300 font-medium">
          {navItems.map(({ path, label, icon }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-1 transition px-2 py-1 rounded-lg ${
                location.pathname === path
                  ? "bg-purple-500/20 text-purple-300"
                  : "hover:text-purple-400 hover:bg-purple-500/10"
              }`}
            >
              {icon} {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-purple-400 text-xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-purple-500/20">
          <nav className="flex flex-col p-4 gap-4 text-gray-300 font-medium">
            {navItems.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 transition px-2 py-2 rounded-lg ${
                  location.pathname === path
                    ? "bg-purple-500/20 text-purple-300"
                    : "hover:text-purple-400 hover:bg-purple-500/10"
                }`}
              >
                {icon} {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

