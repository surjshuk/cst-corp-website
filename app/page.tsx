import { Team, WhatWeDo } from "@/components/sections"
import Special from "@/components/sections/common/Special"
import Hero from "@/components/sections/home/Hero"
import { AUTONOMY, FOCUSONDEEPTECH } from "@/app/assets";


const tabData = [
  {
      id: "0",
      title: "AI Solutions",
      heading: "Scalable AI-Powered Transformation",
      description: "With the post-digital age showing no signs of slowing down, the need for scalability and rapid business transformation has never been more crucial",
      image: FOCUSONDEEPTECH,
      mask: "bg-gradient-to-t tablet:bg-black/50 from-black to-transparent absolute inset-0"
  },
  {
      id: "1",
      title: "Autonomy at Its Core",
      heading: "Leadership in Autonomy",
      description: "At CST we manage and provide a broad range of industry specific expertise with cutting edge solutions that include: Low-code software development, AI models and frameworks, Advanced AI solutions, full-stack development, Networking, Cybersecurity, Cloud and Cloud hosting services.",
      image: AUTONOMY,
      mask: "bg-gradient-to-t tablet:bg-none from-black to-transparent absolute inset-0"
  },
  {
      id: "2",
      title: "Focus on Deep Tech",
      heading: "The Importance of End-to-End Innovation",
      description: "We're redefining world-class service for the digital age. CST delivers cutting-edge products and bold innovation, shaping how the world connects with information.",
      image: FOCUSONDEEPTECH,
      mask: "bg-gradient-to-t from-black tablet:via-[#0a0a0aa6] to-transparent tablet:to-[#000000f1] absolute inset-0"
  },
];

export default function Home() {
  return (
    <>
      <div data-id="who-we-are">
        <Hero />
        <Special tabData={tabData} className="h-[400vh]" progressMultiplierHorizontal={12} progressMultiplierVertical={{small: 4, default: 7}}/>
      </div>
      <div data-id="what-we-do">
        <WhatWeDo />
      </div>
      <div data-id="achievements">
        <Team />
      </div>
    </>
  )
}

