import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import { Progress } from "./Progress";
import { Searchbox } from "./Searchbox";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track play state

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", updateCurrentTime);

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", updateCurrentTime);
    };
  }, []);

  // Toggle play/pause
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="bg-darkGray text-center w-1/5 rounded-2xl p-7">
          <img src="/cover-1.png" alt="" className="rounded-3xl" />
          <h1 className="text-offWhite mt-4 font-semibold text-xl">
            Lost in the City Lights
          </h1>
          <p className="text-md text-lightGray pt-1">Cosmo Sheldrake</p>
          <audio ref={audioRef} controls hidden>
            <source src="../public/song.mp3" type="audio/mpeg" />
          </audio>
          <Progress currentTime={currentTime} duration={duration} />
          <div
            id="player-wrapper"
            className="flex justify-center py-4 items-center"
          >
            <img
              src="/public/Stop_and_play_fill_reverse.svg"
              alt=""
              id="reverse"
              className="cursor-pointer w-12 h-12"
            />
            <img
              src={isPlaying ? "/public/pause.svg" : "/Play_fill.svg"} // Update these paths based on your pause/play SVGs
              alt=""
              className="bg-pink mx-6 p-2 cursor-pointer player text-white w-14 h-14"
              onClick={togglePlayPause}
            />
            <img
              src="/public/Stop_and_play_fill.svg"
              alt=""
              className="cursor-pointer w-12 h-12"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
