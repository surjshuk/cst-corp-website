"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { useRef, useState } from "react";
import { MainCarouselType } from "../../type";

 type MainCarouselProp = {
  tabData: MainCarouselType[]
};

export const  MainCarousel : React.FC<MainCarouselProp> =  ({tabData}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const count = tabData.length;
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });
  const [activeIndex, setActiveIndex] = useState(0);
  scrollYProgress.on("change", (latest) => {
    const step = 1 / count;
    const idx = Math.min(count - 1, Math.floor(latest / step + 0.5));
    setActiveIndex(idx);
  });

  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 0.01, 0.95, 1], [0.95, 1, 1, 0.95]);


  return (
    <div
      ref={wrapperRef}
      style={{ height: `${count * 100}vh` }}
      className="relative w-full "
    >
      <motion.div
        className="sticky top-0 h-screen   w-full overflow-hidden"
        style={{
         scale,
          transition: "0.3s ease",
        }}
      >

        {tabData.map((slide, i) => (
          <div key={i} className="w-full bg-black h-full " 
          >
          <motion.div
             
            className="absolute inset-0  text-white bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:`url(${slide.image?.src})`,
              opacity: activeIndex === i ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
            >
              {/* <Image src={slide.image || ""} alt="" className="absolute w-full opacity-50 h-full"/> */}
            <div className="flex md:flex-row flex-col justify-between md:items-end w-full h-full relative z-10 xl:p-20 md:px-10 px-5 py-20">
              <h2 className="md:text-5xl text-4xl 2xl:w-2/5 lg:w-[60%] md:w-[50%] w-[90%]  text-white">{slide.heading}</h2>
              <p className="text-sm opacity-80 md:w-2/6 w-[70%]  ms-auto" key={i}>{slide.description}</p>
              
            </div>
          </motion.div>
            </div>
        ))}

        {/* Progress bar */}
        <div className="absolute bottom-8 left-0 right-0 mx-auto w-[calc(100%-5rem)] h-1 bg-white/25 rounded-full z-20">
          <motion.div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: progress }}
          />
        </div>
      </motion.div>
    </div>
  );
}
