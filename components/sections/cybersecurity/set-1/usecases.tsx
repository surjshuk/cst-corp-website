import { UseCase } from '@/types/declaration';
import Link from 'next/link';
import React from 'react'
type UseCasesProps = {
 cases:UseCase[] // default: "left"
};

export const UseCases: React.FC<UseCasesProps> = ({ cases }) => {
  return (
     <div className=" p-12">
      {/* Left side: heading */}
      <div>
        <h2 className="text-3xl laptop:text-[40px] font-normal text-black">Use Cases</h2>
      </div>

      {/* Right side: Usecases list */}
      <div className="space-y-8 mt-12">
        {cases.map((usecase, index) => (
          <div key={index} className="space-y-2">
            <p className="text-primary text-[20px] font-medium">
              {index + 1}.
            </p>
            {usecase.link?(
              <Link href={usecase.link}>
                 <p className="text-blue-500 text-[18px] leading-relaxed max-w-[400px]">
              {usecase.title}
            </p>
              </Link>
            ):( <p className="text-black text-[18px] leading-relaxed max-w-[400px]">
              {usecase.title}
            </p>)}
           
            <hr className="border-t border-black/50 laptop:w-[380px]" />
          </div>
        ))}
      </div>
    </div>
  )
}


