import StickyWrapper from "../HOC/StickyWrapper";

const PythiaAI = () => {
    return (
        <StickyWrapper
            className="pt-6 pb-[72px] px-5 tablet:top-0 tablet:pt-[80px] tablet:px-12 tablet:pb-10 laptop:pt-[140px] laptop:px-20"
            id="solutions"
            top={true}
        >
            <div className="flex flex-col tablet:flex-row justify-between items-start space-y-5 tablet:space-y-0 tablet:space-x-2 laptop:space-x-4">
                {/* Left side: H1 heading (top left) */}
                <div className="max-w-[576px] mt-[76px]">
                    <h1 className="text-[28px] text-[#0059FF] leading-tight tablet:text-5xl tablet:leading-[105%] laptop:text-[90px] font-normal font-wayray">
                        Pythia AI
                    </h1>
                </div>

                {/* Right side: Concluding paragraph (bottom right, shifted 100px below H1) */}
                <div className="w-full tablet:w-[562px] ml-auto flex items-end justify-start h-full pb-[50px]">
                    <p className="text-xs tablet:text-[30px] text-black font-wayray font-normal leading-normal max-w-[562px] mt-[300px] text-left">
                        PythiaAI is an advanced predictive maintenance platform for oil and gas rig equipment, such as mud pumps, top drives, and diesel generators. Using Electronic Drilling Recorder (EDR) data and optional sensors, it analyzes real-time data streams—pressure, vibration, torque, flow, and temperature—to detect anomalies and predict failures. PythiaAI provides precise fault detection, accurate Remaining Useful Life (RUL) modeling, and actionable guidance, empowering maintenance teams with exceptional operational foresight.
                    </p>
                </div>

            </div>
        </StickyWrapper>
    );
};

export default PythiaAI;
