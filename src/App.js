import React, {useState, useCallback, useMemo} from "react";
import VideoPlayer from "./components/VideoPlayer";
import './App.css';

function App() {
    const [text, setText] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const onPlay = useCallback(() => {
        setIsPlaying(true);
    }, []);

    const onPause = useCallback(() => {
        setIsPlaying(false);
    }, []);

    const videoData = useMemo(() => {
       return {
           url: 'https://www.w3schools.com/html/mov_bbb.mp4',
           title: 'Video'
       }
    }, []);

  return (
    <div className="App">
         <input type='text' onChange={(e) => {
             setText(e.target.value);
         }}/>
         <span>{text}</span>

        <div>Video is {isPlaying ? 'playing' : 'paused'}</div>
        <VideoPlayer
            src={videoData}
            onPlay={onPlay}
            onPause={onPause}
        />
    </div>
  );
}

export default App;
