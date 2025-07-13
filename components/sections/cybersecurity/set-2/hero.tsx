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
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute top-0 left-0 w-[640px] p-12">
        <h1 className="text-white text-[80px] font-normal leading-none max-w-5xl">
          {title}
        </h1>
      </div>
    </div>
  );
};
