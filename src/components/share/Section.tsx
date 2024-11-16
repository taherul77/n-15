import { SectionProps } from "@/types";
import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function Section({ heading }: SectionProps) {
  return (
    <div className="mx-auto m-4  lg:py-4">
      <h3 className="text-3xl lg:text-4xl font-bold uppercase text-[#FC6617] mb-4">
      <TextGenerateEffect words={heading} />
      </h3>
    </div>
  );
}