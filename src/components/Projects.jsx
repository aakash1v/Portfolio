import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Agile Project Management Dashboard",
    description:
      "A dashboard for managing Agile projects with authentication, role-based access, and analytics. Built during Infosys Springboard internship.",
    image: "/agile_project.png",
    stack: ["Flask", "Bootstrap", "SQLAlchemy", "SQLite", "Plotly", "Pandas", "Google Cloud"],
    repo: "https://github.com/aakash1v/Team1",
    demo: "https://p2.project1.space/",
  },
  {
    id: 2,
    title: "Gate Pass Management System",
    description:
      "Role-based system for hostel gate passes with approval workflows and secure tracking.",
    image: "/gate_pass.png",
    stack: ["Flask", "SQLAlchemy", "SQLite", "Bootstrap", "VPS", "Nginx"],
    repo: "https://github.com/aakash1v/Minor-project",
    demo: "https://p1.project1.space",
  },
  {
    id: 3,
    title: "Hostel Management System",
    description:
      "A microservices-based full-stack HMS with React, shadcn UI, Django PostgreSQL auth, and Node + MongoDB room APIs.",
    image: "/hms.png",
    stack: ["React", "Tailwind", "shadcn UI", "Node.js", "MongoDB", "Django", "PostgreSQL"],
    repo: "https://github.com/aakash1v/hms",
    demo: "https://hms.project1.space",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-16 tracking-widest text-gray-300">
        Some of my projects <span className="text-green-400">//_</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-[#0b0f10] border border-gray-800 rounded-xl p-6 shadow-lg hover:border-green-400 hover:shadow-green-400/20 transition"
          >
            {/* Fake window header */}
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Project Image */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover rounded-lg mb-6 opacity-90"
            />

            {/* Title */}
            <h3 className="text-xl font-semibold text-green-400 mb-2">{p.title}</h3>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{p.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-md bg-black border border-green-500 text-green-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 border border-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black transition"
                >
                  <Github size={16} /> Open Repo
                </a>
              )}

              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

