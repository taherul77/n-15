import { ExpertiseSectionImageLeftProps } from "@/types";
import Image from "next/image";
import React from "react";

// Define ExpertiseSectionImageLeft component which accepts img as a prop
const ExpertiseSectionImageLeft = ({ img }: ExpertiseSectionImageLeftProps) => {
  return (
    // Container div to hold the image and background
    <div style={{ position: "relative",  }}>
      {/* Background element */}
      <h1 className="h-[320px] w-[320px] relative  rounded rounded-ss-3xl bg-[#de6a1a]"></h1>
      {/* Image */}
      <div className="absolute inset-0 flex justify-center items-center group hover:shadow-2xl  transform transition-transform duration-300 ease-in-out group-hover:scale-110 ">
        <Image
          className="h-[320px] w-[320px] rounded rounded-ss-3xl absolute top-3 ml-6 object-cover"
          width={320}
          height={320}
          src={img} // Source of the image
          alt="" // Alternative text for the image
        />
      </div>
    </div>
  );
};

export default ExpertiseSectionImageLeft;
