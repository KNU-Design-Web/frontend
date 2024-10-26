import { useEffect, useState } from "react";

import { preloadAssets } from "@/utils/preload";

export const usePrefetch = (srcs: string[]) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            try {
                await preloadAssets(srcs);
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [srcs]);

    return {
        isLoading,
    };
};
