import { createStore, localPersistStorage } from '@/config/store/storeTools';
import { Game } from '@/utils/endpoint';

export type CartType = {
  games: Array<Game>;
};

type CartStoreActions = {
  setGame: (game: Game) => void;
  deleteGame: (id: string) => void;
};

type CartStoreType = CartType & CartStoreActions;

const cartStore = createStore<CartStoreType>(
  (set) => ({
    games: [],
    setGame: (game) =>
      set((state) => {
        const _games = state.games;

        const storedGames = [..._games, game];
        return { games: storedGames };
      }),
    deleteGame: (id) =>
      set((state) => {
        const _games = state.games;
        const filteredGames = _games.filter((game) => game.id !== id);
        return { games: filteredGames };
      }),
  }),
  {
    persistOptions: { name: 'cart', storage: localPersistStorage },
  }
);

export default cartStore;
