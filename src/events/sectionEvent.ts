import { useState } from "react";
import ReactGA from "react-ga4";

export const hoverSectionEvent = (section: string) => {
    return ReactGA.event({
        category: `section/${section}`,
        action: "hover",
        label: `?section=${section}`,
    });
};

export const clickSectionEvent = (section: string) => {
    return ReactGA.event({
        category: `section/${section}`,
        action: "hover-after-click",
        label: `?section=${section}`,
    });
};

export const useSectionEvent = (section: string) => {
    const [isHovered, setIsHovered] = useState(false);

    const dispatchMouseOverEvent = () => {
        setIsHovered(true);
        hoverSectionEvent(section);
    };

    const dispatchMouseClickEvent = () => {
        if (!isHovered) return;
        clickSectionEvent(section);
    };

    return {
        dispatchMouseClickEvent,
        dispatchMouseOverEvent,
    };
};
