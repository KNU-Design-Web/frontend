import { data } from "@/apps/data";
import { Title } from "@/common/components/Title/Title";
import { ProfileItem } from "@/domains/profile/components/ProfileItem/ProfileItem";
import { ProfileList } from "@/domains/profile/components/ProfileList/ProfileList";
import { ProfileToggleProvider } from "@/domains/profile/context/ProfileToggleContext";

export default function ProfilePage() {
    return (
        <>
            <Title>PROFILE</Title>

            <ProfileToggleProvider>
                <ProfileList>
                    {data.map((item, id) => {
                        return (
                            <ProfileItem
                                id={id}
                                projectId={item.id}
                                koName={item.author.name.ko}
                                enName={item.author.name.en}
                                email={item.author.email}
                                instagram={item.author.instagram}
                                link={item.author.link}
                                profileImg={`https://images.knud2024.com/profile-webp-resized/${item.id}_780x1000.webp`}
                                projectImg={`https://images.knud2024.com/project-card-thumbnail/thumbnail${item.id}_980x980.webp`}
                                projectThumbnailTitle={item.project.thumbnailTitle}
                            />
                        );
                    })}
                </ProfileList>
            </ProfileToggleProvider>
        </>
    );
}
