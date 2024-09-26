import { css } from "@emotion/react";

export const SamplePage = ({ color, text }: { color: string; text: string }) => {
    return (
        <div
            css={css`
                display: flex;
                justify-content: center;
                align-items: center;

                width: 100%;
                min-height: 100vh;

                font-family: "SUIT";
                font-size: 120px;

                background-color: ${color};
            `}
        >
            {text}
        </div>
    );
};
