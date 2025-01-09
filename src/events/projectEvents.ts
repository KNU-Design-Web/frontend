import { useState, useRef } from "react";
import ReactGA from "react-ga4";

export const hoverProjectEvent = (id: number) => {
    return ReactGA.event({
        category: `project/${id}`,
        action: "hover",
        label: `?section=project&id=${id}`,
    });
};

export const hoverAfterClickProjectEvent = (id: number, hoverDuration: number) => {
    return ReactGA.event({
        category: `project/${id}`,
        action: "hover-after-click",
        label: `?section=project&id=${id}`,
        value: hoverDuration,
        nonInteraction: true,
    });
};

export const useProjectEvent = (id: number) => {
    const [isHovered, setIsHovered] = useState(false);
    const hoverStartTime = useRef<number | null>(null);

    const dispatchMouseOverEvent = () => {
        if (!isHovered) {
            setIsHovered(true);
            hoverStartTime.current = Date.now();
            hoverProjectEvent(id);
        }
    };

    const dispatchMouseClickEvent = () => {
        if (!isHovered || hoverStartTime.current === null) return;
        const hoverEndTime = Date.now();
        const hoverDuration = hoverEndTime - hoverStartTime.current;

        hoverAfterClickProjectEvent(id, hoverDuration);

        setIsHovered(false);
        hoverStartTime.current = null;
    };

    return {
        dispatchMouseClickEvent,
        dispatchMouseOverEvent,
    };
};
