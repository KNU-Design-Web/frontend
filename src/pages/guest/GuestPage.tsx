import { GuestBookCard } from "@/domains/guest/components/GuestBookCard/GuestBookCard";
import { GuestBookCardContainer } from "@/domains/guest/components/GuestBookCard/GuestBookCardContainer";
import { GuestBookContainer } from "@/domains/guest/components/GuestBookContainer/GuestBookContainer";

import { useGuestBook } from "@/domains/guest/hooks/useGuestBook";

import styled from "@emotion/styled";

export default function GuestPage() {
    const { isLastPage, guestBookData, targetRef } = useGuestBook();

    return (
        <>
            <GuestBookContainer>
                <GuestBookCardContainer>
                    {guestBookData.map((guestBookMessage) => {
                        return (
                            <GuestBookCard
                                key={guestBookMessage.id}
                                to={guestBookMessage.to}
                                from={guestBookMessage.from}
                                content={guestBookMessage.content}
                            />
                        );
                    })}
                    {!isLastPage && <LoadingMessage ref={targetRef}>메시지를 불러오는 중...</LoadingMessage>}
                </GuestBookCardContainer>
            </GuestBookContainer>
        </>
    );
}

const LoadingMessage = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 18px;
    color: #666;
`;
