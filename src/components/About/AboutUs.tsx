"use client";

import React from "react";
import { cn } from "@/lib/utils";
// import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export const AboutUs = () => {
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
    <div className="relative z-20  max-w-7xl mx-auto bg-white rounded-xl group hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2]  border border-transparent justify-between flex flex-col space-y-4">
      <div className="relative ">
        <div className="grid grid-cols-4">
          <div className="col-span-2">
            <div className=" flex flex-col px-4 py-8 gap-5">
              <div className=" text-left tracking-tight text-[#DE6A1A] font-bold  text-4xl md:leading-snug">
                About Us
              </div>
              <div className=" text-left tracking-tight text-black font-bold  text-4xl md:leading-snug">
                About DigitalRun And It&apos;s Innovative IT Solutions
              </div>
              <div className=" text-neutral-700  font-normal  text-left">
                Welcome to DigitalRun, the driving force behind digital
                evolution. We&apos;re not just a software company; we&apos;re architects
                of innovation, sculpting bespoke solutions to propel businesses
                to new heights. At DigitalRun, we thrive on the synergy of
                passion and expertise. Our team of tech virtuosos is committed
                to redefining norms and exceeding your expectations. We&apos;re not
                just here to meet your needs; we&apos;re here to anticipate them.
              </div>
              <div className=" text-neutral-700  font-normal  text-left">
                Why choose us? Because we believe in crafting success stories,
                not just software. Our journey is marked by a relentless pursuit
                of excellence, guided by values of integrity, transparency, and
                an unwavering commitment to your success. Ready to embark on a
                transformative journey? Join us at DigitalRun, where each line
                of code is a step towards a future where your business doesn&apos;t
                just adapt but thrives
              </div>
            </div>
          </div>
          <div className="col-span-2 ">
            {features.map((feature) => (
              <FeatureCard key={feature.title} className={feature.className}>
                <div className="">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </div>
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
      <Globe />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [{ location: [23.7999, 90.4208], size: 0.04 }],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
