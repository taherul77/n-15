import React from "react";
import ExpertiessWrapper from "./ExpertiessWrapper";
import ExpertiseSectionImageLeft from "./ExpertiseSectionImageLeft";
import ExpertiseSection from "./ExpertiseSection";
import ExpertiseSectionImageRight from "./ExpertiseSectionImageRight";
import Section from "../share/Section";

const ServicesComponent = () => {
  const images1 = "/images/image1.PNG";
  const images2 = "/images/image2.PNG";
  const images3 = "/images/image3.png";
  const images4 = "/images/image4.png";
  const images5 = "/images/image5.png";
  const images6 = "/images/image6.png";
  const images7 = "/images/image7.jpg";
  const images8 = "/images/image8.jpg";

  return (
    <div>
      <div className="content-container bg-center bg-cover bg-no-repeat">
        <div className="flex justify-center items-center">
          <Section heading="Our Services" />
        </div>

        <ExpertiessWrapper>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center  py-8">
            <ExpertiseSectionImageLeft
              img={images1}
            ></ExpertiseSectionImageLeft>

            <ExpertiseSection
              title={"Business Process Automation."}
              subTitle={"(BPA)"}
              className2="flex"
              translateX={"translateX(200px)"}
              subSubTitle={
                "We Collect Requirement or .identify your business pain point and provide best automation solution for your organization."
              }
            ></ExpertiseSection>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-10 justify-center items-center  py-8 ">
            <ExpertiseSection
              title={"Mobile Application"}
              subTitle={"Development."}
              className2="flex"
              translateX={"translateX(200px)"}
              subSubTitle={
                "The Mobile Application Development Service offers a comprehensive solution for businesses and organizations looking to establish a strong mobile presence through custom application development. Our team of experienced developers and designers specializes in creating high-quality, user-friendly mobile applications tailored to meet the specific needs of our clients. "
              }
            ></ExpertiseSection>
            <ExpertiseSectionImageRight
              img={images2}
            ></ExpertiseSectionImageRight>
          </div>
          <div className="flex flex-col md:flex-row  gap-10 justify-center items-center py-8">
            <ExpertiseSectionImageLeft
              img={images3}
            ></ExpertiseSectionImageLeft>

            <ExpertiseSection
              title={"Web"}
              subTitle={"security"}
              subSubTitle={
                "Our company is your go-to resource for web security, offering valuable insights and practical tips to protect your online assets. From understanding threats to implementing effective measures, we provide essential information for website owners and users alike. "
              }
            ></ExpertiseSection>
          </div>
          <div className="flex flex-col-reverse md:flex-row  gap-10 justify-center items-center py-8 ">
            <ExpertiseSection
              title={"Web Application "}
              subTitle={"Development"}
              subSubTitle={
                "Digital Run is a cutting-edge web application service designed to create dynamic, user-friendly, and responsive web applications tailored to meet the specific needs of businesses across various industries. With a focus on enhancing user experience and optimizing operational efficiency, leverages modern web technologies and best practices to deliver robust solutions that drive engagement and growth. "
              }
            ></ExpertiseSection>
            <ExpertiseSectionImageRight
              img={images4}
            ></ExpertiseSectionImageRight>
          </div>
          <div className="flex flex-col md:flex-row  gap-10 justify-center items-center  py-8">
            <ExpertiseSectionImageLeft
              img={images5}
            ></ExpertiseSectionImageLeft>

            <ExpertiseSection
              title={"Web Site "}
              subTitle={"Making and Design "}
              subSubTitle={
                "Designing and developing websites and web applications. "
              }
            ></ExpertiseSection>
          </div>
          <div className="flex flex-col-reverse md:flex-row  gap-10 justify-center items-center  py-8">
            <ExpertiseSection
              title={"Mobile App  "}
              subTitle={"Development"}
              subSubTitle={
                "Creating applications for mobile devices on various platforms. "
              }
            ></ExpertiseSection>
            <ExpertiseSectionImageRight
              img={images6}
            ></ExpertiseSectionImageRight>
          </div>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center  py-8">
            <ExpertiseSectionImageLeft
              img={images7}
            ></ExpertiseSectionImageLeft>

            <ExpertiseSection
              title={"Artificial   "}
              subTitle={"Intelligence & Machine Learning "}
              subSubTitle={
                "Implementing AI and ML solutions for automation and data analysis."
              }
            ></ExpertiseSection>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-10 justify-center items-center  py-8 ">
            <ExpertiseSection
              title={"Data"}
              subTitle={"Analytics"}
              subSubTitle={
                "Analyzing and interpreting data to help businesses make informed decisions. "
              }
            ></ExpertiseSection>
            <ExpertiseSectionImageRight
              img={images8}
            ></ExpertiseSectionImageRight>
          </div>
        </ExpertiessWrapper>
      </div>
    </div>
  );
};

export default ServicesComponent;
