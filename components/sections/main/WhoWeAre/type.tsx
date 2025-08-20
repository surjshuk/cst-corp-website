import { StaticImageData } from "next/image";

export type MainSpecialType = {
  heading: string;
  description?: string[];
  image?: StaticImageData;
};