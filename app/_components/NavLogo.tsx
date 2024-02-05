import React from 'react'
import { Sacramento } from 'next/font/google'
import Link from 'next/link'
const sacramento = Sacramento({ subsets: ["latin"], weight: ["400"] });


const Shishiro = () => {
    return (
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
        </h1>)
}

export default Shishiro