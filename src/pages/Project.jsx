import React from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio website",
    description:
      "Portfolio Website not completed yet.. made in react.",
    imageUrl: "portfolio-project.png",
    demoLink: "https://aakash1z.online",
    repoLink: "https://github.com/aakash1v/Portfolio",
  },
  {
    id: 2,
    title: "Agile Project Management Dashboard",
    description:
      "An intuitive dashboard for managing Agile projects and tasks.",
    imageUrl: "agile_project.png",
    demoLink: "https://agile-pm-dashboard.onrender.com",
    repoLink: "https://github.com/aakash1v/Team1",
  },
  {
    id: 3,
    title: "Gate Pass System",
    description:
      "A system for managing hostel gate passes with approval workflow.",
    imageUrl: "gate_pass.png",
    // demoLink: "https://minor-project-31bf.onrender.com",
    demoLink: "https://www.project1.space",
    repoLink: "",
  },
  {
    id: 4,
    title: "Blog App",
    description: "A simple blog application to share articles and insights.",
    imageUrl: "blog_app.png",
    demoLink: "https://one00-days-python-292o.onrender.com",
    repoLink: "#",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Projects
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map(
          ({ id, title, description, imageUrl, demoLink, repoLink }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
