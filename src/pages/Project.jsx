import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Agile Project Management Dashboard",
    shortDescription: "Smart dashboard for managing Agile projects and tasks.",
    fullDescription:
      "Built during my Infosys Springboard internship. I worked on authentication & authorization using Flask-Login with session-based authentication, implemented role-based access control, and created interactive login history charts using Pandas and Plotly. Tech stack: Flask, Bootstrap, SQLAlchemy, SQLite. Deployed on Google Cloud with systemd & Nginx.",
    imageUrl: "agile_project.png",
    demoLink: "https://p2.project1.space/",
    repoLink: "https://github.com/aakash1v/Team1",
    techStack: ["Flask", "Bootstrap", "SQLAlchemy", "SQLite", "Plotly", "Pandas", "Google Cloud"],
  },
  {
    id: 2,
    title: "Gate Pass Management System",
    shortDescription: "Role-based system for hostel gate passes & approvals.",
    fullDescription:
      "Developed with Flask, SQLAlchemy, and SQLite. Includes role-based access to create, approve, and track gate passes. Responsive UI with Bootstrap and deployed on VPS with Nginx & systemd.",
    imageUrl: "gate_pass.png",
    demoLink: "https://p1.project1.space",
    repoLink: "https://github.com/aakash1v/Minor-project",
    techStack: ["Flask", "SQLAlchemy", "SQLite", "Bootstrap", "VPS", "Nginx"],
  },
  {
    id: 3,
    title: "Hostel Management System",
    shortDescription: "Full-stack hostel management with attendance tracking.",
    fullDescription:
      "Currently building using React, Tailwind, shadcn UI for frontend; Node.js + MongoDB for hostel room APIs; Django + PostgreSQL for authentication & attendance. Will expand into a microservices-based setup.",
    imageUrl: "hms.png",
    demoLink: "https://hms.project1.space",
    repoLink: "https://github.com/aakash1v/hms",
    techStack: ["React", "Tailwind CSS", "shadcn UI", "Node.js", "MongoDB", "Django", "PostgreSQL"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 tracking-tight">
        My Projects
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-200 text-sm">{project.shortDescription}</p>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm transition"
                >
                  View Details
                </button>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-xl max-w-2xl w-full p-8 relative animate-fadeIn">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 text-xl"
            >
              ✕
            </button>
            <img
              src={selectedProject.imageUrl}
              alt={selectedProject.title}
              className="w-full h-56 object-cover rounded-lg mb-6"
            />
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedProject.fullDescription}
            </p>
            <div className="mb-6">
              <strong className="text-gray-900 dark:text-white">Tech Stack:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              {selectedProject.repoLink && (
                <a
                  href={selectedProject.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition"
                >
                  <Github size={16} /> Source Code
                </a>
              )}
              {selectedProject.demoLink && (
                <a
                  href={selectedProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

