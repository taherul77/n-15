import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FaCogs, FaMobileAlt } from "react-icons/fa";
import { TbWorldCog } from "react-icons/tb";
import { CiMobile1 } from "react-icons/ci";

const Services = () => {
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",

      className: "md:col-span-1",
      icon: <FaCogs className="h-4 w-4 ]" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",

      className: "md:col-span-1",
      icon: <FaMobileAlt className="h-4 w-4 " />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",

      className: "md:col-span-1",
      icon: <TbWorldCog className="h-4 w-4 " />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",

      className: "md:col-span-1",
      icon: <CiMobile1 className="h-4 w-4 " />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",

      className: "md:col-span-1",
      icon: <CiMobile1 className="h-4 w-4 " />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",

      className: "md:col-span-1",
      icon: <CiMobile1 className="h-4 w-4 " />,
    },
  ];
  return (
    <div>
      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

export default Services;
