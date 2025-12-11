import type { Playlist } from "../App";

interface Props {
  playlists: Playlist[];
  onSelect: (playlist: Playlist) => void;
}

const PlaylistList: React.FC<Props> = ({ playlists, onSelect }) => {
  return (
    <div className="playlist-grid">
      {playlists.map((p) => (
        <div key={p.id} className="playlist-card" onClick={() => onSelect(p)}>
          <div className="playlist-bg" />
          <h3>{p.name}</h3>
          <p>{p.musics.length} musiques</p>
        </div>
      ))}
    </div>
  );
};

export default PlaylistList;
