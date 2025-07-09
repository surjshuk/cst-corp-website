import Image from "next/image"

export const Locations = () => {
    return (
        <section className="h-screen relative bg-black" id="location">
            <Image
                src=""
                alt={`world map`}
                fill
                priority
                className="object-cover object-[80%]"
            />

            <div className="text-white pb-40 relative z-10 p-5 tablet:px-12 tablet:py-10 laptop:ml-0 laptop:px-20 laptop:py-10">
                <h2 className=" mb-3 text-[28px] leading-tight tablet:font-medium tablet:text-5xl">Locations</h2>
                <div className="space-y-6">
                    <div className="flex gap-24 font-medium">
                        <span className="text-sm">Texas</span>
                        <div className="space-y-1.5">
                            <p className="text-[10px] tablet:text-sm text-primary">R&D center</p>
                            <p className="text-[10px] tablet:text-sm">12210 Bedford St. Houston, TX 77031</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
