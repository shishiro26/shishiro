import React from "react";
import { Sacramento, Single_Day } from "next/font/google";
import Link from "next/link";
const sacramento = Sacramento({ subsets: ["latin"], weight: ["400"] });
const single = Single_Day({ weight: ["400"] });

const Navbar = () => {
  return (
    <header className="hidden sm:hidden md:flex md:justify-center md:flex-col md:w-[60%] md:mx-auto md:mt-4">
      <nav className="bg-transparent backdrop-blur-md p-4 2xl:p-5 flex items-center justify-between border-4 border-[#7D80DA] rounded-lg">
        <h1 className={`${sacramento.className} text-[2rem] text-white`}>
          {" "}
          <Link href={`/`}>
            <span className="hover:text-primary text-5xl 2xl:text-8xl hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground hover:text-[#7D80DA] ">
              S
            </span>
            <span className="hover:text-primary text-5xl 2xl:text-8xl  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground hover:text-[#7D80DA]">
              h
            </span>
            <span className="hover:text-primary text-5xl 2xl:text-8xl  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground hover:text-[#7D80DA]">
              i
            </span>
            <span className="hover:text-primary text-5xl 2xl:text-8xl  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground text-[#7D80DA] hover:text-white">
              s
            </span>
            <span className="hover:text-primary text-5xl 2xl:text-8xl  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground text-[#7D80DA] hover:text-white">
              h
            </span>
            <span className="hover:text-primary text-5xl 2xl:text-8xl  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground text-[#7D80DA] hover:text-white">
              i
            </span>
            <span className="hover:text-primary text-5xl 2xl:text-8xl  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground hover:text-[#7D80DA]">
              r
            </span>
            <span className="hover:text-primary text-5xl 2xl:text-8xl  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground hover:text-[#7D80DA]">
              o
            </span>
          </Link>
        </h1>
        <ul
          className={`${single.className} flex space-x-4 text-white 2xl:space-x-6`}
        >
          <li
            className={`cursor-pointer transition-all duration-300  text-3xl 2xl:text-6xl`}
          >
            {" "}
            <Link href="#intro" className="hover:scale-110">
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                I
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                n
              </span>
              <span className="text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100 hover:text-white">
                t
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                r
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                o
              </span>
            </Link>
          </li>
          <li
            className={`cursor-pointer transition-all duration-300  text-3xl 2xl:text-6xl`}
          >
            {" "}
            <Link href="#about" className="hover:scale-110">
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                A
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                b
              </span>
              <span className="text-[#7D80DA] hover:text-white hover:-mt-2 transition-all duration-500 hover:duration-100">
                o
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                u
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                t
              </span>
            </Link>
          </li>
          <li
            className={`cursor-pointer transition-all duration-300  text-3xl 2xl:text-6xl`}
          >
            {" "}
            <Link href="#projects" className="hover:scale-110">
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                P
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                r
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                o
              </span>
              <span className="hover:-mt-2 transition-all duration-500 hover:duration-100 text-[#7D80DA] hover:text-white">
                j
              </span>
              <span className="hover:-mt-2 transition-all duration-500 hover:duration-100 text-[#7D80DA] hover:text-white">
                e
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                c
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                t
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                s
              </span>
            </Link>
          </li>
          <li
            className={`cursor-pointer transition-all duration-300  text-3xl 2xl:text-6xl`}
          >
            <Link href="#contact" className="hover:scale-110">
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                C
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                o
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                n
              </span>
              <span className="text-[#7D80DA] hover:text-white hover:-mt-2 transition-all duration-500 hover:duration-100">
                t
              </span>
              <span className="text-[#7D80DA] hover:text-white hover:-mt-2 transition-all duration-500 hover:duration-100">
                a
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                c
              </span>
              <span className="hover:text-[#7D80DA] hover:-mt-2 transition-all duration-500 hover:duration-100">
                t
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
