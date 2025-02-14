import { Game } from '@/utils/endpoint';
import Button from '../../shared/Button';
import Card from '../../card/Card';
import { useMemo } from 'react';
import parseToCurrency from '@/utils/functions/parseToCurrency';

type OrderSummaryProps = {
  games: Array<Game>;
};

const OrderSummary = ({ games }: OrderSummaryProps) => {
  const orderTotal = useMemo(
    () => games.reduce<number>((acc, game) => acc + game.price, 0),
    [games]
  );
  return (
    <div className="w-full max-w-[522px] flex flex-col gap-8">
      <Card className="!p-8 !max-w-none">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-3">
            <span className="text-primary-500 text-2xl font-bold">
              Order Summary
            </span>
            <span className="text-primary-500 text-lg">
              {games.length} items
            </span>
          </div>
          <div className="flex flex-col gap-6 w-full py-5">
            <div className="flex flex-col gap-3 w-full">
              {games.map((game) => (
                <div
                  className="flex flex-row justify-between items-center text-lg text-primary-500"
                  key={game.id}
                >
                  <span>{game.name}</span>
                  <span>{game.price}</span>
                </div>
              ))}
            </div>
            <div className="w-full border border-primary-500" />
            <div className="flex flex-row text-primary-500 text-xl justify-between items-center">
              <span>Order Total</span>
              <span>{parseToCurrency(orderTotal)}</span>
            </div>
          </div>
        </div>
      </Card>
      <Button className="w-full !text-base font-bold py-5">Checkout</Button>
    </div>
  );
};

export default OrderSummary;
