import TestimonialsComponent from "@/components/Home/Testimonials/TestimonialsComponent";
import Section from "@/components/share/Section";
import React from "react";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto py-20">
      <div className="flex justify-center items-center">
        <Section heading="Our Testimonial" />
      </div>
      <TestimonialsComponent />
    </div>
  );
};

export default page;
