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
    <div className="grid grid-cols-2 gap-72 px-20 py-24">
      <div
        className={`space-y-2.5 ${
          position === "left" ? "col-start-1" : "col-start-2"
        }`}
      >
        <div>
          <h1 className="text-[50px] font-normal leading-none text-black w-[552px]">
            {title}
          </h1>
        </div>
        <div className="space-y-4">
          <h2 className="text-[30px]">Overview</h2>
          <p className="text-[20px] w-[317px]">{description}</p>
        </div>
      </div>
    </div>
  );
};
