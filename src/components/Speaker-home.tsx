import Image from "next/image";

export default function Speakers() {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "Frank C. Ebeledike ",
      title: "Mobile App Developer",
      company: "TMR Golden Living",
      image: "/speakers/1.png",
      bio: "",
      sessionType: "Virtual"
    },
    {
      id: 2,
      name: "Victor Akande", 
      title: "Cloud Engineer",
      company: "",
      image: "/speakers/2.png",
      bio: "",
      sessionType: "In-Person"
    },
    {
      id: 3,
      name: "Nurudeen Abdulmalik",
      title: "Software Engineer",
      company: "",
      image: "/speakers/3.png",
      bio: "",
      sessionType: "In-Person"
    },
    {
      id: 4,
      name: "El-Praise Ayo",
      title: "Software Developer",
      sessionType: "In-Person",
      image: "/speakers/4.jpg",
      bio: "",
      company: "" 
    }
  ];

  // Helper function to get session type styling
interface Speaker {
    id: number;
    name: string;
    title: string;
    company: string;
    image: string;
    bio: string;
    sessionType: SessionType;
}

type SessionType = "Virtual" | "In-Person";

const getSessionTypeStyles = (sessionType: SessionType): string => {
    switch (sessionType) {
        case "Virtual":
            return "bg-orange-300 text-white border border-black";
        case "In-Person":
            return "bg-blue-400 text-blue-100 border border-black";
        default:
            return "bg-gray-400 text-white border border-black";
    }
};

  return (
    <section className="py-10 bg-white lg:py-20">
      <div className="container px-4 mx-auto lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 mb-10 lg:flex-row">
          <h1 className="text-2xl font-semibold lg:text-4xl">Speakers</h1>
          <Image
            src="/logo3.png"
            alt="devfest-frame"
            width={4235}
            height={214}
            className="lg:w-[80%]"
            style={{ color: "transparent" }}
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {speakers.map((speaker) => (
            <div 
              key={speaker.id}
              className="group relative rounded-2xl border-3 border-black overflow-hidden transition-all duration-300 h-96 lg:h-[500px]"
            >
              {/* Speaker Image - Full Card */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover transition-transform duration-300"
                  style={{ color: "transparent" }}
                />
                
                {/* Session Type Badge */}
                <div className="absolute z-10 top-5 left-4">
                  <span className={`px-5 py-3 rounded-full text-sm font-medium ${getSessionTypeStyles(speaker.sessionType)}`}>
                    {speaker.sessionType}
                  </span>
                </div>
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Speaker Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="mb-1 text-2xl font-bold drop-shadow-lg">
                    {speaker.name}
                  </h3>
                  <p className="mb-1 text-sm font-semibold drop-shadow-md">
                    {speaker.title}
                  </p>
                  <p className="text-xs opacity-90 drop-shadow-md">
                    {speaker.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex items-center justify-center gap-4 mt-12 lg:justify-end">
          <a
            href="https://gdg.community.dev/events/details/google-gdg-on-campus-federal-university-of-technology-minna-nigeria-presents-build-with-ai-2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 text-lg text-gray-800 transition bg-white border border-black rounded-full hover:opacity-80 hover:bg-gray-100"
          >
            Register
          </a>
          <a
            href="/speakers"
            className="flex items-center gap-2 px-8 py-4 text-lg text-white transition bg-black rounded-full hover:opacity-80"
          >
            More
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
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}