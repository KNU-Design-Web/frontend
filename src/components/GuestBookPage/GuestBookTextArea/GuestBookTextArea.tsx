import * as GuestBookTextAreaStyles from "./GuestBookTextArea.style";

export interface GuestBookTextAreaProps extends React.ComponentProps<"textarea"> {
    name?: string;
}

export const GuestBookTextArea = ({ ...rest }: GuestBookTextAreaProps) => {
    return <GuestBookTextAreaStyles.TextArea {...rest} />;
};
