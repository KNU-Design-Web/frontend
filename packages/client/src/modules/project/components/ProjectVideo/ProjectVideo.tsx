import { useInView } from "react-intersection-observer";

import * as ProjectVideoStyles from "./ProjectVideo.style";

export interface ProjectVideoProps extends React.ComponentProps<"video"> {
    offset: number;
}

export const ProjectVideo = ({ src, offset, ...rest }: ProjectVideoProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: `${offset}px`,
    });

    return (
        <ProjectVideoStyles.VideoWrapper ref={ref} style={{ minHeight: `${offset}px` }}>
            {inView && <ProjectVideoStyles.Video src={src} autoPlay loop muted playsInline {...rest} />}
        </ProjectVideoStyles.VideoWrapper>
    );
};
