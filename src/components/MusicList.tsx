import React from "react";
import type { Music } from "../App";

interface Props {
  musics: Music[];
  onSelect: (music: Music) => void;
}

export default function MusicList({ musics, onSelect }: Props) {
  return (
    <div className="music-list-wrapper">
      <h2 className="music-title">💗 Liste des musiques</h2>

      <div className="music-list">
        {musics.map((music) => (
          <div
            key={music.id}
            className="music-card"
            onClick={() => onSelect(music)}
          >
            <div className="music-icon">🎧</div>
            <div className="music-info">
              <h3>{music.title}</h3>
              <h3>{music.artist}</h3>
              <p>Tap to play 💕</p>
            </div>
            <div className="music-heart">❤️</div>
          </div>
        ))}
      </div>
    </div>
  );
}
