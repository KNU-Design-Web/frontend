import { useInView } from "react-intersection-observer";

import * as ProjectImageStyles from "./ProjectImage.style";

export interface ProjectImageProps extends React.ComponentProps<"img"> {
    offset: number;
}

export const ProjectImage = ({ src, offset, ...rest }: ProjectImageProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: `${offset}px`,
    });

    return (
        <ProjectImageStyles.ImageWrapper ref={ref} style={{ minHeight: `${offset}px` }}>
            {inView && <ProjectImageStyles.Image src={src} {...rest} />}
        </ProjectImageStyles.ImageWrapper>
    );
};
