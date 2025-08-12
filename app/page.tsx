"use client"
import Special from "@/components/sections/main/Special"
import { AUTONOMY, cyberSecBG1, cyberSecBG2, DEFENCEAPPLICATION, FOCUSONDEEPTECH, INSPECTION, mainBG1, mainBG2, mainBG3, mainBG4, PLACEHOLDER } from "./assets/";
import SpecialCarousel from "@/components/sections/main/SpecialCarousel";
import { KeyFeaturesSection } from "@/components/sections/main/key-features";
import { Feature } from "@/components/sections/AI/feature";
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import * as Logos from "@/app/assets/logos/index"; // This imports everything from your index.tsx
import Image, { StaticImageData } from "next/image";
import Link from "next/link";


type LogoItem = {
  image: string | StaticImageData;
  link: string;
};

const logosData: LogoItem[] = [
  { image: Logos.Appian, link: "https://www.appian.com" },
  { image: Logos.AzureMicrosoft, link: "https://azure.microsoft.com" },
  { image: Logos.Barracuda, link: "https://www.barracuda.com" },
  { image: Logos.Connectwise, link: "https://www.connectwise.com" },
  { image: Logos.Cradlepoint, link: "https://www.cradlepoint.com" },
  { image: Logos.CrowdStrike, link: "https://www.crowdstrike.com" },
  { image: Logos.Darktrace, link: "https://www.darktrace.com" },
  { image: Logos.Dell, link: "https://www.dell.com" },
  { image: Logos.Fortinet, link: "https://www.fortinet.com" },
  { image: Logos.HPE, link: "https://www.hpe.com" },
  { image: Logos.IBM, link: "https://www.ibm.com" },
  { image: Logos.Intermedia, link: "https://www.intermedia.com" },
  { image: Logos.Kaseya, link: "https://www.kaseya.com" },
  { image: Logos.Microsoft, link: "https://www.microsoft.com" },
  { image: Logos.NetApp, link: "https://www.netapp.com" },
  { image: Logos.Okta, link: "https://www.okta.com" },
  { image: Logos.Outsystems, link: "https://www.outsystems.com" },
  { image: Logos.PaloAltoNetworks, link: "https://www.paloaltonetworks.com" },
  { image: Logos.SamsungKnox, link: "https://www.samsungknox.com" },
  { image: Logos.SentinelOne, link: "https://www.sentinelone.com" },
  { image: Logos.TrendMicro, link: "https://www.trendmicro.com" },
  { image: Logos.Veeam, link: "https://www.veeam.com" },
  { image: Logos.WorkspaceGoogle, link: "https://workspace.google.com" },
  { image: Logos.Adobe, link: "https://www.adobe.com" },
  { image: Logos.APC, link: "https://www.apc.com" },
  { image: Logos.AWSAmazon, link: "https://amazon.in" },
  { image: Logos.ZohoManageEngine, link: "https://www.manageengine.com" }
];
const tabData = [
  {
    id: "0",
    heading: "AI Drone Technology",
    image:AUTONOMY,
    description: [
      `Proprietary autonomous navigation for precise, independent flight.`,
      `Advanced payloads including LiDAR and EO/IR for versatile mission capabilities.`,
      `Real-time AI enabling GPS-denied operations and rapid decision-making.`,
      `Applications in defense ISR, geospatial mapping, and safe industrial inspections.`
    ]
  },
  {
    id: "1",
    heading: "Pythia AI",
     image:cyberSecBG1,
    description: [
      `Utilizes sensor and EDR data from rigs for continuous monitoring.`,
      `Detects anomalies in pressure, vibration, torque, flow, and temperature.`,
      `Forecasts failures and models Remaining Useful Life (RUL) of assets.`,
      `Provides actionable insights to maximize operational foresight and uptime.`
    ]
  },
  {
    id: "2",
    heading: "AI Digital Twin Technology",
    image:cyberSecBG2,
    description: [
      `Creates virtual replicas of physical assets and systems.`,
      `Predicts failures before they occur to reduce downtime.`,
      `Optimizes efficiency and slashes operational costs.`,
      `Drives innovation and future-proofs business processes.`
    ]
  },
  {
    id: "3",
    heading: "AI-Enabled Medical Inventory Management",
    image:mainBG3,
    description: [
      `Automates tracking of medicines for hospitals, pharmacies, and providers.`,
      `Prevents losses from overstocking, shortages, or expiries.`,
      `Ensures uninterrupted availability of critical medications.`,
      `Improves overall operational efficiency in healthcare supply chains.`
    ]
  },
  {
    id: "4",
    heading: "SentinelOne: A Leader for 5 Consecutive Years",
    image:mainBG4,
    description: [
      `Recognized as a Leader in the Magic Quadrant for five years in a row.`,
      `SentinelOne Singularity serves as the core Endpoint Protection Platform (EPP) product.`,
      `Supports cloud-delivered (including GovCloud), hybrid, and on-premises (including air-gapped) EPP management.`,
      `Offers additional workspace security controls such as identity protection.`
    ]
  }
];

const carouseltabData = [
  {
    id: "0",
    heading: "Aerospace and Defense",
    image:DEFENCEAPPLICATION,
    description:
      ` Elevate your mission-critical operations with CST's ironclad cybersecurity and scalable cloud infrastructure—protecting sensitive data while fueling advanced simulations for unbeatable aerospace and defense innovation.`
    
  },
  {
    id: "1",
    heading: "Chemicals and Pharmaceuticals",
    image:FOCUSONDEEPTECH,
    description:
      ` Unlock breakthroughs faster with CST's compliant IT frameworks, secure databases, and AI-powered tools—accelerating drug discovery, ensuring regulatory excellence, and transforming chemical and pharma operations.`
  },
  {
    id: "2",
    heading: "Construction and Real Estate",
    image:INSPECTION,
    description:
      ` Build smarter and stronger with CST's intuitive integrations—delivering rock-solid data security, streamlined workflows, and visionary IT designs for construction and real estate success.`
  },
  {
    id: "3",
    image:PLACEHOLDER,
    heading: "Education and Training",
    description:
      ` Ignite learning potential with CST's innovative cloud platforms for virtual classrooms and student data systems—enhancing accessibility, boosting efficiency, and creating engaging educational experiences that inspire.`
    },
  {
    id: "4",
    image:mainBG4,
    heading: "Energy and Utilities",
    description:
      ` Power up efficiency with CST's smart grid tech and predictive analytics—optimizing resource distribution, minimizing downtime, and fueling sustainable innovation in oil, gas, renewables, and utilities.`
  },
  {
    id: "5",
    image:mainBG3,
    heading: "Energy and Utilities",
    description:
      ` Power up efficiency with CST's smart grid tech and predictive analytics—optimizing resource distribution, minimizing downtime, and fueling sustainable innovation in oil, gas, renewables, and utilities.`
  },
  {
    id: "6",
    image:PLACEHOLDER,
    heading: "Financial Services",
    description:
      ` Fortify your financial future with CST's elite fintech security, blockchain expertise, and AI-driven fraud detection—safeguarding banking, insurance, and assets while unlocking seamless, innovative growth.`
},

  {
    id: "7",
    image:AUTONOMY,
    heading: "Healthcare and Life Sciences",
    description:
      `ovative growth.
Healthcare and Life Sciences: Transform patient care with CST's compliant-secure electronic records and telehealth solutions—empowering precise diagnostics, protecting vital data, and driving life-changing advancements in healthcare.
`
 },

  {
    id: "8",
    image:mainBG2,
    heading: "Manufacturing",
    description:
      ` Supercharge your manufacturing with CST's advanced automation, ERP systems, and custom software—boosting productivity, slashing errors, and elevating efficiency to new heights.`
},

  {
    id: "9",
    image:mainBG1,
    heading: "Retail and E-commerce",
    description:
      ` Dominate the market with CST's powerhouse e-commerce platforms and AI personalization—fortified by unbreakable cybersecurity for thriving online and in-store retail experiences that convert and captivate.`
    },


];

const mainFeatures:Feature[] = [{
  title:"Oil & Gas Robotics Solutions",
  description:"Design and deploy autonomous aerial and ground robotic platforms for offshore and onshore oil & gas operations. Capabilities include pipeline inspection, flare stack monitoring, hazardous area surveillance, and site security using AI-driven UAVs and rugged AGVs with encrypted mesh communications."
},{
title:"Infrastructure Monitoring & Asset Management",
description:"Provide AI-enabled multi-platform robotic systems for continuous monitoring and inspection of bridges, highways, dams, power grids, and industrial infrastructure. Integrates LiDAR, thermal, and visual imaging for predictive maintenance, anomaly detection, and digital twin generation."
}]
    
export default function Home() {
  return (
    <>
      <div data-id="who-we-are" id="who-we-are">
        {/* <Hero /> */}

        {/* <MainHero/> */}
        <Special tabData={tabData} className="h-[500vh]" progressMultiplierHorizontal={17} />

        


    

      </div>
      <div data-id="what-we-do">
           <div id="what-we-do" data-id="what-we-do" className="border-t border-black pt-10 mx-12 mt-20">
          <h2 className="text-6xl w-2/3">
            At CST, we’re building a future of shared success by solving your tech needs and helping you reach your goals.
          </h2>
  
          <div className="flex justify-end gap-16 my-24 me-32">
            <p className="w-2/12">CST is ready to help you overcome the constraints that time and distance traditionally impose on transforming your business and, consequently, your profitability and competitiveness.</p>
            <p className="w-2/12">With the post-digital age showing no signs of slowing down, the need for scalability and rapid business transformation has never been more crucial.</p>
          </div>
        </div>

             
<div className="mx-14 py-4 mt-24 border-b-2 border-b-black">
          <p className="text-blue-500">Who we serve?</p>
        </div>

        <SpecialCarousel tabData={carouseltabData} className="h-[500vh]" progressMultiplierHorizontal={17}/>

        

      </div>
      <div data-id="our-partners">
            <div className="border-t border-black pt-10 mx-12 ">
          <div>


          <h2 className="text-blue-500 text-end text-6xl">Our Partners</h2>

          <div className="mt-28">
            <p className="w-2/3 text-2xl">At Bramer, we are dedicated to engineering advanced autonomous systems that drive operational efficiency and deliver actionable intelligence across critical domains.</p>
          </div>

          <KeyFeaturesSection features={mainFeatures}/>
{/* video */}
          <div>

          </div>
          
          </div>

          <div>
            <h2 className="text-3xl font-medium mb-2">DTLS</h2>
            <p className="text-xl w-2/3">DTLS is a specialized technology innovation lab delivering AI-powered industrial, healthcare, and enterprise automation systems. Backed by CST Corp (Houston, USA), DLTS builds sovereign, scalable, and mission-critical solutions for defense, energy, and public sector organizations. Its core expertise spans AI software engineering, cybersecurity, edge computing, and predictive analytics.</p>
            <KeyFeaturesSection features={mainFeatures}/>
            <div className="border-t border-black">
             <h2 className="text-blue-500 text-6xl my-12 text-end">Our Vendors</h2>
             
        <Carousel plugins={[
        Autoplay({
          delay: 1000,
        }),
      ]}>
            <CarouselContent>
        {logosData.map((logo, index) => (
          <CarouselItem
            key={index}
            className="basis-1/5  flex items-center justify-center"
          >
            <Link href={logo.link} target="_blank">
              <Image
                src={logo.image}
                alt={`Logo ${index + 1}`}
                className="object-contain"
                width={200}
                height={60}
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
          </Carousel>


           

      
           </div>

          </div>

        </div>
        {/* <Partners /> */}
      </div>
      <div data-id="our-team">
        {/* <Team /> */}
      </div>
    </>
  )
}

