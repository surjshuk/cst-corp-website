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
    <div className="grid grid-cols-2 gap-24 px-20 py-24">
      <div
        className={`space-y-2.5 ${
          position === "left" ? "col-start-1" : "col-start-2"
        }`}
      >
        <div>
          <h1 className="text-[50px] text-black">
            {title}
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-xl">{description}</p>
          <a href="https://www.youtube.com/watch?v=o81g9r6tgUk" className="text-primary underline">website</a>
        </div>
      </div>
    </div>
  );
};
