import {
  FaPython,
  FaDocker,
  FaLinux,
  FaReact,
  FaAws,
} from "react-icons/fa";
import {
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiNeovim,
  SiTmux,
  SiGithubactions,
} from "react-icons/si";

const skills = [
  {
    title: "Python",
    icon: <FaPython />,
    config: "backend · automation",
  },
  {
    title: "Django",
    icon: <SiDjango />,
    config: "REST · JWT · RBAC",
  },
  {
    title: "FastAPI",
    icon: <SiFastapi />,
    config: "async APIs",
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql />,
    config: "relational DB",
  },
  {
    title: "React",
    icon: <FaReact />,
    config: "component UI",
  },
  {
    title: "Docker",
    icon: <FaDocker />,
    config: "containers",
  },
  {
    title: "Linux",
    icon: <FaLinux />,
    config: "daily driver",
  },
  {
    title: "tmux",
    icon: <SiTmux />,
    config: "workflow",
  },
  {
    title: "Neovim",
    icon: <SiNeovim />,
    config: "Lua · LSP",
  },
  {
    title: "CI / CD",
    icon: <SiGithubactions />,
    config: "automation",
  },
  {
    title: "Cloud",
    icon: <FaAws />,
    config: "GCP / AWS",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 py-20">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-300 tracking-wider">
        Core Skills
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group flex flex-col items-center text-center
                       text-gray-400 hover:text-green-400
                       transition-colors duration-200"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
              {skill.icon}
            </div>

            <h3 className="text-sm font-medium">
              {skill.title}
            </h3>

            <p className="text-xs text-green-400/70 font-mono mt-1">
              {skill.config}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

