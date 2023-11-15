import videojs from "video.js";

// Couldn't access videojs.Player type through import or on videojs namespace
// see https://github.com/videojs/video.js/issues/8242
type Player = ReturnType<typeof videojs>;

interface VideoSource {
    src: string
    type: string;
}

interface VideoJsOptions {
    /**
     * - `false`: the same as having no attribute on the video element, won't autoplay
     * - `true`: the same as having attribute on the video element, will use browsers autoplay
     * - "muted": will mute the video element and then manually call play() on loadstart. This is likely to work.
     * - "play": will call play() on loadstart, similar to browsers autoplay
     * - "any": will call play() on loadstart and if the promise is rejected it will mute the video element then call play().
     */
    autoplay?: boolean | "muted" | "play" | "any",
    /**
     * Determines whether or not the player has controls that the user can interact with. Without controls the only way to start the video playing is with the autoplay attribute or through the Player API.
     */
    controls?: boolean,
    fill?: boolean;
    responsive?: boolean;
    fluid?: boolean;
    /**
     * An array of objects that mirror the native <video> element's capability to have a series of child <source> elements. This should be an array of objects with the src and type properties. For example:
     * ```ts
     * videojs('my-player', {
     *      sources: [
     *          {
     *              src: '//path/to/video.mp4',
     *              type: 'video/mp4'
     *          },
     *          {
     *              src: '//path/to/video.webm',
     *              type: 'video/webm'
     *          }
     *      ]
     * });
     * ```
     */
    sources: VideoSource[];
}

interface VideoJsProps {
    options: VideoJsOptions;
}

export type { Player, VideoJsOptions, VideoJsProps, VideoSource };