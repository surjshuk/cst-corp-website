import Image from "next/image";

const trustedbyicons = [
    {
        src: "https://logoipsum.com/logos/logo-1.svg",
        title: "lorem-company",
        style: "w-[96px] tablet:w-[165px]"
    },
    {
        src: "https://logoipsum.com/logos/logo-2.svg",
        title: "ipsum-corp",
        style: "w-[96px] tablet:w-[140px]"
    },
    {
        src: "https://logoipsum.com/logos/logo-3.svg",
        title: "dolor-inc",
        style: "w-[96px] tablet:w-[103px]"
    }
];

export const Achievements = () => {
    return (
        <section id="achievements" className="relative p-5 tablet:px-12 tablet:py-24 laptop:px-20 laptop:py-28">
                <p className="hidden w-60 text-2xl leading-none ml-auto mb-32 laptop:block opacity-0">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore</p>
                <h3 className="text-[28px] leading-none tablet:font-medium mb-4 tablet:text-[40px] tablet:mb-6 laptop:mb-4">Trusted by<br/><span className="text-primary">Lorem Ipsum</span></h3>
                <p className="text-sm mb-12 tablet:font-medium tablet:mb-8 laptop:mb-5">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="grid grid-cols-2 items-center justify-center place-content-center gap-10 laptop:gap-y-5 mb-16 tablet:mb-48 tablet:grid-cols-3 laptop:w-1/2">
                    {trustedbyicons.map((src, index) => (
                        <div key={`${src.title}-${index}`} className="text-center m-auto">
                            <Image
                                src={src.src}
                                alt={src.title}
                                className={`object-cover ${src.style}`}
                                width={165}
                                height={60}
                            />
                        </div>
                    ))}
                </div>
                <p className="w-60 text-lg leading-[22px] mr-auto mb-8 tablet:block laptop:hidden opacity-0">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore</p> {/* TODO: Remove redundancy */}
                <p className="w-[208px] text-xs eading-tight bottom-1/2 right-20 ml-auto tablet:w-[206px] tablet:text-sm laptop:absolute">Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </section>
    );
};