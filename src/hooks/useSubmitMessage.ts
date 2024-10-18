import { useState } from "react";

import axios from "axios";

interface GuestBookMessage {
    id: string;
    to: string;
    from: string;
    content: string;
    createdAt: string;
}

export const useSubmitMessage = (API_URL: string) => {
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async () => {
        if (!API_URL) {
            console.log("url error");
            return null;
        }
        if (!to.trim()) {
            alert("받는 사람을 입력해주세요.");
            return null;
        }
        if (!from.trim()) {
            alert("보내는 사람을 입력해주세요.");
            return null;
        }
        if (!content.trim()) {
            alert("내용을 입력해주세요.");
            return null;
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

            return response.data;
        } catch (error) {
            console.error("메시지 전송에 실패했습니다:", error);
            return null;
        }
    };

    return { to, setTo, from, setFrom, content, setContent, handleSubmit };
};
