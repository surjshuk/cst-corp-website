import { StaticImageData } from "next/image";
type subdescription= {
  key: string;
  value:string;
}
export type SoftwareSpecialType = {
  id?:string
  title: string;
  heading:string;
  description?: {
    subheading:string;
    subdescription:subdescription[];
  }
  image?: StaticImageData;
};

