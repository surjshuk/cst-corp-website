import { point } from '@/types/declaration'
import React from 'react'

type twinType = {
  points:point[],
  title?:string
}

const Twin: React.FC<twinType> = ({points,title}) => {
  return (
     <div className="md:p-20 p-4 my-20">
          <div className="ms-auto md:w-1/2">
            <h2 className="md:text-6xl text-4xl 2xl:w-2/3">{title}</h2>
            <div className="mt-20 grid grid-cols-2 gap-14 2xl:w-2/3 w-full"> 
            {
                points.map((point:point,i:number)=>(
                <div key={i} className="">
                <p className="text-blue-500 text-xl w-2/3">{point.title}</p>
                <p className="text-sm">{point.description}</p>
              </div>
                ))
            }
              
            
            </div>
          </div>
        </div>
  )
}

export default Twin
