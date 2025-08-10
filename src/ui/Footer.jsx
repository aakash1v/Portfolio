import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 to-black text-gray-300 py-10 border-t border-purple-800/30">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-purple-400 mb-3">
          Contact Me
        </h2>
        <p className="mb-5 text-gray-400">
          Let's connect and create something amazing together!
        </p>

        {/* Email */}
        <p className="mb-6">
          <a
            href="mailto:aakashkumarpy@gmail.com"
            className="underline hover:text-purple-300 transition-all duration-300"
          >
            aakashkumarpy@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 text-purple-400 text-lg font-medium">
          <a
            href="https://www.linkedin.com/in/aakash-kumar-50751a249/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/aakash1v"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-300 transition-all duration-300"
          >
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-purple-300">Aakash Kumar</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}


