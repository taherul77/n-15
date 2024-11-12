"use client";
import dynamic from 'next/dynamic'
const Welcome = dynamic(() => import('../../components/Welcome/Welcome'), { ssr: false })
 
// import Welcome from "@/components/Welcome/Welcome";

const Page = () => {

  return (
    <>
    <Welcome />
    </>
  );
};

export default Page;
