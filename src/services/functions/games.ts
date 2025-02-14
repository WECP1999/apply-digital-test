import { Game } from '@/utils/endpoint';
import fetchData from './fetchData';
import createQueryParams from '@/utils/functions/createQueryParams';
import GamesResponse from '@/interfaces/GamesResponse';

export const getGames = async (page = 1, genre?: string) => {
  try {
    let filters = createQueryParams({ page });

    if (genre) {
      filters = createQueryParams({ page, genre });
    }

    const response = await fetchData<GamesResponse>(`games?${filters}`);

    return response;
  } catch (error) {
    console.error(error);
  }
};
