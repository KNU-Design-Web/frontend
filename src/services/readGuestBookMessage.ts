import { api } from "@/apps/config/axios";

export const readGuestBookMessage = async (lastSortKey: string | null, take: number) => {
    const response = await api.get<GuestBookResponse>("/guestbook", {
        params: {
            lastEvaluatedSK: lastSortKey,
            take,
        },
    });
    return response;
};
