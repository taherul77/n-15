"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
export const CareerTop = () => {
  const features = [
    {
      title: "Deploy in seconds",
      description:
        "With our blazing fast, state of the art, cutting edge, we are so back cloud servies (read AWS) - you can deploy your model in seconds.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 ",
    },
  ];
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="relative z-20  max-w-[1140px] mx-auto bg-white rounded-xl group shadow-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2]  border border-transparent justify-between flex flex-col space-y-4"
    >
      <div className="relative ">
        <div className="grid grid-cols-4 justify-center items-center">
          <div className="col-span-2">
            <div className=" flex flex-col px-4 py-4 gap-2">
              <div className=" text-left tracking-tight text-black font-bold  text-4xl md:leading-snug">
                Join our <br /> enthusiastic team of professional service providers.
              </div>
              <div className=" text-neutral-700  font-normal  text-left">
                Welcome to DigitalRun, the driving force behind digital
                evolution. We&apos;re not just a software company; we&apos;re
                architects of innovation, sculpting bespoke solutions to propel
                businesses to new heights. At DigitalRun, we thrive on the
                synergy of passion and expertise. Our team of tech virtuosos is
                committed to redefining norms and exceeding your expectations.
                We&apos;re not just here to meet your needs; we&apos;re here to
                anticipate them.
              </div>
            </div>
          </div>
          <div className="col-span-2 ">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <div className="flex justify-center items-center">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(` relative overflow-hidden`, className)}>{children}</div>
  );
};

// const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p className=" text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
//       {children}
//     </p>
//   );
// };

// const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p
//       className={cn(
//         "text-sm md:text-base text-left mx-auto",
//         "text-neutral-500 text-center font-normal ",
//         "text-left max-w-sm mx-0 md:text-sm my-2"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

export const SkeletonFour = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src="https://digitalrun.biz/img/about-1.jpg"
        alt=""
        height={400}
        width={500}
        className="h-full w-full flex items-center justify-center rounded-xl"
      ></Image>
    </div>
  );
};
