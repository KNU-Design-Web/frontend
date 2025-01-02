import { PhotoCard } from "@/components/ArchivePage/PhotoCard/PhotoCard";
import { PhotoGrid } from "@/components/ArchivePage/PhotoGrid/PhotoGrid";

import * as ArchivePageStyles from "./ArchivePage.style";
import { archiveImagesBefore, archiveImagesAfter } from "@/apps/data";
import { Title } from "@/common/components/Title/Title";

export default function ArchivePage() {
    return (
        <>
            <Title>ARCHIVE</Title>
            <ArchivePageStyles.Layout>
                <PhotoGrid direction="up" speed={5}>
                    {archiveImagesBefore.map((imageUrl, index) => {
                        return <PhotoCard key={index} src={imageUrl} />;
                    })}
                </PhotoGrid>

                <PhotoGrid direction="down" speed={5}>
                    {archiveImagesAfter.map((imageUrl, index) => {
                        return <PhotoCard key={index} src={imageUrl} />;
                    })}
                </PhotoGrid>
            </ArchivePageStyles.Layout>
        </>
    );
}
