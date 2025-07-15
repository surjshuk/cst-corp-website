import { AUTONOMY} from "@/app/assets";
import Image from "next/image";

const applications = [
  {
    title: "AI & Robotics",
    description:
      "We design, develop, and deploy advanced autonomous aerial and ground systems empowered by AI-driven decision frameworks. Our platforms deliver real-time actionable intelligence, optimized for defense, industrial, and security applications.",
    details:
      "Our AI systems integrate perception, navigation, and edge-based analytics to deliver precision autonomy in complex operational environments.",
    imageSrc: AUTONOMY,
    reverse: false,
  },
  {
    title: "Cybersecurity",
    description:
      "Securing modern digital infrastructure against emerging threats, we offer comprehensive cybersecurity services from threat monitoring and incident response to secure application hosting and sovereign data control.",
    details:
      "Our proactive threat management frameworks and AI-enhanced SOC solutions protect enterprises and mission-critical systems around the clock.",
    imageSrc: AUTONOMY,
    reverse: true,
  },
  {
    title: "Software Development",
    description:
      "From AI frameworks and real-time control platforms to secure enterprise software and mobile apps, we build scalable, performance-optimized solutions tailored to mission-specific requirements.",
    details:
      "Our full-stack engineering teams specialize in low-latency control systems, web-based C2 dashboards, and AI/ML model integrations.",
    imageSrc: AUTONOMY,
    reverse: false,
  },
  {
    title: "Cloud Services",
    description:
      "We deliver highly resilient, scalable, and secure cloud infrastructure solutions — ranging from multi-cloud orchestration to sovereign cloud deployments for defense and government clients.",
    details:
      "Our cloud services feature edge-integrated hosting, mission-specific deployments, and seamless AI model distribution at scale.",
    imageSrc: AUTONOMY,
    reverse: true,
  },
];


export const WhatWeDo = () => {
    return (
        <section id="what-we-do">   
            <h3 className="text-primary text-sm font-semibold p-5 tablet:px-12 tablet:py-10 laptop:px-20 laptop:py-24">What We Do</h3>
            {applications.map((application, index) => ( 
                <div key={`${application.title}-${index}`}>
                    <div className="p-5 tablet:px-12 tablet:py-10 laptop:px-20 laptop:py-24">
                        <h4 className={`text-base text-primary font-medium max-w-[800px] mb-2 target:mb-0 tablet:text-2xl ${application.reverse ? "ml-auto" : ""}`}>{application.title}</h4>
                        <p className={`text-base mb-8 max-w-[800px] tablet:text-2xl tablet:mb-[72px] ${application.reverse ? "ml-auto" : ""}`}>{application.description}</p>
                    </div>

                    <div className={`tablet:px-12 tablet:py-10 laptop:px-20 laptop:py-24 flex items-end justify-between flex-col-reverse ${application.reverse ? "laptop:flex-row": "laptop:flex-row-reverse"} gap-6 tablet:gap-32 ${application.reverse ? "flex-row-reverse" : ""}`}>
                        <p className={`p-5 tablet:p-0 text-xs w-[158px] tablet:min-w-[208px] tablet:font-medium leading-tight tablet:text-sm ${application.reverse ? "ml-auto": "mr-auto"}`}>{application.details}</p>
                        <div className="flex-1">
                            <Image
                                src={application.imageSrc}  
                                alt={application.title}
                                className=""
                                />
                        </div>
                    </div>
                </div>
            ))}

        </section>
    );
};