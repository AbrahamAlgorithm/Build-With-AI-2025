import Image from "next/image";
import Link from "next/link";

export default function Venue() {
  return (
    <section className="bg-[#f8d8d8] py-10 lg:py-20">
      <div className="px-4 lg:px-20 container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
          <h1 className="font-semibold text-2xl lg:text-4xl">Venues</h1>
          <Image
            src="/logo3.png"
            alt="devfest-frame"
            width={4235}
            height={214}
            className="lg:w-[80%]"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          {/* Main Venue Card - spans 2 columns on desktop */}
          <div className="relative rounded-2xl shadow-lg border-2 border-[#1E1E1E] overflow-hidden h-[300px] min-h-[300px] lg:h-[500px] lg:min-h-[600px] lg:col-span-2 flex">
            <Image
              src="/Nihub.webp"
              alt="conference-day-venue"
              fill
              className="object-cover w-full h-full"
              style={{ color: "transparent" }}
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-8">
              <h2 className="text-3xl font-bold text-white drop-shadow mb-2">
                NITDA IT HUB
              </h2>
              <p className="text-lg text-gray-100 drop-shadow mb-2">
                Physical Venue for Conference Day
              </p>
              <span className="inline-block bg-[#33A852] text-white font-semibold px-5 py-2 rounded-full w-fit mt-2 mb-2">
                Physical Venue
              </span>
            </div>
          </div>
          {/* Workshop Venue Card - single column, smaller */}
          <div className="relative rounded-2xl shadow-lg border-2 border-[#1E1E1E] overflow-hidden h-[300px] min-h-[300px] flex">
            <Image
              src="/virtual.png"
              alt="workshop-venue"
              fill
              className="object-cover w-full h-full"
              style={{ color: "transparent" }}
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
              <h2 className="text-xl font-bold text-white drop-shadow mb-1">
                Google Meet
              </h2>
              <p className="text-base text-gray-100 drop-shadow mb-1">
                Virtual Venue for Workshop Day
              </p>
              <span className="inline-block bg-[#f8d8d8] text-[#1E1E1E] font-semibold px-4 py-1 rounded-full w-fit mt-2 mb-2">
                Virtual
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-10">
          <Link
            href="https://gdg.community.dev/events/details/google-gdg-on-campus-federal-university-of-technology-minna-nigeria-presents-build-with-ai-2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="chakra-button !bg-[#33A852] !text-white hover:opacity-80 flex items-center gap-2 font-semibold rounded-full px-8 py-4 text-lg transition"
            style={{ textAlign: "center" }}
          >
            Register Now
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
              ></path>
            </svg>
          </Link>
          <Link
            href="/get-dp"
            className="chakra-button !bg-[#FF7DAF] !text-white hover:opacity-80 flex items-center gap-2 font-semibold rounded-full px-8 py-4 text-lg transition"
            style={{ textAlign: "center" }}
          >
            Generate DP!
          </Link>
        </div>
      </div>
    </section>
  );
}