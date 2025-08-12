import React from 'react'

type Data = {
  description:string[];
  points:string[]
}
type Subherotype = {
  subtitle?:string;
  intro?:string;
  data:Data;
  position?: "left" | "right";
};





export const SubheroVm : React.FC<Subherotype> = ({subtitle,data,intro,position="right"}) =>  {
  return (
    <div className='m-5  border-b border-black py-28'>

        <div>
            <div className="grid grid-cols-1 laptop:grid-cols-2  laptop:px-20 laptop:py-8 ">
         <div
        className={`space-y-2.5  ${
          position === "left" ? "laptop:col-start-1" : "laptop:col-start-2"
        }`}
      >
                {subtitle && (

                  <div>
                  <h1 className="text-[50px] font-normal leading-none text-black laptop:w-[400px]">
                    {subtitle}
                  </h1>
                </div>
                )}
                 <div className="space-y-2">
                    {intro&& 
                    <h2 className="text-lg text-blue-500 leading-tight laptop:text-2xl laptop:w-[500px]">{intro}</h2>
                    }
                    
                    <p className="text-xs leading-tight laptop:w-[500px]">
                    {data.description[0]}</p>
                  {/* {description.map((e,i)=>(
                      <p key={i} className="text-xs leading-tight laptop:w-[500px]">{e}</p>
                  ))} */}
                    <ul className="text-xs text-black list-disc ps-5 leading-tight laptop:w-[500px]">

                    {data.points.map((point,i)=>(
                      <li key={i}>{point}</li>
                    ))}
                    </ul>
                    <p className="text-xs leading-tight laptop:w-[500px]">{data.description[1]&& data.description[1] }</p>
                </div>
                
              </div>
            </div>
        </div>
    </div>
  )
}

