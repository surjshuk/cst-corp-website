"use client"
import StickyWrapper from "../HOC/StickyWrapper"

interface OverviewProps {
  title: string
  description: string[]
}

export const Overview: React.FC<OverviewProps> = ({ title, description }) => {
  return (
    <StickyWrapper
      className="pt-6 pb-[72px] px-5 tablet:top-0 tablet:pt-[80px] tablet:px-12 tablet:pb-10 laptop:pt-[140px] laptop:px-20"
      id="solutions"
      top={true}
    >
      <div className="space-y-10 tablet:space-y-20 laptop:space-y-24">
        <h1 className="text-[28px] leading-tight text-[#0059FF] tablet:text-5xl tablet:leading-[105%] laptop:text-7xl font-wayray">
          {title}
        </h1>

        <div className="w-full flex flex-col gap-3 items-end ml-auto tablet:gap-5 tablet:items-start tablet:justify-end tablet:w-fit laptop:flex-row">
          {description.map((para, idx) => (
            <p
              key={idx}
              className="tablet:w-72 text-sm tablet:text-lg laptop:text-xl text-black font-wayray font-normal leading-normal"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </StickyWrapper>
  )
}