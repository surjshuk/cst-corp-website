"use client"

import { Code } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'

type IndexData = {
  header: string;
  section:string;
  subheader: string[];
}

type IndexType = {
  title: string;
  slug:string;
  data: IndexData[];
}

const slugify = (str: string) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

const Index: React.FC<IndexType> = ({ title, slug,data }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className='lg:px-20 px-4 pt-8 mt-12 mb-8 flex items-start'>
      <div className='w-full'>
        <h1 className='md:text-7xl text-4xl w-[66%] capitalize'>{title}</h1>
      </div>

      <div className='w-[75%] grid grid-cols-2 gap-14'>
        {data.map((item, idx) => (
          <div
            key={idx}
            className='bg-white shadow-lg px-4 py-7 rounded-2xl w-full relative h-80 overflow-hidden'
            
            onMouseLeave={() => setOpen(null)}
          >
            <div>
              <Link href={`/${slug}#${slugify(item.header)}`}>
                <h2 className={`text-primary ${open===idx?"text-xl":"text-4xl"} capitalize hover:text-neutral-800 transition-all duration-300 `}>
                  {item.header}
                </h2>
              </Link>
              <div onMouseEnter={() => setOpen(idx)} className='absolute flex justify-end right-3 bottom-3'>
                <Code size={22} className='text-primary ' />
              </div>
            </div>

              <ul className= {`${open===idx?"block opacity-100":" hidden opacity-0"} text-sm p-0 space-y-2 mt-2 transition-all duration-500`}>
                {item.subheader.map((sub, i) => {
                  const urlSlug = slugify(`${title}-${item.section}-${sub}`);
                  return (<li key={i}>
                    <Link
                      href={`/${slug}#${urlSlug}`}
                      className='underline capitalize hover:text-primary transition-all cursor-pointer'
                      >
                      {sub}
                    </Link>
                  </li>
                )}
                )}
              </ul>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Index
