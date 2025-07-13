/* eslint-disable react-hooks/rules-of-hooks */
// "use client";

// import Image, { StaticImageData } from "next/image";
// import { useEffect, useState, useRef } from "react";
// import { Video } from "./Video"; // If using videos instead of images

// // Props per tab/slide
// interface Tab {
//   id: string;

//   tabTitle?: string;
//   contentTitle?: string;

//   subtitle?: string;
//   bullets?: string[];
//   paragraph?: string;

//   titleClass?: string; // deprecated; use contentTitleClass
//   contentTitleClass?: string; // ✅ NEW: Custom styling for contentTitle
//   subtitleClass?: string;
//   bulletsClass?: string;
//   paragraphClass?: string;

//   wrapperClass?: string;
//   contentClass?: string;

//   image?: StaticImageData;
//   video?: string;
//   mask?: string;
//   layout?: "left" | "right" | "center";
// }

// interface SpecialProps {
//   tabData: Tab[];
//   progressMultiplierHorizontal?: number;
//   progressMultiplierVertical?: { small: number; default: number };
//   className: string;
// }

// const AIScroll = ({
//   tabData,
//   className,
//   progressMultiplierHorizontal = 0,
//   progressMultiplierVertical = { small: 0, default: 0 },
// }: SpecialProps) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [scale, setScale] = useState(1);
//   const [progress, setProgress] = useState(0);
//   const [innerWidth, setInnerWidth] = useState<number>(0);

//   const sectionRef = useRef<HTMLElement>(null);
//   const componentRef = useRef<HTMLDivElement>(null);
//   if (!tabData || tabData.length === 0) return null;

//   const totalSections = tabData.length;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current) {
//         const { top, height } = sectionRef.current.getBoundingClientRect();
//         let progressValue = top < 0 ? Math.abs(top) / (height * 0.75) : 0;
//         setProgress(progressValue);
//         setActiveTab(Math.min(Math.floor(progressValue * totalSections), totalSections - 1));
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [totalSections]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setScale(0.93 + entry.intersectionRatio * 0.05),
//       { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
//     );
//     const element = componentRef.current;
//     if (element) observer.observe(element);
//     return () => element && observer.unobserve(element);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => setInnerWidth(window.innerWidth);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section ref={sectionRef} className={`text-white ${className}`}>
//       <div
//         ref={componentRef}
//         className="z-10 sticky top-12 h-screen tablet:top-0"
//         style={{ transform: `scale(${scale})`, transition: "transform 0.1s ease-out" }}
//       >
//         {/* Tabs */}
//         <div className="relative w-fit ml-auto z-20 p-5 tablet:px-12 tablet:py-10 laptop:ml-0 laptop:px-20 laptop:py-10">
//           <div className="grid grid-cols-1 laptop:grid-cols-5 laptop:gap-10 text-sm laptop:text-center">
//             {tabData.map((tab, index) => (
//               <button
//                 key={tab.id}
//                 className={`leading-[30px] ${activeTab === index ? "text-primary" : "text-white"}`}
//                 onClick={() => setActiveTab(Number(tab.id))}
//               >
//                 {tab.tabTitle || ""}
//               </button>
//             ))}
//           </div>

//           {/* Progress bars */}
//           <div
//             className="w-10 h-0.5 bg-primary transition-all duration-100 ease-linear laptop:block hidden"
//             style={{ transform: `translateX(${progress * 100 * (progressMultiplierHorizontal || 0)}%)` }}
//           />
//           <div
//             className="w-0.5 h-5 bg-primary absolute top-[28px] tablet:top-[32px] right-2 tablet:right-4 transition-all duration-50 ease-linear laptop:hidden"
//             style={{
//               transform: `translateY(${progress * 100 * (innerWidth ? progressMultiplierVertical.small : progressMultiplierVertical.default)}%)`,
//             }}
//           />
//         </div>

//         {/* Tab Content */}
//         {tabData.map((tab, index) => (
//           <div
//             key={`section-${tab.id}`}
//             className={`h-screen absolute top-0 w-full ${activeTab === index ? "" : "-z-10"}`}
//           >
//             {tab.image ? (
//               <Image src={tab.image} alt={`Image for ${tab.contentTitle || tab.tabTitle || "Tab"}`} fill priority className="object-cover" />
//             ) : tab.video ? (
//               <Video src={tab.video} className="object-cover h-screen" />
//             ) : null}

//             {tab.mask && <div className={tab.mask} />}

//             <div
//               className={`z-20 absolute bottom-12 px-5 py-10 tablet:px-12 laptop:px-20 laptop:pt-36 laptop:pb-12 laptop:inset-0 flex flex-col gap-8
//               ${tab.layout === "center" ? "items-center text-center" :
//                 tab.layout === "right" ? "items-end text-right" :
//                 "items-start text-left"}
//               ${activeTab === index ? "opacity-50 animate-fadeIn" : "opacity-0 animate-fadeOut"}
//               ${tab.wrapperClass ?? ""}`}
//             >
//               {tab.contentTitle && (
//                 <h1 className={`${tab.contentTitleClass ?? "text-[32px] tablet:text-[42px] font-semibold"}`}>
//                   {tab.contentTitle}
//                 </h1>
//               )}
//               {tab.subtitle && (
//                 <p className={tab.subtitleClass ?? "text-sm tablet:text-lg max-w-xl"}>{tab.subtitle}</p>
//               )}
//               {tab.bullets && tab.bullets.length > 0 && (
//                 <ul className={`list-disc pl-4 text-sm space-y-1 ${tab.bulletsClass ?? ""}`}>
//                   {tab.bullets.map((point, idx) => <li key={idx}>{point}</li>)}
//                 </ul>
//               )}
//               {tab.paragraph && (
//                 <p className={`max-w-[550px] ${tab.paragraphClass ?? ""}`}>
//                   {tab.paragraph}
//                 </p>
//               )}

//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default AIScroll;



"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState, useRef } from "react";
import { Video } from "./Video"; // If using videos instead of images

// Original Tab interface (kept as before)
interface Tab {
  id: string;
  tabTitle?: string;
  contentTitle?: string;
  subtitle?: string;
  bullets?: string[];
  paragraph?: string;
  titleClass?: string; // deprecated; use contentTitleClass
  contentTitleClass?: string;
  subtitleClass?: string;
  bulletsClass?: string;
  paragraphClass?: string;
  wrapperClass?: string;
  contentClass?: string;
  image?: StaticImageData;
  video?: string;
  mask?: string;
  // layout?: "left" | "right" | "center";
  layout?: string;
}

interface SpecialProps {
  tabData: Tab[];
  progressMultiplierHorizontal?: number;
  progressMultiplierVertical?: { small: number; default: number };
  className: string;
}

const AIScroll = ({
  tabData,
  className,
  progressMultiplierHorizontal = 0,
  progressMultiplierVertical = { small: 0, default: 0 },
}: SpecialProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [scale, setScale] = useState(1);
  const [progress, setProgress] = useState(0);
  const [innerWidth, setInnerWidth] = useState<number>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);
  if (!tabData || tabData.length === 0) return null;

  const totalSections = tabData.length;

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        let progressValue = 0;
        if (top < 0) {
          progressValue = Math.abs(top) / (height * 0.75);
          setProgress(progressValue);
        }
        setActiveTab(Math.min(Math.floor(progressValue * totalSections), totalSections - 1));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalSections]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setScale(0.93 + entry.intersectionRatio * 0.05),
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );
    const element = componentRef.current;
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section ref={sectionRef} className={`text-white ${className}`}>
      <div
        ref={componentRef}
        className="z-10 sticky top-12 h-screen tablet:top-0"
        style={{ transform: `scale(${scale})`, transition: "transform 0.8s ease-out" }}
      >
        {/* Tab Navigation (Special-style with grid and right alignment) */}
        <div className="relative w-fit ml-auto z-20 p-5 tablet:px-12 tablet:py-10 laptop:ml-0 laptop:px-20 laptop:py-10">
          <div className="grid grid-cols-1 justify-center items-center laptop:gap-10 laptop:grid-cols-5">
            {tabData.map((tab, index) => (
              <button
                key={tab.id}
                className={`text-right text-sm leading-[30px] tablet:text-[14px] tablet:leading-10 laptop:text-center ${
                  activeTab === index ? "text-primary" : "text-white"
                }`}
                onClick={() => setActiveTab(Number(tab.id))}
              >
                {tab.tabTitle || ""}
              </button>
            ))}
          </div>
          {/* Horizontal Progress Bar */}
          <div
            className="w-10 h-0.5 bg-primary transition-all duration-800 ease-linear laptop:block hidden"
            style={{ transform: `translateX(${progress * 100 * (progressMultiplierHorizontal || 0)}%)` }}
          />
          {/* Vertical Progress Bar */}
          <div
            className="w-0.5 h-5 bg-primary absolute top-[28px] tablet:top-[32px] right-2 tablet:right-4 transition-all duration-400 ease-linear laptop:hidden"
            style={{
              transform: `translateY(${progress * 100 * (innerWidth ? progressMultiplierVertical.small : progressMultiplierVertical.default)}%)`,
            }}
          />
        </div>

        {/* Tab Content (original structure with Special's fade and layout tweaks) */}
        {tabData.map((tab, index) => (
          <div
            key={`section-${tab.id}`}
            className={`h-screen absolute top-0 w-full ${activeTab === index ? "" : "-z-10"}`}
          >
            {tab.image ? (
              <Image src={tab.image} alt={`Image for ${tab.contentTitle || tab.tabTitle || "Tab"}`} fill priority className="object-cover" />
            ) : tab.video ? (
              <Video src={tab.video} className="object-cover h-screen" />
            ) : null}

            {tab.mask && <div className={tab.mask} />}

            <div
              className={`z-20 absolute bottom-12 px-5 py-10 tablet:px-12 laptop:px-20 laptop:pt-36 laptop:pb-12 laptop:inset-0 flex flex-col gap-8 space-y-12 tablet:space-y-16 laptop:flex laptop:justify-between
              ${tab.layout === "center" ? "items-center text-center" :
                tab.layout === "right" ? "items-end text-right" :
                "items-start text-left"}
              transition-opacity duration-2000 ease-in-out ${activeTab === index ? "opacity-50" : "opacity-0"}
              ${tab.wrapperClass ?? ""}`}
            >
              {tab.contentTitle && (
                <h1 className={`${tab.contentTitleClass ?? "text-[32px] tablet:text-[42px] font-semibold"}`}>
                  {tab.contentTitle}
                </h1>
              )}
              {tab.subtitle && (
                <p className={tab.subtitleClass ?? "text-sm tablet:text-lg max-w-xl"}>{tab.subtitle}</p>
              )}
              {tab.bullets && tab.bullets.length > 0 && (
                <ul className={`list-disc pl-4 text-sm space-y-1 ${tab.bulletsClass ?? ""}`}>
                  {tab.bullets.map((point, idx) => <li key={idx}>{point}</li>)}
                </ul>
              )}
              {tab.paragraph && (
                <p className={`max-w-[550px] ${tab.paragraphClass ?? ""}`}>
                  {tab.paragraph}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AIScroll;
