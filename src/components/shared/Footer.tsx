import Image from 'next/image';
import ApplyLogo from '@/../public/footer/ApplyLogo.png';
import Apply from '../icons/Apply';
import Digital from '../icons/Digital';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-neutral-700 w-full py-16">
      <Link href="/">
        <div className="flex flex-row gap-3.5 items-center justify-center">
          <Image
            src={ApplyLogo}
            alt="Apply Digital Logo"
          />
          <div className="flex flex-col gap-2 items-center justify-center">
            <Apply />
            <Digital />
          </div>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
