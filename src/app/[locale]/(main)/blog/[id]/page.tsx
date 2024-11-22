"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";

// Define the type for a single item
interface Item {
  id: number;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
}

// Mock data for items
const items: Item[] = [
  {
    id: 1,
    title: "In the mountains",
    price: "$1299 / night",
    description: "A cozy cabin in the serene mountains.",
    imageUrl:
      "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "By the beach",
    price: "$1499 / night",
    description: "A luxury villa by the tranquil beach.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "In the city",
    price: "$999 / night",
    description: "A modern apartment in the heart of the city.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Forest retreat",
    price: "$799 / night",
    description: "A peaceful retreat in the lush forest.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SingleItemPage: FC = () => {
  const { id } = useParams();

  // Parse ID and find the corresponding item
  const item = items.find((item) => item.id === parseInt(id as string, 10));

  if (!item) {
    return <p className="text-center mt-20">Item not found</p>;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="mx-auto max-w-2xl p-6"
    >
      <Image
        src={item.imageUrl}
        alt={item.title}
        width={800}
        height={400}
        
        className="rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
      <p className="text-lg text-gray-700 mb-4">{item.description}</p>
      <p className="text-xl font-semibold text-green-600">{item.price}</p>
    </motion.div>
  );
};

export default SingleItemPage;
