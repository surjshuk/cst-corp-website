"use client"
import { PLUS } from "@/app/assets/";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import { useState } from "react";

const values = [
  {
    value: "Integrity by Design",
    description: "We prioritize transparency, data security, and ethical AI deployment in every solution we deliver. Our clients trust us to engineer systems that are reliable, explainable, and built with integrity at their core."
  },
  {
    value: "Innovation with Purpose",
    description: "We pursue AI innovation not for novelty, but to solve tangible, high-impact operational challenges. Every model, platform, and strategy we develop is designed for measurable business value."
  },
  {
    value: "Client-Centric Execution",
    description: "Our success is defined by our clients’ outcomes. We collaborate deeply, tailoring every project to align with operational priorities, business models, and industry constraints."
  },
  {
    value: "Precision Engineering",
    description: "Whether deploying AI for predictive maintenance or operational optimization, our work reflects an obsession with accuracy, performance, and scalability in mission-critical environments."
  },
  {
    value: "Relentless Learning",
    description: "We continuously adapt, embracing new research, technologies, and practices. Our teams stay ahead of emerging trends to ensure our clients remain future-ready."
  },
  {
    value: "Long-Term Partnerships",
    description: "We prioritize enduring relationships over short-term wins. By delivering consistent, enterprise-grade outcomes, we aim to be a trusted AI partner through our clients’ digital transformation journey."
  }
];

export const Values = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleValueSelection = (index: number) => {
    if (index === selected) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  };

  return (
    <div
      className="space-y-20 px-5 pt-20 pb-7 tablet:space-y-20 tablet:px-12 tablet:pb-12 laptop:ml-0 laptop:px-20 laptop:pt-40 laptop:pb-20"
      id="values"
    >
      <div className="space-y-3.5 laptop:space-y-5">
        <h3 className="text-xs text-primary font-semibold tablet:text-sm">Our Values</h3>
        <h1 className="text-[28px] leading-tight laptop:text-[40px] w-11/12 laptop:w-7/12">
          The principles guiding how CST engineers AI-powered solutions for critical industries.
        </h1>
      </div>

      <div className="grid laptop:grid-cols-2 gap-8 items-start tablet:w-4/5 tablet:ml-auto">
        {values.map((value, index) => (
          <Collapsible
            key={index}
            className="space-y-3 border-l-2 border-primary pl-[22px] transition"
            open={selected === index}
            onOpenChange={() => handleValueSelection(index)}
          >
            <CollapsibleTrigger className="w-full text-start text-lg space-y-2 tablet:space-y-3 tablet:text-2xl pb-2">
              <span>{value.value}</span>
              <br />
              <Image
                src={PLUS}
                alt="plus"
                className={`w-4 h-4 tablet:w-6 tablet:h-6 transition duration-500 ${selected === index && "rotate-45"}`}
              />
            </CollapsibleTrigger>

            <CollapsibleContent className="text-xs overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp tablet:text-base">
              {value.description}
            </CollapsibleContent>
          </Collapsible>
        ))}

        <p className="text-base pt-4 tablet:text-2xl tablet:pt-14 laptop:pt-20">
          These six principles are the foundation of our culture and how we consistently deliver AI solutions that are secure, scalable, and purpose-built for operational impact.
        </p>
        <p className="text-base tablet:text-2xl relative -top-4 tablet:static laptop:pt-20">
          Every decision, engagement, and deployment we undertake is guided by these values — ensuring CST remains a trusted, forward-looking partner to our clients worldwide.
        </p>
      </div>
    </div>
  );
};
