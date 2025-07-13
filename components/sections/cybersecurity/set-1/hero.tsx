import React from "react";

type HeroProps = {
  title: string;
  description: string;
};

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
}) => {
  return (
    <div className="grid grid-cols-2 gap-72 p-12">
      <div>
        <h1 className="text-[80px] font-normal leading-none text-black w-[552px]">
          {title}
        </h1>
      </div>
      <div className="pt-28 space-y-4">
        <h2 className="text-[50px]">Overview</h2>
        <p className="text-[20px] w-[317px]">{description}</p>
      </div>
    </div>
  );
};
