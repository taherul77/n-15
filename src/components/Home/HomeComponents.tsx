"use client";
import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import Section from "../share/Section";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Awards from "./Awards/Awards";
import Project from "./Projects/Project";
import TestimonialsComponent from "./Testimonials/TestimonialsComponent";
import ExpandableCard from "../share/ExpandableCard/ExpandableCard";

const HomeNavigation = dynamic(
  () => import("./HomeNavigation/HomeNavigation"),
  {
    ssr: false,
  }
);

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

  const sectionVariants = {
    hidden: { opacity: 0, x: -100, y: 100 },
    visible: { opacity: 1, x: 0, y: 0 },
  };
  const testimonialsComponent = {
    hidden: { opacity: 0, x: 100, y: 100 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div>
      <HomeNavigation />
      <motion.div
        className="flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        transition={{ duration: 1 }}
      >
        <Section heading="Our Services" />
      </motion.div>
      <motion.div className="flex justify-center items-center">
        <ExpandableCard />
      </motion.div>
      <motion.div
        className="flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        transition={{ duration: 1 }}
      >
        <Section heading="Our Clients" />
      </motion.div>
      <InfiniteMovingCards items={items} />
      <motion.div
        className="flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        transition={{ duration: 1 }}
      >
        <Section heading="Awards" />
      </motion.div>
      <Awards />
      <motion.div
        className="flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        transition={{ duration: 1 }}
      >
        <Section heading="Our Project" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
        transition={{ duration: 1 }}
      >
        <Project cards={cards} />
      </motion.div>

      <motion.div
        className="flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={testimonialsComponent}
        transition={{ duration: 1 }}
      >
        <Section heading="Our Testimonial" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={testimonialsComponent}
        transition={{ duration: 1 }}
        className="pb-10"
      >
        <TestimonialsComponent />
      </motion.div>
    </div>
  );
};

export default HomeComponents;
