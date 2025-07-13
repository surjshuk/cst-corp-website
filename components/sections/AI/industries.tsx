

import StickyWrapper from "../HOC/StickyWrapper";

const Solutions = () => {
    return (
        <StickyWrapper
            className="pt-6 pb-[72px] px-5 tablet:top-0 tablet:pt-[80px] tablet:px-12 tablet:pb-10 laptop:pt-[140px] laptop:px-20"
            id="solutions"
            top={true}
        >
            <div className="flex flex-col tablet:flex-row justify-between items-start space-y-5 tablet:space-y-0 tablet:space-x-2 laptop:space-x-4">
                {/* Left side: H1 heading and intro paragraph */}
                <div className="max-w-[576px] mt-[76px]">
                    <h1 className="text-[28px] text-[#0059FF] leading-tight tablet:text-5xl tablet:leading-[105%] laptop:text-[80px] font-normal font-wayray">
                        INDUSTRIES
                    </h1>
                    <p className="mt-[30px] text-xs tablet:text-[30px]  text-black font-wayray font-normal leading-normal">
                        Our AI solutions are versatile, delivering transformative results across a wide range of industries. We have successfully implemented solutions in sectors including, but not limited to:
                    </p>
                </div>

                {/* Right side: Grid of industries and concluding paragraph */}
                <div className="w-full tablet:w-[562px] ml-auto space-y-[40px]">
                    {/* Grid for headings and content */}
                    <div className="grid gap-[76px]">
                        <div>
                            <h2 className="text-[25px] text-[#0059FF] font-wayray font-normal leading-normal">Oil and Gas</h2>
                            <p className="text-[20px] text-black font-wayray font-normal leading-normal">Enhancing operational efficiency and safety through predictive maintenance and infrastructure monitoring.</p>
                        </div>
                        <div>
                            <h2 className="text-[25px] text-[#0059FF] font-wayray font-normal leading-normal">Manufacturing</h2>
                            <p className="text-[20px] text-black font-wayray font-normal leading-normal">Optimizing production processes and quality control with AI-driven insights.</p>
                        </div>
                        <div>
                            <h2 className="text-[25px] text-[#0059FF] font-wayray font-normal leading-normal">Healthcare</h2>
                            <p className="text-[20px] text-black font-wayray font-normal leading-normal">Improving patient outcomes and operational efficiency with predictive analytics and automation.</p>
                        </div>
                        <div>
                            <h2 className="text-[25px] text-[#0059FF] font-wayray font-normal leading-normal">Finance</h2>
                            <p className="text-[20px] text-black font-wayray font-normal leading-normal">Streamlining risk assessment and fraud detection with advanced AI models.</p>
                        </div>
                        <div>
                            <h2 className="text-[25px] text-[#0059FF] font-wayray font-normal leading-normal">Retail</h2>
                            <p className="text-[20px] text-black font-wayray font-normal leading-normal">Personalizing customer experiences and optimizing supply chains with AI-driven insights.</p>
                        </div>
                        <div>
                            <h2 className="text-[25px] text-[#0059FF] font-wayray font-normal leading-normal">Transportation</h2>
                            <p className="text-[20px] text-black font-wayray font-normal leading-normal">Enhancing logistics and fleet management with real-time AI analytics.</p>
                        </div>
                    </div>

                    {/* Concluding paragraph at bottom right */}
                    <p className="text-xs tablet:text-[25px] text-black font-wayray font-normal leading-normal w-[562px] h-[132px]">
                        Our flexible approach allows us to tailor solutions to the unique challenges of any industry, ensuring relevance and impact for your organization.
                    </p>
                </div>
            </div>
        </StickyWrapper>
    );
};

export default Solutions;
