"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { CloudSpecialType } from "../type";
import { cyberSecBG1 } from "@/app/assets";

 type MainCarouselProp = {
  tabData: CloudSpecialType[];
};

 const  MainCarousel : React.FC<MainCarouselProp> =  ({tabData}) => {
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
    <section
      ref={wrapperRef}
      style={{ height: `${count * 100}vh` }}
      className="relative w-full "
    >
      <motion.div
        className="sticky top-0 h-screen   w-full  overflow-hidden"
        style={{
         scale,
          transition: "0.3s ease",
        }}
      >

        {tabData.map((slide, i) => (
          <div key={i} className="w-full bg-black h-full"
          >
          <motion.div
            
            className="absolute inset-0  text-white  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:`url(${slide.image?.src || cyberSecBG1.src})`,
              opacity: activeIndex === i ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
            > <div className="absolute top-0 left-0 bg-black/50 w-full h-full">

              </div>
              {/* <Image src={slide.image || cyberSecBG1} alt="" className="absolute w-full opacity-50 h-full"/> */}
            <div className="flex flex-col justify-between w-full h-full relative z-10 xl:p-20 md:px-10 px-5 py-20">
              <h2 className={`${i==0? "md:text-6xl text-sm" : "md:text-2xl text-sm"} 2xl:w-2/5 lg:w-[60%] md:w-[50%] w-[90%]  text-white`}>{slide.title}</h2>
              <p className="text-sm opacity-80 md:w-2/5 w-[70%]  ms-auto" key={i}>{slide.description}</p>
              
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
    </section>
  );
}

export default MainCarousel