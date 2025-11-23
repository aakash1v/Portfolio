import React from "react";
import { FaCertificate, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Praccel (Read-Aloud App) – Paleru Technologies Pvt Ltd",
      date: "Sep 2025 – Present | Remote",
      file: null, // no certificate for this one (current job)

      points: [
        "Developing RESTful APIs in Django REST Framework powering core features of the Praccel learning platform.",
        "Customized Django admin panel for non-technical team usage.",
        "Built automation scripts for recurring data operations.",
        "Implemented CI/CD pipeline using GitHub Actions, reducing manual deployment overhead.",
      ],
    },
    {
      title: "Python/Django Developer Intern",
      company: "WeSalvator – Animal Rescue Platform",
      date: "Feb 2025 – May 2025 | Remote",
      file: {
        type: "image",
        src: "/wesalvator-certf.jpg",
        link: "https://drive.google.com/file/d/1N8w8b7-vhkJKZyY7GpgMjt83rs72mjDR/view?usp=sharing",
      },

      points: [
        "Built backend modules using Django REST Framework for rescue tracking & volunteer management.",
        "Implemented real-time notifications using Django Channels & WebSockets.",
        "Optimized database queries reducing API latency and improving scalability.",
      ],
    },
    {
      title: "Scrum Master & Backend Developer Intern",
      company: "Infosys Springboard",
      date: "Dec 2024 – Feb 2025 | Remote",
      file: {
        type: "image",
        src: "/infy.jpg",
        link: "https://drive.google.com/file/d/170-kTkTb8VoByEBe4Dyn7Cf14eKElK8W/view?usp=sharing",
      },

      points: [
        "Facilitated Agile ceremonies and coordinated daily stand-ups.",
        "Developed secure RBAC authentication with Flask & SQLAlchemy.",
        "Built analytics dashboard using Pandas & Plotly with session-based auth.",
        "Deployed production-ready backend on GCP using Gunicorn & Nginx.",
        "Built a complete gate-pass digitization system deployed on Linux VPS.",
      ],
    },
  ];

  return (
    <section id="experience" className="px-6 md:px-12 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-16 tracking-widest text-gray-300">
        //Experience Log <span className="text-green-400">;</span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#0b0f10] border border-green-800 rounded-lg p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-6">

              {/* Certificate or PDF */}
              {exp.file?.type === "image" && (
                <a
                  href={exp.file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={exp.file.src}
                    className="w-40 h-40 rounded-lg border border-green-600/30 hover:scale-105 transition"
                  />
                </a>
              )}

              {exp.file?.type === "pdf" && (
                <a
                  href={exp.file.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center w-40 h-40 bg-black/30 rounded-lg border border-green-500 hover:scale-105 transition"
                >
                  <FaFilePdf className="text-green-400 text-5xl mb-2" />
                  <span className="flex items-center gap-1 text-green-300 text-xs">
                    View PDF <FaExternalLinkAlt />
                  </span>
                </a>
              )}

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-green-400">
                  {exp.title}
                </h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-sm text-green-300 mb-4">{exp.date}</p>

                <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
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

