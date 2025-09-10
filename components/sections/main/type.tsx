import { StaticImageData } from "next/image";

export type MainSpecialType = {
  heading: string;
  description?: string[];
  image?: StaticImageData;
};

export type MainCarouselType = {
  heading: string;
  description?: string;
  image?: StaticImageData;
};

export type LogoItem = {
  image: string | StaticImageData;
  link: string;
};

