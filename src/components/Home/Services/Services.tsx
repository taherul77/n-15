import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FaCogs,FaMobileAlt } from "react-icons/fa";
import { TbWorldCog } from "react-icons/tb";
import { CiMobile1 } from "react-icons/ci";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
const Services = () => {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
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
