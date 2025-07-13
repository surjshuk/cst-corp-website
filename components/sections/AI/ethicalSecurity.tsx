import StickyWrapper from "../HOC/StickyWrapper";

const EthicalSecurity = () => {
    return (
        <StickyWrapper
            className="pt-6 pb-[72px] px-5 tablet:top-0 tablet:pt-[80px] tablet:px-12 tablet:pb-10 laptop:pt-[140px] laptop}px-20"
            id="solutions"
            top={true}
        >
            <div className="flex flex-col tablet:flex-row justify-between items-start space-y-5 tablet:space-y-0 tablet:space-x-2 laptop:space-x-4">
                {/* Left side: H1 heading and intro paragraph */}
                <div className="max-w-[576px] mt-[76px]">
                    <h1 className="text-[28px] text-[#0059FF] leading-tight tablet:text-5xl tablet:leading-[105%] laptop:text-[80px] font-normal font-wayray">
                        Ensuring Ethical and Secure Deployment
                    </h1>
                    <p className="mt-[30px] text-xs tablet:text-[30px] text-black font-wayray font-normal leading-normal">
                        We are committed to responsible AI deployment, to mitigate risks. Our secure guardrails ensure:
                    </p>
                </div>

                {/* Right side: Grid of sections and concluding paragraph */}
                <div className="w-full tablet:w-[562px] ml-auto space-y-[40px] mr-6">
                    {/* Grid for headings and content */}
                    <div className="grid gap-[76px]">
                        <div>
                            <h2 className="text-[40px] text-[#0059FF] font-wayray font-normal leading-normal">Topical Relevance</h2>
                            <p className="text-[30px] text-black font-wayray font-normal leading-normal">AI applications remain focused on intended topics. Key benefits or inappropriate outputs.</p>
                        </div>
                        <div>
                            <h2 className="text-[40px] text-[#0059FF] font-wayray font-normal leading-normal">Safety and Credibility</h2>
                            <p className="text-[30px] text-black font-wayray font-normal leading-normal">Guarantees accurate and from credible sources. Key benefits and reliability in AI outputs.</p>
                        </div>
                        <div>
                            <h2 className="text-[40px] text-[#0059FF] font-wayray font-normal leading-normal">Security</h2>
                            <p className="text-[30px] text-black font-wayray font-normal leading-normal">Maintains safe third-party connections and data. Protects sensitive and ensures compliance.</p>
                        </div>
                    </div>

                    {/* Concluding paragraph at bottom right */}
                    <p className="text-xs tablet:text-[37px] text-black font-wayray font-normal leading-normal w-[562px] h-[132px]">
                        Our flexible approach allows us to tailor solutions to the unique challenges of any industry, ensuring relevance and impact for your organization.
                    </p>
                </div>
            </div>
        </StickyWrapper>
    ); 
};

export default EthicalSecurity;
