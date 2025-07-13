import StickyWrapper from "../HOC/StickyWrapper";

const Hero = () => {
    return (
        <StickyWrapper className="pt-6 pb-[72px] px-5 tablet:top-0 tablet:pt-[80px] tablet:px-12 tablet:pb-10 laptop:pt-[140px] laptop:px-20" id="who-we-are" top={true}>
            <div className="space-y-5 tablet:space-y-24 laptop:space-y-36">
                <h1 className="text-[28px] leading-tight tablet:text-5xl tablet:leading-[105%] laptop:text-7xl">At CST we&apos;re working on building a future that creates shared success by solving your technology needs to help you achieve your organizational goals.</h1>
                <div className="w-5/12 flex gap-3 flex-col items-end ml-auto tablet:gap-5 tablet:items-start tablet:justify-end tablet:w-fit laptop:flex-row">
                    <p className="tablet:w-72 text-xs tablet:text-sm">CST is ready to help you overcome the constraints that time and distance traditionally impose on transforming your business and, consequently, your profitability and competitiveness.</p>
                </div>  
            </div>
        </StickyWrapper>
    )
}

export default Hero;