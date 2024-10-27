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
            <GuestBookCardStyles.CardTo>TO. {to}</GuestBookCardStyles.CardTo>
            <GuestBookCardStyles.CardContent>{content}</GuestBookCardStyles.CardContent>
            <GuestBookCardStyles.CardFrom>FROM. {from}</GuestBookCardStyles.CardFrom>
        </GuestBookCardStyles.Container>
    );
});
