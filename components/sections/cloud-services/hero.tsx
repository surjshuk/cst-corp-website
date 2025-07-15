import React from "react";
import Image, { StaticImageData } from "next/image";

type CloudServiceHeroProps = {
  title: string;
  imageSrc: StaticImageData;
};

export const Hero: React.FC<CloudServiceHeroProps> = ({
  title,
  imageSrc,
}) => {
  return (
    <div className="relative w-full h-[670px] overflow-hidden">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="absolute top-0 left-0 laptop:w-[640px] p-5 laptop:p-12">
        <h1 className="text-white text-6xl laptop:text-7xl font-normal leading-none max-w-5xl text-wrap">
          {title}
        </h1>
      </div>
    </div>
  );
};
