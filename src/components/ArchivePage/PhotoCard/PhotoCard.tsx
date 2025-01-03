import LazyLoad from "react-lazyload";

import * as PhotoCardStyles from "./PhotoCard.style";

export interface PhotoCardProps extends React.ComponentProps<"img"> {
    scrollContainer: string | Element | undefined;
}

export const PhotoCard = ({ scrollContainer, ...props }: PhotoCardProps) => {
    return (
        <LazyLoad
            offset={100}
            height={620}
            scrollContainer={scrollContainer}
            once={true}
            overflow={true}
            style={{ width: "min(100%, 485px)", margin: "0 auto" }}
        >
            <PhotoCardStyles.ImageWrapper height="620px" width="min(100%, 485px)">
                <PhotoCardStyles.Image height={620} {...props} />
            </PhotoCardStyles.ImageWrapper>
        </LazyLoad>
    );
};

/**
 * 1. 현재방식
 * <구현>
 * - PhotoCard 를 requestAnimationFrame을 사용하여 루프 애니메이션 적용
 * - LazyLoad 를 사용하여 viewport +- offset 범위에 들어오면 이미지 로딩
 *
 * <문제점>
 * - translateY 속성을 변경하면 react-lazyload 가 view port 에 진입하였는지 검사하지 못함 (scroll 기반)
 *   - forceCheck() 함수를 호출하여 강제로 검사할 수 있지만, 불필요한 호출이 발생
 *     - forceCheck() 를 throttle 처리하였지만,
 */
