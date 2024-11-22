"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { FaChevronRight, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function NavbarTop() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const locale = useLocale();

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
              <hr />
              <div className="flex items-center gap-2 hover:text-gray-500 ">
                <div className="font-bold">Follow us on</div>
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
  const pathname = usePathname();

  const logo = "/assets/logo/ditital_logo.png";

  const links = [
    { href: `/${locale}/home`, label: "Home" },
    { href: `/${locale}/about`, label: "About Us" },
    { href: `/${locale}/services`, label: "Services" },
    { href: `/${locale}/blog`, label: "Blog" },
    { href: `/${locale}/contact`, label: "Contact" },
    { href: `/${locale}/career`, label: "Career" },
    { href: `/${locale}/team`, label: "Our Team" },
    { href: `/${locale}/testimonial`, label: "Testimonial" },
  ];

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-6xl mx-auto z-50 backdrop-blur-lg shadow-xl",
        className
      )}
    >
      <Menu setActive={() => {}}>
        <div>
          <Image src={logo} alt="" height={60} width={80}></Image>
        </div>
        <div className="flex justify-between items-center gap-5">
          {links.map((link) => (
            <div key={link.href}>
              <Link href={link.href}
                  className={cn(
                    "hover:underline underline-offset-8 decoration-black decoration-2 transition-all",
                    pathname === link.href ? "bg-clip-text text-transparent bg-gradient-to-r from-[#4B1E7F]  to-[#FC6617] font-bold" : ""
                  )}
                >
                  {link.label}
                
              </Link>
            </div>
          ))}
        </div>
      </Menu>
    </div>
  );
}