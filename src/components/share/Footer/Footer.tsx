import FooterTop from '@/components/ui/footertop';
import React from 'react'

const Footer = () => {
    const words = ["better", "cute", "beautiful", "modern"];
  return (
    <div>
      <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FooterTop words={words} /> 
        websites with Aceternity UI
      </div>
    </div>
    </div>
  )
}

export default Footer
