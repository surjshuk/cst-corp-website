"use client";

import { cyberSecBG1 } from "@/app/assets/";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState, useRef } from "react";

interface Tab {
  id: string;
  heading: string;
  description: string;
  image?:string | StaticImageData;
}

interface SpecialProps {
  tabData: Tab[]; 
  progressMultiplierHorizontal?: number; // Controls how progress translates to animation

  threshold?: number; // Intersection observer threshold (default: 70%)
  className: string;
}

const SpecialCarousel = ({ tabData, className, progressMultiplierHorizontal = 0 }: SpecialProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [progress, setProgress] = useState(0);

  const totalSections: number = tabData.length

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        let progressValue = 0;
        if (top < 0) {
            progressValue = Math.abs(top) / ( height * 0.75)
            setProgress(progressValue);
        }

        setActiveTab(Math.min(Math.floor(progressValue * totalSections), (totalSections - 1)))
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalSections]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Adjust scale based on intersection ratio
        setScale(0.93 + entry.intersectionRatio * 0.05); // Scale from 0.95 to 1
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) } // Steps from 0 to 1
    );

    const element = componentRef.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`text-white ${className}`}>
      <div
        ref={componentRef}
        className="z-10 sticky top-12 h-screen tablet:top-0 overflow-x-hidden"  
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.1s ease-out", // Smooth transitions
        }}
      >
        {/* Tab Navigation */}
        

        {/* Tab Content */}
        {tabData.map((tab, index) => (
          <div
            className={`h-screen absolute top-0 w-full ${activeTab === index ? "" : "-z-10"}`}
            key={`section-main-${tab.id}`}
          >
          
          {tab.image? (

            <Image
            src={tab.image|| ""}
            alt={`Image for `}
            fill
            priority
            className="object-cover"
                />
              ):<Image
            src={cyberSecBG1}
            alt={`Image for `}
            fill
            priority
            className="object-cover"
                />}
                

         <div className="bg-gradient-to-t tablet:bg-black/50 from-black to-transparent absolute inset-0" />
            
            <div
              className={`z-20 flex-col  absolute px-5 py-10 tablet:px-12 laptop:px-20 laptop:pt-36 laptop:pb-12 laptop:inset-0 laptop:flex laptop:justify-end gap-16 ${
                activeTab === index ? "opacity-100 animate-fadeIn" : "opacity-0 animate-fadeOut"
              }`}
            >
              <div className="flex w-full items-center justify-between">

                <h4 className="text-[28px] leading-[44px] tablet:text-6xl laptop:w-1/3 text-wrap">
                  {tab.heading}
                </h4>
                <p className="text-xs tablet:text-sm laptop:w-2/12 text-wrap">
                    {tab.description}
                </p>
              </div>
              
              <div>

              
              <div className="relative w-fit  z-20 ">
                {/* Horizontal Progress Bar */}
                <div
                  className="w-28 h-1 rounded-full bg-primary relative transition-all duration-100 ease-linear laptop:block hidden"
                  style={{
                    transform: `translateX(${progress * 100 * (progressMultiplierHorizontal || 0)}%)`,
                  }}
                />
                
              </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialCarousel;
