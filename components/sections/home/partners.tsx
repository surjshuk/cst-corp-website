"use client"
import type React from "react"
import Image from "next/image"
import { BRAMERLOGO, DLTS, PLUS } from "@/app/assets"
import type { StaticImageData } from "next/image"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

interface Service {
  title: string
  description: string
}

interface Partner {
  name: string
  logo?: StaticImageData
  website: string
  description: string
  services: Service[]
  videoUrl?: string
  imageSrc?: StaticImageData
}

const partners: Partner[] = [
  {
    name: "",
    logo: BRAMERLOGO,
    website: "https://bramer.in",
    description:
      "At Bramer, we are dedicated to engineering advanced autonomous systems that drive operational efficiency and deliver actionable intelligence across critical domains.",
    services: [
      {
        title: "Oil & Gas Robotics Solutions",
        description:
          "Design and deploy autonomous aerial and ground robotic platforms for offshore and onshore oil & gas operations. Capabilities include pipeline inspection, flare stack monitoring, hazardous area surveillance, and site security using AI-driven UAVs and rugged AGVs with encrypted mesh communications.",
      },
      {
        title: "Infrastructure Monitoring & Asset Management",
        description:
          "Provide AI-enabled multi-platform robotic systems for continuous monitoring and inspection of bridges, highways, dams, power grids, and industrial infrastructure. Integrates LiDAR, thermal, and visual imaging for predictive maintenance, anomaly detection, and digital twin generation.",
      },
      {
        title: "Construction Site Automation & Progress Monitoring",
        description:
          "Deploy UAV and AGV solutions for real-time construction site mapping, equipment tracking, material logistics, and safety enforcement. Automated photogrammetry and AI-driven analytics deliver project status, inventory updates, and site anomaly alerts for improved operational efficiency.",
      },
      {
        title: "Inspection & Surveillance Robotics",
        description:
          "Engineer customized unmanned systems for critical asset inspections in confined, hazardous, or remote environments. Applications include power plants, substations, ports, warehouses, and perimeter security using multi-sensor UAVs, ground robots, and smart edge-based C2 software.",
      },
      {
        title: "Precision Agriculture & Land Management",
        description:
          "Design autonomous aerial and ground systems for crop health monitoring, precision spraying, soil analysis, and yield prediction. AI-driven analytics deliver actionable insights for farm management, disease detection, and optimized resource allocation across large agricultural estates.",
      },
    ],
    videoUrl: "https://s3.ap-south-1.amazonaws.com/bucket.bramer.web/web-assets/videos/bramer-oil-and-gas-and-inspection.mp4",
  },
  {
    name: "DTLS",
    logo: DLTS, // add logo path or import when available
    website: "https://dlts.tech",
    description:
      "DTLS is a specialized technology innovation lab delivering AI-powered industrial, healthcare, and enterprise automation systems. Backed by CST Corp (Houston, USA), DLTS builds sovereign, scalable, and mission-critical solutions for defense, energy, and public sector organizations. Its core expertise spans AI software engineering, cybersecurity, edge computing, and predictive analytics.",
    services: [
      {
        title: "SafeRig – AI-Powered Oil Rig Hazard Detection Platform",
        description:
          "SafeRig is a ruggedized AI-based safety management system built for offshore oil rigs and heavy industrial sites. It detects worker safety violations, unauthorized access to hazardous zones, and PPE non-compliance in real-time using computer vision and edge-deployed AI models. Designed for low-bandwidth, remote rigs, it operates fully offline via NVIDIA Jetson/industrial mini-PC hardware. Core features include AI-based zone mapping, automatic rule enforcement, gRPC alerting, and timestamped incident logging — reducing human error, downtime, and regulatory breaches.",
      },
      {
        title: "AI-Enabled Medical Inventory Management System",
        description:
          "A comprehensive AI-powered inventory management platform tailored for hospitals, public health centers, and pharma distribution networks. It addresses stockouts, wastage, and manual errors by combining real-time inventory tracking, expiry monitoring, and AI-driven demand forecasting. The system generates predictive replenishment alerts, automatic purchase orders, and multi-channel notifications (SMS, email, dashboard). Deployable on cloud, on-prem, or sovereign hospital clouds, it enhances operational efficiency, reduces critical stockout events, and supports government health scheme compliance.",
      },
      {
        title: "AI-Driven Generator & Mud Pump Optimization Platform",
        description:
          "An AI-based scheduling and diagnostics platform for oil and gas rigs to optimize generator and mud pump operations. The system integrates real-time SCADA/EDR/BDR data feeds, calculating equipment health scores from vibration, temperature, and fault logs. It dynamically assigns shift-wise runtime schedules using AI models for load balancing, fuel efficiency optimization, and predictive maintenance planning. Includes advanced analytics dashboards featuring Gantt charts, time series insights, fuel consumption heatmaps, and anomaly detection reporting — reducing fuel costs, minimizing unplanned shutdowns, and extending equipment lifespan.",
      },
    ],
  }
]

export const Partners: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([])

  const handleToggle = (key: string) => {
    if (openItems.includes(key)) {
      setOpenItems(openItems.filter((k) => k !== key))
    } else {
      setOpenItems([...openItems, key])
    }
  }

  return (
    <section id="our-partners" className="px-5 tablet:px-12 laptop:px-20 py-20 space-y-14">
      <h2 className="text-primary text-right text-[40px] leading-tight tablet:text-6xl tablet:leading-[105%] laptop:text-[64px]">Our Partners</h2>

      {partners.map((partner, pIdx) => (
        <div key={pIdx} className="space-y-10">
          {/* Name & Logo */}
          <div className="flex items-center gap-3">
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1 laptop:gap-3 hover:underline`}
            >
              {partner.logo ? (
                <Image src={partner.logo} alt={`${partner.name} logo`} height={40} className="object-contain h-6 laptop:h-10 w-fit" />
              ) : null}
              <h3 className={`text-black text-lg leading-tight tablet:text-xl tablet:leading-[105%] laptop:text-3xl font-medium`}>{partner.name}</h3>
            </a>
          </div>

          {/* Description */}
          <p className="text-[20px] max-w-4xl leading-relaxed">{partner.description}</p>

          {/* Services */}
          <div className="space-y-6 grid grid-cols-1 laptop:grid-cols-2 gap-12">
            <h4 className="text-[24px] font-semibold text-black">Products & Services</h4>
            <div className="grid laptop:grid-cols-1 gap-8 items-start tablet:w-4/5 tablet:ml-auto">
              {partner.services.map((service, sIdx) => {
                const key = `${pIdx}-${sIdx}`
                return (
                  <Collapsible
                    key={key}
                    className="space-y-3 border-l-2 border-primary pl-[22px] transition"
                    open={openItems.includes(key)}
                    onOpenChange={() => handleToggle(key)}
                  >
                    <CollapsibleTrigger className="w-full text-start text-lg space-y-2 tablet:space-y-3 tablet:text-2xl pb-2">
                      <span>{service.title}</span>
                      <br />
                      <Image
                        src={PLUS}
                        alt="plus"
                        className={`w-4 h-4 tablet:w-6 tablet:h-6 transition duration-500 ${openItems.includes(key) && "rotate-45"}`}
                      />
                    </CollapsibleTrigger>

                    <CollapsibleContent className="text-xs overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp tablet:text-base">
                      {service.description}
                    </CollapsibleContent>
                  </Collapsible>
                )
              })}
            </div>
          </div>

          {/* Media */}
          {partner.videoUrl ? (
            <div className="overflow-hidden w-full max-w-[1105px] ml-auto shadow-lg">
              <video
                src={partner.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover rounded-sm"
              />
            </div>
          ) : (
            <div className="overflow-hidden w-full max-w-[1105px] ml-auto shadow-lg">
              {partner.imageSrc && (
                <Image
                  src={partner.imageSrc}
                  alt={`${partner.name} graphic`}
                  width={1105}
                  height={620}
                  className="w-full h-auto object-cover rounded-xl"
                />
              )}
            </div>
          )}
        </div>
      ))}
    </section>
  )
}
