import styled from "@emotion/styled";

export const Wrapper = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 30px;

    width: 100%;
    height: 360px;

    margin-bottom: 50px;
    border-top: 2px solid #000;
    border-right: 1px solid #000;
    padding: 50px 50px 80px 50px;

    background-color: #fff;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    span {
        display: block;
    }
    &:first-child {
        text-align: left;
    }
    &:last-child {
        text-align: right;
    }
`;

export const InfoContainer = styled.div``;

export const InfoItem = styled.div`
    display: flex;

    span:first-child {
        width: 60px;
    }
`;
