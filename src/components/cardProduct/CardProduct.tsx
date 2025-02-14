import { Game } from '@/utils/endpoint';
import Card from '../card/Card';
import Image from 'next/image';
import Button from '../shared/Button';
import parseToCurrency from '@/utils/functions/parseToCurrency';
import ShortText from '../shared/ShortText';
import cartStore from '@/store/cart';
import { useMemo } from 'react';

type CardProductProps = {
  game: Game;
};

const CardProduct = ({ game }: CardProductProps) => {
  const games = cartStore((state) => state.games);
  const setGame = cartStore((state) => state.setGame);
  const deleteGame = cartStore((state) => state.deleteGame);

  const currentGame = useMemo(
    () => games.find((_game) => game.id === _game.id),
    [game, games]
  );

  return (
    <Card className="flex flex-col gap-5 items-start justify-between">
      <Image
        className="object-cover object-center rounded-t-2xl w-[279px] md:h-[240px] md:w-[332px]"
        alt={game.name}
        src={game.image}
        width={332}
        height={240}
      />
      <div className="flex flex-col gap-3 w-full">
        <span className="text-neutral-500 font-bold text-base uppercase">
          {game.genre}
        </span>
        <div className="w-full flex flex-row justify-between items-center">
          <span className="text-lg font-bold text-primary-500">
            <ShortText
              text={game.name}
              maxLength={24}
            />
          </span>
          <span className="text-xl font-bold text-primary-500">
            {parseToCurrency(game.price)}
          </span>
        </div>
      </div>
      {!currentGame && (
        <Button
          buttonType="text"
          className="uppercase w-full font-bold !py-5"
          onClick={() => setGame(game)}
        >
          add to cart
        </Button>
      )}
      {currentGame && (
        <Button
          buttonType="danger"
          className="uppercase w-full font-bold !py-5"
          onClick={() => deleteGame(game.id)}
        >
          remove
        </Button>
      )}
    </Card>
  );
};

export default CardProduct;
