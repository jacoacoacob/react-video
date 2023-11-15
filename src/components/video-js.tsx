"use client";

import React from "react";
import videojs from "video.js";

import type { Player, VideoJsProps } from "./video-js.types";

import "video.js/dist/video-js.css";

function VideoJs(props: VideoJsProps) {
    const { options } = props;

    const videoWrapper = React.useRef<HTMLDivElement | null>(null);
   
    const player = React.useRef<Player | null>(null);

    // Setup player
    React.useEffect(() => {
        if (videoWrapper.current && !player.current) {
            const videoElement = document.createElement("video");
            
            videoElement.classList.add("video-js");

            videoWrapper.current.appendChild(videoElement);

            player.current = videojs(videoElement, options, () => {
                console.log("Player ready");
            });
        }
    }, [videoWrapper]);

    // Cleanup on component unmount
    React.useEffect(() => {
        return () => {
            if (player.current && !player.current.isDisposed()) {
                player.current.dispose();
                player.current = null;
            }
        }
    }, [player]);

    return (
        <div className="p-10 rounded shadow-2xl bg-white">
            <div data-vjs-player>
                <div
                    ref={(el) => videoWrapper.current = el}
                    className="w-[300px] h-[200px] sm:w-[600px] sm:h-[400px] md:w-[900px] md:h-[600px]"
                ></div>
            </div>
        </div>
    );
}

export { VideoJs };
