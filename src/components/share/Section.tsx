import { SectionProps } from "@/types";
import React from "react";

export default function Section({ heading }: SectionProps) {
  return (
    <div className="mx-auto m-4  lg:py-8">
      <h3 className="text-3xl lg:text-4xl font-bold uppercase text-[#FC6617] mb-4">
        {heading}
      </h3>
    </div>
  );
}