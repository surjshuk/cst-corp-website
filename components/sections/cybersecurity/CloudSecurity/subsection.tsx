import React from 'react';

type SubSectiontype = {
  title?: string;
  subtitle:string;
  description:string;
  sectionTitle:string;
  sectionDescription:string;
};

export const SubSection: React.FC<SubSectiontype> = ({ title,subtitle,description,sectionTitle,sectionDescription }) => {
  return (
    <div className=" p-5 laptop:p-12">
        <h1 className="text-[#0059FF] text-6xl laptop:text-7xl font-normal leading-none max-w-xl text-wrap">
          {title}
        </h1>
        <div className=''>
          
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-72 py-5  laptop:px-20 laptop:py-24">
      <div
        className={"space-y-2.5 laptop:col-start-2"}>
        {subtitle && (

          <div>
          <h1 className="text-[50px] font-normal leading-none text-black laptop:w-[552px]">
            {subtitle}
          </h1>
        </div>
        )}
        <div className="space-y-4">
          <h2 className="text-lg laptop:text-[30px]">Overview</h2>
          <p className="text-sm aptop:text-[20px] laptop:w-[317px]">{description}</p>
        </div>
      </div>
    </div>
           <div
        className={`space-y-2.5 laptop:col-start-1`}
      ><div className="space-y-4">
          <h2 className="text-lg laptop:text-[30px]">{sectionTitle}</h2>
          <p className="text-sm laptop:text-[16px] laptop:w-[370px]">{sectionDescription}</p>
        </div>

          </div>
          
        </div>
    </div>
  );
};
