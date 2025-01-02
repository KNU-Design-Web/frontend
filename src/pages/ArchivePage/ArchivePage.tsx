import { PhotoCard } from "@/components/ArchivePage/PhotoCard/PhotoCard";
import { PhotoGrid } from "@/components/ArchivePage/PhotoGrid/PhotoGrid";

import * as ArchivePageStyles from "./ArchivePage.style";
import { archiveImagesBefore, archiveImagesAfter } from "@/apps/data";

export default function ArchivePage() {
    return (
        <>
            <ArchivePageStyles.Layout>
                <PhotoGrid direction="column">
                    {archiveImagesBefore.map((imageUrl, index) => {
                        return <PhotoCard key={index} src={imageUrl} />;
                    })}
                </PhotoGrid>

                <PhotoGrid direction="column">
                    {archiveImagesAfter.map((imageUrl, index) => {
                        return <PhotoCard key={index} src={imageUrl} />;
                    })}
                </PhotoGrid>
            </ArchivePageStyles.Layout>
        </>
    );
}
