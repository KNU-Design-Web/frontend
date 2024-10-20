import mainVideo from "@/assets/video/mainVideo_test.mp4";

export default function HomePage() {
    return (
        <>
            <video src={mainVideo} autoPlay loop muted style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
        </>
    );
}
