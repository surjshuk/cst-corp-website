import { StaticImageData } from "next/image";

export type HeaderType = {
    title?:string;
    description?:string;
    points?: string[];
    position?:"left"|"right";
}


export type SubHeaderType = {
    title?:string;
    group?:string;
    website?:string;
    subtitle?:string;
    description?:string[];
    position?:"left"|"right";
}

export type CloudSpecialType = {
  title: string;
  description?: string;
  image?: StaticImageData;
};
