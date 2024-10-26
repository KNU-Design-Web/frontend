import React from "react";

import { CardContainerProps } from "@/components/ProjectPage/ProjectCardContainer/ProjectCardContainer";

import * as GuestBookCardContainerStyles from "./GuestBookCardContainer.style";

export interface GuestBookCardContainerProps {
    children?: React.ReactNode;
}

export const GuestBookCardContainer = ({ children }: CardContainerProps) => {
    return <GuestBookCardContainerStyles.Container>{children}</GuestBookCardContainerStyles.Container>;
};
