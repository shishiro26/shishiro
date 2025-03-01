import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-[15px] flex flex-col items-center text-center mt-24">
      <ul className="flex items-center space-x-3 ">
        <li>
          <Link href={"https://github.com/shishiro26"} target="_blank">
            <div className="m-1">
              <svg
                stroke="white"
                strokeWidth="1"
                className="hover:stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"https://www.linkedin.com/in/shishiro/"} target="_blank">
            <div>
              <svg
                stroke="#fff"
                fill="none"
                className="hover:stroke-2"
                strokeWidth="1"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"https://twitter.com/ShishiroBannu"} target="_blank">
            <div className="m-1 hover:stroke-1 hover:fill-red-500">
              <svg
                width="18"
                height="18"
                viewBox="0 0 1200 1227"
                fill="none"
                className="hover:stroke-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="white"
                  className="hover:stroke-2"
                />
              </svg>
            </div>
          </Link>
        </li>
      </ul>
      <div className="space-y-1 text-[13px] tracking-wide cursor-none">
        Built by shishiro
      </div>
    </footer>
  );
};

export default Footer;
