'use client'
import React from "react";
import Image from "next/image";
import { LearnIcons, icons } from "@/constants";

const About = () => {
  return (
    <section className="mt-10 rubber" id="about">
      <div className="flex items-center">
        <h1
          className={`single_font text-[1.4rem] sm:text-[1.4rem] md:text-[3vw]  px-3 md:py-4 inline rounded-xl text-nowrap`}
        >
          01. ABOUT ME
        </h1>
        <hr className="hidden sm:hidden md:block md:w-[55%] ml-2 border-2 border-[#7D80DA]  md:h-1 rounded-lg 2xl:border-4" />
      </div>
      <div className="md:flex md:flex-row md:justify-between p-5 md:p-5">
        <div className="sm:mt-1 md:mt-5 text-[1rem] sm:text-lg md:text-[1.4vw] 2xl:text-[1vw] w-full md:w-[60%] mb-4 h-auto">
          <p>
            I&prime;m a web development enthusiast currently pursuing my
            sophomore year at the Indian Institute of Information Technology,
            Lucknow. Passionate about embracing and mastering new technologies
            and frameworks, I am driven by the desire to create innovative
            solutions. I thrive in collaborative environments and am always
            eager to contribute to exciting projects. Let&prime;s connect and
            build something amazing together!
          </p>
          <div>
            <p className={`single_font mt-3 text-[1.4rem] cursor-default`}>
              Here are some of the technologies that are part of my current stack:
            </p>
            <hr className="w-[25%] hidden sm:hidden md:block ml-2 border-2 border-[#7D80DA] h-1 rounded-lg 2xl:border-4" />
            <ul className="mt-2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 space-y-3">
              {
                icons.map((icon) => {
                  return (
                    <li key={icon.name} className="flex items-center cursor-pointer space-x-2">
                      <span className="w-5 h-5">
                        {icon.icon}
                      </span>
                      <span>{icon.name}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div>
            <p className={`single_font mt-3 text-[1.4rem] cursor-default`}>
              Recently, I have been studying some new technologies:            </p>
            <hr className="w-[25%] hidden sm:hidden md:block ml-2 border-2 border-[#7D80DA] h-1 rounded-lg 2xl:border-4" />
            <ul className="mt-2 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 space-y-3">
              {
                LearnIcons.map((icon) => {
                  return (
                    <li key={icon.name} className="flex items-center cursor-pointer space-x-2">
                      <span className="h-5 w-5">
                        {icon.icon}
                      </span>
                      <span>{icon.name}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src={"/shishiro_black.jpg"}
            alt="shishiro"
            width={350}
            height={250}
            className="transition-all duration-300 cursor-pointer image_frame w-[50%] sm:w-[50%] md:w-[100%] 2xl:w-[100%]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
