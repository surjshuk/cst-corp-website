import { HIGHLIGHT } from "@/app/assets";
import StickyWrapper from "../HOC/StickyWrapper";
import Image from "next/image";

const MainHero = () => {
    return (
        <StickyWrapper className="pt-6 pb-[72px] px-5 tablet:top-0 tablet:pt-[80px] tablet:px-12 tablet:pb-10 laptop:pt-[140px] laptop:px-20" id="abput-us  " top={true}>
            <div className="">
                <div>
                    <h1 className="laptop:w-2/5 tablet:w-2/3 w-[95%] text-2xl">At CST we&apos;re working on building a future that creates shared success by solving your technology needs to help you achieve your organizational goals.</h1>
                </div>
                <div className="flex justify-end my-14">
                    <div className="w-[55.5rem] h-[27.5rem] flex justify-center items-center overflow-hidden">
                        <Image src={HIGHLIGHT} alt="" width={1000} height={1000} />
                    </div>
                </div>
                <div className="flex tablet:justify-end">
                     <h1 className="laptop:w-2/5 tablet:w-2/3 w-[95%]  text-base">
                         CST is ready to help you overcome the constraints that time and distance traditionally impose on transforming your business and, consequently, your profitability and competitiveness.
                     </h1>
                </div>
            </div>
        </StickyWrapper>
    )
}

export default MainHero;