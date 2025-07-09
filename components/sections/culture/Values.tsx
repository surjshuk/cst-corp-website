"use client"
import { PLUS } from "@/app/assets";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import { useState } from "react";

const values = [
    {
      value: "Lorem Ipsum Dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      value: "Consectetur Adipiscing",
      description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      value: "Sed Do Eiusmod",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      value: "Tempor Incididunt",
      description: "Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      value: "Ut Labore Et",
      description: "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
      value: "Dolore Magna",
      description: "Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
    }
  ];
  
  
export const Values = () => {
    const [selected, setSelected] = useState(-1);

    const handleValueSelection = (index: number) => {
        if (index === selected) {
          setSelected(-1);
        } else {
          // setSelected(index); // Temporary: Stop Value collapsible from opening
          setSelected(-1);
        }
    }

    return ( 
        <section
            className="space-y-20 px-5 pt-20 pb-7 tablet:space-y-20 tablet:px-12 tablet:pb-12 laptop:ml-0 laptop:px-20 laptop:pt-40 laptop:pb-20 "
            id="values"
        >
            <div className="space-y-3.5 laptop:space-y-5">
                <h3 className="text-xs text-primary font-semibold tablet:text-sm">Values</h3>
                <h1 className="text-[28px] leading-tight laptop:text-[40px] w-11/12 laptop:w-7/12">To bring our vision of the future into reality as soon as possible, we have developed a set of core values that will help us achieve this goal</h1>
            </div>
            <div className="grid laptop:grid-cols-2 gap-8 items-start tablet:w-4/5 tablet:ml-auto">
                {values.map((value, index) => (
                    <Collapsible key={index} className={`space-y-3 border-l-2 border-primary pl-[22px] transition`} open={selected === index} onOpenChange={() => handleValueSelection(index)}>
                        <CollapsibleTrigger className="w-full text-start text-lg space-y-2 tablet:space-y-3 tablet:text-2xl pb-2"><span>{value.value}</span> <br/> <Image src={PLUS} alt="plus" className={`w-4 h-4 tablet:w-6 tablet:h-6 transition duration-500 ${selected === index && "rotate-45"}`}/> </CollapsibleTrigger>
                        <CollapsibleContent className="text-xs overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp tablet:text-base">{value.description}</CollapsibleContent>
                    </Collapsible>
                ))}
                <p className="text-base pt-4 tablet:text-2xl tablet:pt-14 laptop:pt-20">We think of these six values as our guiding principles and fundamental beliefs that help us function together as a team and work toward our common goal.</p>
                <p className="text-base tablet:text-2xl relative -top-4 tablet:static laptop:pt-20">We always keep in mind these values when making decisions, communicating with each other and the outside world, and hiring new team members.</p>
            </div>
        </section>
    );
};