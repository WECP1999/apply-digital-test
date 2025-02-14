'use client';

import CardProduct from '@/components/cardProduct/CardProduct';
import Button from '@/components/shared/Button';
import DefaultSpinner from '@/components/shared/DefaultSpinner';
import useGame from '@/services/hooks/useGames';
import gamesStore from '@/store/games';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState<undefined | string>();
  const [pageIndex, setPageIndex] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();

  const genres = gamesStore((state) => state.genres);

  const { data, isLoading } = useGame(pageIndex, selectedGenre);

  const handleURLChange = useCallback(
    (newFilters: Record<string, string>) => {
      const queryParams = new URLSearchParams();

      Object.entries(newFilters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          queryParams.set(
            key,
            Array.isArray(value) ? JSON.stringify(value) : String(value)
          );
        }
      });

      router.push(`?${queryParams.toString()}`);
    },
    [router]
  );

  const onFilterChange = (value: string) => {
    handleURLChange({ genre: value });
  };

  useEffect(() => {
    const _genre = searchParams.get('genre');

    if (_genre) {
      setSelectedGenre(_genre);
    }
  }, [searchParams]);

  return (
    <section className="flex min-h-screen flex-col px-24 font-bold text-4xl text-blue-600 max-w-screen-2xl m-auto w-full box-border">
      <section className="flex flex-col gap-12 py-12">
        <span className="font-bold text-4xl text-primary-500">Top Sellers</span>
        <div className="flex flex-row gap-6 items-center justify-end">
          <span className="font-bold text-xl text-primary-500">Genre</span>
          <div className="h-5 w-px border border-primary-500" />
          {genres.length > 0 && (
            <select
              className="text-xl text-primary-500 bg-transparent outline-0 border-0 p-4"
              value={selectedGenre}
              onChange={(val) => onFilterChange(val.currentTarget.value)}
            >
              <option value="All">All</option>
              {genres.map((genre) => (
                <option
                  key={genre}
                  value={genre}
                >
                  {genre}
                </option>
              ))}
            </select>
          )}

          <DefaultSpinner
            className="size-6"
            show={isLoading && genres.length === 0}
          />
        </div>
      </section>
      <section className="flex flex-col gap-12 w-full py-12">
        <section className="flex flex-row w-full gap-12 flex-wrap justify-start">
          {data?.games.map((game) => (
            <CardProduct
              game={game}
              key={game.id}
            />
          ))}
        </section>
        <DefaultSpinner
          className="w-20 h-20 m-auto"
          show={isLoading || !data}
        />
        {data && data?.currentPage < data?.totalPages && (
          <Button
            className="uppercase !text-base py-5"
            isLoading={isLoading}
          >
            see more
          </Button>
        )}
      </section>
    </section>
  );
};

export default Home;
