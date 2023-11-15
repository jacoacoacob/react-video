import { VideoJs } from "@/components/video-js";
import type { VideoJsOptions } from "@/components/video-js.types";

const videoJsOptions: VideoJsOptions = {
    autoplay: true,
    controls: true,
    fill: true,
    sources: [
        {
            src: "https://testfileorg.netwet.net/Sample%20Video%202/sample_1280x720.mp4",
            type: "video/mp4",
        },
        {
            src: "https://testfileorg.netwet.net/Sample%20Video/sample_1920x1080.mp4",
            type: "video/mp4",
        },
        {
            src: "https://testfileorg.netwet.net/Sample%20Video/sample_2560x1440.mp4",
            type: "video/mp4",
        },
    ]
}

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <VideoJs options={videoJsOptions} />
        </main>
    )
}
