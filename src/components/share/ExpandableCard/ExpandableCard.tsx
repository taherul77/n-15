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
      title: "Web Application Development",
      description: "Digital Run is a cutting-edge web application service designed to create dynamic, user-friendly, and responsive web applications tailored to meet the specific needs of businesses across various industries. With a focus on enhancing user experience and optimizing operational efficiency, leverages modern web technologies and best practices to deliver robust solutions that drive engagement and growth. Key Features: Custom Web Application Development: Tailored solutions to meet unique business requirements, from concept to deployment. Utilization of the latest frameworks and technologies, such as React, Angular, and Node.js, for seamless performance. Responsive Design: Mobile-first approach ensuring applications are accessible and optimized for all devices, including smartphones, tablets, and desktops. User interfaces designed for maximum usability and engagement. API Integration: Development of RESTful APIs for seamless communication between different services and applications. Integration with third-party services such as payment gateways, CRM systems, and social media platforms. Database Management: Robust database solutions using SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) (Oracle) databases to efficiently store and manage application data. Implementation of data security measures to protect sensitive information. User Authentication and Security: Secure user authentication mechanisms, including OAuth and JWT, to ensure data protection and user privacy. Regular security audits and updates to maintain application integrity. Cloud Deployment and Hosting: Deployment of applications on reliable cloud platforms such as AWS, Azure, or Google Cloud for scalability and performance. Utilization of containerization technologies (Docker) for efficient application management. Real-Time Functionality: Implementation of real-time features using WebSockets or similar technologies for instant data updates and notifications. Enhancing user engagement through interactive elements such as chat functionalities and live data feeds. Performance Optimization: Continuous monitoring and optimization of application performance to ensure fast loading times and responsiveness. Techniques such as lazy loading, caching, and code splitting to improve user experience. Comprehensive Testing: Rigorous testing processes, including unit testing, integration testing, and user acceptance testing, to ensure a bug-free and smooth user experience. Feedback loops from testing phases to refine and enhance application functionality. Ongoing Support and Maintenance: Dedicated support team for troubleshooting, updates, and feature enhancements post-launch. Regular maintenance schedules to keep the application running smoothly and up to date with technological advancements. Objective: The goal of Digital Run is to empower businesses by providing high-quality web application development services that improve operational efficiency and enhance user engagement. By leveraging modern technologies and best practices, Digital Run aims to deliver applications that not only meet the immediate needs of clients but also adapt to their future growth and technological advancements.",
      icon: <CiMobile1 className="h-4 w-4" />,
    },
    {
      title: "Web Site Making and Design.",
      description: "At Digital Run, we specialize in delivering comprehensive web design and development services that transform your online presence. Our team of skilled designers and developers work collaboratively to create visually stunning and highly functional websites tailored to meet your unique business needs. Our Services Include: Custom Web Design: We craft visually appealing websites that reflect your brand identity. Our design process focuses on user experience (UX) and user interface (UI) principles, ensuring that your site is not only attractive but also easy to navigate. Responsive Design: With the increasing use of mobile devices, we ensure that your website is fully responsive. Our designs adapt seamlessly to different screen sizes, providing an optimal viewing experience for all users, whether on a desktop, tablet, or smartphone. E-Commerce Solutions: For businesses looking to sell online, we offer robust e-commerce solutions. From shopping cart integration to secure payment gateways, we provide everything you need to create a successful online store. Content Management Systems (CMS): We build websites on user-friendly CMS platforms like WordPress, allowing you to easily manage and update your content without requiring technical expertise. Our CMS solutions empower you to take control of your website. Website Maintenance and Support: Our commitment to you doesn�t end with the launch. We offer ongoing maintenance and support services to ensure your website remains up-to-date, secure, and functioning optimally. Our team is always ready to assist you with any issues or updates. Analytics and Performance Tracking: We implement analytics tools to track your website's performance, providing valuable insights into user behavior and engagement. This data helps inform your marketing strategies and improve user experience. Why Choose Us? Expert Team: Our experienced designers and developers stay up-to-date with the latest trends and technologies in web design and development. Tailored Solutions: We understand that every business is unique. We work closely with you to create a solution that meets your specific requirements and goals. Quality Assurance: We prioritize quality at every stage of the development process, ensuring that your website is not only visually appealing but also functional and reliable. Customer-Centric Approach: Your satisfaction is our top priority. We maintain open communication throughout the project, keeping you informed and involved every step of the way. Get Started Today! Elevate your online presence with a stunning, functional website that drives results. Contact us today to discuss your web design and development needs, and let�s bring your vision to life!",
      icon: <CiMobile1 className="h-4 w-4" />,
    },
    {
      title: "Maintenance and Support.",
      description: "This service provides organizations with essential tools and technical support to keep their software up-to-date, secure, and optimized for performance, caters to businesses of all sizes, offering tailored support plans that align with unique operational needs and compliance requirements. Key Services: Bug Fixing and Issue Resolution: Identification and prompt resolution of software bugs and performance issues. Continuous monitoring to proactively address and prevent potential disruptions. Software Updates and Upgrades: Regular updates to keep software in line with the latest technology standards and security patches. Seamless upgrades to enhance functionality and integrate new features as business needs evolve. Performance Optimization: Performance audits to identify bottlenecks and optimize code for faster response times. Fine-tuning of software for improved scalability and efficient resource utilization. Security Monitoring and Patching: Proactive security scans to detect vulnerabilities and address them before they impact operations. Regular patch management to ensure robust defense against cybersecurity threats. Database Maintenance: Regular database monitoring, optimization, and backups to maintain data integrity. Data cleanup and restructuring to improve query performance and data access speed. Backup and Disaster Recovery: Implementation of automated backup systems to prevent data loss. Comprehensive disaster recovery planning and testing to ensure rapid restoration in case of data breaches or system failures. 24/7 Technical Support: Round-the-clock support to address critical issues and assist users with troubleshooting. Support channels including phone, email, and chat for fast and effective problem resolution. User Training and Documentation: Regular training sessions for users to familiarize them with system updates and best practices.Detailed documentation and knowledge base to assist users in self-service troubleshooting. Compliance and Compatibility Management: Regular assessments to ensure software aligns with industry regulations and compliance standards. Ongoing compatibility testing to ensure integration with evolving systems, hardware, and software environments. Custom Enhancements and Modifications: Tailored enhancements based on user feedback and evolving business requirements. Customization options for new functionalities, user interfaces, and workflows.",
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
                width: isExpanded ? (isMobile ? "350px" : "1100px") : "350px",
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