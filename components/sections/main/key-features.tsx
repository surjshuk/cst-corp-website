"use client";
import { PLUS } from "@/app/assets";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Feature } from "@/types/declaration";
import Image from "next/image";
import { useState } from "react";

type KeyFeaturesSectionProps = {
  features: Feature[];
};

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
    <section
      className="space-y-20 pt-10 pb-7 tablet:space-y-20 tablet:pb-12 laptop:ml-0  laptop:pb-20"
      id="key-features"
    >
      <div className="space-y-3.5 laptop:space-y-5">
        {/* <h3 className="text-xs text-primary font-semibold tablet:text-sm">Key Features</h3> */}
        <h1 className="text-[28px] leading-tight laptop:text-xl font-bold w-11/12 laptop:w-7/12">
        Products & Services
        </h1>
      </div>

      <div className="flex flex-col gap-14 items-end ">
        {features.map((feature, index) => (
          <Collapsible
            key={index}
            className="space-y-3 border-l-2 border-primary pl-[22px] transition w-1/3"
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

            <CollapsibleContent className="w-4/5 text-xs overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp tablet:text-base">
              {feature.description}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </section>
  );
};
