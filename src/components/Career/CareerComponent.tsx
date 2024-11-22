"use client";

import React, { useEffect, useState } from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Section from "../share/Section";

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
    <div>
      <div className="flex justify-center items-center">
        <Section heading="Current Job Openings" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <BackgroundGradient
            key={item.id}
            className="rounded-[22px] h-[300px]  p-6 bg-white dark:bg-zinc-900"
          >
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {item.title}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400  line-clamp-6	">
              {item.description}
            </p>
            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span>Apply now</span>
             
            </button>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};

export default CareerComponent;