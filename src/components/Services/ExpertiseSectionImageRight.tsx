import { ExpertiseSectionImageRightProps } from "@/types";
import Image from "next/image";
import React from "react";

// Define ExpertiseSectionImageRight component which accepts img as a prop
const ExpertiseSectionImageRight = ({ img }: ExpertiseSectionImageRightProps) => {
  return (
    // Container div to hold the image and background
    <div style={{ position: "relative", width: "320px", height: "320px" }}>
      {/* Background element */}
      <h1 className="h-[320px] w-[320px] relative rounded rounded-se-3xl ml-3 bg-red-700"></h1>
      {/* Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          className="h-[320px] w-[320px] rounded rounded-se-3xl absolute top-3"
          width={320}
          height={320}
          src={img} // Source of the image
          alt="" // Alternative text for the image
        />
      </div>
    </div>
  );
};

export default ExpertiseSectionImageRight;
