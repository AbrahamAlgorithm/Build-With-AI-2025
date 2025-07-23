"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Speaker {
  id: number;
  name: string;
  title: string;
  company?: string;
  sessionType: "In-Person" | "Virtual";
  image: string;
  topic: string;
}

const SpeakerShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isAnimating, setIsAnimating] = useState(false);

  const speakers: Speaker[] = [
    {
      id: 3,
      name: "Frank C. Ebeledike ",
      title: "Mobile App Developer",
      company: "TMR Golden Living",
      image: "/speakers/1.png",
      sessionType: "Virtual",
      topic: "From Idea to App: Rapid Prototyping with Gemini in AI Studio",
    },
    {
      id: 1,
      name: "Victor (Olamide) Akande",
      title: "Cloud Engineer",
      sessionType: "In-Person",
      image: "/speakers/2.png",
      topic: "Multimodal RAG using Vertex AI Gemini API",
    },
    {
      id: 2,
      name: "Nurudeen AbdulMalik Ajao",
      title: "Software Engineer",
      sessionType: "In-Person",
      image: "/speakers/3.png",
      topic: "Transforming AI ideas into Full-stack Apps with Firebase Studio",
    },
    {
      id: 4,
      name: "El-Praise Ayo",
      title: "Software Developer",
      topic: "Introduction to Generative AI: Video Generation using Vertex AI",
      sessionType: "In-Person",
      image: "/speakers/4.jpg",
    }
  ];

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "Virtual", label: "Virtual" },
    { id: "In-Person", label: "In Person" },
  ];

  const filteredSpeakers =
    activeFilter === "all"
      ? speakers
      : speakers.filter((speaker) => speaker.sessionType === activeFilter);

  const handleFilterChange = (filterId: string) => {
    if (filterId === activeFilter) return;

    setIsAnimating(true);

    // Small delay to trigger exit animation
    setTimeout(() => {
      setActiveFilter(filterId);

      // Reset animation state after filter change
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 150);
  };

  // const getSessionTypeColor = (type: string) => {
  //   const colors = {
  //     Virtual: "bg-orange-300 text-white border border-black",
  //     "In-Person": "bg-blue-400 text-blue-100 border border-black",
  //   };
  //   return colors[type as keyof typeof colors] || "bg-gray-400 text-white border border-black";
  // };

  return (
    <div className='w-full min-h-screen px-6 md:px-20 lg:px-52'>
      <div className='container w-full mx-auto'>
        {/* Filter Buttons */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {filterButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleFilterChange(button.id)}
              className={`px-8 py-3 rounded-full font-medium text-base transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg ${
                activeFilter === button.id
                  ? "bg-black text-white shadow-lg scale-105"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
        {/* Speaker Grid with Animation */}
        <div className='relative w-full'>
          <div
            className={`py-8 grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-500 justify-center ${
              isAnimating
                ? "opacity-0 transform scale-95"
                : "opacity-100 transform scale-100"
            }`}
          >
            {filteredSpeakers.map((speaker, index) => (
              <aside
                key={speaker.id}
                className={`border-4 border-black bg-black rounded-xl relative overflow-hidden mx-auto w-full max-w-[700px] aspect-[5/6] flex flex-col shadow-lg group transition-all duration-500 ${
                  isAnimating
                    ? "opacity-0 translate-y-8"
                    : "opacity-100 translate-y-0"
                }`}
                style={{
                  transitionDelay: isAnimating ? "0ms" : `${index * 100}ms`,
                  minHeight: "350px", // reduced for mobile
                }}
              >
                {/* Session Type Badge */}
                <div
                  className={`p-2 px-4 rounded-full w-fit absolute border-2 border-black top-6 left-4 text-primary-body capitalize ${
                    speaker.sessionType === "Virtual"
                      ? "bg-[#FF7DAF] text-white"
                      : "bg-blue-400 text-white"
                  } text-xs font-semibold z-10`}
                >
                  {speaker.sessionType}
                </div>
                {/* Speaker Image fills the card */}
                <div className="relative w-full h-full flex-1 min-h-[200px] md:min-h-[600px]">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover w-full h-full rounded-xl transition-all duration-500"
                    style={{ objectPosition: "top" }}
                  />
                  {/* Overlay with details on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 md:p-10 pb-20 md:pb-36">
                    <h2 className="text-[1.1rem] md:text-[2.2rem] font-bold text-white mb-2">{speaker.name}</h2>
                    <p className="font-light text-[13px] md:text-[18px] text-gray-200 mb-1">{speaker.title}{speaker.company && `, ${speaker.company}`}</p>
                    <p className="text-xs md:text-base italic text-gray-300">{speaker.topic}</p>
                  </div>
                </div>
                {/* Speaker Info (always visible, overlay bottom) */}
                <div className="absolute left-0 right-0 bottom-0 p-4 md:p-8 bg-white rounded-b-xl h-auto overflow-hidden flex flex-col justify-between z-20">
                  <div className="flex items-center justify-between">
                    <p className="text-button opacity-50 uppercase text-xs md:text-lg font-bold">SPEAKER</p>
                    <Image
                      src="/logo/WEB STUFF-04.png"
                      alt="lanyard"
                      width={90}
                      height={32}
                      className="w-[60%] md:w-[70%] h-auto"
                    />
                  </div>
                </div>
              </aside>
            ))}
          </div>
        </div>

        {/* No Results Message */}
        {filteredSpeakers.length === 0 && (
          <div className='py-16 text-center'>
            <div className='mb-4 text-6xl text-gray-400'>🔍</div>
            <h3 className='mb-2 text-xl font-semibold text-gray-600'>
              No speakers found
            </h3>
            <p className='text-gray-500'>
              Try selecting a different filter to see more speakers.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpeakerShowcase;
