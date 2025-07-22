"use client";
import React from "react";
import Image from "next/image";

export default function Slider() {
  const logo = [
    {
      id: 1,
      name: "Slider",
      image: "/logo.png",
      width: 186,
      height: 46
    },
    {
      id: 2,
      name: "Slider",
      image: "/logo.png",
      width: 186,
      height: 46
    },
    {
      id: 3,
      name: "Slider",
      image: "/logo.png",
      width: 186,
      height: 46
    },
    {
      id: 4,
      name: "Slider",
      image: "/logo.png",
      width: 186,
      height: 46
    },
    {
      id: 5,
      name: "Slider",
      image: "/logo.png",
      width: 186,
      height: 46
    },
    {
      id: 6,
      name: "Apple",
      image: "/logo.png",
      width: 186,
      height: 46
    }
  ];

  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logo, ...logo];

  return (
    <div className="py-[10px] md:py-20 lg:py-[10px] bg-[#ffe7a5]">
        <div className="brand-slider-container overflow-hidden">
          <div className="brand-slider flex gap-[50px] animate-slide">
            {/* Render for infinite loop */}
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="brand-slide flex-shrink-0"
                style={{ width: "161.2px" }}
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto w-fit mx-auto hover:opacity-100 transition-opacity duration-300 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(logo.length * (161.2 + 50))}px);
          }
        }

        .animate-slide {
          animation: slide 20s linear infinite;
        }

        .brand-slider:hover .animate-slide {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}