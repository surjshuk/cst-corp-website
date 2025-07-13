import StickyWrapper from "../HOC/StickyWrapper";

const AIConsulting = () => {
    return (
        <StickyWrapper
            className="pt-6 pb-[72px] px-5 tablet:top-0 tablet:pt-[80px] tablet:px-12 tablet:pb-10 laptop:pt-[140px] laptop:px-20"
            id="solutions"
            top={true}
        >
            <div className="flex flex-col space-y-10">
                {/* Top flex container for H1 and introductory paragraph */}
                <div className="flex flex-col max-w-[576px] mt-[76px] space-y-6">
                    <h1 className="text-[28px] text-[#0059FF] leading-tight tablet:text-5xl tablet:leading-[105%] laptop:text-[80px] font-normal font-wayray">
                        Monetizing AI Consulting Effectively
                    </h1>
                    <p className="text-xs tablet:text-[30px] text-black font-wayray font-normal leading-normal">
                    To deliver maximum value to clients and ensure sustainable growth, AI consulting must be strategically monetized. Our approach combines innovative pricing models, scalable offerings, and client-centric strategies to drive impactful results:
                    </p>
                </div>

                {/* Grids below: Left and right columns, spaced 100px below H1 */}
                <div className="w-full grid grid-cols-1 laptop:grid-cols-2 gap-x-4 gap-y-[30px] mt-[100px]">
                    {/* Left grid: 4 boxes, spaced 30px vertically, with doubled width */}
                    <div className="space-y-[30px]">
                        <div className="max-w-[800px]">
                            <h2 className="text-[30px] text-[#0059FF] font-wayray font-normal leading-normal">Niche Specialization</h2>
                            <p className="text-[25px] text-black font-wayray font-normal leading-normal">By focusing on high-impact industries such as healthcare (e.g., AI-driven diagnostics) or finance (e.g., fraud detection), we deliver tailored solutions that address sector-specific challenges. This expertise commands premium pricing and fosters long-term client relationships.</p>
                        </div>
                        <div className="max-w-[800px]">
                            <h2 className="text-[30px] text-[#0059FF] font-wayray font-normal leading-normal">Retainer-Based Engagements</h2>
                            <p className="text-[25px] text-black font-wayray font-normal leading-normal">Long-term partnerships ensure continuous value delivery through services like AI model maintenance, performance optimization, and strategic advisory. Retainers provide predictable revenue while supporting clients’ evolving AI needs.</p>
                        </div>
                        <div className="max-w-[800px]">
                            <h2 className="text-[30px] text-[#0059FF] font-wayray font-normal leading-normal">Corporate Training Programs</h2>
                            <p className="text-[25px] text-black font-wayray font-normal leading-normal">We empower client teams with AI literacy through workshops and certifications, ensuring sustainable adoption. Tailored training on tools like predictive analytics platforms enhances workforce capability and drives organizational transformation.</p>
                        </div>
                        <div className="max-w-[800px]">
                            <h2 className="text-[30px] text-[#0059FF] font-wayray font-normal leading-normal">Proprietary AI Frameworks</h2>
                            <p className="text-[25px] text-black font-wayray font-normal leading-normal">Licensing reusable AI models or methodologies, such as compliance auditing tools, creates high-margin revenue streams while positioning us as thought leaders in the AI space.</p>
                        </div>
                    </div>

                    {/* Right grid: 4 boxes, spaced 30px vertically, with doubled width and right alignment */}
                    <div className="space-y-[30px]">
                        <div className="max-w-[800px] ml-auto">
                            <h2 className="text-[30px] text-[#0059FF] font-wayray font-normal leading-normal">Outcome-Based Pricing</h2>
                            <p className="text-[25px] text-black font-wayray font-normal leading-normal">Aligning fees with measurable business outcomes—such as cost savings or revenue uplift—demonstrates our commitment to client success. For example, we may share in the financial benefits of an AI-optimized supply chain, reinforcing trust and accountability.</p>
                        </div>
                        <div className="max-w-[800px] ml-auto">
                            <h2 className="text-[30px] text-[#0059FF] font-wayray font-normal leading-normal">Productized Consulting Packages</h2>
                            <p className="text-[25px] text-black font-wayray font-normal leading-normal">Standardized offerings, such as AI readiness assessments or rapid chatbot deployments, enable scalability without compromising quality. These packages make AI accessible to enterprises of all sizes while streamlining delivery.</p>
                        </div>
                        <div className="max-w-[800px] ml-auto">
                            <h2 className="text-[30px] text-[#0059FF] font-wayray font-normal leading-normal">AI-as-a-Service (AIaaS) Partnerships</h2>
                            <p className="text-[25px] text-black font-wayray font-normal leading-normal">By integrating consulting with leading cloud AI platforms (e.g., AWS SageMaker, Microsoft Azure AI), we deliver end-to-end solutions while leveraging partner ecosystems for additional revenue streams.</p>
                        </div>
                        <div className="max-w-[800px] ml-auto">
                            <h2 className="text-[30px] text-[#0059FF] font-wayray font-normal leading-normal">Data Strategy Integration</h2>
                            <p className="text-[25px] text-black font-wayray font-normal leading-normal">Combining AI consulting with data governance and engineering services ensures robust AI performance. Comprehensive packages that include data pipeline development and AI deployment maximize client value and revenue potential.</p>
                        </div>
                    </div>
                </div>
                
                <p className="text-xs tablet:text-[25px] text-black font-wayray font-normal leading-normal max-w-[562px] h-[132px] text-right">
                        By aligning our monetization strategies with client priorities, we deliver exceptional ROI while building a scalable, future-ready consulting practice.
                </p>


            </div>
        </StickyWrapper>
    );
};

export default AIConsulting;
