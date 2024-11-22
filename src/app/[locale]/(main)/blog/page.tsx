"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { TracingBeam } from "@/components/ui/tracing-beam";

import Link from "next/link";

const page = () => {
  const items = [
    {
      id: 1,
      title: "In the mountains",
      price: "$1299 / night",
      imageUrl:
        "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "By the beach",
      price: "$1499 / night",
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "In the city",
      price: "$999 / night",
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Forest retreat",
      price: "$799 / night",
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="mx-auto min-h-screen">
      <div className="relative flex flex-col items-center justify-center gap-16">
        <TracingBeam>
          {items.map((item, index) => (
            <Link key={index} href={`blog/${item.id}`}>
              <DirectionAwareHover imageUrl={item.imageUrl}>
                <p className="font-bold text-xl">{item.title}</p>
                <p className="font-normal text-sm">{item.price}</p>
              </DirectionAwareHover>
            </Link>
          ))}
        </TracingBeam>
      </div>
    </div>
  );
};

export default page;
