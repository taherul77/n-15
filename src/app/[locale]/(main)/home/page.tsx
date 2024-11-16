import React from "react";
import { useTranslations } from "next-intl";
import HomeComponents from "@/components/Home/HomeComponents";
const Home = () => {
  const t = useTranslations("Navbar");
  // const locale = useLocale();
  return (
    <div className="max-w-6xl mx-auto min-h-screen">
      <HomeComponents />
    </div>
  );
};

export default Home;
