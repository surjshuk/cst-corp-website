import React from 'react';
import StickyWrapper from '../HOC/StickyWrapper';
import { cn } from '@/lib/utils';

interface SectionProps {
    id: string;
    title: string;
    subtitle: string;
    description1: string;
    description2: string;
    sectionStyles?: string;
    titleStyles?: string;
    descriptionStyles?: string;
    top?: boolean
}

export const Section: React.FC<SectionProps> = ({
    id,
    title,
    subtitle,
    description1,
    description2,
    sectionStyles = '',
    titleStyles = '',
    descriptionStyles = '',
    top=true
}) => {
    return (
        <StickyWrapper
            className={cn(`px-5 pt-6 pb-7 tablet:px-12 tablet:pb-12 laptop:ml-0 laptop:px-20 laptop:pt-40 laptop:pb-20 space-y-6 tablet:space-y-24`, sectionStyles)}
            id={id}
            top={top}
        >  
            <div className="space-y-3.5 laptop:space-y-5">
                <h3 className="text-xs text-primary font-semibold tablet:text-sm">{subtitle}</h3>
                <h1 className={`text-[28px] leading-tight laptop:text-5xl tablet:font-medium w-11/12 laptop:w-7/12 ${titleStyles}`}>{title}</h1>
            </div>
            <div className="flex justify-end items-end flex-col gap-2 tablet:gap-5 laptop:gap-7 laptop:flex-row">
                <p className={`w-2/3 text-xs tablet:text-sm laptop:w-48 ${descriptionStyles}`}>{description1}</p>
                <p className={`w-2/3 text-xs tablet:text-sm laptop:w-52 ${descriptionStyles}`}>{description2}</p>
            </div>
        </StickyWrapper>
    );
};