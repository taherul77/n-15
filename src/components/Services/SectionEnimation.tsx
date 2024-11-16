"use client"
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { SectionEnimationProps } from "@/types";
import "./sectionEnimation.css"
const SectionEnimation = ({ children,className2,translateX }: SectionEnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <section ref={ref}>
        <span
          style={{
            transform: isInView ? "none" : `${translateX}`,
            opacity: isInView ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.10s",
          }}
          className={`${className2}`}
        >
          <div className="max-w-[700px]">
          {children}
          </div>
          
        </span>
      </section>
    </>
  );
};

export default SectionEnimation;
