import { ProfileItem } from "@/components/profile/ProfileItem";
import { ProfileList } from "@/components/profile/ProfileList";

import { Title } from "@/fonts/Title";

export default function ProfilePage() {
    return (
        <>
            <Title>PROFILE</Title>

            <ProfileList>
                {new Array(10).fill(undefined).map(() => {
                    return (
                        <ProfileItem
                            koName="구지원"
                            enName="JIWON KOO"
                            email={""}
                            instagram={""}
                            link={""}
                            profileImg={""}
                            projectImg={""}
                            projectId={""}
                            projectTitle={""}
                        />
                    );
                })}
            </ProfileList>
        </>
    );
}
