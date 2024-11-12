import Link from "next/link";
import { motion } from "framer-motion";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import EnterButton from "@/components/share/EnterButton";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
// import { TextHoverEffect } from "../ui/text-hover-effect";

const Welcome = () => {
    const [img, setImg] = useState("");
    const locale = useLocale();
    useEffect(() => {
      setImg('url("gif/enter.gif")');
    }, []);
    const x = "-38vh";
  
  return (
    <div>
       <div className="bg-[#E4E4E6] futura relative">
      <div className="h-screen overflow-hidden">

      {/* <div className="h-[40rem] flex items-center justify-center">
      <TextHoverEffect text="ACET" />
    </div> */}




        <div
          className="bg-clip-text bg-cover text-transparent flex h-full w-full uppercase"
          style={{ backgroundImage: img }}
        >
          <div className="h-full w-4/6 text-[50vh] text-right">
            <p className="leading-[49vh] mb-[2vh] tracking-[1px]">DRL</p>
          </div>

          <div className="h-full w-3/6">
            <div className="h-[51vh]"></div>
            <div className="h-[49vh]">
              <div className="h-[34vh] overflow-hidden ml-[2vh]">
                <motion.div
                  initial={{ x: x }}
                  animate={{ x: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <p className="text-black font-bold text-[5vh] leading-[4.5vh]">
                    <span className="text-[#2F0181]">Digital</span>{" "}
                    <span className="text-[#FB5900]">Run</span> <br />{" "}
                    <span className="text-[#2F0181]">Limited</span> <br /> As
                    Bangladesh&apos;s <br />
                    premier <br /> software <br />{" "}
                    <span className="text-[#FB5900]">company </span>
                  </p>
                </motion.div>
              </div>
              <div className="h-[29vh] ml-[32vh] ">
                <Link href={`/${locale}/home`}>
                  <EnterButton buttonName="Enter" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute  inset-y-0 right-0 w-[14vh] h-screen overflow-hidden flex items-end">
        <div className="flex flex-col items-end  mb-[10vh] gap-[5vh] pl-[2vh]">
          <SlSocialFacebook
            className="h-[3vh] w-[3vh] hover:scale-150 duration-300 cursor-pointer"
            color="#0866FF"
          />

          <SlSocialLinkedin
            className="h-[3vh] w-[3vh] hover:scale-125 duration-300 cursor-pointer z-10 overflow-visible"
            color="#0160C0"
          />

          <SlSocialYoutube
            className="h-[3vh] w-[3vh] hover:scale-125 duration-300 cursor-pointer "
            color="#C4161C"
          />
        </div>
      </div>

      {/* <div className="absolute border top-[15vh] border-[#FFFFFF] w-full "></div>
      <div className="absolute border top-[50vh] border-[#FFFFFF] w-full "></div>
      <div className="absolute border bottom-[15vh] border-[#FFFFFF] w-full"></div>

      <div className="absolute border border-[#FFFFFF] h-full left-[15vw] top-0"></div>
      <div className="absolute border border-[#FFFFFF] h-full right-[15vw] top-0"></div>
      <div className="absolute border border-[#FFFFFF] h-full right-[38.33vw] top-0"></div>
      <div className="absolute border border-[#FFFFFF] h-full right-[61.66vw] top-0 z-0"></div> */}
    </div>
    </div>
  )
}

export default Welcome
