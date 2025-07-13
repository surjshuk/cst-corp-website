import StickyWrapper from "../HOC/StickyWrapper";

const EnterpriseSuccess = () => {
    return (
        <div className="mt-[100px] mb-[100px]">
            <StickyWrapper
                className="pt-6 pb-[72px] px-5 tablet:top-0 tablet:pt-[80px] tablet:px-12 tablet:pb-10 laptop:pt-[140px] laptop:px-20"
                id="solutions"
                top={true}
            >
                <div className="flex flex-col tablet:flex-row justify-between items-start space-y-5 tablet:space-y-0 tablet:space-x-[50px]">
                    {/* Left side: H1 heading */}
                    <div className="max-w-[576px] mt-[76px]">
                        <h1 className="text-[28px] text-[#0059FF] leading-tight tablet:text-5xl tablet:leading-[105%] laptop:text-[80px] font-normal font-wayray">
                            Driving Enterprise Success in the Age of Intelligence
                        </h1>
                    </div>

                    {/* Right side: paragraphs aligned 118px below h1 */}
                    <div className="w-full tablet:w-[562px] ml-auto mb-[100px]">
                        <div className="flex flex-col space-y-[40px]">
                            <p className="mt-[118px] text-xs tablet:text-[30px]  text-black font-wayray font-normal leading-normal">
                                In an era defined by rapid technological advancement, artificial intelligence (AI) is reshaping industries and redefining competitive landscapes. For Fortune 500 and S&P 500 enterprises, leveraging AI is no longer optional—it is a strategic imperative. Our AI consulting services empower organizations to harness AI’s transformative potential, delivering measurable value through innovation, efficiency, and ethical deployment.
                            </p>

                            <p className="text-xs tablet:text-[30px] text-black font-wayray font-normal leading-normal w-[452px] h-[132px]">
                                Below, we explore the critical role of AI consulting in the future, strategies to maximize its value, and innovative approaches to meet the evolving needs of global enterprises.
                            </p>
                        </div>
                    </div>
                </div>
            </StickyWrapper>
        </div>
    );
};

export default EnterpriseSuccess;
