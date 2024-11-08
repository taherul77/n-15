/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
const CarouselData = [
    {
      text: `Integrated\n ERP Solution\n for Seamless Business Management`,
      image:
        "https://digitalrun.biz/uploads/images/project_img_667fa365dfe63.jpg",
    },
    {
      text: `Customer\n Panel\n for Online\n Shopping`,
      image:
        "https://digitalrun.biz/uploads/images/project_img_667fa59ba4d91.jpg",
    },
    {
      text: `"SmartAccount: Streamlined Account Management System"`,
      image:
        "https://digitalrun.biz/uploads/images/project_img_667fa4b8e92cd.jpg",
    },
    {
      text: `Intelligent Human Resource Management System`,
      image:
        "https://digitalrun.biz/uploads/images/project_img_667fa43aca8af.jpg",
    },
    {
      text: `Innovative\n POS\n for Modern Retail`,
      image:
        "https://digitalrun.biz/uploads/images/project_img_67290bb8b4d92.jpg",
    },
    {
      text: `All-in-One Restaurant Management Solution`,
      image:
        "https://digitalrun.biz/uploads/images/project_img_67290fe5ebfa7.jpg",
    },
  ];

export function CombinedCarousel() {
  const [emblaApi, setEmblaApi] = React.useState<any>(null);
  const [emblaApi2, setEmblaApi2] = React.useState<any>(null);
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (emblaApi && emblaApi2) {
      const syncScroll = () => {
        emblaApi2.scrollTo(emblaApi.selectedScrollSnap(), false);
      };

      emblaApi.on("select", syncScroll);
      emblaApi2.on("select", () => {
        emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
      });

      // Initialize carousels with synced scroll position
      syncScroll();

      return () => {
        emblaApi.off("select", syncScroll);
        emblaApi2.off("select", () => {
          emblaApi.scrollTo(emblaApi2.selectedScrollSnap(), false);
        });
      };
    }
  }, [emblaApi, emblaApi2]);

  return (
    <div className="relative mx-auto">
      <div className="flex">
        {/* Vertical Carousel */}
        <div className="flex w-1/4 min-w-[200px]">
          <Carousel
            opts={{ align: "start", loop: true }} // Enable infinite loop here
            orientation="vertical"
            className="w-full content-end"
            setApi={setEmblaApi}
          >
            <CarouselContent className="h-[300px] mb-4 flex">
              {CarouselData.map((item, index) => (
                <CarouselItem key={index} className="content-end">
                  <div className="text-3xl" style={{ whiteSpace: "pre-line" }}>
                    {item.text}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="btn btn-warning grow bg-white absolute -bottom-14 py-2 px-4">
            Learn More
          </div>
        </div>

        {/* Main Image Carousel */}
        <Carousel
          plugins={[autoplay.current]}
          className="w-full ml-16"
          opts={{ align: "start", loop: true }} // Enable infinite loop here
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          setApi={setEmblaApi2}
        >
          <CarouselContent>
            {CarouselData.map((item, index) => (
              <CarouselItem key={index} className="basis-6/12">
                <div>
                  <Card className=" ">
                    <CardContent className="p-0 ">
                      <div className=" shadow-lg">
                        <div className="">
                          <Image
                            src={item.image}
                            alt={item.text}
                            height={400}
                            width={600}
                            className="h-[300px] w-[650px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious className="top-[335px] left-0 bg-gray-300" />
          <CarouselNext className="top-[335px] left-12 bg-gray-300" /> */}
        </Carousel>
      </div>
    </div>
  );
}
