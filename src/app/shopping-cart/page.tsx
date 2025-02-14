'use client';

import CartProduct from '@/components/cart/cartProducts/CartProducts';
import OrderSummary from '@/components/cart/orderSummary/OrderSummary';
import Button from '@/components/shared/Button';
import cartStore from '@/store/cart';
import { RiArrowLeftLine } from '@remixicon/react';
import Link from 'next/link';

const ShoppingCart = () => {
  const games = cartStore((state) => state.games);

  return (
    <section className="flex min-h-screen flex-col px-6 sm:px-24 font-bold max-w-screen-2xl m-auto w-full box-border pb-12">
      <section className="flex flex-col gap-12 py-12">
        <div className="py-6">
          <Link
            href="/"
            className="flex flex-row gap-2 text-base text-primary-500 font-medium"
          >
            <RiArrowLeftLine />
            <span className="">Back to Catalog</span>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-4xl text-primary-500">
            Top Sellers
          </span>
          <span className="text-primary-500 text-2xl">
            {games.length} items
          </span>
        </div>
      </section>
      <section className="flex flex-col justify-between lg:flex-row">
        <div className="flex flex-col w-full max-w-[678px]">
          {games.map((game, index) => (
            <CartProduct
              game={game}
              lastProduct={index === games.length - 1}
              key={game.id}
            />
          ))}
        </div>
        <OrderSummary games={games} />
      </section>
    </section>
  );
};

export default ShoppingCart;
