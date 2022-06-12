import React, { useRef, memo } from "react";

function VideoPlayer({src, onPause, onPlay}) {
    const videoRef = useRef();
    const countRef = useRef(0);
    countRef.current++;

    return (
        <div>
            <p>Call count is {countRef.current}</p>
            <h1>{src.title}</h1>
            <video src={src.url} ref={videoRef}/>
            <button onClick={() => {
                videoRef.current.play();
                onPlay();
            }}>Play</button>
            <button onClick={() => {
                videoRef.current.pause();
                onPause();
            }}>Pause</button>
        </div>
    )
}
export default memo(VideoPlayer, (prevProps, nextProps) => {
    if(prevProps.onPlay !== nextProps.onPlay)
        return false;
    if(prevProps.onPause !== nextProps.onPause)
        return false;
    if(prevProps.src.title !== nextProps.src.title)
        return false;
    if(prevProps.src.url !== nextProps.src.url)
        return false;
});