import React from "react";
import { Benefit } from "@/types/declaration";

type BenefitsSectionProps = {
  benefits: Benefit[];
  title?:string
};

export const Benefits: React.FC<BenefitsSectionProps> = ({ benefits,title }) => {
  return (
    <div className="py-20 ps-20 pe-32">
      {/* Left side: heading */}
      <div>
        <h2 className="text-3xl laptop:text-6xl font-normal text-black">{title? title:"Benefits"}</h2>
      </div>

      {/* Right side: benefits list */}
      <div className="space-y-11 mt-10 w-1/3 ms-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className="space-y-2">
            <p className="text-primary text-[20px] font-medium">
              {index + 1}.
            </p>
            <p className="text-black text-[18px] leading-relaxed ">
              {benefit.text}
            </p>
            <hr className="border-t border-black/50 " />
          </div>
        ))}
      </div>
    </div>
  );
};
