import { createContext } from 'react';

type Episode = {
  title: string,
  members: string,
  thumbnail: string,
  duration: number,
  url: string,
};

type PlayerContextData = {
  episodeList: Array<Episode>,
  currentEpisodeIndex: number,
  isPlaying: boolean,
  togglePlay: () => void,
  play: (episode) => void,
};


const PlayerContext = createContext({} as PlayerContextData);

export default PlayerContext;