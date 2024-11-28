"use client";

import React from "react";
import { AboutUs } from "./AboutUs";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, x: -100, y: 100 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  const sectionRightVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        transition={{ duration: 1 }}
        className="py-5"
      >
        <AboutUs />
      </motion.div>
      <div className="flex flex-col md:flex-row  justify-between items-center py-16 px-10 space-y-6 md:space-y-0 md:space-x-10">
      
        <motion.div
          className="relative  h-[600px] pl-10 "
          initial={{ y: -20 }}
          animate={{ y: [0, 20, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-[320px] h-[200px] left-52 pl-10">
            {/* First Image */}
            <Image
              className="rounded  object-cover  hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2]"
              width={320}
              height={320}
              src="https://digitalrun.biz/img/about-1.jpg"
              alt="Made with Love in Bangladesh"
            />
          </div>
          {/* Second Image positioned on top */}
          <div className="absolute top-20 left-0 z-10 w-[400px] h-[600px] ">
            <Image
              className="rounded w-[400px] h-[400px]  object-cover  hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] "
              width={400}
              height={600}
              src="https://digitalrun.biz/img/about-2.jpg"
              alt="Made with Love in Bangladesh"
            />
          </div>
          <div className="relative top-48 left-[15rem]	w-[300px] h-[300px] ">
            <Image
              className="rounded  object-cover  hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] "
              width={300}
              height={300}
              src="https://digitalrun.biz/img/about-1.jpg"
              alt="Made with Love in Bangladesh"
            />
          </div>
        </motion.div>


        <div className="flex flex-col items-start text-left max-w-md space-y-4 ">
         
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionRightVariants}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-bold text-gray-800"
          >
            Top Tech Startup in Bangladesh <br />
            ecosystem
          </motion.h2>
          <p className="text-gray-600">
            WE’RE RAISING THE BAR ON OUR ACTIONS AND COMMITMENTS
          </p>
          <div className="flex space-x-10">
          
            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyan-500">+20</h3>
              <p className="text-gray-700 font-medium">Team members</p>
            </div>
           
            <div className="text-center">
              <h3 className="text-4xl font-bold text-cyan-500">+10</h3>
              <p className="text-gray-700 font-medium">Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
