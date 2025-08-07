import React from 'react'
import { SubPoints } from '@/types/declaration';

type SubSectiontype = {
  title?: string;
  subtitle:string;
  description:string;
  sectionTitle:string;
  subPoints:SubPoints[]
};



export const NetworkSection : React.FC<SubSectiontype> = ({ title,subtitle,description,subPoints,sectionTitle}) =>  {
  return (
     <div className=" p-5 laptop:p-12">
      {title && (

        <h1 className="text-[#0059FF] text-6xl laptop:text-7xl font-normal leading-none max-w-xl text-wrap">
              {title}
            </h1>
            )}
            <div className=''>
            <div className="grid grid-cols-1 laptop:grid-cols-2 gap-72  laptop:px-20 laptop:py-24">
              <div
                className={"space-y-2.5 laptop:col-start-2"}>
                {subtitle && (

                  <div>
                  <h1 className="text-[50px] font-normal leading-none text-black laptop:w-[552px]">
                    {subtitle}
                  </h1>
                </div>
                )}
                <div className="space-y-4">
                  <h2 className="text-lg laptop:text-[30px]">Overview</h2>
                  <p className="text-sm aptop:text-[20px] laptop:w-[317px]">{description}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className='font-default  text-lg laptop:text-3xl max-w-xl'>{sectionTitle}</h2>
              <div className='font-default  grid lg:grid-cols-2 grid-cols-1 lg:gap-40 gap-10 mt-10'>
                {subPoints && subPoints.map((point,i)=>(

                <div key={i} className=''>
                  <h3 className='xl:w-1/3 lg:w-1/3 text-lg leading-tight text-[#0059FF]'>{point.title}</h3>
                  <p className=' xl:w-[28%] lg:w-1/2 text-lg leading-tight mt-5'>{point.description}</p>
                </div>
                ))}
                
              </div>
            </div>
              
            </div>
        </div>
  )
}


