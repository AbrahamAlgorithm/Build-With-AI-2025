import Image from "next/image";
import Link from "next/link";

export default function Schedule() {
  return (
    <section className="bg-gray-50 py-10 lg:py-20 min-h-[70vh] flex items-center">
      <div className="px-4 lg:px-20 container mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
          <h1 className="font-semibold text-2xl lg:text-4xl">Schedule</h1>
          <Image
            src="/logo3.png"
            alt="devfest-frame"
            width={4235}
            height={214}
            className="lg:w-[80%]"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="mt-10">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Day 1 Card */}
            <aside className="bg-gradient-to-br from-green-500 to-green-700 rounded-3xl shadow-2xl border-2 border-green-800 p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white text-xl md:text-3xl font-semibold">
                    Day 1 - Virtual
                  </span>
                  <Image
                    src="/logo/WEB STUFF-04.png"
                    alt="logo"
                    width={100}
                    height={28}
                    className="h-6 w-auto md:h-8 md:w-auto"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl text-green-100 font-bold mb-2">
                  Thursday, July 24 (5:00 PM WAT)
                </h3>
                <p className="font-semibold text-green-100 text-base md:text-xl mb-8">
                  Google Meet <span aria-label="location" role="img">📍</span>
                </p>
              </div>
              <a
                className="mt-6 flex items-center justify-center bg-[#f0f0f0] text-green-700 font-semibold rounded-full px-6 py-4 text-base hover:opacity-80 transition w-fit"
                href="https://bit.ly/Lets-Build-With-AI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Calendar&nbsp;
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  ></path>
                </svg>
              </a>
            </aside>
            {/* Day 2 Card */}
            <aside className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl shadow-2xl border-2 border-blue-800 p-8 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white text-xl md:text-3xl font-semibold">
                    Day 2 - Physical
                  </span>
                  <Image
                    src="/logo/WEB STUFF-04.png"
                    alt="logo"
                    width={100}
                    height={28}
                    className="h-6 w-auto md:h-8 md:w-auto"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl text-blue-100 font-bold mb-2">
                  Saturday, July 26 (9:00 AM WAT)
                </h3>
                <p className="font-semibold text-blue-100 text-base md:text-xl mb-8">
                  NITDA IT HUB <span aria-label="location" role="img">📍</span>
                </p>
              </div>
              <a
                className="mt-6 flex items-center justify-center bg-[#f0f0f0] text-blue-700 font-semibold rounded-full px-6 py-4 text-base hover:opacity-80 transition w-fit"
                href="https://bit.ly/Lets-Build-With-AI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now&nbsp;
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                  ></path>
                </svg>
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}