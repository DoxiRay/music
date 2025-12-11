import  { useState } from "react";
import PlaylistList from "./components/PlaylistList";
import MusicList from "./components/MusicList";
import Player from "./components/Player";
import "./styles.css";

export interface Music {
  id: number;
  title: string;
  artist:string;
  file: string;
}

export interface Playlist {
  id: number;
  name: string;
  musics: Music[];
}

function App() {
  const playlists: Playlist[] = [
    {
      id: 1,
      name: "Musique pour toi ❤️",
      musics: [
        {
          id: 1,
          title: "All of me",
          artist: "John Legend",
          file: "/musics/all_of_me.mp3",
        },
        {
          id: 2,
          title: "Longtemps",
          artist: "Amir",
          file: "/musics/Amir_Longtemps.mp3",
        },
        {
          id: 3,
          title: "Rewrite the stars",
          artist: "James Arthur et Anne-Marie",
          file: "/musics/Rewrite_The_Stars.m4a",
        },
        {
          id: 4,
          title: "Best part",
          artist: "Daniel Caesar ft H.E.R.",
          file: "/musics/Best_Part.mp3",
        },
        {
          id: 5,
          title: "Des millier de je t'aime",
          artist: "Slimane",
          file: "/musics/des_millier_de_je_t_aime.mp3",
        },
        {
          id: 6,
          title: "Eres tu",
          artist: "Peint",
          file: "/musics/Erestu.mp3",
        },
        {
          id: 7,
          title: "Eternel",
          artist: "Mickael Pouvin",
          file: "/musics/Eternel.mp3",
        },
        {
          id: 8,
          title: "Her",
          artist: "Annika Wells",
          file: "/musics/Her_Annika.mp3",
        },
        {
          id: 9,
          title: "If you love her",
          artist: "Forest Blakk",
          file: "/musics/if_you_love_her.mp3",
        },
        {
          id: 10,
          title: "Little bit better",
          artist: "Caleb hearn and Rosie",
          file: "/musics/Littlebit.mp3",
        },
        {
          id: 11,
          title: "Perfect",
          artist: "Ed Sheeran",
          file: "/musics/Perfect.mp3",
        },
        {
          id: 12,
          title: "Those eyes",
          artist: "New West",
          file: "/musics/those_eyes.mp3",
        },
        {
          id: 13,
          title: "You-re special",
          artist: "NF",
          file: "/musics/you_re_special.m4a",
        },
      ],
    },
    {
      id: 2,
      name: "Un peu de nous 🌙",
      musics: [
        {
          id: 14,
          title: "Introduction",
          artist: "Eudoxie",
          file: "/musics/Introduction.mp3",
        },
        {
          id: 15,
          title: "La rencontre",
          artist: "Eudoxie",
          file: "/musics/la_rencontre.mp3",
        },
        {
          id: 16,
          title: "Le tout début",
          artist: "Eudoxie",
          file: "/musics/le_tout_debut.mp3",
        },
        {
          id: 17,
          title: "Tu es différent",
          artist: "Eudoxie",
          file: "/musics/tu_es_different.mp3",
        },
        {
          id: 18,
          title: "Notre premier date",
          artist: "Eudoxie",
          file: "/musics/Notre_premier_date.mp3",
        },
        {
          id: 19,
          title: "Défis à dépasser",
          artist: "Eudoxie",
          file: "/musics/Défis_à_dépasser.mp3",
        },
        {
          id: 20,
          title: "Ce que tu m'as appris",
          artist: "Eudoxie",
          file: "/musics/Ce_que_tu_m_as_appris.mp3",
        },
        {
          id: 21,
          title: "Toi pour moi",
          artist: "Eudoxie",
          file: "/musics/toi_pour_moi.mp3",
        },
        {
          id: 22,
          title: "Il était une fois",
          artist: "Eudoxie",
          file: "/musics/il_etait_une_fois.mp3",
        },
        {
          id: 23,
          title: "Evolution",
          artist: "Eudoxie",
          file: "/musics/evolution.mp3",
        },

        {
          id: 24,
          title: "Ce que j'aime",
          artist: "Eudoxie",
          file: "/musics/Ce_que_j_aime.mp3",
        },
        {
          id: 25,
          title: "Nous aujourd'hui",
          artist: "Eudoxie",
          file: "/musics/Nous_aujourd_hui.mp3",
        },
        {
          id: 14,
          title: "Notre futur",
          artist: "Eudoxie",
          file: "/musics/Notre_future.mp3",
        },
      ],
    },
  ];

  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(
    null
  );
  const [currentMusic, setCurrentMusic] = useState<Music | null>(null);

  return (
    <div className="container">
      <h1 className="title">A nos trois ans</h1>

      {/* PAGE 1 : LISTE DES PLAYLISTS */}
      {!selectedPlaylist && (
        <PlaylistList playlists={playlists} onSelect={setSelectedPlaylist} />
      )}

      {/* PAGE 2 : MUSIQUES DE LA PLAYLIST */}
      {selectedPlaylist && (
        <>
          <button
            className="back-btn"
            onClick={() => {
              setSelectedPlaylist(null);
              setCurrentMusic(null);
            }}
          >
            ⬅ Retour
          </button>

          <h2 className="playlist-title">{selectedPlaylist.name}</h2>

          <MusicList
            musics={selectedPlaylist.musics}
            onSelect={setCurrentMusic}
          />
        </>
      )}

      {/* PLAYER */}
      {currentMusic && <Player music={currentMusic} />}
    </div>
  );
}

export default App;
