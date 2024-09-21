import React from "react";

import { fontStyles } from "../src/styles/fonts";
import { globalStyles } from "../src/styles/global";
import { Global } from "@emotion/react";
import type { Preview } from "@storybook/react";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export const decorators = [
    (Story) => (
        <>
            <Global styles={[globalStyles, fontStyles]} />
            <Story />
        </>
    ),
];

export default preview;
