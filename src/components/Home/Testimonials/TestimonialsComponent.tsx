"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import React, { useEffect, useState } from "react";

const TestimonialsComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const testimonials = [
    {
      quote:
        "Working with Digital Run has been a game-changer for our business. Their team is not only highly skilled but also incredibly responsive and attentive to our needs. They delivered a tailored solution that improved our operations significantly, helping us streamline processes and enhance efficiency. Their commitment to quality and attention to detail is evident in every interaction, and we feel confident knowing our technology is in good hands. We highly recommend Digital Run to any company looking for a reliable and innovative technology partner.",
      name: "Asif Arafat Islam",
      designation:
        "Executive Director, Marketing & Business Development Karnafuly Ship Builders Limited",
      src: "https://media.licdn.com/dms/image/v2/D560BAQFkM3xGv7B5Yw/company-logo_200_200/company-logo_200_200/0/1716024718688?e=1740009600&v=beta&t=ECC8FdMifVv_fNNmc6NUjK118V2VoN9Gr9EXqhm2ldE",
    },
    {
      quote:
        "Digital Run Limited has been an exceptional partner in driving our software solutions to new heights. Their expertise in innovative technology, combined with a commitment to delivering tailored solutions, has consistently surpassed our expectations.",
      name: "Ariful Islam",
      designation: "Managing Director Trust Machinaries.",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Digital Run Limited has been a fantastic partner for our business transformation. From day one, they understood our vision and went above and beyond to deliver a solution that perfectly aligns with our goals. Their expertise, combined with a customer-focused approach, made the entire process smooth and efficient. The team at Digital Run is professional, proactive, and genuinely committed to helping us succeed. We couldn't be happier with the results and highly recommend them to any business looking to elevate its technology and operations.",
      name: "Emdad Hossain",
      designation: "Project Manager, Remark LLC,USA",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
 
  ];
  if (!isClient) {
    return null;
  }

  return (
    <div>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
};

export default TestimonialsComponent;
