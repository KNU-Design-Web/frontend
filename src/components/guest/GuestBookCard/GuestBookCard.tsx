import * as GuestBookCardStyles from "./GuestBookCard.style";
import styled from "@emotion/styled";

export interface GuestBookCardProps {
    to: string;
    from: string;
    content: string;
}

export const GuestBookCard = ({ to, from, content }: GuestBookCardProps) => {
    return (
        <GuestBookCardStyles.Container>
            <CardTo>TO. {to}</CardTo>
            <CardContent>{content}</CardContent>
            <CardFrom>FROM. {from}</CardFrom>
        </GuestBookCardStyles.Container>
    );
};

const CardTo = styled.p`
    display: flex;
    align-items: center;
    height: 30px;
`;
const CardContent = styled.p`
    height: 120px;
`;
const CardFrom = styled.p`
    display: flex;

    align-items: center;
    justify-content: right;
    height: 30px;
`;
