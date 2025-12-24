import { useCallback, useEffect, useRef, useState } from "react";
import { forceCheck } from "react-lazyload";

import { throttle } from "lodash-es";

import * as PhotoGridStyles from "./PhotoGrid.style";

export interface PhotoGridProps {
    id?: string;
    direction: "up" | "down";
    speed: number;
    children?: React.ReactNode;
}

export const PhotoGrid = ({ id, direction, speed, children }: PhotoGridProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const requestAnimationFrameRef = useRef<number | null>(null);

    const translateY = useRef<number>(0);
    const [isHovered, setIsHovered] = useState(false);
    const [gridHeight, setGridHeight] = useState(0);

    const throttledForceCheck = throttle(() => {
        forceCheck();
    }, 100);

    const animate = useCallback(() => {
        if (!ref.current) return;
        if (isHovered) return;

        if (direction === "up") {
            translateY.current -= speed;
            if (translateY.current <= -gridHeight) {
                translateY.current = 0;
            }
        } else {
            translateY.current += speed;
            if (translateY.current >= 0) {
                translateY.current = -gridHeight;
            }
        }

        throttledForceCheck();
        ref.current.style.transform = `translateY(${translateY.current}px)`;

        requestAnimationFrameRef.current = requestAnimationFrame(animate);
    }, [isHovered, direction, throttledForceCheck, speed, gridHeight]);

    useEffect(() => {
        if (ref.current) {
            const totalHeight = ref.current.scrollHeight;
            setGridHeight(totalHeight / 2);
        }

        requestAnimationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestAnimationFrameRef.current) {
                cancelAnimationFrame(requestAnimationFrameRef.current);
            }
        };
    }, [animate]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <PhotoGridStyles.Grid id={id} ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {children}
        </PhotoGridStyles.Grid>
    );
};
