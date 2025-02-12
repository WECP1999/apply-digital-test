import Link from 'next/link';
import Button from './Button';
import { RiShoppingCart2Line } from '@remixicon/react';

const TopBar = () => {
  return (
    <nav className="py-5 w-full bg-primary-200">
      <div className="max-w-screen-2xl w-full flex flex-row justify-between items-center mx-auto">
        <Link href="/">
          <Button
            buttonType="text"
            className="font-bold text-2xl"
          >
            GamerShop
          </Button>
        </Link>
        <Link href="/shopping-cart">
          <RiShoppingCart2Line className="text-primary-400" />
        </Link>
      </div>
    </nav>
  );
};

export default TopBar;
