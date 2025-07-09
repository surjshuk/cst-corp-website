"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState, useRef } from "react";
import { Video } from "./Video";

interface Tab {
  id: string;
  title: string;
  heading: string;
  description: string;
  description2?: string;
  image?: StaticImageData;
  video?:string;
  mask?:string;
}

interface SpecialProps {
  tabData: Tab[]; 
  progressMultiplierHorizontal?: number; // Controls how progress translates to animation
  progressMultiplierVertical?: {small: number, default: number};
  threshold?: number; // Intersection observer threshold (default: 70%)
  className: string;
}

const Special = ({ tabData, className, progressMultiplierHorizontal = 0, progressMultiplierVertical = {small: 0, default: 0} }: SpecialProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [progress, setProgress] = useState(0);
  const [innerWidth, setInnerWidth] = useState<number>(0);

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

  // TODO: Optimize
  useEffect(() => {
    const handleResize = () => {
        setInnerWidth(window.innerWidth);
    };

      window.addEventListener("resize", handleResize);

      // Check initial 
      setInnerWidth(window.innerWidth);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={sectionRef} className={`text-white ${className}`}>
      <div
        ref={componentRef}
        className="z-10 sticky top-12 h-screen tablet:top-0"  
        style={{
          transform: `scale(${scale})`,
          transition: "transform 0.1s ease-out", // Smooth transitions
        }}
      >
        {/* Tab Navigation */}
        <div className="relative w-fit ml-auto z-20 p-5 tablet:px-12 tablet:py-10 laptop:ml-0 laptop:px-20 laptop:py-10">
          <div className={`grid grid-cols-1 justify-center items-center laptop:gap-10 laptop:grid-cols-5`}>
            {tabData.map((tab, index) => (
              <button
                key={tab.id}
                className={`text-right text-sm leading-[30px] tablet:text-[14px] tablet:leading-10 laptop:text-center ${
                  activeTab === index
                    ? "text-primary"
                    : "text-white"
                }`}
                
                onClick={() => setActiveTab(Number(tab.id))}
              >
                {tab.title}
              </button>
            ))}
          </div>
          {/* Horizontal Progress Bar */}
          <div
            className="w-10 h-0.5 bg-primary relative transition-all duration-100 ease-linear laptop:block hidden"
            style={{
              transform: `translateX(${progress * 100 * (progressMultiplierHorizontal || 0)}%)`,
            }}
          />
          {/* Vertical Progress Bar */}
          <div
            className="w-0.5 h-5 bg-primary absolute top-[28px] tablet:top-[32px] right-2 tablet:right-4 transition-all duration-50 ease-linear laptop:hidden"
            style={{
              transform: `translateY(${progress * 100 * (innerWidth ? progressMultiplierVertical.small : progressMultiplierVertical.default)}%)`,
            }}
          />
        </div>

        {/* Tab Content */}
        {tabData.map((tab, index) => (
          <div
            className={`h-screen absolute top-0 w-full ${activeTab === index ? "" : "-z-10"}`}
            key={`section-main-${tab.id}`}
          >
            {tab.image ? 
                <Image
                  src={tab.image}
                  alt={`Image for ${tab.title}`}
                  fill
                  priority
                  className="object-cover"
                />
                :
                <Video
                    src={tab.video}
                    className="object-cover h-screen"
                />
            }   

            {tab.mask && <div className={tab.mask} />}
            
            <div
              className={`z-20 flex-col bottom-12 absolute space-y-12 tablet:space-y-16 px-5 py-10 tablet:px-12 laptop:px-20 laptop:pt-36 laptop:pb-12 laptop:inset-0 laptop:flex laptop:justify-between ${
                activeTab === index ? "opacity-100 animate-fadeIn" : "opacity-0 animate-fadeOut"
              }`}
            >
              <h4 className="text-[28px] leading-[44px] tablet:text-[36px] laptop:w-1/2 text-wrap">
                {tab.heading}
              </h4>

              <div className="space-y-5 tablet:space-y-4 laptop:flex laptop:space-y-0 gap-4">
                <p className="text-xs tablet:text-sm laptop:w-1/4">{tab.description}</p>
                {tab.description2 && <p className="text-xs tablet:text-sm laptop:w-1/4">{tab.description2}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Special;
