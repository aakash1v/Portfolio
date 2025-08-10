import React from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaBriefcase,
  FaFilePdf,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Experience() {
  const experiences = [
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
        "Contributed to backend development using Python and Django.",
        "Developed and integrated RESTful APIs to support key platform features.",
        "Implemented collaborative modules and role-based dashboards.",
        "Built real-time web app for animal rescue coordination.",
        "Improved backend scalability and performance.",
      ],
    },
    {
      title: "Scrum Master & Backend Developer Intern",
      company: "Infosys Springboard",
      date: "Dec 2024 – Feb 2025 | Remote",

      file: {
        type: "image", // "image" or "pdf"
        src: "/infy.jpg", // image path or pdf link
        link: "https://drive.google.com/file/d/170-kTkTb8VoByEBe4Dyn7Cf14eKElK8W/view?usp=sharing",
      },
      points: [
        "Led Agile ceremonies ensuring effective collaboration.",
        "Developed secure login & role management with Flask & SQLite.",
        "Visualized trends with Pandas & Plotly for admin insights.",
        "Deployed with Gunicorn & Nginx for production readiness.",
      ],
    },
  ];

  const certificates = [
    {
      name: "Python Completion Certificate",
      issuer: "Data Flair",
      link: "https://drive.google.com/drive/u/0/folders/1nbm1cfBwGJ8RmjCaSCiUmetmnJ127A9m",
      image: "/data_flair.jpg",
    },
    {
      name: "Python Certificate",
      issuer: "Codeliber",
      link: "https://drive.google.com/file/d/1B8L7oYa-xTQVEDh_VAhGVdzAZSrvLrxO/view?usp=sharing",
      image: "/python-certf.jpg",
    },
    {
      name: "Django REST Framework",
      issuer: "LinkedIn Learning",
      link: "#",
      image: null,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Experience Section */}
        <h2 className="text-4xl font-extrabold text-purple-400 mb-8 flex items-center gap-3">
          <FaBriefcase /> Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/10 border border-purple-500/30 rounded-2xl p-6 shadow-lg backdrop-blur-lg"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* File Preview */}
                {exp.file?.type === "image" ? (
                  <a
                    href={exp.file.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={exp.file.src}
                      alt="Offer Letter"
                      className="w-40 h-40 object-cover rounded-lg border border-purple-500/20 hover:scale-105 transition"
                    />
                  </a>
                ) : exp.file?.type === "pdf" ? (
                  <a
                    href={exp.file.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center w-40 h-40 bg-black/30 rounded-lg border border-purple-500/20 hover:scale-105 transition"
                  >
                    <FaFilePdf className="text-purple-400 text-5xl mb-2" />
                    <span className="text-xs text-purple-300 flex items-center gap-1">
                      View PDF <FaExternalLinkAlt />
                    </span>
                  </a>
                ) : null}

                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-bold text-purple-300">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{exp.company}</p>
                  <p className="text-xs text-gray-500 mb-4">{exp.date}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates Section */}
        <h2 className="text-4xl font-extrabold text-purple-400 mt-16 mb-8 flex items-center gap-3">
          <FaCertificate /> Certificates
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/10 border border-purple-500/30 rounded-xl shadow-md hover:shadow-purple-500/40 hover:scale-105 transition-all backdrop-blur-lg overflow-hidden group"
            >
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                  className="w-full h-40 object-cover group-hover:opacity-90 transition"
                />
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-black/30">
                  <FaFilePdf className="text-purple-400 text-4xl" />
                </div>
              )}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-purple-300">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
