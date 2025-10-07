"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { MainSpecialType } from "../../type";

 type MainSpecialProp = {
  tabData: MainSpecialType[]
};

export const  MainSpecial : React.FC<MainSpecialProp> =  ({tabData}) => {
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
        className="sticky top-0 h-screen   w-full flex items-center justify-center overflow-hidden"
        style={{
         scale,
          transition: "0.3s ease",
        }}
      >

        {tabData.map((slide, i) => (
          <div key={i} className="w-full bg-black h-full">
          <motion.div
            
            className="absolute inset-0  text-white bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:`url(${slide.image?.src})`,
              opacity: activeIndex === i ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
            >
              <div className="bg-black/30 absolute z-10 top-0 left-0 h-full w-full"></div>
              {/* <Image src={slide.image || ""} alt="" className="absolute w-full opacity-50 h-full"/> */}
            <div className="flex  flex-col justify-between h-full relative z-10 md:p-12 p-5 ">
              <h2 className=" lg:text-6xl 2xl:w-1/2 md:w-2/3 w-[90%] md:text-5xl text-4xl  text-white/70 ">{slide.heading}</h2>
              <div className="lg:grid lg:grid-cols-4 flex flex-col lg:gap-0 gap-12 md:py-8 pt-4 pb-8 border-t  border-white/20">
                {slide.description &&slide.description.map((point,i)=>(
                  <p className={`text-sm opacity-80 xl:w-2/3 lg:w-[85%] md:w-1/3 md:text-xl w-[60%] ${i % 2 === 0 ? "lg:m-auto me-auto" : "lg:m-auto ms-auto"}`} key={i}>{point}</p>
                ))}
              </div>
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
