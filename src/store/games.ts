import { createStore, localPersistStorage } from '@/config/store/storeTools';
import { Game } from '@/utils/endpoint';

export type GamesType = {
  games: Array<Game>;
  genres: Array<string>;
};

type GamesStoreActions = {
  setGames: (games: Array<Game>) => void;
  setGenres: (genres: Array<string>) => void;
};

type GamesStoreType = GamesType & GamesStoreActions;

const gamesStore = createStore<GamesStoreType>(
  (set) => ({
    games: [],
    genres: [],
    setGames: (games) => set({ games }),
    setGenres: (genres) => set({ genres }),
  }),
  {
    persistOptions: { name: 'games', storage: localPersistStorage },
  }
);

export default gamesStore;
