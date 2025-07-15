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
    <div className="grid laptop:grid-cols-2 gap-24 p-5 laptop:px-20 laptop:py-24">
      <div
        className={`space-y-2.5 ${
          position === "left" ? "laptop:col-start-1" : "laptop:col-start-2"
        }`}
      >
        <div>
          <h1 className="text-4xl laptop:text-[50px] leading-snug text-black">
            {title}
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-lg laptop:text-xl">{description}</p>
          <a href="https://www.youtube.com/watch?v=o81g9r6tgUk" className="text-primary underline">website</a>
        </div>
      </div>
    </div>
  );
};
