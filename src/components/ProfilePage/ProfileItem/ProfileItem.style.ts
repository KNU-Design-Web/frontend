import styled from "@emotion/styled";

export const Wrapper = styled.li<{ active: boolean }>`
    position: relative;

    height: 60px;

    border: 1px solid #000;
    border-top: 0;

    background-color: ${(props) => (props.active ? "var(--color-light-green)" : "#fff")};

    list-style: none;

    transition: background-color 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: var(--color-light-green);
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
    padding: 0px 40px;

    span {
        display: block;
    }
`;
