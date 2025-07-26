import React, { useState } from "react";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

import "./Home.css";

export default function Home() {
  const [myDetails, setMyDetails] = useState(false);

  return (
    <section
      id="home"
      className="min-h-screen flex justify-center flex-col md:justify-end items-start text-center px-6 py-5 md:px-12 text-white bg-gray-400"
    >
      <div className="absolute bottom-[30px] md:right-[35px] flex items-center gap-3">
        <IoArrowForwardCircleSharp className="text-purple-800 size-10 animate-bounce" />
        <img
          className="w-[70px] rounded-full hover:border-purple-400 border-[1.5px] hover:border-4"
          src="face.png"
          alt="asta-image"
          onClick={() => setMyDetails(!myDetails)}
        />
      </div>
      {myDetails ? <MyDetails /> : null}
    </section>
  );
}

function MyDetails() {
  return (
    <div className="md:bg-purple-600 rounded-xl md:px-4 md:py-4 md:w-[650px] slide-in-right ">
      <h1 className="text-xl md:text-5xl font-extrabold mb-4 drop-shadow-lg tracking-wider">
        Hi, I'm Aakash Kumar
      </h1>
      <p className="max-w-xl mb-8 text-lg md:text-[14px] font-thin  drop-shadow-md md:text-stone-100">
        I'm a final-year Computer Engineering student passionate about
        full-stack web development, Python, and Linux. I’m learning to build
        scalable web applications using frameworks like Flask, FastAPI, Django,
        and React with Tailwind CSS. I enjoy working with clean, maintainable
        code and exploring backend systems, automation, and developer tools.
        Currently, I'm focused on improving my skills through real-world
        projects while constantly learning and refining my workflow with tools
        like tmux and Neovim.
      </p>
    </div>
  );
}
