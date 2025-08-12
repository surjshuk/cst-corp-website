import React from "react";

type Benefit ={
  title:string;
  description:string;
  position?: "left" | "right";
}
type BenefitsSectionProps = {
  benefits: Benefit[];
  subTitle?:string;
};

export const Benefits: React.FC<BenefitsSectionProps> = ({ benefits,subTitle }) => {
  return (
    <div className=" w-1/2 ms-auto  p-12">
      {/* Left side: heading */}
      <div>
        <h2 className="text-3xl laptop:text-[40px] font-normal text-black">Benefits</h2>
        <p className="text-2xl w-2/3">{subTitle}</p>
      </div>

      {/* Right side: benefits list */}
      <div className="space-y-8 mt-5">
        {benefits.map((benefit, index) => (
          <div key={index} className="space-y-2">
            <p className="text-primary text-[20px] font-medium">
              {index + 1}.  <span className="text-sm">{benefit.title}</span>
            </p>
            <p className="text-black text-sm leading-relaxed max-w-[500px]">
             By combining Cloud DNS with Cloud Load Balancing, Cisco ensures that applications are fast, reliable, and secure. The intelligent distribution of traffic and DNS queries minimizes latency and provides consistent, high-quality service to users globally.
            </p>
            <hr className="border-t border-black/50 laptop:w-[380px]" />
          </div>
        ))}
      </div>
    </div>
  );
};
