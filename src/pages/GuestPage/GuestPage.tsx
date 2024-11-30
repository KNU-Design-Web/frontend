import { GuestBookCard } from "@/components/GuestBookPage/GuestBookCard/GuestBookCard";
import { GuestBookCardContainer } from "@/components/GuestBookPage/GuestBookCard/GuestBookCardContainer";
import { GuestBookContainer } from "@/components/GuestBookPage/GuestBookContainer/GuestBookContainer";

import { useGuestBook } from "@/hooks/GuestBookPage/useGuestBook";

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
