import React from 'react'

type points = {
  title:string,
  description:string
}
type twinType = {
  points:points[],
  title?:string
}

const Twin: React.FC<twinType> = ({points,title}) => {
  return (
     <div className="my-20">
          <div className="ms-auto w-2/6">
            <h2 className="text-6xl">{title}</h2>
            <div className="mt-20 grid grid-cols-2 gap-14 w-2/3"> 
            {
                points.map((point:points,i:number)=>(
                <div key={i} className="">
                <p className="text-blue-500 text-xl">{point.title}</p>
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
