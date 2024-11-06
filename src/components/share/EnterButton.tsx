
"use client";

import styles from "@/styles/Test.module.css";
import { useEffect, useState } from "react";

interface EnterButtonProps {
  buttonName: string;
}

const EnterButton = ({buttonName}:EnterButtonProps) => {
  const [showEnter, setShowEnter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnter(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  console.log("showEnter", showEnter);

  return (
    <button
      className={`flex group rounded-full text-center justify-center items-center relative z-30 ${styles.boxShadow}`}
    >
      <div
        className={`bg-[#2F0181]  rounded-l-xl  z-30 w-[7vh] h-[5vh] `}
      ></div>

      <div
        className={`bg-[#FB5900] duration-700 ease-in-out rounded-r-xl  z-10 w-[7vh] h-[5vh] border border-[#c0bfbf] ${
          showEnter ? `translate-x-[8.5vh] ml-2` : ``
        }`}
      ></div>

      <div className={`left-0 absolute text-[3vh] overflow-hidden`}>
        <div className={`rounded-2xl ml-[7.5vh]`}>
          <div
            className={`w-0 text-left duration-500 opacity-0 ease-in-out scale-75 ${
              showEnter ? `w-[10vh] opacity-100 scale-100` : ``
            }`}
          >
            <p
              className={`-ml-[5vh] duration-700 text-[#3BADB1] uppercase ${
                showEnter ? `ml-0` : ``
              }`}
            >
              {buttonName}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default EnterButton



