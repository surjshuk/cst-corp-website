import { CHEVRONRIGHT, OURTEAM } from "@/app/assets";
import Image from "next/image";
import Link from "next/link";

export const Team = () => {
    return (
        <section id="our-team" className="h-screen relative">
                <Image
                    src={OURTEAM}
                    alt={`our-team`}
                    fill
                    className="object-cover object object-bottom"
                />
                <div className="bg-gradient-to-t from-black via-[#0a0a0ae0] to-transparent absolute inset-0" />

                <div className="absolute bottom-0 text-white flex flex-col p-5 gap-4 tablet:px-12 tablet:py-10 tablet:w-5/6 tablet:gap-8 laptop:px-20 laptop:py-10 laptop:items-end laptop:w-full laptop:flex-row">
                   <h3 className="flex-1 text-[32px] leading-tight font-medium tablet:text-4xl laptop:text-5xl">
                    Building Bold Technology for Mission-Critical Enterprises
                    </h3>

                    <div className="flex-1 grid grid-cols-2 gap-10 tablet:gap-6 laptop:grid-cols-2">
                    <p className="text-xs font-medium laptop:max-w-[268px] tablet:text-sm">
                        At CST Corp, our people are our edge. We assemble cross-functional teams of AI researchers, robotics engineers, cloud architects, and industry specialists to solve operationally complex, high-value problems for defense, energy, healthcare, and enterprise clients worldwide.
                    </p>

                    <div className="laptop:max-w-[268px] space-y-4 tablet:space-y-8">
                        <p className="text-xs font-medium tablet:text-sm">
                        Our culture values system ownership, technical rigor, and decisive innovation. From autonomous platforms to AI-driven enterprise systems, we prioritize reliability, security, and operational resilience — ensuring every product we deliver performs flawlessly where it matters most.
                        </p>

                        <div className="col-span-2 row-span-2 ml-1/2 mt-10">
                        <Link href="/culture" className="text-[10px] leading-none font-medium tablet:text-sm">
                            <span className="block">Learn more</span>
                            <span className="inline">
                            about our culture{" "}
                            <Image src={CHEVRONRIGHT} alt="chevron-right" className="inline w-2" />
                            </span>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
    );
}