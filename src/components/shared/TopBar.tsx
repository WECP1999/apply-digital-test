import Link from 'next/link';
import Button from './Button';
import { RiShoppingCart2Line } from '@remixicon/react';

const TopBar = () => {
  return (
    <nav className="py-5 px-6 max-2xl:px-0 w-full bg-primary-200">
      <div className="max-w-screen-2xl w-full flex flex-row justify-between items-center mx-auto">
        <Link href="/">
          <Button
            buttonType="text"
            className="font-bold !text-2xl !px-0 !min-w-0 !border-none"
          >
            GamerShop
          </Button>
        </Link>
        <Link href="/shopping-cart">
          <RiShoppingCart2Line className="text-primary-400 text-xl" />
        </Link>
      </div>
    </nav>
  );
};

export default TopBar;
