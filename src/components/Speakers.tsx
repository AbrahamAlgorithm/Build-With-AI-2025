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
      image: "/speakers/victor-akande.jpg",
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
      image: "/speakers/4.JPG",
      
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

  const getSessionTypeColor = (type: string) => {
    const colors = {
      Virtual: "bg-orange-300 text-white border border-black",
      "In-Person": "bg-blue-400 text-blue-100 border border-black",
    };
    return colors[type as keyof typeof colors] || "bg-gray-400 text-white border border-black";
  };

  return (
    <div className='w-full min-h-screen px-4 py-16'>
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
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ${
              isAnimating
                ? "opacity-0 transform scale-95"
                : "opacity-100 transform scale-100"
            }`}
          >
            {filteredSpeakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 ${
                  isAnimating
                    ? "opacity-0 translate-y-8"
                    : "opacity-100 translate-y-0"
                }`}
                style={{
                  transitionDelay: isAnimating ? "0ms" : `${index * 100}ms`,
                }}
              >
                {/* Speaker Image */}
                <div className='relative h-96 lg:h-[500px] overflow-hidden'>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className='object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110'
                  />

                  {/* Session Type Badge */}
                  <div
                    className={`absolute top-3 left-3 px-5 py-3 rounded-full text-white font-semibold text-xs ${getSessionTypeColor(
                      speaker.sessionType
                    )} transition-all duration-300 group-hover:scale-105`}
                  >
                    {speaker.sessionType.charAt(0).toUpperCase() +
                      speaker.sessionType.slice(1)}
                  </div>

                  {/* Improved Overlay */}
                  <div className='absolute inset-0 flex flex-col justify-end p-6 transition-all duration-700 ease-out opacity-0 bg-gradient-to-t from-slate-900 via-slate-800/70 to-transparent group-hover:opacity-100'>
                    <div className='transition-all duration-500 delay-100 transform translate-y-8 group-hover:translate-y-0'>
                      <h3 className='mb-2 text-xl font-bold tracking-wide text-white'>
                        {speaker.name}
                      </h3>
                      <h6 className='mb-1 text-sm font-medium text-gray-300'>
                        {speaker.title}
                        {speaker.company && (
                          <>
                            {"@"}
                            <span className='text-sm font-light text-gray-300 uppercase'>
                              {speaker.company}
                            </span>
                          </>
                        )}
                      </h6>
                      <p className='text-sm italic text-gray-200'>
                       Topic: &quot;{speaker.topic}&quot;
                      </p>
                    </div>

                    {/* Subtle accent line */}
                    <div className='absolute bottom-0 left-0 right-0 h-1 transition-transform duration-500 delay-200 transform scale-x-0 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-x-100'></div>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className='p-3 transition-all duration-500'>
                  {/* Badges - Always visible */}
                  <div className='flex items-center gap-2 mb-2 transition-all duration-300 group-hover:mb-4'>
                    <span
                      className='text-lg text-blue-600 uppercase'
                      style={{ margin: 0 }}
                    >
                      Speaker
                    </span>
                    <Image
                      src='/logo/WEB STUFF-04.png'
                      alt='logo'
                      width={180}
                      height={40}
                    />
                  </div>
                </div>
              </div>
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
