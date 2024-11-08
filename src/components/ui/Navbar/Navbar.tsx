"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import LocalSwitcher from "../LocalSwitcher";

import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathName = usePathname().toString();
  const logo = "/assets/logo/ditital_logo.png";
  const handleMobileSidebar = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    setMobileNav(false);
  }, [pathName]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <nav className={`top-0 fixed  w-full   z-50 `}>
        <div className="max-w-6xl mx-auto">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className={`${isScrolled ? "hidden" : "block"}`}>
              <div className="container  w-full py-2 px-4">
                <div className="flex justify-between items-start max-lg:items-center">
                  <div className="flex gap-8 max-lg:hidden">
                    <LocalSwitcher />
                  </div>
                  <div className="flex justify-center gap-8  text-[#5954CC] text-lg font-medium py-1.5 max-lg:hidden">
                    <Link
                      href={`/${locale}/admin/dashboard`}
                      className="text-center hover:underline underline-offset-8 decoration-black decoration-2 transition-all"
                    >
                      {t("dashboard")}
                    </Link>
                  </div>
                  <button
                    onClick={handleMobileSidebar}
                    className="max-lg:block lg:hidden"
                  >
                    Toggle Sidebar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className= {`${isScrolled ? "mt-5" : "mt-0"} max-w-6xl mx-auto  bg-white/40  backdrop-blur `}>
          <nav className="py-2 px-4">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
              <div>
                <Image src={logo} alt="" height={60} width={80}></Image>
              </div>

              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div
                className="hidden md:block w-full md:w-auto"
                id="mobile-menu"
              >
                <div className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                  <div>
                    <Link href="#">Home</Link>
                  </div>

                  <div>
                    <Link href="#">Services</Link>
                  </div>
                  <div>
                    <Link href="#">Pricing</Link>
                  </div>
                  <div>
                    <Link href="#">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
