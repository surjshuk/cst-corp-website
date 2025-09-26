import React from "react";
import {ThreePoint } from "@/types/declaration";

type BenefitsSectionProps = {
title?:string;
  points: ThreePoint[];
};

export const ThreePoints: React.FC<BenefitsSectionProps> = ({ points,title }) => {
  return (
    <div className="lg:p-20 p-4 mt-12 md:grid md:grid-cols-2">

      <div>
        <h2 className="md:text-6xl text-4xl font-normal text-black">
            {title?title:"Benefits"}
        </h2>
      </div>

      <div className="space-y-16 mt-16 me-auto">
        {points.map((benefit, index) => (
          <div key={index} className="space-y-2">
            <p className="text-primary text-2xl font-medium">
              {index + 1}.
            </p>
            <p className="text-black text-sm leading-relaxed w-[80%]">
              {benefit.text}
            </p>
            <hr className="border-t border-black/50 " />
          </div>
        ))}
      </div>
    </div>
  );
};
