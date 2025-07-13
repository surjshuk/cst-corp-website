import React from "react";
import Image, { StaticImageData } from "next/image";
import { Benefit } from "@/types/declaration";

type BenefitsSectionProps = {
  imageSrc: StaticImageData;
  benefits: Benefit[];
};

export const Benefits: React.FC<BenefitsSectionProps> = ({
  imageSrc,
  benefits,
}) => {
  return (
    <div className="relative w-full h-[670px] overflow-hidden">
        <Image
            src={imageSrc}
            alt="Benefits Background"
            fill
            className="object-cover"
            priority
        />
        
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute top-0 left-0 w-full h-full p-12 space-y-6">
            <h2 className="text-white text-[64px] font-normal">Benefits</h2>

            <div className="flex flex-col gap-6">
            {benefits.map((benefit, index) => (
                <p
                key={index}
                className={`text-white text-[20px] leading-relaxed max-w-[380px] ${
                    benefit.position === "left" ? "text-left" : "text-right ml-auto"
                }`}
                >
                {benefit.text}
                </p>
            ))}
            </div>
        </div>
    </div>
  );
};
