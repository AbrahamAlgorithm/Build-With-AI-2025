import Image from 'next/image';
import Link from 'next/link';
import SpeakerShowcase from '@/components/Speakers';

export default function SpeakersPage() {
  return (
    <div className="flex flex-col items-center max-w-full mx-auto py-8 px-2">
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-center font-productsans">Our Speakers</h1>
      <p className="text-base md:text-2xl text-gray-700 mb-12 text-center font-productsans max-w-3xl">
        Meet the industry experts and thought leaders who will share their insights and knowledge.
        Discover cutting-edge AI technologies and innovations from our distinguished speakers.
      </p>

      {/* Time and Venue */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full max-w-6xl mb-16">
        {/* Day 1 Card */}
        <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl shadow-2xl border-2 border-green-800 p-8 flex-1 font-productsans flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-white text-xl md:text-2xl font-semibold">Day 1</span>
              <Image
                src="/logo/WEB STUFF-04.png"
                alt="logo"
                width={100}
                height={28}
                className="h-6 w-auto md:h-8 md:w-auto"
              />
            </div>
            <h3 className="text-2xl md:text-3xl text-white font-bold mb-2">Thursday, July 24</h3>
            <p className="font-semibold text-white text-base md:text-xl mb-4">Google Meet <span aria-label="location" role="img">📍</span></p>
          </div>
          <Link
            href="https://gdg.community.dev/events/details/google-gdg-on-campus-federal-university-of-technology-minna-nigeria-presents-build-with-ai-2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-700 px-6 py-2 rounded-full font-bold hover:bg-green-100 transition-colors duration-200 text-center shadow text-base md:text-xl"
          >
            Set Reminder
          </Link>
        </div>
        {/* Day 2 Card */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl border-2 border-blue-800 p-8 flex-1 font-productsans flex flex-col justify-between min-h-[220px] mt-4 md:mt-0">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-white text-xl md:text-2xl font-semibold">Day 2</span>
              <Image
                src="/logo/WEB STUFF-04.png"
                alt="logo"
                width={100}
                height={28}
                className="h-6 w-auto md:h-8 md:w-auto"
              />
            </div>
            <h3 className="text-2xl md:text-3xl text-white font-bold mb-2">Saturday, July 26</h3>
            <p className="font-semibold text-white text-base md:text-xl mb-4">NITDA IT HUB <span aria-label="location" role="img">📍</span></p>
          </div>
          <Link
            href="https://gdg.community.dev/events/details/google-gdg-on-campus-federal-university-of-technology-minna-nigeria-presents-build-with-ai-2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition-colors duration-200 text-center shadow text-base md:text-xl"
          >
            Register
          </Link>
        </div>
      </div>

      <SpeakerShowcase />
    </div>
  );
}