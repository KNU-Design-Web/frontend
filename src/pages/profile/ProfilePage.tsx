import { ProfileItem } from "@/components/profile/ProfileItem";
import { ProfileList } from "@/components/profile/ProfileList";

import { Title } from "@/fonts/Title";

export default function ProfilePage() {
    return (
        <>
            <Title>PROFILE</Title>

            <ProfileList>
                {new Array(10).fill(undefined).map((_, index) => {
                    return (
                        <ProfileItem
                            projectId={index + 1}
                            koName="구지원"
                            enName="JIWON KOO"
                            email={"test@gmail.com"}
                            instagram={"@instagram"}
                            link={"@externalLink"}
                            profileImg={"/example/profile.png"}
                            projectImg={"/example/project-small.png"}
                            projectTitle={["복합 애견 문화 공간", "Goldenhill"]}
                        />
                    );
                })}
            </ProfileList>
        </>
    );
}
