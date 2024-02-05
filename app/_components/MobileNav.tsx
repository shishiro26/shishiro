import React from 'react'
import Link from 'next/link'
import { Sacramento } from 'next/font/google';
import Image from 'next/image';
import Menu from '@/public/svgs/menu.svg';
const sacramento = Sacramento({ subsets: ["latin"], weight: ["400"] });

const MobileNav = () => {
    return (
        <header className="flex sm:flex md:hidden">
            <nav className="bg-transparent w-screen sm:w-screen backdrop-blur-md p-4  flex items-center justify-between  rounded-lg">
                <h1 className={`${sacramento.className} text-[2rem] text-white`}>
                    <Link href={`/`}>
                        <span className="hover:text-primary text-[2.5rem] hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground hover:text-[#7D80DA] ">
                            S
                        </span>
                        <span className="hover:text-primary text-[2.5rem]  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground hover:text-[#7D80DA]">
                            h
                        </span>
                        <span className="hover:text-primary text-[2.5rem]  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground hover:text-[#7D80DA]">
                            i
                        </span>
                        <span className="hover:text-primary text-[2.5rem]  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground text-[#7D80DA] hover:text-white">
                            s
                        </span>
                        <span className="hover:text-primary text-[2.5rem]  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground text-[#7D80DA] hover:text-white">
                            h
                        </span>
                        <span className="hover:text-primary text-[2.5rem]  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground text-[#7D80DA] hover:text-white">
                            i
                        </span>
                        <span className="hover:text-primary text-[2.5rem]  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground hover:text-[#7D80DA]">
                            r
                        </span>
                        <span className="hover:text-primary text-[2.5rem]  hover:-mt-2 transition-all duration-500 hover:duration-100 text-foreground hover:text-[#7D80DA]">
                            o
                        </span>
                    </Link>
                </h1>
                <div>
                    <svg viewBox='0 0 10 8' width='40'>
                        <path d='M1 1h8M1 4h 4M1'
                            stroke='#fff'
                            strokeWidth='1'
                            strokeLinecap='round' />
                    </svg>
                </div>
            </nav>
        </header>
    )
}

export default MobileNav