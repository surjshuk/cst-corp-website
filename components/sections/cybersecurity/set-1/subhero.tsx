import React from "react";

type HeroProps = {
  title: string;
  description: string;
  position?: "left" | "right"; // default: "left"
};

export const SubHero: React.FC<HeroProps> = ({
  title,
  description,
  position = "right",
}) => {
  return (
    <div className="grid grid-cols-1 laptop:grid-cols-2 gap-72 p-5 laptop:px-20 laptop:py-24">
      <div
        className={`space-y-2.5 ${
          position === "left" ? "laptop:col-start-1" : "laptop:col-start-2"
        }`}
      >
        <div>
          <h1 className="text-[50px] font-normal leading-none text-black laptop:w-[552px]">
            {title}
          </h1>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg laptop:text-[30px]">Overview</h2>
          <p className="text-sm aptop:text-[20px] laptop:w-[317px]">{description}</p>
        </div>
      </div>
    </div>
  );
};
