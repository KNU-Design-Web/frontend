declare interface GuestBookMessage {
    id: string;
    SK: string;
    PK: string;
    to: string;
    from: string;
    content: string;
    createdAt: string;
}

declare interface GuestBookResponse {
    items: GuestBookMessage[];
    lastEvaluatedSK: string;
}
