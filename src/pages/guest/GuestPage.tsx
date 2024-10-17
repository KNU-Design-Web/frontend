import { useEffect, useState } from "react";

import axios from "axios";

import { GuestBookCard } from "@/components/guest/GuestBookCard/GuestBookCard";
import { GuestBookCardContainer } from "@/components/guest/GuestBookCard/GuestBookCardContainer";
import { GuestBookContainer } from "@/components/guest/GuestBookContainer/GuestBookContainer";
import { GuestBookForm } from "@/components/guest/GuestBookForm/GuestBookForm";
import { GuestBookInput } from "@/components/guest/GuestBookInput/GuestBookInput";
import { GuestBookTextArea } from "@/components/guest/GuestBookTextArea/GuestBookTextArea";

import styled from "@emotion/styled";

interface GuestBookMessage {
    id: string;
    to: string;
    from: string;
    content: string;
    createdAt: string;
}

interface GuestBookResponse {
    items: GuestBookMessage[];
    last_uuid: string;
}
const API_URL = import.meta.env.VITE_API_URL as string;

export default function GuestPage() {
    const [messages, setMessages] = useState<GuestBookMessage[]>([]);
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [content, setContent] = useState("");
    const [lastUuid, setLastUuid] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState(true);

    const fetchMessages = async () => {
        if (!hasMore || !API_URL) return;

        try {
            const response = await axios.get<GuestBookResponse>(`${API_URL}/messages`, {
                params: {
                    last_uuid: lastUuid,
                    take: 10,
                },
            });
            const newMessages = response.data.items;
            setMessages((prevMessages) => [...prevMessages, ...newMessages]);
            setLastUuid(response.data.last_uuid);
            setHasMore(newMessages.length === 10);
        } catch (error) {
            console.error("메시지를 불러오는 데 실패했습니다:", error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const handleSubmit = async () => {
        if (!API_URL) {
            console.log("url error");
            return;
        }
        if (!to.trim()) {
            alert("받는 사람을 입력해주세요.");
            return;
        }

        if (!from.trim()) {
            alert("보내는 사람을 입력해주세요.");
            return;
        }
        if (!content.trim()) {
            alert("내용을 입력해주세요.");
            return;
        }

        try {
            const response = await axios.post<GuestBookMessage>(`${API_URL}`, {
                to,
                from,
                content,
            });

            console.log("메시지가 성공적으로 전송되었습니다.");

            setTo("");
            setFrom("");
            setContent("");

            const newMessage = response.data;
            setMessages((prevMessages) => [newMessage, ...prevMessages]);
        } catch (error) {
            console.error("메시지 전송에 실패했습니다:", error);
        }
    };

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
                <AddButton onClick={handleSubmit}>메시지 전송</AddButton>
                <GuestBookCardContainer>
                    {messages.map((message) => (
                        <GuestBookCard key={message.id} to={message.to} from={message.from} content={message.content} />
                    ))}
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
