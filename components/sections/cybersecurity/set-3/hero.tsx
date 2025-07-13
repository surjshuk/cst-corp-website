import React from "react";
import Image, { StaticImageData } from "next/image";

type CloudServiceHeroProps = {
  title: string;
  imageSrc: StaticImageData;
};

export const CloudServiceHero: React.FC<CloudServiceHeroProps> = ({
  title,
  imageSrc,
}) => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-start justify-start p-12">
        <h1 className="text-white text-[64px] font-normal leading-none max-w-5xl">
          {title}
        </h1>
      </div>
    </div>
  );
};
