import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between space-y-6 md:space-y-0">
        {/* Left section: Contact info */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-2">Contact Me</h2>
          <p className="mb-4 text-lg max-w-md">
            Let's connect and create something amazing together!
          </p>
          <a
            href="mailto:aakashkumarpy@gmail.com"
            className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-600 transition"
          >
            <FaEnvelope />
            <span>aakashkumarpy@gmail.com</span>
          </a>
        </div>

        {/* Right section: Social links */}
        <div className="flex space-x-8">
          <a
            href="https://www.linkedin.com/in/aakash-kumar-50751a249/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center space-x-2 text-gray-300 hover:text-indigo-400 transition"
          >
            <FaLinkedin size={24} />
            <span className="hidden sm:inline font-semibold">LinkedIn</span>
          </a>
          <a
            href="https://github.com/aakash1v"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center space-x-2 text-gray-300 hover:text-indigo-400 transition"
          >
            <FaGithub size={24} />
            <span className="hidden sm:inline font-semibold">GitHub</span>
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} Aakash Kumar. All rights reserved.
      </div>
    </footer>
  );
}

