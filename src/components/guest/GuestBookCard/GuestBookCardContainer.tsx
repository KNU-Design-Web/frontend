import * as GuestBookCardContainerStyles from "./GuestBookCardContainer.style";

export interface GuestBookCardContainerProps {
    children?: React.ReactNode;
}

export const GuestBookCardContainer = ({ children }: GuestBookCardContainerProps) => {
    return <GuestBookCardContainerStyles.Container>{children}</GuestBookCardContainerStyles.Container>;
};
