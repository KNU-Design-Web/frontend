import { useCallback, useRef } from "react";

import * as LoadingPageStyles from "./LoadingPage.style";

export default function LoadingPage() {
    const startTimeRef = useRef<number | null>(null);
    const circlesRef = useRef<(HTMLDivElement | null)[]>([]);
    const animationFrameIdRef = useRef<number | null>(null);

    const requestLoadingAnimation = useCallback((timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const elapsed = (timestamp - startTimeRef.current) % 2000;

        let scale = 1;
        let opacity = 1;

        if (elapsed <= 1000) {
            scale = 1 + (elapsed / 1000) * 49;
            opacity = 1;
        } else {
            scale = 50;
            opacity = 1 - (elapsed - 1000) / 1000;
        }

        circlesRef.current.forEach((circle) => {
            if (circle) {
                circle.style.transform = `scale(${scale})`;
                circle.style.opacity = opacity.toString();
            }
        });
        animationFrameIdRef.current = requestAnimationFrame(requestLoadingAnimation);
        requestAnimationFrame(requestLoadingAnimation);
    }, []);

    return (
        <LoadingPageStyles.Wrapper>
            <LoadingPageStyles.LoadingCircleContainer>
                {Array.from({ length: 5 }).map((_, index) => (
                    <LoadingPageStyles.LoadingCircle key={index} ref={(el) => (circlesRef.current[index] = el)} />
                ))}
            </LoadingPageStyles.LoadingCircleContainer>
        </LoadingPageStyles.Wrapper>
    );
}
