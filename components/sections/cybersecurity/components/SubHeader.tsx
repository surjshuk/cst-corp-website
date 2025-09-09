
import React from 'react'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'
import { SubHeaderType } from '../type'

const slugify = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export const SubHeader: React.FC<SubHeaderType> = ({title,description,position,subtitle,section,group,website }) => {
      // Use section + title to generate unique ID
  const id = slugify(`${group || ""}-${section || ""}-${title || ""}`);

  return (
      <div id={id} className="lg:px-20 px-4 pt-8">

        <div className={`${position && position=="right"?"ms-auto":""} 2xl:w-[40%]  lg:w-[50%] w-[80%] md:py-20 py-5`}>
          <h1 className="md:text-6xl text-4xl">
           {title}
          </h1>
          <div className='flex items-center gap-4 md:mt-3 mt-2'>
            {group && 
            <p className='text-primary text-sm capitalize'>
                {group}
            </p>
            }
            {
                section &&  <li className='ms-3 text-sm text-neutral-500 uppercase'>
                {section}
            </li>
            }
             
                <Link href={website || ""}>
                <li className='text-sm flex items-center gap-1 text-primary'>
                Website 
                <MoveUpRight size={14}/>
            </li>
                </Link>
            
          </div>
          <h2 className='text-2xl md:mt-7 mt-4'>{subtitle?subtitle:"Overview"}</h2>
          {description && 
          <p className="md:mt-4 mt-2 text-sm w-[85%] leading-tight">
            {description}
          </p>
        }
        </div>
      </div>
  )
}

export default SubHeader
