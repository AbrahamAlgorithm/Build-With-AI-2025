import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black p-4 flex flex-col items-center justify-center gap-10 py-20">
      {/* Logo */}
      <Image
        alt="gdg-futminna-logo"
        width={3762}
        height={1394}
        className="w-[250px] lg:w-[300px]"
        src="/footer-logo.png"
        style={{ color: 'transparent' }}
      />
      {/* Lanyard or decorative SVG */}
      <Image
        alt="lanyard"
        width={472}
        height={46}
        className="w-[300px]"
        src="/footer-lanyard.svg"
        style={{ color: 'transparent' }}
      />
      {/* Social Icons */}
      <div className="flex items-center gap-6">
        <a
          className="bg-white rounded-full hover:bg-[#F9AB00] transition"
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/gdgoc_futminna"
        >
          <Image
            alt="Twitter / X"
            width={108}
            height={108}
            className="w-[70px]"
            src="/twitter.svg"
            style={{ color: 'transparent' }}
          />
        </a>
        <a
          className="bg-white rounded-full hover:bg-[#F9AB00] transition"
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/gdgoc_futminna"
        >
          <Image
            alt="LinkedIn"
            width={108}
            height={108}
            className="w-[70px]"
            src="/linkedin.svg"
            style={{ color: 'transparent' }}
          />
        </a>
      </div>
      {/* Copyright */}
      <p className="text-white text-center italic">
        Copyright ©, GDG on Campus FUTMinna 2025
      </p>
    </footer>
  );
}