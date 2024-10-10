import * as GuestBookFormStyles from "./GuestBookForm.style";

export interface GuestBookFormProps {
    children?: React.ReactNode;
}

export const GuestBookForm = ({ children }: GuestBookFormProps) => {
    return <GuestBookFormStyles.Wrapper>{children}</GuestBookFormStyles.Wrapper>;
};
