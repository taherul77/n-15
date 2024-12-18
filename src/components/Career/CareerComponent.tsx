"use client";

import React, { useEffect, useState } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Section from "../share/Section";
import { motion } from "framer-motion";
import { CareerTop } from "./CareerTop";
interface JobItem {
  id: number;
  title: string;
  description: string;
}

const CareerComponent = () => {
  const [items, setItems] = useState<JobItem[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="py-10">
        <CareerTop />
      <div className="flex justify-center items-center">
        <Section heading="Current Job Openings" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item) => (
          <BackgroundGradient
            key={item.id}
            className="rounded-[22px] h-[300px]  p-6 bg-white dark:bg-zinc-900"
          >
            <p className="font-bold sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {item.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400  line-clamp-6 indent-8	">
              {item.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-full uppercase px-4 py-2 text-white flex items-center space-x-1 bg-gradient-to-r from-[#4B1E7F]  to-[#FC6617] mt-4 text-xs font-bold "
            >
              <span >Apply now</span>
            </motion.button>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};

export default CareerComponent;
