import { ProfileItem } from "@/components/profile/ProfileItem";
import { ProfileList } from "@/components/profile/ProfileList";

import { data } from "@/apps/data";
import { Title } from "@/fonts/Title";

export default function ProfilePage() {
    return (
        <>
            <Title>PROFILE</Title>

            <ProfileList>
                {data.map((item) => {
                    return (
                        <ProfileItem
                            projectId={item.id}
                            koName={item.author.name.ko}
                            enName={item.author.name.en}
                            email={item.author.email}
                            instagram={item.author.instagram}
                            link={item.author.link}
                            profileImg={`https://images.knud2024.com/profile-webp-resized/${item.id}_780x1000.webp`}
                            projectImg={`https://images.knud2024.com/project-card-thumbnail/thumbnail${item.id}_980x980.webp`}
                            projectTitle={item.project.title}
                        />
                    );
                })}
            </ProfileList>
        </>
    );
}
