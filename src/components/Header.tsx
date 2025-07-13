import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="w-full flex-nowrap flex flex-col lg:flex-row lg:items-center px-12 lg:px-24 py-5 justify-between">
      <div className="flex items-center justify-between pl-4">
        <Link href="/">
          <Image
            alt="Build with AI logo"
            width={1622}
            height={760}
            className="h-[40px] lg:h-[48px] w-auto contain-content"
            src="/logo.png"
            priority
          />
        </Link>
      </div>
      <div className="hidden lg:block">
        <div className="flex flex-row gap-5 lg:w-auto lg:h-auto lg:bg-transparent lg:relative lg:items-center lg:gap-10 pr-10">
          <ul className="flex flex-row items-center gap-10 font-medium text-lg overflow-x-auto text-black">
            <li>
              <Link href="/get-dp" className="text-black">Get DP</Link>
            </li>
            <li>
              <Link href="/speakers" className="text-black">Speakers</Link>
            </li>
            <li>
              <Link href="/team-page" className="text-black">Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}