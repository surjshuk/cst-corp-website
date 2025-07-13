import { Feature } from "@/types/declaration";
import React from "react";
import Image from "next/image";

type KeyfeaturesProps = {
  features: Feature[];
};

export const Keyfeatures: React.FC<KeyfeaturesProps> = ({ features }) => {
  return (
    <div className=" p-8 relative z-10 bg-background">
        <h3 className="text-[20px] text-primary">Key features</h3>

        <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
                <div key={index} className="relative overflow-hidden h-[427px]">
                <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover z-0"
                    priority
                />

                <div className="absolute inset-0 bg-black/60 z-5" />

                <div className="relative px-6 py-8 w-[427px]">
                    <h4 className="text-[30px] font-normal leading-normal text-primary">
                    {feature.title}
                    </h4>
                    <p className="text-[20px] font-normal leading-normal text-white">
                    {feature.description}
                    </p>
                </div>
                </div>
            ))}  
        </div>
    </div>
  );
};
