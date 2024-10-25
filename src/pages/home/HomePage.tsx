import { MAIN_DATA } from "@/apps/data";

export default function HomePage() {
    return (
        <>
            <video
                src={MAIN_DATA.VIDEO_URL}
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
                autoPlay
                loop
                muted
            />
        </>
    );
}
