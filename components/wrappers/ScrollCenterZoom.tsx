"use client"
import { ReactNode, useEffect, useRef, useState } from "react";

interface ScrollCenterZoomProps {
    children: ReactNode;
    minScale?: number; // Minimum scale value, default 0.5
    maxScale?: number; // Maximum scale value, default 1
}

export const ScrollCenterZoom: React.FC<ScrollCenterZoomProps> = ({
    children,
    minScale = 0.5,
    maxScale = 1,
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(maxScale);

    useEffect(() => {
        const handleScroll = () => {
            if (!wrapperRef.current) return;

            const { top, height } = wrapperRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate the distance from the center of the viewport
            const centerDistance = Math.abs(top + height / 2 - viewportHeight / 2);

            // Map the distance to a scale value (larger when near the center, smaller otherwise)
            const maxDistance = viewportHeight / 2;
            const newScale = Math.max(
                minScale,
                maxScale - centerDistance / maxDistance
            );

            setScale(newScale);
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup
    }, [minScale, maxScale]);

    return (
        <div
            ref={wrapperRef}
            className="transition-transform duration-300 ease-out"
            style={{
                transform: `scale(${scale})`,
            }}
        >
            {children}
        </div>
    );
};
