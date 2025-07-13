import { Team, WhatWeDo } from "@/components/sections"
import Special from "@/components/sections/common/Special"
import { Achievements } from "@/components/sections/home/Achievements"
import Hero from "@/components/sections/home/Hero"
import { AUTONOMY, FOCUSONDEEPTECH } from "@/app/assets";
import Grid from "@/components/sections/common/grid"; /** this is for the 8-box grid import */


const tabData = [
  {
      id: "0",
      title: "Uncrewed Aerial Systems",
      heading: "Redefining Drone Technology",
      description: "We build high-performance drones with complete control over design, engineering, and technology. Our technology is designed to make drones accessible for consumers, scalable for enterprises, and indispensable for defense and industrial applications, unlocking possibilities at the edge of imagination today.",
      image: FOCUSONDEEPTECH,
      mask: "bg-gradient-to-t tablet:bg-none from-black to-transparent absolute inset-0"
  },
  {
      id: "1",
      title: "Autonomy at Its Core",
      heading: "Leadership in Autonomy",
      description: "To deliver true autonomy in our drones, we develop proprietary systems that combine AI-driven decision-making, advanced navigation algorithms, and precision control. These systems enable real-time adaptability, even in complex and GPS-denied environments.",
      image: AUTONOMY,
      mask: "bg-gradient-to-t tablet:bg-none from-black to-transparent absolute inset-0"
  },
  {
      id: "2",
      title: "Focus on Deep Tech",
      heading: "The Importance of End-to-End Innovation",
      description: '“Do Deep Tech” is one of our primary company values — it’s how we approach every aspect of our work. From designing airframes to crafting autonomy algorithms, our commitment to full system ownership allows us to build drones that push the boundaries of technology and performance.',
      description2:'While others rely on off-the-shelf components or focus on surface-level refinements, we deliver truly indigenous solutions. Our vertically integrated approach ensures unmatched quality, security, and performance, giving us a defensible edge in both defense and commercial markets.',
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
        <Achievements />
        <Team />
      </div>
      <div data-id="grid-section" style={{ margin: '40px 0', padding: '20px 0', background: '#f0f0f0' }}>
        <Grid />
      </div>


    </>
  )
}

