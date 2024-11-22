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















// const SkeletonOne = () => {
//   return (
//     <div>
//       <p className="font-bold md:text-4xl text-xl text-white">
//         House in the woods
//       </p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A serene and tranquil retreat, this house in the woods offers a peaceful
//         escape from the hustle and bustle of city life.
//       </p>
//     </div>
//   );
// };

// const SkeletonTwo = () => {
//   return (
//     <div>
//       <p className="font-bold md:text-4xl text-xl text-white">
//         House above the clouds
//       </p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         Perched high above the world, this house offers breathtaking views and a
//         unique living experience. It&apos;s a place where the sky meets home,
//         and tranquility is a way of life.
//       </p>
//     </div>
//   );
// };
// const SkeletonThree = () => {
//   return (
//     <div>
//       <p className="font-bold md:text-4xl text-xl text-white">
//         Greens all over
//       </p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };
// const SkeletonFour = () => {
//   return (
//     <div>
//       <p className="font-bold md:text-4xl text-xl text-white">
//         Rivers are serene
//       </p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house by the river is a place of peace and tranquility. It&apos;s the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };

// const cards = [
//   {
//     id: 1,
//     content: <SkeletonOne />,
//     className: "md:col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 2,
//     content: <SkeletonTwo />,
//     className: "col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     content: <SkeletonThree />,
//     className: "col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 4,
//     content: <SkeletonFour />,
//     className: "md:col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];
