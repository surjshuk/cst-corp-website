
import React from 'react'
import { SubHeaderType } from '../../type'


export const Header: React.FC<SubHeaderType> = ({title,description }) => {
  return (
      <div className="lg:px-20 px-4 pt-8">

        <div className="md:py-20 py-5">
          <h1 className="md:text-6xl text-primary text-4xl lg:w-[50%] w-[60%] ">
           {title}
          </h1>
          {description && 
          <p className="mt-5 text-sm lg:w-[40%] w-[60%] ms-auto leading-tight">
            {description}
          </p>
        }
          
        </div>
      </div>
  )
}

export default Header
