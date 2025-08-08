import React from 'react'

type Subherotype = {
  subtitle:string;
  intro?:string;
  description:string[];
  position?: "left" | "right";
};





export const Subhero : React.FC<Subherotype> = ({subtitle,description,intro,position="right"}) =>  {
  return (
    <div className='m-5'>

        <div>
            <div className="grid grid-cols-1 laptop:grid-cols-2  laptop:px-20 laptop:py-8">
         <div
        className={`space-y-2.5 ${
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
                    <h2 className="text-lg leading-tight laptop:text-2xl laptop:w-[500px]">{intro}</h2>
                    }
                  {description.map((e,i)=>(
                      <p key={i} className="text-xs leading-tight laptop:w-[500px]">{e}</p>
                  ))}
                </div>
                
              </div>
            </div>
        </div>
    </div>
  )
}

