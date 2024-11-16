import React from "react";
import ExpertiessWrapper from "./ExpertiessWrapper";
import ExpertiseSectionImageLeft from "./ExpertiseSectionImageLeft";
import ExpertiseSection from "./ExpertiseSection";
import ExpertiseSectionImageRight from "./ExpertiseSectionImageRight";
import Section from "../share/Section";

const ServicesComponent = () => {
  const images1 = "/images/image1.PNG";
  const images2 = "/images/image2.PNG";
  const images3 = "/images/image3.jpg";
  const images4 = "/images/image4.jpg";
  const images5 = "/images/image5.jpg";
  const images6 = "/images/image6.jpg";
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
              title={"Cyber"}
              subTitle={"security"}
              subSubTitle={
                "Offering services to secure digital assets, protect against cyber threats, and ensure data privacy. "
              }
            ></ExpertiseSection>
          </div>
          <div className="flex flex-col-reverse md:flex-row  gap-10 justify-center items-center py-8 ">
            <ExpertiseSection
              title={"Networking "}
              subTitle={"Solutions"}
              subSubTitle={
                "Designing and implementing network infrastructure for seamless communication. "
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
              title={"Web "}
              subTitle={"Development"}
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
