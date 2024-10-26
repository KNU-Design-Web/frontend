import { useState, useCallback, useEffect, useRef } from "react";

import { createGuestBookMessage } from "@/services/createGuestBookMessage";
import { readGuestBookMessage } from "@/services/readGuestBookMessage";

export const useGuestBook = (take = 10) => {
    // GET /guestbook
    const targetRef = useRef<HTMLDivElement | null>(null);
    const intersectionObserver = useRef<IntersectionObserver | null>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [isLastPage, setIsLastPage] = useState(false);
    const [guestBookData, setGuestBookData] = useState<GuestBookMessage[]>([]);

    const [lastSortKey, setLastSortKey] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        if (isLoading || isLastPage) return;

        try {
            setIsLoading(true);
            const response = await readGuestBookMessage(lastSortKey, take);

            setGuestBookData((prevData) => [...prevData, ...response.data.items]);
            setLastSortKey(response.data.lastEvaluatedSK);
            setIsLastPage(!response.data.lastEvaluatedSK);
        } catch (error) {
            console.error("메시지를 불러오는 데 실패했습니다:", error);
        } finally {
            setIsLoading(false);
        }
    }, [isLastPage, isLoading, lastSortKey, take]);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!targetRef.current) return;
        const currentTarget = targetRef.current;

        intersectionObserver.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        fetchData();
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            },
        );

        intersectionObserver.current.observe(currentTarget);

        return () => {
            if (intersectionObserver.current && currentTarget) {
                intersectionObserver.current.unobserve(currentTarget);
            }
        };
    }, [fetchData]);

    // POST /guestbook
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [content, setContent] = useState("");

    const handleFromChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFrom(e.target.value);
    }, []);

    const handleToChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTo(e.target.value);
    }, []);

    const handleContentChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    }, []);

    const handleSubmit = useCallback(async () => {
        await createGuestBookMessage(to, from, content);
        setGuestBookData((guestBookData) => [
            {
                id: "newId",
                SK: "newSortKey",
                PK: "newPrimaryKey",
                createdAt: new Date().toISOString(),
                to,
                from,
                content,
            },
            ...guestBookData,
        ]);
    }, [content, from, to]);

    return {
        isLoading,
        isLastPage,
        guestBookData,
        targetRef,
        to,
        from,
        content,
        handleToChange,
        handleFromChange,
        handleContentChange,
        handleSubmit,
    };
};
