import { useSearchParams } from "react-router-dom";

export const useProjectId = () => {
    const [searchParams] = useSearchParams();
    return parseInt(searchParams.get("id") as string) - 1;
};
