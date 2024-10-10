import * as GuestBookCardStyles from "./GuestBookCard.style";

export interface GuestBookCardProps {
    to: string;
    from: string;
    content: string;
}

export const GuestBookCard = () => {
    return <GuestBookCardStyles.Container></GuestBookCardStyles.Container>;
};
