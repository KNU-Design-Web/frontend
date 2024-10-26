import React from "react";

import * as GuestBookCardStyles from "./GuestBookCard.style";
import styled from "@emotion/styled";

export interface GuestBookCardProps {
    to: string;
    from: string;
    content: string;
}

export const GuestBookCard = React.forwardRef<HTMLDivElement, GuestBookCardProps>(({ to, from, content }, ref) => {
    return (
        <GuestBookCardStyles.Container ref={ref}>
            <CardTo>TO. {to}</CardTo>
            <CardContent>{content}</CardContent>
            <CardFrom>FROM. {from}</CardFrom>
        </GuestBookCardStyles.Container>
    );
});
const CardTo = styled.p`
    display: flex;
    align-items: center;
    height: 30px;
`;
const CardContent = styled.p`
    max-height: 120px;
`;
const CardFrom = styled.p`
    display: flex;

    align-items: center;
    justify-content: right;
    height: 30px;
`;
