import StickyWrapper from "../HOC/StickyWrapper";

const Hero = () => {
    return (
        <StickyWrapper className="pt-6 pb-[72px] px-5 tablet:top-0 tablet:pt-[80px] tablet:px-12 tablet:pb-10 laptop:pt-[140px] laptop:px-20" id="who-we-are" top={true}>
            <div className="space-y-5 tablet:space-y-24 laptop:space-y-36">
                <h1 className="text-[28px] leading-tight tablet:text-5xl tablet:leading-[105%] laptop:text-7xl">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
                <div className="w-5/12 flex gap-3 flex-col items-end ml-auto tablet:gap-5 tablet:items-start tablet:justify-end tablet:w-fit laptop:flex-row">
                    <p className="tablet:w-72 text-xs tablet:text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="tablet:w-72 text-xs tablet:text-sm">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.</p>
                </div>  
            </div>
        </StickyWrapper>
    )
}

export default Hero;