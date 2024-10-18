import { useState, useCallback } from "react";

import axios from "axios";

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

export const useFetchMessages = (API_URL: string) => {
    const [messages, setMessages] = useState<GuestBookMessage[]>([]);
    const [lastUuid, setLastUuid] = useState<string | null>(null);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMessages = useCallback(async () => {
        if (!hasMore || !API_URL || isLoading) return;

        setIsLoading(true);
        try {
            const response = await axios.get<GuestBookResponse>(`${API_URL}`, {
                params: {
                    last_uuid: lastUuid,
                    take: 10,
                },
            });
            const newMessages = response.data.items;
            setMessages((prevMessages) => [...newMessages, ...prevMessages]);
            setLastUuid(response.data.last_uuid);
            setHasMore(newMessages.length === 10);
        } catch (error) {
            console.error("메시지를 불러오는 데 실패했습니다:", error);
        } finally {
            setIsLoading(false);
        }
    }, [API_URL, hasMore, isLoading, lastUuid]);

    return { messages, isLoading, hasMore, fetchMessages, setMessages };
};
