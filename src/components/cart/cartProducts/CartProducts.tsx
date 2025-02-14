import ShortText from '@/components/shared/ShortText';
import cartStore from '@/store/cart';
import { Game } from '@/utils/endpoint';
import parseToCurrency from '@/utils/functions/parseToCurrency';
import { RiCloseLine } from '@remixicon/react';
import classNames from 'classnames';
import Image from 'next/image';

type CartProductProps = {
  game: Game;
  lastProduct: boolean;
};

const CartProduct = ({ game, lastProduct }: CartProductProps) => {
  const deleteGame = cartStore((state) => state.deleteGame);

  return (
    <div
      className={classNames('py-5 px-4 bg-white', {
        'border-b-[0.5px] border-primary-500': !lastProduct,
      })}
    >
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex flex-row w-full sm:w-fit justify-between">
          <Image
            className="object-cover object-center max-w-[259px] h-[136px] md:h-[156px] md:max-w-[256px]"
            alt={game.name}
            src={game.image}
            width={256}
            height={156}
          />

          <RiCloseLine
            className="text-sm cursor-pointer text-primary-300 ml-auto block sm:hidden"
            onClick={() => deleteGame(game.id)}
          />
        </div>
        <div className="flex flex-col justify-between items-start">
          <div className="flex flex-col gap-3">
            <span className="text-base text-neutral-500 uppercase font-bold">
              {game.genre}
            </span>
            <div className="flex flex-col gap-2">
              <span className="text-xl font-bold text-primary-500">
                {game.name}
              </span>
              <ShortText
                className="!text-neutral-500 !text-base font-normal"
                text={game.description}
                maxLength={200}
              />
            </div>
          </div>
          <div className="mt-auto ml-auto self-end">
            <span className="text-xl font-bold text-primary-500">
              {parseToCurrency(game.price)}
            </span>
          </div>
        </div>
        <RiCloseLine
          className="text-sm cursor-pointer text-primary-300 ml-auto hidden sm:block"
          onClick={() => deleteGame(game.id)}
        />
      </div>
    </div>
  );
};

export default CartProduct;
