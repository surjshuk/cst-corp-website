import { Feature } from "@/types/declaration";
import React from "react";

type KeyfeaturesProps = {
  overview: string;
  features: Feature[];
};

export const Keyfeatures: React.FC<KeyfeaturesProps> = ({
  overview,
  features,
}) => {
  return (
    <div className="p-12 space-y-12">
      <div className="max-w-5xl">
        <h2 className="text-[50px] mb-4">Overview</h2>
        <p className="text-xl">{overview}</p>
      </div>

      <div className="">
        <h2 className="text-[80px] mb-8">
          Key Features
        </h2>

        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
          {features.map((feature, index) => (
            <div key={index}>
              <h4 className="text-3xl font-normal text-black mb-2">
                {feature.title}
              </h4>
              <p className="text-xl leading-relaxed text-black">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
