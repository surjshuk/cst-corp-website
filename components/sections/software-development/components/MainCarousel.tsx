"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { SoftwareSpecialType } from "../type";
import { cyberSecBG1 } from "@/app/assets";

 type MainCarouselProp = {
  tabData: SoftwareSpecialType[];
};



 const  MainCarousel : React.FC<MainCarouselProp> =  ({tabData}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const count = tabData.length;

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Update active index based on scroll
  scrollYProgress.on("change", (latest) => {
    const step = 1 / count;
    const idx = Math.min(count - 1, Math.floor(latest / step + 0.5));
    setActiveIndex(idx);
  });

  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 0.01, 0.95, 1], [0.95, 1, 1, 0.95]);

  // Scroll to a specific slide when tab clicked
  const handleTabClick = (index: number) => {
    if (!wrapperRef.current) return;
    const wrapper = wrapperRef.current;
    const sectionHeight = wrapper.offsetHeight / count;
    let targetScroll = sectionHeight*index - sectionHeight/2 ; 
    targetScroll = targetScroll <=0? 100 : targetScroll
    window.scrollTo({ top: wrapper.offsetTop + targetScroll, behavior: "smooth" });
  
  };

  return (
    <div
      ref={wrapperRef}
      style={{ height: `${count * 100}vh` }}
      className="relative w-full "
    >
      <motion.div
        className="sticky top-0 h-screen  w-full  overflow-hidden"
        style={{
         scale,
          transition: "0.3s ease",
        }}
      >

        
        {/* Content fade */}
        {tabData.map((slide, i) => (
          <div key={i}  className="w-full bg-black h-full">

          <motion.div
            
            className="absolute inset-0  text-white  bg-cover bg-center bg-no-repeat"
             style={{
              backgroundImage:`url(${slide.image?.src || cyberSecBG1.src})`,
              opacity: activeIndex === i ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
            >
              <div className="absolute top-0 left-0 bg-black/50 w-full h-full">

              </div>
            <div className="flex flex-col justify-between w-full h-full relative z-10 xl:p-20 md:px-10 px-5 py-20">
              <h2 className="text-4xl md:text-5xl font-medium mt-12">{slide.heading}</h2>
              <div className="md:w-2/5 w-[70%]">
                <p className="mb-2">{slide.description?.subheading}</p>
                <ul className="space-y-2">
                  {
                    slide.description?.subdescription?.map((item,index)=><li key={index} className=""><span className="font-bold">{item.key}</span>: {item.value}</li>)
                  }
                  <li></li>
                </ul>
              </div>
            </div>
          </motion.div>
            </div>
        ))}

        {/* Tabs */}
        <div className="absolute top-5 xl:px-20 md:px-10 px-5 py-5 left-0 flex gap-10 z-20">
          {tabData.map((s, i) => (
            <div
              key={i}
              className={`text-sm font-semibold cursor-pointer transition-colors hover:text-blue-500 ${
                activeIndex === i ? "text-blue-500" : "text-gray-400"
              }`}
              onClick={() => handleTabClick(i)}
            >
              {s.title}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="absolute top-20 left-0 right-0 mx-auto w-[calc(100%-5rem)] h-0.5 bg-white/25 rounded-full z-20">
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: progress }}
          />
        </div>
      </motion.div>
    </div>
  );
}
export default MainCarousel