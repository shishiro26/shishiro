import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <section
      className="max-w-7xl mx-auto py-10 lg:py-32 flex flex-col gap-8 scroll-mt-24 "
      id="projects"
    >
      <div className="flex items-center">
        <h1
          className={`single_font text-[1.4rem] sm:text-[1.4rem] md:text-[3vw]  px-3 md:py-4 inline rounded-xl text-nowrap`}
        >
          02. Projects
        </h1>
        <hr className="hidden sm:hidden md:block md:w-[55%] ml-2 border-2 border-[#7D80DA]  md:h-1 rounded-lg 2xl:border-4" />
      </div>
      <div className="flex flex-col items-center justify-between gap-10 lg:gap-36 mt-2 lg:mt-10">
        {
          projects.map((project, index) => {
            const isEvenIndex = index % 2 === 0;
            const order = isEvenIndex ? "order-1" : "order-2";
            return (
              <div className={`m-2 sm:m-2 flex flex-col sm:flex-col gap-6 h-full  lg:flex-row 2xl:flex-row ${order}`} key={project.name}>
                <Link
                  href={project.url}
                  target="_blank"
                  className="w-full xl:w-1/2 h-auto relative group border-[1px]
                         border-slate-100 2xl:w-[75%]"
                >
                  <div className="p-1 shadow-lg ">
                    <Image
                      alt={project.name}
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="object-contain rounded-sm"
                      src={project.image}
                    />
                  </div>
                </Link>
                <div className="w-full xl:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right z-10 mr-5">
                  <div>
                    <h3 className="text-2xl md:text-3xl  font-bold">{project.name}</h3>
                  </div>
                  <p className="text-sm md:text-base p-2 md:p-6 rounded-md ">
                    {project.description}
                  </p>
                  <ul className={`single_font text-xs md:text-sm font-medium tracking-tight flex max-w-[600px] flex-wrap  gap-1 md:gap-2 justify-end  text-gray-400`}>
                    {
                      project.techStack.map((stack) => {
                        return (
                          <li key={stack} className="backdrop-blur-sm text-[#7D80DA] border-1 border-[#37FF8B] py-1 px-3 rounded-md self-end 2xl:text-[1.2rem]">
                            {stack}
                          </li>
                        )
                      })
                    }
                  </ul>
                  <div className="flex items-center gap-5 text-base font-medium  text-blue-600 hover:border-b-[1px] hover:border-gray-400 duration-100">
                    <Link
                      href={project.url}
                      className="flex items-center gap-3"
                      target="_blank"
                    >
                      <span>{project.url}</span>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="0"
                        viewBox="0 0 15 15"
                        className="hover:text-blue-500 duration-300"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 13C12.5523 13 13 12.5523 13 12V3C13 2.44771 12.5523 2 12 2H3C2.44771 2 2 2.44771 2 3V6.5C2 6.77614 2.22386 7 2.5 7C2.77614 7 3 6.77614 3 6.5V3H12V12H8.5C8.22386 12 8 12.2239 8 12.5C8 12.7761 8.22386 13 8.5 13H12ZM9 6.5C9 6.5001 9 6.50021 9 6.50031V6.50035V9.5C9 9.77614 8.77614 10 8.5 10C8.22386 10 8 9.77614 8 9.5V7.70711L2.85355 12.8536C2.65829 13.0488 2.34171 13.0488 2.14645 12.8536C1.95118 12.6583 1.95118 12.3417 2.14645 12.1464L7.29289 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H8.5C8.56779 6 8.63244 6.01349 8.69139 6.03794C8.74949 6.06198 8.80398 6.09744 8.85143 6.14433C8.94251 6.23434 8.9992 6.35909 8.99999 6.49708L8.99999 6.49738"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </section>
  );
};

export default Projects;
