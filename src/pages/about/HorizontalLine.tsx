import styled from "@emotion/styled";

export const HorizontalLine = () => {
    return (
        <>
            <Line />
        </>
    );
};

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: #000;
`;
