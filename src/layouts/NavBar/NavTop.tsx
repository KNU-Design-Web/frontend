import { useState } from "react";

import { RightArrow } from "@/assets/icons/RightArrow";

import { navItems } from "@/constants/navItems";

import * as NavTopStyles from "./NavTop.style";
import { NavTopItem } from "./NavTopItem";
import { Text } from "@/fonts/Text";
import { css } from "@emotion/react";

export const NavTop = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<number>(0);

    return (
        <NavTopStyles.Wrapper>
            <NavTopStyles.Header active={false} onClick={() => setIsOpen((isOpen) => !isOpen)}>
                <Text size="m" weight={600}>
                    {navItems[selectedItem].label}
                </Text>
                <RightArrow
                    color="#000"
                    css={css`
                        transform: rotate(${isOpen ? "180deg" : "0deg"});
                        transition: transform 0.4s ease-in-out;
                    `}
                />
            </NavTopStyles.Header>

            {navItems.map((navItem) => {
                return (
                    <NavTopItem
                        key={navItem.index}
                        index={navItem.index}
                        to={navItem.to}
                        label={navItem.label}
                        active={isOpen}
                        onClick={() => setSelectedItem(navItem.index)}
                    />
                );
            })}
        </NavTopStyles.Wrapper>
    );
};
