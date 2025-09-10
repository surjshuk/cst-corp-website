"use client";
import { PLUS } from "@/app/assets/";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import { useState } from "react";
import { KeyFeaturesSectionProps } from "../data";

export const KeyFeaturesSection: React.FC<KeyFeaturesSectionProps> = ({ features }) => {
  const [openItems, setOpenItems] = useState<number[]>(features.map((_, i) => i)); // open all by default

  const handleToggle = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index)); // close
    } else {
      setOpenItems([...openItems, index]); // open
    }
  };

  return (
    <div
      className="pt-10 pb-7 "
      id="key-features"
    >
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
        Products & Services
        </h1>
      </div>

      <div className="flex flex-col gap-14 md:items-end ">
        {features.map((feature, index) => (
          <Collapsible
            key={index}
            className="space-y-3 border-l-2 border-primary pl-[22px] transition md:w-[500px] w-[90%]"
            open={openItems.includes(index)}
            onOpenChange={() => handleToggle(index)}
          >
            <CollapsibleTrigger className="w-full text-start text-2xl space-y-2 tablet:space-y-3 tablet:text-2xl pb-2">
              <span>{feature.title}</span>
              <br />
              <Image
                src={PLUS}
                alt="plus"
                className={`w-4 h-4 tablet:w-6 tablet:h-6 transition duration-500 ${openItems.includes(index) && "rotate-45"}`}
              />
            </CollapsibleTrigger>

            <CollapsibleContent className="md:w-4/5 text-sm overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp tablet:text-base">
              {feature.description}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};
