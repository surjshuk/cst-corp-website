

import StickyWrapper from "../HOC/StickyWrapper";

const Services = () => {
    return (
        <StickyWrapper
            className="h-[600px] px-5 tablet:px-12 laptop:px-20 pt-6 pb-10 tablet:pt-[80px] tablet:pb-[80px] laptop:pt-[140px] laptop:pb-[100px]"
            id="services"
            top={true}
        >
            <div className="flex flex-col justify-between h-full">

                {/* Top Left: Heading */}
                <h1 className="text-[#0059FF] text-[28px] tablet:text-5xl laptop:text-[80px] font-wayray font-normal leading-none max-w-[322px]">
                    Services
                </h1>

                {/* Bottom Right: Paragraph */}
                <div className="self-end w-full tablet:w-[661px]">
                    <p className="text-[#000] text-[30px] font-wayray font-normal leading-[1.4]">
                        Our comprehensive AI services support organizations at every stage of their AI journey, from strategy to ongoing optimization. We focus on delivering practical, high-impact solutions that align with your business objectives.
                    </p>
                </div>
            </div>
        </StickyWrapper>
    );
};

export default Services;
