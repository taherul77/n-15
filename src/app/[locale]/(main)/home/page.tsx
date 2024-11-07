import React from "react";
import { useTranslations } from "next-intl";
import HomeComponents from "@/components/Home/HomeComponents";
const Home = () => {
  const t = useTranslations("Navbar");
  // const locale = useLocale();
  return (
    <>
      <HomeComponents />
    </>
  );
};

export default Home;
