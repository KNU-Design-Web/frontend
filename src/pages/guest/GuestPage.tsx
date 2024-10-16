import { GuestBookCard } from "@/components/guest/GuestBookCard/GuestBookCard";
import { GuestBookCardContainer } from "@/components/guest/GuestBookCard/GuestBookCardContainer";
import { GuestBookContainer } from "@/components/guest/GuestBookContainer/GuestBookContainer";
import { GuestBookForm } from "@/components/guest/GuestBookForm/GuestBookForm";
import { GuestBookInput } from "@/components/guest/GuestBookInput/GuestBookInput";
import { GuestBookTextArea } from "@/components/guest/GuestBookTextArea/GuestBookTextArea";

import styled from "@emotion/styled";

export default function GuestPage() {
    const handleOnSubmit = () => {
        console.log("submit");
    };
    return (
        <>
            <GuestBookContainer>
                <GuestBookForm>
                    <GuestBookInput name="receiver" label="TO." width="100px" placeholder="받는사람" />
                    <GuestBookTextArea placeholder="경북대학교 디자인학과 학생들에게 따뜻한 응원의 한마디를 남겨주세요:)" />
                    <GuestBookInput name="receiver" label="FROM." width="105px" placeholder="보내는사람" />
                </GuestBookForm>
                <AddButton onClick={handleOnSubmit}>메시지 전송</AddButton>
                <GuestBookCardContainer>
                    <GuestBookCard to={"test"} from={"test"} content={"qwerqwreqreqwerqwr"} />
                </GuestBookCardContainer>
            </GuestBookContainer>
        </>
    );
}

const AddButton = styled.button`
    width: 100%;
    height: 72px;
    background-color: #9085ff;

    font-size: 24px;
    color: white;
    font-weight: bold;
`;
