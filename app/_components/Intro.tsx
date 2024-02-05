"use client";
import React from "react";
import Image from "next/image";
import { Single_Day } from "next/font/google";
import Starfield from "./Starfield";
const singlefont = Single_Day({ weight: "400" });
const Intro = () => {
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
      <div className="md:-space-y-4 2xl:-space-y-14 flex flex-col justify-center">
        <p className="text-1rem sm:text-[1rem] md:text-[1.4vw]">Hi, I&prime;m</p>
        <p className="text-[8vw] font-bold">SHISHIRO</p>
        <p className="text-[8vw] text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#7D80DA] to-[#37FF8B] cursor-default">
          WEB DEVELOPER
        </p>
      </div>
      <p className="max-w-xl font-semibold text-md 2xl:text-xl mt-2">
        As a web development enthusiast, I enjoy exploring new technologies and
        frameworks. I am always ready to collaborate on exciting projects and
        contribute to innovative solutions. Let&prime;s connect and build
        something amazing together!
      </p>
      <button
        className="mt-3 2xl:mt-5 px-4 py-3 border-[#37FF8B] border-4 rounded-2xl flex items-center justify-center 2xl:text-[50vw] shine"
        onClick={downloadResume}
      >
        <Image
          src={"/svgs/download.svg"}
          alt="download"
          width={24}
          height={24}
          className="m-1"
        />
        <span className={`${singlefont.className} text-lg 2xl:text-2xl`}>
          Download resume
        </span>
      </button>
    </section>
  );
};

export default Intro;
