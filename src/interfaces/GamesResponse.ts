import { Game } from '@/utils/endpoint';

interface GamesResponse {
  games: Array<Game>;
  availableFilters: Array<string>;
  totalPages: number;
  currentPage: number;
}

export default GamesResponse;
