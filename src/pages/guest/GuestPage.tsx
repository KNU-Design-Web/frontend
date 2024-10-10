import { GuestBookCard } from "@/components/guest/GuestBookCard/GuestBookCard";
import { GuestBookCardContainer } from "@/components/guest/GuestBookCard/GuestBookCardContainer";
import { GuestBookContainer } from "@/components/guest/GuestBookContainer/GuestBookContainer";
import { GuestBookForm } from "@/components/guest/GuestBookForm/GuestBookForm";
import { GuestBookInput } from "@/components/guest/GuestBookInput/GuestBookInput";
import { GuestBookTextArea } from "@/components/guest/GuestBookTextArea/GuestBookTextArea";

export default function GuestPage() {
    return (
        <>
            <GuestBookContainer>
                <GuestBookForm>
                    <GuestBookInput name="receiver" label="TO." width="300px" placeholder="받는사람" />
                    <GuestBookTextArea
                        placeholder="경북대학교 디자인학과 학생들에게&#10;따뜻한 응원의 한마디를 남겨주세요:)"
                    />
                    <GuestBookInput name="receiver" label="FROM." width="300px" placeholder="보내는사람" />
                </GuestBookForm>

                <GuestBookCardContainer>
                    <GuestBookCard></GuestBookCard>
                    <GuestBookCard></GuestBookCard>
                    <GuestBookCard></GuestBookCard>
                    <GuestBookCard></GuestBookCard>
                    <GuestBookCard></GuestBookCard>
                    <GuestBookCard></GuestBookCard>
                </GuestBookCardContainer>
            </GuestBookContainer>
        </>
    );
}
