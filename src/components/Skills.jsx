const skills = [
  {
    title: "Python",
    icon: "π",
    config: "language.version = '3.14';",
  },
  {
    title: "Django",
    icon: "<>",
    config: "web.framework = 'async';",
  },
  {
    title: "FastAPI",
    icon: "▭▭",
    config: "api.speed = 'blazing';",
  },
  {
    title: "Linux",
    icon: "⌘",
    config: "os.kernel = 'custom';",
  },
  {
    title: "tmux",
    icon: "⟠",
    config: "session.manager = 'active';",
  },
  {
    title: "Neovim",
    icon: "⟡",
    config: "editor.config = 'lua';",
  },
  {
    title: "Docker",
    icon: "⬢",
    config: "container.engine = 'isolated';",
  },
  {
    title: "React",
    icon: "✸",
    config: "frontend.component = 'declarative';",
  },
  {
    title: "PostgreSQL",
    icon: "◫",
    config: "database.type = 'relational';",
  },
  {
    title: "CI/CD",
    icon: "⤓",
    config: "pipeline.automation = 'true';",
  },
  {
    title: "Cloud",
    icon: "☁",
    config: "platform.provider = 'aws_gcp';",
  },
  {
    title: "Kubernetes",
    icon: "⬡",
    config: "orchestration.cluster = 'managed';",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 md:px-12 py-20 text-center text-gray-200"
    >
      <h2 className="text-4xl font-bold mb-16 text-gray-300 tracking-wider">
        My Core Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#0b0f10] border border-gray-800 rounded-xl p-6 shadow-lg transition hover:border-green-400 hover:shadow-green-400/20"
          >
            {/* Fake Window Header */}
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {/* Skill Icon */}
            <div className="text-5xl mb-4 text-green-400">
              {skill.icon}
            </div>

            {/* Skill Title */}
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              {skill.title}
            </h3>

            {/* Config line */}
            <p className="text-sm text-green-300">
              {skill.config}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

