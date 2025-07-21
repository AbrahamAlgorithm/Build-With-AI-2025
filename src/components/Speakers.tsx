"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Speaker {
  id: number;
  name: string;
  title: string;
  company: string;
  sessionType: "keynote" | "breakout" | "panelist" | "workshop";
  image: string;
}

const SpeakerShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isAnimating, setIsAnimating] = useState(false);

  const speakers: Speaker[] = [
    {
      id: 1,
      name: "Temi Kolawole",
      title: "Managing Director",
      company: "Ilorin Innovation Hub",
      sessionType: "keynote",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Adigbole Osisioni",
      title: "Snr Product Designer",
      company: "MTN",
      sessionType: "breakout",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Qudirah Alimi",
      title: "Machine Learning Engineer",
      company: "Arebak LLC",
      sessionType: "breakout",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "David Chen",
      title: "Senior Software Engineer",
      company: "Google",
      sessionType: "panelist",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Sarah Johnson",
      title: "UX Research Lead",
      company: "Microsoft",
      sessionType: "workshop",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Michael Rodriguez",
      title: "Data Scientist",
      company: "Netflix",
      sessionType: "keynote",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Lisa Wang",
      title: "AI Research Scientist",
      company: "OpenAI",
      sessionType: "workshop",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "James Miller",
      title: "DevOps Engineer",
      company: "Amazon",
      sessionType: "panelist",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 9,
      name: "Emma Thompson",
      title: "Frontend Developer",
      company: "Spotify",
      sessionType: "breakout",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "keynote", label: "Keynote" },
    { id: "breakout", label: "Breakout" },
    { id: "panelist", label: "Panelist" },
    { id: "workshop", label: "Workshop" },
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
      keynote: "bg-pink-500",
      breakout: "bg-cyan-500",
      panelist: "bg-blue-500",
      workshop: "bg-green-500",
    };
    return colors[type as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <div className='min-h-screen bg-gray-50 py-16 px-4'>
      <div className='max-w-7xl mx-auto'>
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
        <div className='relative'>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
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
                <div className='relative h-64 overflow-hidden'>
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className='object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110'
                  />

                  {/* Session Type Badge */}
                  <div
                    className={`absolute top-3 left-3 px-3 py-1 rounded-full text-white font-semibold text-xs ${getSessionTypeColor(
                      speaker.sessionType
                    )} transition-all duration-300 group-hover:scale-105`}
                  >
                    {speaker.sessionType.charAt(0).toUpperCase() +
                      speaker.sessionType.slice(1)}
                  </div>

                  {/* Improved Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out flex flex-col justify-end p-6'>
                    <div className='transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100'>
                      <h3 className='text-xl font-bold text-white mb-2 tracking-wide'>
                        {speaker.name}
                      </h3>
                      <h6 className='text-sm text-gray-300 mb-1 font-medium'>
                        {speaker.title}
                        {", "}
                        <span className='text-gray-300 text-sm font-light uppercase'>
                          {speaker.company}
                        </span>
                      </h6>
                    </div>

                    {/* Subtle accent line */}
                    <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200'></div>
                  </div>
                </div>

                {/* Speaker Info */}
                <div className='p-3 transition-all duration-500'>
                  {/* Badges - Always visible */}
                  <div className='flex items-center gap-2 mb-2 group-hover:mb-4 transition-all duration-300'>
                    <span
                      className='text-lg uppercase text-blue-600'
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
          <div className='text-center py-16'>
            <div className='text-gray-400 text-6xl mb-4'>🔍</div>
            <h3 className='text-xl font-semibold text-gray-600 mb-2'>
              No speakers found
            </h3>
            <p className='text-gray-500'>
              Try selecting a different filter to see more speakers.
            </p>
          </div>
        )}

        {/* Statistics */}
        <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='text-center p-6 bg-white rounded-lg shadow-lg'>
            <div className='text-3xl font-bold text-gray-900 mb-2'>
              {speakers.length}
            </div>
            <div className='text-gray-600'>Total Speakers</div>
          </div>
          <div className='text-center p-6 bg-white rounded-lg shadow-lg'>
            <div className='text-3xl font-bold text-pink-500 mb-2'>
              {speakers.filter((s) => s.sessionType === "keynote").length}
            </div>
            <div className='text-gray-600'>Keynotes</div>
          </div>
          <div className='text-center p-6 bg-white rounded-lg shadow-lg'>
            <div className='text-3xl font-bold text-cyan-500 mb-2'>
              {speakers.filter((s) => s.sessionType === "breakout").length}
            </div>
            <div className='text-gray-600'>Breakouts</div>
          </div>
          <div className='text-center p-6 bg-white rounded-lg shadow-lg'>
            <div className='text-3xl font-bold text-green-500 mb-2'>
              {speakers.filter((s) => s.sessionType === "workshop").length}
            </div>
            <div className='text-gray-600'>Workshops</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerShowcase;
