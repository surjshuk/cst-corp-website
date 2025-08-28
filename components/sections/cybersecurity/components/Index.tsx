import { Code } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

type indextype = {
  title:string;
  header : string[];
  subheader : string[];
}
const slugify = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");


const Index: React.FC<indextype> = ({title, header, subheader}) => {
 
  return (
    <div className='lg:px-20 px-4 pt-8 flex items-start'>
      <div className='w-full'>
        <h1 className='md:text-7xl text-4xl w-1/3'> 
           {title}
        </h1>
      </div>
      <div className='w-[75%] grid grid-cols-2 gap-14'>
        <div className='bg-white shadow-lg px-4 py-10 rounded-2xl w-full relative h-80 overflow-y-auto'>
            <ul className='text-sm p-0 space-y-5 w-full'>
              {subheader && subheader.map((e,i)=>(
                <li key={i}>
                <Link href={`/cybersecurity#${slugify(e)}`}  className='underline hover:text-primary transition-all cursor-pointer'>{e}</Link> 
                </li>
              ))}

            </ul>
            <div className='absolute flex justify-end right-3 bottom-3'>
                <Code size={22} className='text-primary ' />
            </div>
        </div>
        {header && header.map((e,i)=>(

          <div key={i} className='bg-white shadow-lg px-4 pt-10 rounded-2xl w-full relative h-80'>
            <Link href={`/cybersecurity#${slugify(e)}`}>
            <h2 className='text-primary text-4xl hover:text-neutral-800 transition-all'>{e}</h2>
            </Link>
              <div className='absolute flex justify-end right-3 bottom-3'>
                <Code size={22} className='text-primary ' />
            </div>
        </div>
        ))}
       
      </div>
    </div>
  )
}

export default Index
