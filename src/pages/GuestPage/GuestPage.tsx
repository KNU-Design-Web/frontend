import { GuestBookCard } from "@/components/GuestBookPage/GuestBookCard/GuestBookCard";
import { GuestBookCardContainer } from "@/components/GuestBookPage/GuestBookCard/GuestBookCardContainer";
import { GuestBookContainer } from "@/components/GuestBookPage/GuestBookContainer/GuestBookContainer";
import { GuestBookForm } from "@/components/GuestBookPage/GuestBookForm/GuestBookForm";
import { GuestBookInput } from "@/components/GuestBookPage/GuestBookInput/GuestBookInput";
import { GuestBookTextArea } from "@/components/GuestBookPage/GuestBookTextArea/GuestBookTextArea";

import { useGuestBook } from "@/hooks/GuestBookPage/useGuestBook";

import styled from "@emotion/styled";

export default function GuestPage() {
    const {
        isLastPage,
        guestBookData,
        targetRef,
        from,
        to,
        content,
        handleFromChange,
        handleToChange,
        handleContentChange,
        handleSubmit,
    } = useGuestBook();

    return (
        <>
            <GuestBookContainer>
                {/* <GuestBookForm>
                    <GuestBookInput
                        name="receiver"
                        label="TO."
                        width="100px"
                        placeholder="받는사람"
                        value={to}
                        onChange={handleToChange}
                    />
                    <GuestBookTextArea
                        placeholder="경북대학교 디자인학과 학생들에게 따뜻한 응원의 한마디를 남겨주세요:)"
                        value={content}
                        onChange={handleContentChange}
                    />
                    <GuestBookInput
                        name="sender"
                        label="FROM."
                        width="105px"
                        placeholder="보내는사람"
                        value={from}
                        onChange={handleFromChange}
                    />
                </GuestBookForm>
                <AddButton onClick={handleSubmit}>메시지 전송</AddButton> */}
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

const AddButton = styled.button`
    width: 100%;
    height: 72px;
    background-color: #9085ff;
    font-size: 24px;
    color: white;
    font-weight: bold;
`;

const LoadingMessage = styled.div`
    text-align: center;
    padding: 20px;
    font-size: 18px;
    color: #666;
`;
