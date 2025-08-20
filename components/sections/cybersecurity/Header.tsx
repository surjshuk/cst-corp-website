
import React from 'react'
import { HeaderType } from './type'


export const Header: React.FC<HeaderType> = ({title,description,position,points }) => {
  return (
      <div className="lg:px-20 px-4 pt-8">

        <div className={`${position && position=="right"?"ms-auto":""} xl:w-[40%] lg:w-[60%] w-[60%] md:py-20 py-5`}>
          <h1 className="md:text-7xl text-primary text-4xl">
           {title}
          </h1>
          {description && 
          <p className="mt-5 text-sm w-[85%] leading-tight">
            {description}
          </p>
        }
          {points && 
            <ul className='mt-5 text-sm list-disc px-5 leading-tight space-y-2'>
                {points.map((point,i)=>(
                    <li key={i}>
                        {point}
                    </li>
                ))}
            </ul>
          }
        </div>
      </div>
  )
}

export default Header
