import { useSearchParams } from "react-router-dom";

import ProjectDetailPage from "./ProjectDetailPage";
import ProjectListPage from "./ProjectListPage";

export default function ProjectPage() {
    const [searchParams] = useSearchParams();

    if (searchParams.get("id")) return <ProjectDetailPage />;
    else return <ProjectListPage />;
}
