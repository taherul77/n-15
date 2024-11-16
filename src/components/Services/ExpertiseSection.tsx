"use client"
import { ExpertiseSectionProps } from "@/types";

import SectionEnimation from "./SectionEnimation";

// Define ExpertiseSection component which accepts title, subTitle, and subSubTitle as props
const ExpertiseSection = ({
  title,
  subTitle,
  className2,
  translateX,
  subSubTitle,
}: ExpertiseSectionProps) => {
  return (
    // Container div for expertise section with padding
    <div className="flex flex-col px-5">
      {/* Title and Subtitle */}
      <h1 className="uppercase">
        {/* Title with red color and bold font */}
        <span className="text-[#de6a1a] font-bold text-3xl">{title}</span>{" "}
        {/* Subtitle with bold font */}
        <span className="font-bold text-2xl">{subTitle}</span>
      </h1>


      <SectionEnimation translateX={translateX} className2={className2}>{subSubTitle}</SectionEnimation>
      {/* <p className="uppercase text-black pl-2 ">{subSubTitle}</p> */}
    </div>
  );
};

export default ExpertiseSection;