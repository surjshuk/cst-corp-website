import { PYTHIAAI } from '@/app/assets/'
import { point } from '@/types/declaration';
import { StaticImageData } from 'next/image';

import React from 'react'

type SpecialProps = {
  points: point[];
  title?:string
  image?:StaticImageData
};

const Special: React.FC<SpecialProps> = ({points,title,image}) => {
  return (
    <div className="md:min-h-screen h-auto mt-28 relative text-white bg-cover bg-center bg-no-repeat" 
    style={{backgroundImage:`url(${image?.src || PYTHIAAI.src})`}}>
          {/* <Image src={PYTHIAAI} alt="" className="w-full h-full  absolute top-0 left-0  "/> */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 "></div>  
          <div className="w-full h-full lg:p-20 px-4 py-14 z-10 relative">
            <h2 className="md:w-[22%] w-[70%]  md:text-6xl text-4xl">{title?title:"Key Capabilities"}</h2>
        
              <div className='grid grid-cols-2 md:gap-0 gap-10'>
                {points.map((e,i)=>(
                <div key={i} className="border-t border-blue-500 mt-16 xl:w-2/3 md:w-[80%]">
                  <p className="text-blue-500 text-2xl md:my-5 my-12 xl:w-2/3 md:w-[80%]">{e.title}</p>
                  <p className="text-sm xl:w-2/3 md:w-[80%] leading-tight">{e.description}</p>
                </div>
                
                ))}
                
                
            </div>
            
            
          </div>
        </div>
  )
}

export default Special
