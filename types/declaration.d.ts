declare module "*.mp4" {
  const src: string;
  export default src;
}

export type Feature = {
  title: string;
  description: string;
  image?: StaticImageData;
};

export type Benefit = {
  text: string;
  position: "left" | "right";
};