import React from 'react'
import { SubPoints } from '@/types/declaration';

type SubSectiontype = {
  sectionTitle:string;
  subPoints:SubPoints[]
};



export const NetworkSection : React.FC<SubSectiontype> = ({ subPoints,sectionTitle}) =>  {
  return (
     <div className=" p-4 md:p-12">

              <h2 className='font-default  text-2xl max-w-xl'>{sectionTitle}</h2>
              <div className='font-default  grid grid-cols-2 md:gap-40 gap-10 mt-10'>
                {subPoints && subPoints.map((point,i)=>(

                <div key={i} className=''>
                  <h3 className='xl:w-1/3 md:w-1/3 text-sm leading-tight text-primary'>{point.title}</h3>
                  <p className=' xl:w-[28%] md:w-1/2 text-sm leading-tight mt-5'>{point.description}</p>
                </div>
                ))}
                
              </div>
         
              
        </div>
  )
}


