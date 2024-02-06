'use client'
import React from 'react';
import { motion } from 'framer-motion'


const Contact = () => {
    const email = "dheeravathshishiro@gmail.com";

    const handleWriteToMe = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <section className="mt-10 mx-2" id='contact'>
            <div className="flex justify-center">
                <h1
                    className={`single_font text-[1.4rem] sm:text-[1.4rem] md:text-[3vw]  px-3 md:py-4 inline rounded-xl text-nowrap`}
                >
                    03. Contact
                </h1>
            </div>
            <div className='flex items-center justify-center flex-col'>
                <p className='flex justify-center 2xl:text-[1.5vw]'>
                    Interested in working together?
                    Feel free to reach out to me!
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.85 }}
                     className={`mt-3 2xl:mt-5 px-4 py-3 border-[#37FF8B] border-4 rounded-2xl flex items-center justify-center 2xl:text-[1.3vw] shine single_font md:text-2xl`}
                    onClick={handleWriteToMe}
                >
                    Write to me
                    <span className='text-bold'>
                        @
                    </span>
                </motion.button>
            </div>
        </section>
    );
};

export default Contact;
