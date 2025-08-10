import React, { useState } from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [myDetails, setMyDetails] = useState(true);

  return (
    <section
      id="home"
      className="relative min-h-screen flex justify-center flex-col md:justify-center items-center px-6 md:px-12 bg-gradient-to-br from-purple-900 via-gray-800 to-black text-white"
    >
      {/* Floating Profile Icon */}
      <div className="absolute bottom-8 md:right-10 flex items-center gap-3">
        <IoArrowForwardCircleSharp className="text-purple-400 size-10 animate-bounce" />
        <img
          className="w-[70px] rounded-full border-2 border-transparent hover:border-purple-400 transition-all duration-300 cursor-pointer"
          src="face.png"
          alt="aakash-face"
          onClick={() => setMyDetails(!myDetails)}
        />
      </div>

      {/* Details Card */}
      <AnimatePresence>
        {myDetails && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4 }}
            className="bg-white/10 backdrop-blur-lg shadow-lg px-6 py-6 rounded-2xl max-w-2xl text-center border border-purple-500/30"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-purple-300">
              Hi, I'm Aakash Kumar
            </h1>
            <p className="text-gray-200 leading-relaxed text-lg">
              I'm a final-year Computer Engineering student passionate about
              full-stack web development, Python, and Linux. I love building
              scalable web applications using Flask, FastAPI, Django, React, and
              Tailwind CSS.  
              Obsessed with clean code, backend systems, and developer tools
              like tmux & Neovim.  
              Currently sharpening my skills through real-world projects and
              experimenting with new workflows.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

