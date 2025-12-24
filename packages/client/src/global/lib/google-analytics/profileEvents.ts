import { useState } from "react";
import ReactGA from "react-ga4";

export const hoverProfileEvent = (id: number) => {
    return ReactGA.event({
        category: `profile/${id}`,
        action: "hover",
        label: `?section=profile&id=${id}`,
    });
};

export const hoverAfterClickProfileEvent = (id: number) => {
    return ReactGA.event({
        category: `profile/${id}`,
        action: "hover-after-click",
        label: `?section=profile&id=${id}`,
    });
};

export const useProfileEvent = (id: number) => {
    const [isHovered, setIsHovered] = useState(false);

    const dispatchMouseOverEvent = () => {
        setIsHovered(true);
        hoverProfileEvent(id);
    };

    const dispatchMouseClickEvent = () => {
        if (!isHovered) return;
        hoverAfterClickProfileEvent(id);
    };

    return {
        dispatchMouseClickEvent,
        dispatchMouseOverEvent,
    };
};
