import { DEFENCEAPPLICATION, GEOSPATIAL, INSPECTION } from "@/app/assets";
import Image from "next/image";

const applications = [
    {
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.",
        details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        imageSrc: GEOSPATIAL,
        reverse: false,
    },
    {
        title: "Dolor Sit",
        description: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris. Nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        details: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.",
        imageSrc: INSPECTION,
        reverse: true,
    },
];

export const WhatWeDo = () => {
    return (
        <section id="what-we-do">   
            <div className="p-5 tablet:px-12 tablet:py-10 laptop:px-20 laptop:py-24">
                <h3 className="text-primary text-sm font-semibold mb-20">Lorem Ipsum</h3>
                <h4 className="text-primary text-base target:text-2xl font-medium mb-2 target:mb-0">Consectetur</h4>
                <p className="text-base target:text-2xl mb-[72px] max-w-[800px]">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p className="text-xs target:text-sm max-w-[145px] target:max-w-[206px] ml-auto">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.</p>
            </div>

            <Image
                src={DEFENCEAPPLICATION}
                alt={`defence-application`}
                priority
            />

            {applications.map((application, index) => ( 
                <div key={`${application.title}-${index}`}>
                    <div className="p-5 tablet:px-12 tablet:py-10 laptop:px-20 laptop:py-24">
                        <h3 className="text-primary text-sm font-semibold mb-20 opacity-0">Lorem Ipsum</h3>
                        <h4 className={`text-base text-primary font-medium max-w-[800px] mb-2 target:mb-0 tablet:text-2xl ${application.reverse ? "ml-auto" : ""}`}>{application.title}</h4>
                        <p className={`text-base mb-8 max-w-[800px] tablet:text-2xl tablet:mb-[72px] ${application.reverse ? "ml-auto" : ""}`}>{application.description}</p>
                    </div>

                    <div className={`tablet:px-12 tablet:py-10 laptop:px-20 laptop:py-24 flex items-end justify-between flex-col-reverse laptop:flex-row gap-6 tablet:gap-32 ${application.reverse ? "flex-row-reverse" : ""}`}>
                        <p className={`p-5 tablet:p-0 text-xs w-[158px] tablet:min-w-[208px] tablet:font-medium leading-tight tablet:text-sm ${application.reverse ? "ml-auto": "mr-auto"}`}>{application.details}</p>
                        <div className="flex-1">
                            <Image
                                src={application.imageSrc}  
                                alt={application.title}
                                className=""
                                />
                        </div>
                    </div>
                </div>
            ))}

        </section>
    );
};