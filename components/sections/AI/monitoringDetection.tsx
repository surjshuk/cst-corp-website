import StickyWrapper from "../HOC/StickyWrapper";

const MonitoringDetection = () => {
    return (
        <StickyWrapper
            className="pt-6 pb-[72px] px-5 tablet:top-0 tablet:pt-[80px] tablet:px-12 tablet:pb-10 laptop:pt-[140px] laptop:px-20"
            id="solutions"
            top={true}
        >
            <div className="flex flex-col tablet:flex-row justify-between items-start space-y-5 tablet:space-y-0 tablet:space-x-2 laptop:space-x-4">
                {/* Left side: H1 heading followed by 3 paragraphs */}
                <div className="max-w-[864px] mt-[76px] space-y-6">
                    <h1 className="text-[28px] text-[#0059FF] leading-tight tablet:text-5xl tablet:leading-[105%] laptop:text-[80px] font-normal font-wayray">
                        Monitoring and Detection
                    </h1>
                    {/* Three paragraphs below H1, each with 30px font size */}
                    <p className="text-[25px] text-black font-wayray font-normal leading-normal">
                    PythiaAI uses advanced AI to detect failure modes in oil and gas rig equipment. For mud pumps, it identifies seal leaks, cavitation, and piston wear. For top drives, it monitors gearbox wear, bearing fatigue, shaft misalignment, over-torque/over-speed, and hydraulic/electrical issues. For diesel generators, it tracks engine parameters and load imbalances to prevent outages. In high-risk scenarios, adding vibration, acoustic, or thermal sensors enhances fault detection for bearings, gearboxes, and injectors when EDR data is insufficient.
                    </p>
                    <p className="text-[25px] text-black font-wayray font-normal leading-normal">
                    In a recent case, PythiaAI combined vibration and EDR data to predict a mud pump seal failure 24 hours in advance. Its anomaly detection identifies deviations within 5-15 minutes, before signals degrade or trigger standard alarms.
                    </p>
                    <p className="text-[25px] text-black font-wayray font-normal leading-normal">
                    The following tables show an indicative list of alerts that can be generated for each asset type on the PythiaAI platform.
                    </p>
                </div>
            </div>
        </StickyWrapper>
    );
};

export default MonitoringDetection;
