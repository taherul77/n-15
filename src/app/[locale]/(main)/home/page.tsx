import React from 'react'
import {  useTranslations } from "next-intl";
const Home = () => {
    const t = useTranslations("Navbar");
    // const locale = useLocale();
  return (
    <>
     <div className='bg-gray-300 flex justify-center items-center w-full h-screen text-5xl  uppercase font-bold'>
      {t("solutions")}
    </div>
    <div className='bg-gray-300 flex justify-center items-center w-full h-screen text-5xl  uppercase font-bold'>
      {t("solutions")}
    </div>
    </>
   
  )
}

export default Home
