"use client"
import { cn } from '@/lib/utils';
import React, { useState, useEffect, ReactNode, useRef } from 'react';

const StickyWrapper = ({id, className, children, top}: {id: string, className: string, children: ReactNode, top?: boolean}) => {
    const [isSticky, setIsSticky] = useState(top); // Track sticky state -> true => sticky
    const sectionRef = useRef<HTMLDivElement | null>(null); // Reference to the Hero section

    // Effect to handle scroll behavior
    useEffect(() => {
        const handleScroll = () => {
        if (sectionRef.current && top) {
            const sectionHeight = sectionRef.current.offsetHeight;
            const scrollPosition = window.scrollY;

            // Check if the scroll position is past the height of the section
            if (scrollPosition > sectionHeight) {
            setIsSticky(false); // Remove sticky when scrolled past the Hero section
            } else {
            setIsSticky(true); // Keep sticky if still in view
            }
        }
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [top]);
    
    return (
        <section
            className={cn(`${isSticky ? 'sticky top-0 z-10' : 'static'}`, className)}
            id={id}
            ref={sectionRef}
        >
           {children}
        </section>
    );
}

export default StickyWrapper;
