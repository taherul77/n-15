"use client";
import dynamic from "next/dynamic";
const HomeNavigation = dynamic(
  () => import("./HomeNavigation/HomeNavigation"),
  { ssr: false }
);

import React from "react";

import Section from "../share/Section";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Awards from "./Awards/Awards";
import Project from "./Projects/Project";
import Services from "./Services/Services";
import TestimonialsComponent from "./Testimonials/TestimonialsComponent";

const HomeComponents = () => {
  const items = [
    {
      url: "https://digitalrun.biz/uploads/clients/WhatsApp%20Image%202024-09-25%20at%2012.30.31%20PM%20(4)_20240925_093544.jpeg",
    },
    {
      url: "https://digitalrun.biz/uploads/clients/WhatsApp%20Image%202024-09-25%20at%2012.30.31%20PM%20(2)_20240925_092810.jpeg",
    },
    {
      url: "https://digitalrun.biz/uploads/clients/WhatsApp%20Image%202024-09-25%20at%2012.30.30%20PM_20240925_084553.jpeg",
    },
    {
      url: "https://digitalrun.biz/uploads/clients/WhatsApp%20Image%202024-09-25%20at%2012.30.31%20PM%20(3)_20240925_093404.jpeg",
    },
    {
      url: "https://digitalrun.biz/uploads/clients/WhatsApp%20Image%202024-09-25%20at%2012.30.31%20PM%20(1)_20240925_084509.jpeg",
    },
    // { url:"https://digitalrun.biz/uploads/clients/WhatsApp%20Image%202024-09-25%20at%2012.30.31%20PM%20(2)_20240925_092810.jpeg" },
  ];
  const cards = [
    {
      text: `Integrated\n ERP Solution\n for Seamless Business Management`,
      src: "https://digitalrun.biz/uploads/images/project_img_667fa365dfe63.jpg",
    },
    {
      text: `Customer\n Panel\n for Online\n Shopping`,
      src: "https://digitalrun.biz/uploads/images/project_img_667fa59ba4d91.jpg",
    },
    {
      text: `"SmartAccount: Streamlined Account Management System"`,
      src: "https://digitalrun.biz/uploads/images/project_img_667fa4b8e92cd.jpg",
    },
    {
      text: `Intelligent Human Resource Management System`,
      src: "https://digitalrun.biz/uploads/images/project_img_667fa43aca8af.jpg",
    },
    {
      text: `Innovative\n POS\n for Modern Retail`,
      src: "https://digitalrun.biz/uploads/images/project_img_67290bb8b4d92.jpg",
    },
    {
      text: `All-in-One Restaurant Management Solution`,
      src: "https://digitalrun.biz/uploads/images/project_img_67290fe5ebfa7.jpg",
    },
  ];
  return (
    <div>
      <HomeNavigation />
      <div className="flex justify-center items-center">
        <Section heading="Our Services" />
      </div>
      <div>
        <Services />
      </div>
      <div className="flex justify-center items-center">
        <Section heading="Our Clients" />
      </div>
      <InfiniteMovingCards items={items} />
      <div className="flex justify-center items-center">
        <Section heading="Awards" />
      </div>
      <Awards />

      <div className="flex justify-center items-center">
        <Section heading="Our Project" />
      </div>
      <Project cards={cards} />

      <TestimonialsComponent />
    </div>
  );
};

export default HomeComponents;
