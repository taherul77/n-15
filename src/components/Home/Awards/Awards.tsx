import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Image from 'next/image'
import React from 'react'

const Awards = () => {
  return (
    <div>
      <CardContainer className="inter-var w-[750px]">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[750px] h-auto rounded-xl p-6 border  ">
    
      
        <CardItem
          translateZ="100"
        //   rotateX={20}
        //   rotateZ={-10}
          className="w-[700px] mt-4"
        >
          <Image
            src="https://digitalrun.biz/uploads/clients/WhatsApp%20Image%202024-09-25%20at%2012.30.31%20PM%20(1)_20240925_084509.jpeg"
            height="1000"
            width="1000"
            className="h-60 w-[800px] object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

      
      </CardBody>
    </CardContainer>
    </div>
  )
}

export default Awards
