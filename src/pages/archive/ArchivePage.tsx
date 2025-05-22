import { archiveImagesBefore, archiveImagesAfter } from "@/apps/data";

import { Title } from "@/common/components/Title/Title";

import { PhotoCard } from "@/domains/archive/components/PhotoCard/PhotoCard";
import { PhotoGrid } from "@/domains/archive/components/PhotoGrid/PhotoGrid";

import * as ArchivePageStyles from "./ArchivePage.style";

export default function ArchivePage() {
    return (
        <>
            <Title>ARCHIVE</Title>
            <ArchivePageStyles.Layout>
                <PhotoGrid direction="up" speed={2} id="left-photo-grid">
                    {archiveImagesBefore.map((imageUrl, index) => {
                        return <PhotoCard key={index} src={imageUrl} scrollContainer="#left-photo-grid" />;
                    })}
                </PhotoGrid>

                <PhotoGrid direction="down" speed={2} id="left-photo-grid">
                    {archiveImagesAfter.map((imageUrl, index) => {
                        return <PhotoCard key={index} src={imageUrl} scrollContainer="#left-photo-grid" />;
                    })}
                </PhotoGrid>
            </ArchivePageStyles.Layout>
        </>
    );
}
