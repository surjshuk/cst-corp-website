"use client";
import { PLUS } from "@/app/assets";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import { useState } from "react";

export interface Feature {
  title: string;
  description: string;
}

type CollapsibleSectionProps = {
  title: string;
  intro: string;
  features: Feature[];
  concludingNote: string;
};

export const Feature: React.FC<CollapsibleSectionProps> = ({
  title,
  intro,
  features,
  concludingNote,
}) => {
  const [openItems, setOpenItems] = useState<number[]>(features.map((_, i) => i)); // open all by default

  const handleToggle = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <section
      id="solutions"
      className="space-y-20 px-5 pt-20 pb-7 tablet:space-y-20 tablet:px-12 tablet:pb-12 laptop:px-20 laptop:pt-40 laptop:pb-20"
    >
      <div className="space-y-3.5 max-w-[576px]">
        <h1 className="text-[28px] text-[#0059FF] leading-tight tablet:text-5xl laptop:text-[80px] font-normal font-wayray">
          {title}
        </h1>
        <p className="mt-[30px] text-xs tablet:text-[30px] text-black font-wayray font-normal leading-normal">
          {intro}
        </p>
      </div>

      <div className="grid laptop:grid-cols-2 gap-8 items-start tablet:w-4/5 tablet:ml-auto">
        {features.map((feature, index) => (
          <Collapsible
            key={index}
            className="space-y-3 border-l-2 border-primary pl-[22px] transition"
            open={openItems.includes(index)}
            onOpenChange={() => handleToggle(index)}
          >
            <CollapsibleTrigger className="w-full text-start text-lg space-y-2 tablet:space-y-3 tablet:text-2xl pb-2">
              <span>{feature.title}</span>
              <br />
              <Image
                src={PLUS}
                alt="plus"
                className={`w-4 h-4 tablet:w-6 tablet:h-6 transition duration-500 ${openItems.includes(index) && "rotate-45"}`}
              />
            </CollapsibleTrigger>

            <CollapsibleContent className="text-xs tablet:text-lg text-gray-500 overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
              {feature.description}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>

      <p className="text-xs tablet:text-[25px] text-black font-wayray font-normal leading-normal tablet:w-4/5 tablet:ml-auto text-right">
        {concludingNote}
      </p>
    </section>
  );
};
