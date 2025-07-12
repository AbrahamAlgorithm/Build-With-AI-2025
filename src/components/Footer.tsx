import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-16 flex flex-col items-center font-sans">
      {/* Top section: Logo and name */}
      <div className="flex flex-col items-center gap-2 mb-8">
        <Image
          alt="GDG FUTMinna Logo"
          width={180}
          height={60}
          className="w-[180px] mb-2"
          src="/footer-logo.png"
          style={{ color: 'transparent' }}
        />
        <h2 className="text-white text-xl font-semibold tracking-wide">
          GDG on Campus FUTMinna
        </h2>
      </div>
      {/* Middle section: Socials and lanyard */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-8 w-full justify-center">
        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            className="bg-white rounded-full hover:bg-[#F9AB00] transition p-3"
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/gdgoc_futminna"
          >
            <Image
              alt="Twitter / X"
              width={40}
              height={40}
              src="/twitter.svg"
              style={{ color: 'transparent' }}
            />
          </a>
          <a
            className="bg-white rounded-full hover:bg-[#F9AB00] transition p-3"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/company/gdg-on-campus-futminna"
          >
            <Image
              alt="LinkedIn"
              width={40}
              height={40}
              src="/linkedin.svg"
              style={{ color: 'transparent' }}
            />
          </a>
        </div>
        {/* Lanyard SVG */}
        <Image
          alt="lanyard"
          width={200}
          height={30}
          className="w-[200px] lg:w-[220px]"
          src="/footer-lanyard.svg"
          style={{ color: 'transparent' }}
        />
      </div>
      {/* Bottom section: Copyright */}
      <p className="text-gray-300 text-center italic text-sm mt-4">
        &copy; {new Date().getFullYear()} Technical Team, GDG on Campus FUTMinna
      </p>
    </footer>
  );
}