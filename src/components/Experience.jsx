import React from "react";
import { FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Praccel (Read-Aloud App) · Paleru Technologies Pvt Ltd",
      date: "Sep 2025 – Present · Remote",
      file: null,
      points: [
        "Developing RESTful APIs using Django REST Framework powering core learning features.",
        "Customized Django Admin for non-technical team workflows.",
        "Built automation scripts for recurring data operations.",
        "Implemented CI/CD using GitHub Actions to streamline deployments.",
      ],
    },
    {
      title: "Python / Django Developer Intern",
      company: "WeSalvator · Animal Rescue Platform",
      date: "Feb 2025 – May 2025 · Remote",
      file: {
        type: "image",
        src: "/wesalvator-certf.jpg",
        link: "https://drive.google.com/file/d/1N8w8b7-vhkJKZyY7GpgMjt83rs72mjDR/view",
      },
      points: [
        "Built backend modules with Django REST Framework for rescue tracking and volunteers.",
        "Implemented real-time notifications using Django Channels and WebSockets.",
        "Optimized database queries to reduce API latency and improve scalability.",
      ],
    },
    {
      title: "Scrum Master & Backend Developer Intern",
      company: "Infosys Springboard",
      date: "Dec 2024 – Feb 2025 · Remote",
      file: {
        type: "image",
        src: "/infy.jpg",
        link: "https://drive.google.com/file/d/170-kTkTb8VoByEBe4Dyn7Cf14eKElK8W/view",
      },
      points: [
        "Facilitated Agile ceremonies and coordinated sprint workflows.",
        "Built secure RBAC authentication using Flask and SQLAlchemy.",
        "Developed analytics dashboard using Pandas and Plotly.",
        "Deployed production backend on GCP using Gunicorn and Nginx.",
      ],
    },
  ];

  return (
    <section id="experience" className="px-6 md:px-12 py-20 bg-black text-gray-200">
      {/* Header */}
      <h2 className="text-3xl font-semibold text-center mb-14 text-gray-300 tracking-wide">
        experience.log<span className="text-green-400">()</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group border border-gray-800 rounded-lg px-6 py-5
                       hover:border-green-400 transition-colors"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Certificate (optional) */}
              {exp.file && (
                <a
                  href={exp.file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                >
                  {exp.file.type === "image" ? (
                    <img
                      src={exp.file.src}
                      alt="certificate"
                      className="w-28 h-28 object-cover rounded-md border border-gray-700
                                 opacity-80 hover:opacity-100 hover:scale-105 transition"
                    />
                  ) : (
                    <div className="w-28 h-28 flex flex-col items-center justify-center
                                    border border-gray-700 rounded-md">
                      <FaFilePdf className="text-green-400 text-3xl mb-1" />
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        View <FaExternalLinkAlt />
                      </span>
                    </div>
                  )}
                </a>
              )}

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-400">
                  {exp.title}
                </h3>

                <p className="text-sm text-gray-400">{exp.company}</p>
                <p className="text-xs text-green-300 mb-4">{exp.date}</p>

                <ul className="list-disc list-inside text-sm text-gray-300 space-y-2 leading-relaxed">
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

