"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlineUserAdd, HiOutlineMail } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
const ExpandableCard1 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'overlay') {
      setIsExpanded(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center h-96">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            id="overlay"
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      <motion.div
        layout
        className={`bg-white shadow-lg rounded-lg p-6 z-50 mx-6 ${isExpanded ? 'cursor-default' : 'cursor-pointer'}`}
        onClick={!isExpanded ? handleToggle : undefined}
        initial={false}
        animate={{
          width: isExpanded ? (isMobile ? '350px' : '400px') : '300px',
          height: isExpanded ? '330px' : '120px',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div className={`flex ${isExpanded ? 'flex-col items-center' : 'items-center'}`}>
          <motion.img
            src="https://res.cloudinary.com/dl2adjye7/image/upload/v1714420184/1698251861492_e4wiyn.jpg"
            alt="Avatar"
            className="rounded-full shadow-md"
            initial={false}
            animate={{
              width: isExpanded ? '80px' : '64px',
              height: isExpanded ? '80px' : '64px',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          />
          <div className={`${isExpanded ? 'text-center mt-4' : 'text-left'} ${isExpanded ? 'ml-0' : 'ml-4'}`}>
            <motion.h2 className="text-lg font-semibold">Alexandre Buée</motion.h2>
            <div className={`flex items-center ${isExpanded ? 'justify-center' : 'justify-start'} text-gray-600 mt-1`}>
              <HiOutlineLocationMarker className="text-teal-500 mr-1" />
              <motion.span>Paris, France</motion.span>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-4 w-full"
            >
              <div className="flex flex-col items-center space-y-4">
                <button className="bg-teal-500 text-white px-4 py-2 w-64 sm:w-full flex items-center justify-center rounded-lg hover:bg-teal-600">
                  <HiOutlineUserAdd className="mr-2" />
                  Follow
                </button>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg w-64 sm:w-full flex items-center justify-center hover:bg-gray-300 hover:text-slate-900">
                  <HiOutlineMail className="mr-2" />
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const page = () => {
  return (
    <div>
         <div className="h-screen text-center">
      <ExpandableCard1 />
    </div>
    </div>
  )
}

export default page






// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const CustomCursor2 = ({ isVisible }) => {
//   const [position, setPosition] = useState({ x: -100, y: -100 });

//   useEffect(() => {
//     const mouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     document.addEventListener('mousemove', mouseMove);

//     return () => {
//       document.removeEventListener('mousemove', mouseMove);
//     };
//   }, []);

//   const cursorVariants = {
//     initial: { opacity: 0, scale: 0.5 },
//     animate: { opacity: 1, scale: 1 },
//     exit: { opacity: 0, scale: 0.5 },
//   };

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           className="fixed top-0 left-0 pointer-events-none z-50"
//           style={{
//             left: position.x,
//             top: position.y,
//           }}
//           variants={cursorVariants}
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           transition={{ type: 'spring', stiffness: 500, damping: 30 }}
//         >
//           <div className="relative">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               version="1.1"
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               width="36px"
//               height="36px"
//               viewBox="0 0 24 24"
//               style={{ enableBackground: 'new 0 0 512 512' }}
//               xmlSpace="preserve"
//               className="text-slate-900"
//             >
//               <defs>
//                 <linearGradient id="a" x1="11.992" x2="11.992" y1="22.192" y2="1.803" gradientUnits="userSpaceOnUse">
//                   <stop stopOpacity="1" stopColor="#2bdada" offset="0"></stop>
//                   <stop stopOpacity="1" stopColor="#008080" offset="1"></stop>
//                 </linearGradient>
//               </defs>
//               <g>
//                 <path
//                   fill="url(#a)"
//                   d="m21.606 10.789-7.437 3.38-3.38 7.437a1 1 0 0 1-1.844-.055L1.875 3.166a1.007 1.007 0 0 1 1.292-1.291l18.385 7.07a1.006 1.006 0 0 1 .054 1.844z"
//                   opacity="1"
//                 ></path>
//               </g>
//             </svg>
//             <div
//               className="pointer-events-none absolute rounded-full"
//               style={{
//                 width: '100px',
//                 height: '100px',
//                 background: 'rgba(64, 224, 208, 0.5)',
//                 filter: 'blur(50px)',
//                 transform: 'translate(-50%, -50%)',
//               }}
//             />
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// const CustomCard2 = ({ onMouseEnter, onMouseLeave }) => {
//   return (
//     <a
//       href="#"
//       className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-none"
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://res.cloudinary.com/dl2adjye7/image/upload/v1716789479/abstract-technology-concept-background-vertical-d-illustration-81690352_dnidkh.webp" alt="Noteworthy technology acquisitions 2021" />
//       <div className="flex flex-col justify-between p-4 leading-normal">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//       </div>
//     </a>
//   );
// };

// const CustomCursorCard2 = () => {
//   const [cursorVisible, setCursorVisible] = useState(false);

//   const handleMouseEnter = () => {
//     setCursorVisible(true);
//   };

//   const handleMouseLeave = () => {
//     setCursorVisible(false);
//   };

//   return (
//     <div className="relative">
//       <CustomCursor2 isVisible={cursorVisible} />
//       <div className="p-0">
//         <CustomCard2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
     
//       </div>
//       <CustomCursorCard2></CustomCursorCard2>
//     </div>
//   );
// };


          