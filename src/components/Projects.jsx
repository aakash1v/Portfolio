import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Agile Project Management Dashboard",
    description:
      "Agile project dashboard with authentication, role-based access control, and analytics. Built during Infosys Springboard internship.",
    stack: [
      "Flask",
      "SQLAlchemy",
      "Bootstrap",
      "Plotly",
      "Pandas",
      "GCP",
    ],
    repo: "https://github.com/aakash1v/Team1",
    demo: "https://p2.project1.space/",
  },
  {
    id: 2,
    title: "Gate Pass Management System",
    description:
      "Role-based gate pass system with JWT authentication, approval workflows, and secure tracking.",
    stack: [
      "React",
      "Django",
      "DRF",
      "PostgreSQL",
      "JWT",
      "Nginx",
    ],
    repo: "https://github.com/aakash1v/Gate-Pass",
    demo: "https://p4.project1.space",
  },
  {
    id: 3,
    title: "FlexHire",
    description:
      "Real-time hiring platform with role-based access, WebSocket updates, and secure REST APIs.",
    stack: [
      "React",
      "Django",
      "DRF",
      "PostgreSQL",
      "WebSockets",
    ],
    repo: "https://github.com/aakash1v/flexhire",
    demo: "https://p3.project1.space",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-12 py-20 bg-black text-gray-200"
    >
      <h2 className="text-4xl font-bold text-center mb-14 tracking-wider text-gray-300">
        Projects <span className="text-green-400"></span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {projects.map((p) => (
          <div
            key={p.id}
            className="group border border-gray-800 rounded-lg px-6 py-5
                       hover:border-green-400 transition-colors"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-green-400">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1 max-w-2xl">
                  {p.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 text-gray-400">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                    aria-label="Source Code"
                  >
                    <Github size={18} />
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-400 transition"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2 py-1
                             border border-gray-700 rounded-md
                             text-green-400/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

