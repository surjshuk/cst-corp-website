


import StickyWrapper from "../HOC/StickyWrapper";

const Solutions = () => {
    return (
        <StickyWrapper
            className="pt-6 pb-[72px] px-5 tablet:top-0 tablet:pt-[80px] tablet:px-12 tablet:pb-10 laptop:pt-[140px] laptop:px-20"
            id="solutions"
            top={true}
        >
            <div className="flex flex-col tablet:flex-row items-start gap-y-[40px] tablet:gap-y-0 tablet:gap-x-[299px]">
                {/* Left side: H1 */}
                <h1 className="text-[28px] leading-tight tablet:text-5xl tablet:leading-[105%] laptop:text-[80px] font-normal text-black font-wayray max-w-[573px]">
                    AI-Powered Solutions for Business Transformation
                </h1>

                {/* Right side: Paragraph grid */}
                <div className="grid gap-[36px] w-full tablet:w-[661px]">
                    <p className="text-[20px] tablet:text-[20px] font-wayray font-normal leading-normal">
                        At CST, we are at the forefront of artificial intelligence innovation, delivering transformative solutions that drive efficiency, enhance safety, and maximize profitability across industries. Our mission is to empower clients with AI-driven tools that optimize operations and provide measurable business value.
                    </p>
                    <p className="text-[20px] tablet:text-[20px] font-wayray font-normal leading-normal">
                        By combining cutting-edge technology with strategic expertise, we enable organizations to navigate the complexities of AI adoption and achieve sustainable growth.
                    </p>
                </div>
            </div>
        </StickyWrapper>
    );
};

export default Solutions;
