import { useEffect, useCallback, useRef } from "react";

import { GuestBookCard } from "@/components/guest/GuestBookCard/GuestBookCard";
import { GuestBookCardContainer } from "@/components/guest/GuestBookCard/GuestBookCardContainer";
import { GuestBookContainer } from "@/components/guest/GuestBookContainer/GuestBookContainer";
import { GuestBookForm } from "@/components/guest/GuestBookForm/GuestBookForm";
import { GuestBookInput } from "@/components/guest/GuestBookInput/GuestBookInput";
import { GuestBookTextArea } from "@/components/guest/GuestBookTextArea/GuestBookTextArea";

import { useFetchMessages } from "@/hooks/useFetchMessages";
import { useSubmitMessage } from "@/hooks/useSubmitMessage";

import styled from "@emotion/styled";

const API_URL = import.meta.env.VITE_API_URL as string;

export default function GuestPage() {
    const { messages, isLoading, hasMore, fetchMessages, setMessages } = useFetchMessages(API_URL);
    const { to, setTo, from, setFrom, content, setContent, handleSubmit } = useSubmitMessage(API_URL);

    const observer = useRef<IntersectionObserver | null>(null);
    const lastMessageElementRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    fetchMessages();
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, hasMore, fetchMessages],
    );

    const onSubmit = async () => {
        const newMessage = await handleSubmit();
        if (newMessage) {
            setMessages((prevMessages) => [newMessage, ...prevMessages]);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]);
    console.log("messages", messages);

    return (
        <>
            <GuestBookContainer>
                <GuestBookForm>
                    <GuestBookInput
                        name="receiver"
                        label="TO."
                        width="100px"
                        placeholder="받는사람"
                        value={to}
                        onChange={(e) => setTo(e.target.value)}
                    />
                    <GuestBookTextArea
                        placeholder="경북대학교 디자인학과 학생들에게 따뜻한 응원의 한마디를 남겨주세요:)"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <GuestBookInput
                        name="receiver"
                        label="FROM."
                        width="105px"
                        placeholder="보내는사람"
                        value={from}
                        onChange={(e) => setFrom(e.target.value)}
                    />
                </GuestBookForm>
                <AddButton onClick={onSubmit}>메시지 전송</AddButton>
                <GuestBookCardContainer>
                    {messages.map((message, index) => (
                        <GuestBookCard
                            key={index}
                            ref={index === messages.length - 1 ? lastMessageElementRef : null}
                            to={message.to}
                            from={message.from}
                            content={message.content}
                        />
                    ))}
                </GuestBookCardContainer>
                {isLoading && <LoadingMessage>메시지를 불러오는 중...</LoadingMessage>}
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
