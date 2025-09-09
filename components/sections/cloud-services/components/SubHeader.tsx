
import React from 'react'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'
import { SubHeaderType } from '../type'

const slugify = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export const SubHeader: React.FC<SubHeaderType> = ({title,description,position,group,website,subtitle }) => {
    const id = slugify(`${title || ""}`);

  return (
      <div id={id} className="lg:px-20 px-4 pt-8">

        <div className={`${position && position=="right"?"ms-auto":""} 2xl:w-[40%]  lg:w-[50%] w-[70%] md:py-20 py-5`}>
          <h1 className="md:text-6xl text-4xl">
           {title}
          </h1>
          <h2 className='text-2xl  mt-4'>{subtitle}</h2>

          <div className='flex items-center gap-4 md:mt-3 mt-2'>
            {group && 
            <p className='text-primary text-sm'>
                {group}
            </p>
            }

             {
               website &&  <Link href={website}>
                
                <li className='text-sm flex items-center gap-1 text-primary'>
                Website 
                <MoveUpRight size={14} />
            </li>
                </Link>
            }
          </div>
          
          {description && description.map((e,i)=>(

            <p className="md:mt-4 mt-2 text-sm w-[85%] leading-tight" key={i}>
            {e}
          </p>
          ))
        }
        </div>
      </div>
  )
}

export default SubHeader
