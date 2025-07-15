import StickyWrapper from "../HOC/StickyWrapper";

const Solutions = () => {
    return (
        <StickyWrapper className="pt-6 pb-[72px] px-5 tablet:top-0 tablet:pt-[80px] tablet:px-12 tablet:pb-10 laptop:pt-[140px] laptop:px-20" id="who-we-are" top={true}>
            <div className="space-y-5 tablet:space-y-24 laptop:space-y-36">
                <h1 className="text-[28px] leading-tight tablet:text-5xl tablet:leading-[105%] laptop:text-7xl">AI-Powered Solutions for Business Transformation.</h1>
                <div className="w-5/12 flex gap-3 flex-col items-end ml-auto tablet:gap-5 tablet:items-start tablet:justify-end tablet:w-fit laptop:flex-row">
                    <p className="tablet:w-72 text-xs tablet:text-sm">
                       a At CST, we are at the forefront of artificial intelligence innovation, delivering transformative solutions that drive efficiency, enhance safety, and maximize profitability across industries. Our mission is to empower clients with AI-driven tools that optimize operations and provide measurable business value.
                    </p>
                    <p className="tablet:w-72 text-xs tablet:text-sm">
                        By combining cutting-edge technology with strategic expertise, we enable organizations to navigate the complexities of AI adoption and achieve sustainable growth.
                    </p>
                </div>  
            </div>
        </StickyWrapper>
        
    );
};

export default Solutions;
