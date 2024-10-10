import * as GuestBookContainerStyles from "./GuestBookContainer.style";

export interface GuestBookContainerProps {
    children?: React.ReactNode;
}

export const GuestBookContainer = (props: GuestBookContainerProps) => {
    return <GuestBookContainerStyles.Container>{props.children}</GuestBookContainerStyles.Container>;
};
