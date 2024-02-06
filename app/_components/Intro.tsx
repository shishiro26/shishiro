"use client";
import React from "react";
import Starfield from "./Starfield";
import { motion } from 'framer-motion'
const Intro = () => {
  const letters = Array.from("SHISHIRO");
  const words = "DEVELOPER".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };




  const downloadResume = () => {
    const resume = "/resume/Shishiro_resume.pdf";
    fetch(resume)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = "Shishiro_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading the resume", error));
  };

  return (
    <section className="m-2 p-5 space-y-2" id="intro">
      <Starfield
        starCount={5000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <div className="md:-space-y-6">
        <p className="text-1rem sm:text-[1rem] md:text-[1.4vw]">Hi, I&prime;m</p>
        <motion.div
          style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {letters.map((letter, index) => (
            <motion.span variants={child} key={index} className="text-[8vw] font-bold cursor-default">
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, index) => (
            <motion.span
              variants={child}
              key={index}
              className="block text-[8vw] text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#7D80DA] to-[#37FF8B] cursor-default"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
      <p className="max-w-xl font-semibold text-md 2xl:text-xl mt-2">
        As a web development enthusiast, I enjoy exploring new technologies and
        frameworks. I am always ready to collaborate on exciting projects and
        contribute to innovative solutions. Let&prime;s connect and build
        something amazing together!
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.85 }}
        className="mt-3 2xl:mt-5 px-4 py-3 border-[#37FF8B] border-4 rounded-2xl flex items-center justify-center 2xl:text-[50vw] shine"
        onClick={downloadResume}
      >
        <span className={`single_font text-lg 2xl:text-2xl`}>
          Download resume
        </span>
      </motion.button>
    </section>
  );
};

export default Intro;
