import { AxiosError } from "axios";

import { api } from "@/apps/config/axios";

export const createGuestBookMessage = async (to: string, from: string, content: string) => {
    if (!to.trim()) throw new Error("받는 사람을 입력해주세요.");
    if (!from.trim()) throw new Error("보내는 사람을 입력해주세요.");
    if (!content.trim()) throw new Error("내용을 입력해주세요.");

    const response = await api.post<GuestBookMessage>("/guestbook", {
        to,
        from,
        content,
    });

    if (response instanceof AxiosError) throw new Error(response.status.toString());
    return response;
};
