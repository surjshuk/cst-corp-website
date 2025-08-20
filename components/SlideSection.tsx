"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

type SlideData = { title: string; desc: string; color: string };

const slides: SlideData[] = [
  { title: "Aerospace & Defense", desc: "Mission-critical systems.", color: "#000000" },
  { title: "Chemicals & Pharma", desc: "R&D acceleration.", color: "#430000" },
  { title: "Construction", desc: "Sustainable infra.", color: "#001143" },
  { title: "Energy", desc: "Grid-scale reliability.", color: "#003d0e" },
];

export default function SlideSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const count = slides.length;

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
    <section
      ref={wrapperRef}
      style={{ height: `${count * 100}vh` }}
      className="relative w-full "
    >
      <motion.div
        className="sticky top-0 h-screen p-5  w-full flex items-center justify-center overflow-hidden"
        style={{
         scale,
          transition: "0.3s ease",
        }}
      >

        
        {/* Content fade */}
        {slides.map((slide, i) => (
          <div key={i} style={{ backgroundColor: slides[activeIndex].color,}} className="w-full h-full">

          <motion.div
            
            className="absolute inset-0 flex items-center justify-center p-10 text-white"
            style={{
              
              opacity: activeIndex === i ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
            >
            <div className="max-w-2xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg opacity-80">{slide.desc}</p>
            </div>
          </motion.div>
            </div>
        ))}

        {/* Tabs */}
        <div className="absolute top-5 p-5 left-1/2 transform -translate-x-1/2 flex gap-6 z-20">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`text-sm font-semibold cursor-pointer transition-colors ${
                activeIndex === i ? "text-blue-500" : "text-gray-400"
              }`}
              onClick={() => handleTabClick(i)}
            >
              {s.title}
            </div>
          ))}
        </div>

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
