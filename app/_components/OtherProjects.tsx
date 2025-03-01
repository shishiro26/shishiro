import React from "react";
import Link from "next/link";
import { otherprojects } from "@/constants";

const OtherProjects = () => {
  return (
    <section className="mt-10">
      <div className="flex justify-center">
        <h1
          className={`single_font text-[1.4rem] sm:text-[1.4rem] md:text-[3vw]  px-3 md:py-4 inline rounded-xl text-nowrap`}
        >
          Other Projects
        </h1>
      </div>
      <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:px-10">
        {otherprojects.map((project) => {
          return (
            <Link href={project.url} key={project.name}>
              <div className="w-full h-full lg:h-100 rounded-lg bg-transparent p-4 lg:p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group border-4 border-[#37FF8B]">
                <div className="flex justify-between items-center">
                  <svg
                    stroke="currentColor"
                    fill="white"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-3xl text-slate-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {project.name}
                  </h3>
                  <p className="text-sm mt-3 text-gray-500">
                    {project.description}
                  </p>
                  <ul
                    className={`single_font text-xs md:text-sm text-gray-500 flex gap-2 flex-wrap mt-3`}
                  >
                    {project.techStack.map((stack) => {
                      return (
                        <li
                          key={stack}
                          className="backdrop-blur-sm text-[#7D80DA] border-1 border-[#37FF8B] py-1 px-3 rounded-md self-end"
                        >
                          {stack}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default OtherProjects;
