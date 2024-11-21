"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { FaCogs, FaMobileAlt } from "react-icons/fa";
import { TbWorldCog } from "react-icons/tb";
import { CiMobile1 } from "react-icons/ci";

const ExpandableCard1 = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "overlay") {
      setExpandedIndex(null);
    }
  };

  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      className: "md:col-span-1",
      icon: <FaCogs className="h-4 w-4" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      className: "md:col-span-1",
      icon: <FaMobileAlt className="h-4 w-4" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      className: "md:col-span-1",
      icon: <TbWorldCog className="h-4 w-4" />,
    },
    {
      title: "The Power of Communication",
      description: "Understand the impact of effective communication in our lives.",
      className: "md:col-span-1",
      icon: <CiMobile1 className="h-4 w-4" />,
    },
  ];

  return (
    <div className="relative flex justify-center items-center">
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            id="overlay"
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <motion.div
              key={index}
              layout
              className={`bg-white shadow-lg rounded-lg p-6 ${
                isExpanded ? "cursor-default z-50 " : "cursor-pointer z-10"
              }`}
              onClick={() => handleToggle(index)}
              initial={false}
              animate={{
                width: isExpanded ? (isMobile ? "350px" : "auto") : "350px",
                height: isExpanded ? "auto" : "300px",
                minWidth: isExpanded ? "350px" : "350px",
                minHeight: isExpanded ? "300px" : "300px",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`flex flex-col items-center`}>
                <motion.div
                  className="flex justify-center items-center rounded-full shadow-md"
                  initial={false}
                  animate={{
                    width: isExpanded ? "80px" : "64px",
                    height: isExpanded ? "80px" : "64px",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {item.icon}
                </motion.div>

                <div
                  className={`${
                    isExpanded ? "text-center mt-4 hidden" : "text-left"
                  } ${isExpanded ? "ml-0" : "ml-4"}`}
                >
                  <motion.h2 className="text-lg font-semibold">
                    {item.title}
                  </motion.h2>
                  <div
                    className={`flex items-center ${
                      isExpanded ? "justify-center" : "justify-start"
                    } text-gray-600 mt-1`}
                  >
                    <motion.span>{item.description}</motion.span>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4 w-full"
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="mt-4 w-full">
                        <div
                          key={index}
                          className="flex items-center space-x-2 mb-2"
                        >
                          <div>
                            <h3 className="text-md font-semibold">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      <div className="py-20">
        <ExpandableCard1 />
      </div>
    </div>
  );
};

export default page;