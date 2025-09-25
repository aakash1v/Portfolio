import React, { useState } from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Chatbot from "../ui/Chatbot";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex justify-center items-center px-6 md:px-12 bg-gradient-to-br from-purple-900 via-gray-800 to-black text-white"
    >
      {/* Floating Profile Icon */}
      <div className="absolute bottom-8 md:right-10 flex items-end gap-3 z-50 ">
        <IoArrowForwardCircleSharp
          className={`text-purple-400 text-3xl cursor-pointer transition-all duration-300 ${
            showChat ? "animate-none" : "animate-bounce"
          }`}
          onClick={() => setShowChat(!showChat)}
        />
        <img
          className="w-[70px] rounded-full border-2 border-transparent hover:border-purple-400 transition-all duration-300 cursor-pointer"
          src="face.png"
          alt="aakash-face"
          onClick={() => setShowChat(!showChat)}
        />

        {/* Floating "Talk to me" label */}
        {!showChat && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [10, 0, 10] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -top-8 right-1/2 translate-x-1/2 bg-purple-600 text-white text-sm px-3 py-1 rounded-full shadow-lg pointer-events-none select-none"
          >
            Hi ..!
          </motion.div>
        )}
      </div>

      {/* Chatbot Overlay */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm z-40 p-4"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl w-full max-w-md h-[60vh] md:h-[450px] flex flex-col p-4"
            >
              <Chatbot />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

