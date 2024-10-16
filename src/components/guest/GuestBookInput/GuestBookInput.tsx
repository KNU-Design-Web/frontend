import { SizeProp } from "@/styles";

import * as GuestBookInputStyles from "./GuestBookInput.style";
import { Text } from "@/fonts/Text";

export interface GuestBookInputProps extends React.ComponentProps<"input"> {
    name: string;
    label: string;
    width: SizeProp;
}

export const GuestBookInput = ({ name, label, ...rest }: GuestBookInputProps) => {
    const ContainerComponent = label === "TO." ? GuestBookInputStyles.Container : GuestBookInputStyles.FromContainer;

    return (
        <ContainerComponent>
            <GuestBookInputStyles.Label htmlFor={name}>
                <Text size="m">{label}</Text>
            </GuestBookInputStyles.Label>
            <GuestBookInputStyles.Input type="text" {...rest} name={name} />
        </ContainerComponent>
    );
};
