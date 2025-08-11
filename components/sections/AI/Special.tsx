import { PYTHIAAI } from '@/app/assets'
import Image from 'next/image'
import React from 'react'

type points = {
  title:string;
  description:string;
}
type SpecialProps = {
  points: points[];
  title?:string
};



const Special: React.FC<SpecialProps> = ({points,title}) => {
  return (
    <div className="h-[100vh] mt-20 relative text-white">
          <Image src={PYTHIAAI} alt="" className="w-full h-full -z-10"/>
          <div className="absolute top-0 left-0 w-full h-full p-20">
            <h2 className="w-2/12   text-7xl">{title?title:"Key Capabilities"}</h2>
        
              <div className='grid grid-cols-2'>
                {points.map((e,i)=>(

                
                <div key={i} className="border-t border-blue-500 mt-16 w-2/3">
                  <p className="text-blue-500 text-3xl my-5 ">{e.title}</p>
                  <p className="text-xl">{e.description}.</p>
                </div>
                
                ))}
                
                
            </div>
            
            
          </div>
        </div>
  )
}

export default Special
