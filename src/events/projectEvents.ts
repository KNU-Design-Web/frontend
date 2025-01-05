import { useState } from "react";
import ReactGA from "react-ga4";

export const hoverProjectEvent = (id: number) => {
    return ReactGA.event({
        category: `project/${id}`,
        action: "hover",
        label: `?section=project&id=${id}`,
    });
};

export const hoverAfterClickProjectEvent = (id: number) => {
    return ReactGA.event({
        category: `project/${id}`,
        action: "hover-after-click",
        label: `?section=project&id=${id}`,
    });
};

export const useProjectEvent = (id: number) => {
    const [isHovered, setIsHovered] = useState(false);

    const dispatchMouseOverEvent = () => {
        setIsHovered(true);
        hoverProjectEvent(id);
    };

    const dispatchMouseClickEvent = () => {
        if (!isHovered) return;
        hoverAfterClickProjectEvent(id);
    };

    return {
        dispatchMouseClickEvent,
        dispatchMouseOverEvent,
    };
};
