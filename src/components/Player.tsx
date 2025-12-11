import React, { useEffect, useRef, useState } from "react";
import type { Music } from "../App";

interface Props {
  music: Music;
}

export default function Player({ music }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.load();

    audioRef.current.oncanplay = () => {
      audioRef.current?.play();
      setIsPlaying(true);
    };
  }, [music]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="player-card">
      <h2 className="music-title">{music.title}</h2>

      <audio ref={audioRef} src={music.file} />

      <button className="control-btn" onClick={togglePlay}>
        <span className="material-icons">
          {isPlaying ? "pause" : "play_arrow"}
        </span>
      </button>
    </div>
  );
}
