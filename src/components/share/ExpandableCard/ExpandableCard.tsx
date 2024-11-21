"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { FaCogs, FaMobileAlt } from "react-icons/fa";
import { TbWorldCog } from "react-icons/tb";
import { CiMobile1 } from "react-icons/ci";

const ExpandableCard = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === "overlay") {
      setExpandedIndex(null);
    }
  };

  const items = [
    {
      title: "Business Process Automation.(BPA)",
      description: "We Collect Requirement or .identify your business pain point and provide best automation solution for your organization.",
      icon: <FaCogs className="h-4 w-4" />,
    },
    {
      title: "Mobile Application Development.",
      description: "The Mobile Application Development Service offers a comprehensive solution for businesses and organizations looking to establish a strong mobile presence through custom application development. Our team of experienced developers and designers specializes in creating high-quality, user-friendly mobile applications tailored to meet the specific needs of our clients. Whether for iOS, Android, or cross-platform, we deliver robust and innovative solutions that enhance user engagement and drive business growth. Key Features: Custom App Development: Tailored mobile applications designed to align with your business objectives and user requirements. Utilization of the latest development frameworks and technologies for optimal performance. Cross-Platform Solutions: Development of applications that work seamlessly across multiple platforms (iOS, Android, Windows) using frameworks like React Native, Flutter, or Xamarin. Cost-effective solutions that reach a broader audience without compromising quality. User-Centric Design: Focus on creating intuitive and engaging user interfaces (UI) and user experiences (UX) to enhance user satisfaction. Prototyping and wireframing to visualize app design and functionality before development. Backend Development: Comprehensive backend services to support mobile applications, including API development and database management. Integration with existing systems and third-party services for enhanced functionality. Quality Assurance and Testing: Rigorous testing procedures to ensure the app is bug-free and performs optimally across devices and operating systems. User acceptance testing (UAT) to gather feedback and make necessary adjustments prior to launch. App Store Deployment: Assistance with app submission and deployment to major app stores (Apple App Store, Google Play Store). Compliance with app store guidelines to ensure successful listing and visibility. Maintenance and Support: Ongoing support and maintenance services to address any issues post-launch and to keep the application updated with the latest features and security protocols. Regular updates based on user feedback and evolving technology trends. Analytics and Performance Monitoring: Integration of analytics tools to track user behavior, app performance, and engagement metrics. Data-driven insights to guide future enhancements and marketing strategies. Technology Stack: Frontend: React Native / Flutter / Swift (iOS) / Kotlin (Android) Backend: Node.js / Django / Ruby on Rails Database: MongoDB / PostgreSQL / Firebase Hosting: AWS / Google Cloud / Azure Objective: The objective of our Mobile Application Development Service is to empower businesses to leverage mobile technology effectively, enhance customer engagement, and achieve operational excellence. By providing end-to-end development solutions, we aim to transform ideas into reality and deliver applications that not only meet but exceed client expectations.",
      icon: <FaMobileAlt className="h-4 w-4" />,
    },
    {
      title: "Web Security",
      description: "Our company is your go-to resource for web security, offering valuable insights and practical tips to protect your online assets. From understanding threats to implementing effective measures, we provide essential information for website owners and users alike.",
      icon: <TbWorldCog className="h-4 w-4" />,
    },
    {
      title: "The Power of Communication",
      description: "Understand the impact of effective communication in our lives.",
      icon: <CiMobile1 className="h-4 w-4" />,
    },
  ];

  return (
    <div className="relative flex justify-center items-center">
      <AnimatePresence>
        {expandedIndex !== null && (
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <motion.div
              key={index}
              layout
              className={`bg-white shadow-lg rounded-lg p-6 ${
                isExpanded ? "cursor-default z-50 absolute top-10 left-0 transform -translate-x-1/2 -translate-y-1/2" : "cursor-pointer z-10"
              }`}
              onClick={() => handleToggle(index)}
              initial={{ width: "0px" }}
              animate={{
                width: isExpanded ? (isMobile ? "350px" : "1152px") : "350px",
                height: isExpanded ? "auto" : "350px",
                minWidth: isExpanded ? "350px" : "350px",
                minHeight: isExpanded ? "300px" : "300px",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`flex flex-col items-center`}>
                <motion.div
                  className="flex justify-center items-center rounded-full shadow-md "
                  initial={false}
                  animate={{
                    width: isExpanded ? "64px" : "64px",
                    height: isExpanded ? "64px" : "64px",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {item.icon}
                </motion.div>

                <div
                  className={`${
                    isExpanded ? "text-center hidden" : "text-left"
                  } ${isExpanded ? "ml-0 py-4" : "ml-0 py-4"}`}
                >
                  <motion.h2 className="text-lg font-semibold">
                    {item.title}
                  </motion.h2>
                  <div
                    className={`flex items-center ${
                      isExpanded ? "justify-center" : "justify-start "
                    } text-gray-600 mt-1`}
                  >
                    <motion.span className="line-clamp-6">{item.description}</motion.span>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={false}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="max-w-6xl overflow-auto max-h-[calc(100vh-200px)]"
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-full">
                        <div
                          key={index}
                          className="flex items-center space-x-2 mb-2"
                        >
                          <div className="py-4">
                            <h3 className="text-md font-semibold">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandableCard;