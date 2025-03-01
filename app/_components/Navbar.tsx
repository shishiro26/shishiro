"use client";
import React from "react";
import Link from "next/link";
import { Shishiro } from "./NavLogo";
import { Sacramento } from "next/font/google";
import { NavItems } from "@/constants";
const sacramento = Sacramento({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hidden sm:hidden md:flex md:justify-center md:flex-col md:w-[60%] md:mx-auto md:mt-4 sticky top-2 z-10">
      <nav className="bg-transparent backdrop-blur-md p-4 2xl:p-5 flex items-center justify-between border-4 border-[#7D80DA] rounded-lg">
        <h1 className={`${sacramento.className} text-[1.5rem] text-white`}>
          <Link href={`/`}>
            <Shishiro />
          </Link>
        </h1>
        <ul
          className={`single_font flex  items-center space-x-4 text-white 2xl:space-x-6 `}
        >
          {NavItems.map((item) => {
            return (
              <li
                key={item.id}
                className={` cursor-pointer transition-all duration-300 text-3xl 2xl:text-3xl`}
              >
                <Link
                  href={item.id}
                  className="hover:scale-110"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.component}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
