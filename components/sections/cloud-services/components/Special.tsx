"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState, useRef } from "react";



interface Tab {
  id: string;
  title: string;
  description?: string;
}

interface SpecialProps {
  tabData: Tab[]; 
  progressMultiplierHorizontal?: number; // Controls how progress translates to animation
  threshold?: number; // Intersection observer threshold (default: 70%)
  className: string;
  mask?: string; // Optional mask class for background overlay
  imageSrc?: StaticImageData; // Optional image source for background
}

const CloudSpecial = ({ tabData, className, mask, imageSrc, progressMultiplierHorizontal = 0}: SpecialProps) => {
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
    <section ref={sectionRef} className={`text-white ${className} laptop:mt-40 `}>
      <div
        ref={componentRef}
        className="z-10 sticky top-12 h-screen tablet:top-0 overflow-x-hidden"  
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.1s ease-out", // Smooth transitions
        }}
      >
        {/* Tab Navigation */}
        <div className="relative w-fit ml-auto z-20 p-5 tablet:px-12 tablet:py-10 laptop:ml-0 laptop:px-20 laptop:py-10">
          {/* Horizontal Progress Bar */}
          <div
            className="w-24 h-1.5 rounded-full bg-blue-500 relative transition-all duration-100 ease-linear laptop:block hidden"
            style={{
              transform: `translateX(${progress * 100 * (progressMultiplierHorizontal || 0)}%)`,
            }}
          />
         
        </div>

        {/* Tab Content */}
        {tabData.map((tab, index) => (
          <div
            className={`h-screen absolute top-0 w-full ${activeTab === index ? "" : "-z-10"}`}
            key={`section-main-${tab.id}`}
          >
            {imageSrc ? 
                <Image
                  src={imageSrc}
                  alt={`Image for ${tab.title}`}
                  fill
                  priority
                  className="object-cover"
                />
                : 
                null
            }   

            {mask && <div className={`bg-${mask} absolute inset-0`} />}
            
            <div
              className={`z-20 flex-col absolute space-y-4 tablet:space-y-16 px-5 py-10 tablet:px-12 laptop:px-20 laptop:pt-36 laptop:pb-12 laptop:inset-0 laptop:flex laptop:justify-between ${
                activeTab === index ? "opacity-100 animate-fadeIn" : "opacity-0 animate-fadeOut"
              }`}
            >
              <h4 className={`${tab.id=="0"?"laptop:text-7xl text-6xl laptop:w-2/5":"laptop:text-4xl text-4xl laptop:w-1/2"} text-wrap laptop:w-1/2`}>
                {tab.title}
              </h4>
              {tab.description && (

                <div className="flex justify-end laptop:px-20">
                    <div className="laptop:w-1/2">
                        <p className="text-base">{tab.description}</p>
                    </div>
                </div>
            )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudSpecial;
