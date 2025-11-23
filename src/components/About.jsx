export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-20 bg-black text-white flex flex-col items-center"
    >
      {/* Profile Image */}
      <div className="relative mb-10">
        <img
          src="/profile.png"
          alt="Aakash Kumar"
          className="w-40 h-40 rounded-full object-cover border-4 border-green-500 shadow-lg shadow-green-500/30"
        />
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 tracking-wide text-gray-300">
        Behind the Terminal: Crafting  
        <br />  
        Resilient Backend Systems
      </h2>

      {/* Description */}
      <p className="max-w-3xl text-center text-gray-300 leading-relaxed text-sm md:text-base">
        My journey as a backend engineer is driven by a deep curiosity about how
        systems behave at their core. Coming from a small-town background and
        pursuing Computer Science at Sandip University, I’ve shaped my path
        through persistence, hands-on learning, and real-world development work.
        <br /><br />
        I find my rhythm in the elegant precision of Arch Linux, the workflow
        efficiency of <span className="text-green-400">tmux</span>, and the expressive power of{" "}
        <span className="text-green-400">Neovim</span>—tools that reflect my
        obsession with clean engineering and developer craftsmanship.
        <br /><br />
        Over time, I’ve built production-ready systems using Python, Django,
        Flask, FastAPI, PostgreSQL, Docker, Nginx, and CI/CD pipelines. My work
        spans real-time communication, microservices, performance optimization,
        and deploying reliable applications on VPS and cloud infrastructure.
        <br /><br />
        My passion is simple: designing scalable backend architectures, solving
        complex system problems, and engineering robust platforms that empower
        users—whether it’s an EdTech app like Praccel, an animal rescue
        platform, or workflow automation systems built during my internships.
        <br /><br />
        I strive to push beyond limitations, build systems that last, and grow
        into a backend engineer capable of shaping meaningful technology.
      </p>

      {/* Divider */}
      <div className="w-full mt-16 mb-4 border-t border-gray-800"></div>
    </section>
  );
}

