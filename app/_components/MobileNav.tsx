import React from 'react'
import Link from 'next/link'
import { Sacramento } from 'next/font/google';
import { Shishiro } from './NavLogo';
const sacramento = Sacramento({ subsets: ["latin"], weight: ["400"] });
import Image from 'next/image';
import PlayAudio from './Audio';


const MobileNav = () => {
    return (
        <header className="flex sm:flex md:hidden">
            <nav className="bg-transparent w-screen sm:w-screen backdrop-blur-md p-4  flex items-center justify-between  rounded-lg">
                <h1 className={`${sacramento.className} text-[2rem] text-white`}>
                    <Link href={`/`}>
                        <Shishiro />
                    </Link>
                </h1>
                <PlayAudio />
            </nav>
        </header >
    )
}

export default MobileNav