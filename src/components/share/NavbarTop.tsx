"use client";
import React, { useEffect, useState } from "react";
import { 
  // HoveredLink,
   Menu,
    // MenuItem,
    //  ProductItem
     } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { FaChevronRight,FaFacebookF,FaLinkedin } from "react-icons/fa";

import { CiPhone } from "react-icons/ci";

import { useLocale,
  //  useTranslations
   } from "next-intl";
import Link from "next/link";

// import { usePathname } from "next/navigation";
import Image from "next/image";
// import LocalSwitcher from "../ui/LocalSwitcher";
export function NavbarTop() {
  // const [mobileNav, setMobileNav] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  // const t = useTranslations("Navbar");
  const locale = useLocale();
  // const pathName = usePathname().toString();
  // const logo = "/assets/logo/ditital_logo.png";
  // const handleMobileSidebar = () => {
  //   setMobileNav(!mobileNav);
  // };

  // useEffect(() => {
  //   setMobileNav(false);
  // }, [pathName]);

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
      {/* <div className="max-w-6xl mx-auto">
          <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className={`${isScrolled ? "hidden" : "block"}`}>
              <div className="container  w-full px-4">
                <div className="flex justify-between ">
                  <div className="flex gap-8 max-lg:hidden">
                    <LocalSwitcher />
                  </div>
                  <div className="flex justify-center gap-8 py-1.5 text-[#5954CC] text-lg font-medium  max-lg:hidden">
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
        </div> */}
      <div className="max-w-6xl mx-auto ">
        <div className={`${isScrolled ? "hidden" : "block"}`}>
          <div className="flex justify-between py-2 ">
            <div className="flex items-center hover:gap-2 text-gray-500">
              <div className="font-bold">Get a Quotation</div>
              <div>
                <FaChevronRight />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 hover:text-gray-500 ">
                <div>
                  <CiPhone />
                </div>
                <div className="font-bold">8801322278645</div>
              </div>
              <hr/>
              <div className="flex items-center gap-2 hover:text-gray-500 ">
               
                <div className="font-bold">Follow us on
                </div>
                <div>
                  <FaFacebookF />
                </div>
                <div>
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar className="top-10" locale={locale} />
    </div>
  );
}

function Navbar({ className, locale }: { className?: string; locale: string }) {
  const [active, setActive] = useState<string | null>(null);
  console.log(active);
  
  const logo = "/assets/logo/ditital_logo.png";
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-6xl mx-auto z-50 backdrop-blur-lg shadow-xl",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div>
          <Image src={logo} alt="" height={60} width={80}></Image>
        </div>
        <div className="flex justify-between items-center gap-5">
          <div>
            <Link href="/home">Home</Link>
          </div>
          <div>
            <Link href={`/${locale}/about`}>About Us</Link>
          </div>
          <div>
            <Link href="/services">Services</Link>
          </div>

          <div>
            <Link href="/blog">Blog</Link>
          </div>
          <div>
            <Link href="/contact">Contact</Link>
          </div>
          <div>
            <Link href="/career">Career</Link>
          </div>
          <div>
            <Link href="/team">Our Team</Link>
          </div>
          <div>
            <Link href="/testimonial">Testimonial</Link>
          </div>

          {/* <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem> */}
        </div>
      </Menu>
    </div>
  );
}
