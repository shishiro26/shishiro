'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <>
      <div className="flex items-center justify-center my-2 p-4">
        <video autoPlay loop crossOrigin="">
          <source src="/audio/not-found.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className=" flex items-center justify-center flex-col text-3xl text-white">
        <p className="mt-1  text-xs sm:text-sm lg:text-2xl text-white p-4">
          Congratulations! You`ve discovered the elusive 404 Error! Feel free to
          bask in its glory.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.85 }}
          className={`mt-3 2xl:mt-5 px-4 py-3 border-[#37FF8B] border-4 rounded-2xl flex items-center justify-center 2xl:text-[1.3vw] shine single_font md:text-2xl`}
          onClick={() => window.history.back()}
        >
          Retreat!
        </motion.button>
      </div>
    </>
  );
}
