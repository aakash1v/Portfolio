import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-20 bg-black text-white flex justify-center"
    >
      <div className="w-full max-w-2xl border border-green-500/30 p-10 rounded-xl shadow-lg bg-[#050505]">

        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-green-400 mb-2">
          Connect & Collaborate
        </h2>
        <div className="w-24 h-1 bg-green-400 mx-auto mb-10" />

        {/* Form */}
        <form className="space-y-6">

          {/* Name + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 px-4 py-2 bg-[#111] border border-green-500/40 text-white rounded-md focus:outline-none focus:border-green-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-2 bg-[#111] border border-green-500/40 text-white rounded-md focus:outline-none focus:border-green-400"
            />
          </div>

          {/* Message Box */}
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full px-4 py-3 bg-[#111] border border-green-500/40 text-white rounded-md focus:outline-none focus:border-green-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-black font-semibold bg-[#00ffe7] hover:bg-[#00e6cf] transition py-2 rounded-md"
          >
            Send Message
          </button>
        </form>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/aakash1v"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-green-500 rounded-md hover:bg-green-500/20 transition"
          >
            <FaGithub className="text-green-400 text-xl" />
          </a>

          <a
            href="https://linkedin.com/in/aakash1z"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-green-500 rounded-md hover:bg-green-500/20 transition"
          >
            <FaLinkedin className="text-green-400 text-xl" />
          </a>

          <a
            href="mailto:aakashkumar113450@gmail.com"
            className="p-3 border border-green-500 rounded-md hover:bg-green-500/20 transition"
          >
            <FaEnvelope className="text-green-400 text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

