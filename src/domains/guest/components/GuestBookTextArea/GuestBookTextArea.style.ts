import styled from "@emotion/styled";

export const TextArea = styled.textarea`
    position: relative;

    display: block;
    height: 100%;

    padding: 10px 0px;

    outline: none;

    font-size: var(--font-size-m);

    &::placeholder {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    ::-webkit-input-placeholder {
        width: 100%;
        text-align: center;
    }
    :-moz-placeholder {
        widt100%h
        text-align: center;
    }
    ::-moz-placeholder {
        widt100%h
        text-align: center;
    }
    :-ms-input-placeholder {
        widt100%h
        text-align: center;
    }
`;
