import { useQuery } from '@tanstack/react-query';
import { getGames } from '../functions/games';
import { GAMES } from '../queryNames';
import gamesStore from '@/store/games';

const useGame = (page = 1, genre?: string) => {
  const _genre = genre && genre.toLowerCase() === 'all' ? undefined : genre;

  const setGenres = gamesStore((state) => state.setGenres);

  const { data, isSuccess, ...rest } = useQuery({
    queryKey: [GAMES, page, genre],
    queryFn: async () => await getGames(page, _genre),
    refetchOnWindowFocus: false,
  });

  if (data?.availableFilters) {
    setGenres(data.availableFilters);
  }

  return {
    data,
    isSuccess,
    ...rest,
  };
};

export default useGame;
