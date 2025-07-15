import React from "react";
import { Benefit } from "@/types/declaration";

type BenefitsSectionProps = {
  benefits: Benefit[];
};

export const Benefits: React.FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <div className="grid laptop:grid-cols-2 gap-12 laptop:gap-20 p-12">
      {/* Left side: heading */}
      <div>
        <h2 className="text-3xl laptop:text-[40px] font-normal text-black">Benefits</h2>
      </div>

      {/* Right side: benefits list */}
      <div className="space-y-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="space-y-2">
            <p className="text-primary text-[20px] font-medium">
              {index + 1}.
            </p>
            <p className="text-black text-[18px] leading-relaxed max-w-[400px]">
              {benefit.text}
            </p>
            <hr className="border-t border-black/50 laptop:w-[380px]" />
          </div>
        ))}
      </div>
    </div>
  );
};
