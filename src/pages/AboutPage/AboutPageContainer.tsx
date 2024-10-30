import styled from "@emotion/styled";

interface AboutPageContainerProps {
    children?: React.ReactNode;
}

export const AboutPageContainer = (props: AboutPageContainerProps) => {
    return <Container>{props.children}</Container>;
};

const Container = styled.div`
    width: 100%;
    max-width: 980px;

    margin: 0px auto;
    margin-top: 60px;
    padding: 22px;

    display: flex;
    flex-direction: column;
    gap: 20px;
`;
