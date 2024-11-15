/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react"; 

export interface SectionProps {
  heading: string; 
}


export interface SectionTitleProps {
  heading: string; 
  className?: string; 
  className2?: string; 
  subTitle?: string;
}
export interface projectProps {
 cards?:any;
}

// Interface for the Expertise component props
export interface ExpertiseProps {
  img: any; // Image can be of any type
}

// Interface for the ExpertiseSection component props with optional properties
export interface ExpertiseSectionProps {
  title?: string; // Optional title
  subTitle?: string; // Optional subtitle
  subSubTitle?: string | undefined; // Optional subsubtitle, can be undefined
}

// Interface for the ExpertiseSectionImageLeft component props
export interface ExpertiseSectionImageLeftProps {
  img: any; // Image can be of any type
}

// Interface for the SectionImageLeft component props
export interface SectionImageLeftProps {
  img: any; // Image can be of any type
}

// Interface for the ExpertiseSectionImageRight component props
export interface ExpertiseSectionImageRightProps {
  img: any; // Image can be of any type
}

// Interface for the Section component props
export interface SectionProps {
  heading: string; // Heading is a string
}

// Interface for the SectionTitle component props with optional properties
export interface SectionTitleProps {
  heading: string; // Heading is a string
  className?: string; // Optional class name
  className2?: string; // Optional second class name
  subTitle?: string; // Optional subtitle
}

// Interface for the Wrapper component props with optional children and class name
export interface WrapperProps {
  children?: ReactNode; // Optional children of any ReactNode type
  className?: string; // Optional class name
}

// Interface for the ExpertiessWrapper component props with mandatory children and optional class name
export interface ExpertiessWrapperProps {
  children: ReactNode; // Mandatory children of any ReactNode type
  className?: string; // Optional class name
}

// Interface for the SolutionSectionTitle component props with optional properties
export interface SolutionSectionTitleProps {
  title?: string; // Optional title
  className?: string; // Optional class name
  subSubTitle?: string; // Optional subsubtitle
  className2?: string; // Optional second class name
  translateX?: string; // Optional translateX property
}

// Interface for the SectionEnimation component props with optional properties
export interface SectionEnimationProps {
  children?: string; // Optional children as a string
  className?: string; // Optional class name
  className2?: string; // Optional second class name
  translateX?: string; // Optional translateX property
}

// Interface for the BrandImage component props with optional properties
export interface BrandImageProps {
  hoverImage?: any; // Optional hover image of any type
  normalImage?: any; // Optional normal image of any type
}
