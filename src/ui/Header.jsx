import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";

export default function Header() {
  return (
    <header className="bg-transparent absolute z-10 w-screen">
      <div className="max-w-7xl mx-auto px-3 py-4 flex items-center justify-end">
        {/* Navigation */}
        <nav className="space-x-4 flex">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition"
          >
          <FaHome  className="size-5 text-purple-800"/>
          </Link>
          <Link
            to="/projects"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition"
          >
            <GrProjects className="size-5 text-purple-800"/>
          </Link>
        </nav>
      </div>
    </header>
  );
}
