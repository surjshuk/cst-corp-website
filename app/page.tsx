import { Partners, Team, WhatWeDo } from "@/components/sections"
import Special from "@/components/sections/common/Special"
import Hero from "@/components/sections/home/Hero"
// import { AUTONOMY, FOCUSONDEEPTECH } from "@/app/assets";
import { cyberSecBG1, cyberSecBG2, CYBERSECURITY, mainBG3, mainBG4 } from "./assets/index";


const tabData = [
  {
    id: "0",
    title: "AI",
    heading: "AI-Driven Innovation for Every Sector",
    description: "Harness advanced AI solutions including predictive systems, digital twins, and AI-powered consulting services to accelerate business transformation and operational intelligence.",
    image: mainBG4,
    mask: "bg-gradient-to-t tablet:bg-black/50 from-black to-transparent absolute inset-0"
  },
  {
    id: "1",
    title: "Cybersecurity",
    heading: "Defend, Detect, and Respond at Scale",
    description: "Delivering multi-layered cybersecurity solutions including network security, endpoint protection, threat detection, identity management, and operational technology security for enterprise resilience.",
    image: cyberSecBG2,
    mask: "bg-gradient-to-t tablet:bg-black/50 from-black to-transparent absolute inset-0"
  },
  {
    id: "2",
    title: "Cloud Services",
    heading: "Cloud-Native, Scalable, and Secure",
    description: "Offering end-to-end cloud strategy, deployment, and management services to modernize enterprise infrastructure with secure, resilient, and scalable cloud architectures.",
    image: CYBERSECURITY,
    mask: "bg-gradient-to-t tablet:bg-black/50 from-black to-transparent absolute inset-0"
  },
  {
    id: "3",
    title: "Software Development",
    heading: "Modern Software for Enterprise and Beyond",
    description: "Building robust, scalable, and low-code enterprise software solutions — from mobile and web apps to mission-critical backend systems — tailored to business-specific challenges.",
    image: mainBG3,
    mask: "bg-gradient-to-t tablet:bg-black/50 from-black to-transparent absolute inset-0"
  },
  {
    id: "4",
    title: "Enterprise Network",
    heading: "High-Performance, Secure Enterprise Networks",
    description: "Designing and deploying enterprise-grade, cloud-integrated, secure network infrastructures with advanced monitoring, threat defense, and operational technology support.",
    image: cyberSecBG1,
    mask: "bg-gradient-to-t tablet:bg-black/50 from-black to-transparent absolute inset-0"
  }
];


export default function Home() {
  return (
    <>
      <div data-id="who-we-are" id="who-we-are">
        <Hero />
        <Special tabData={tabData} className="h-[500vh]" progressMultiplierHorizontal={17} progressMultiplierVertical={{small: 4, default: 7}}/>
      </div>
      <div data-id="what-we-do">
        <WhatWeDo />
      </div>
      <div data-id="our-partners">
        <Partners />
      </div>
      <div data-id="our-team">
        <Team />
      </div>
    </>
  )
}

