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


export type UseCase = {
  title: string;
  link?: string; // Optional website link
};


type SubPoints = {
  title:string;
  description:string;
}



// vivek

export type CollapisblePoint = {
  title: string;
  description?: string;
  points?: string[];
};

export type ThreePoint = {
  text: string;
};

export type point = {
  title:string;
  description:string;
}
