import { StaticImageData } from "next/image";

export type MainCarouselType = {
  heading: string;
  description?: string;
  image?: StaticImageData;
};