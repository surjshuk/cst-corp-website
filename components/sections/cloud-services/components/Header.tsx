import React from 'react'
type HeaderProps = {
title:string
};
const Header : React.FC<HeaderProps> = ({title }) => {
  return (
    <div className=' p-5 laptop:p-12'>
        <h1 className="text-[#0059FF] text-6xl laptop:text-7xl font-normal leading-none max-w-xl text-wrap">
              {title}
            </h1>
    </div>
  )
}

export default Header
