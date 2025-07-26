"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[80vh] py-20 px-4 md:px-12 font-sans text-center bg-white">
        <div className="w-full h-32 max-w-4xl mb-8 bg-gray-100 rounded-lg animate-pulse"></div>
        <div className="w-64 h-8 mb-8 bg-gray-100 rounded animate-pulse"></div>
        <div className="flex gap-8 mb-10">
          <div className="text-center">
            <div className="w-16 h-8 mb-2 bg-gray-100 rounded animate-pulse"></div>
            <div className="w-12 h-4 bg-gray-100 rounded animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-20 px-4 md:px-12 font-productsans text-center bg-white">
      <div className="w-full max-w-6xl">
        <div className="mt-0 mb-2 md:mt-32">
          <Image
            src="/logo2.png"
            alt="Build with AI FUTMINNA 2025 Logo"
            width={1200}
            height={500}
            className="w-full h-auto max-w-5xl mx-auto"
            priority
          />
        </div>
        

        {/* Event Status */}
        <h2 className="mb-5 text-lg font-semibold text-black md:text-xl font-productsans">
          🎉 The Event is Now Live! 🎉
        </h2>

        <div className="mb-12">
          <div className="text-center">
            <div className="mb-4 text-4xl font-bold text-green-600 md:text-6xl font-productsans">
              EVENT STARTED
            </div>
            <div className="text-lg font-medium text-gray-600 md:text-xl font-productsans">
              Join us now for an amazing AI experience!
            </div>
          </div>
        </div>

        

        <div className="flex flex-col max-w-2xl gap-4 mx-auto mt-8 sm:flex-row md:gap-6">
          <Link
            href="/get-dp"
            className="bg-[#ffe7a5] text-[#1e1e1e] font-bold px-8 py-4 md:px-12 md:py-6 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-lg md:text-2xl flex-1 text-center font-productsans"
          >
            Generate DP
          </Link>
          
          <Link
            href="https://gdg.community.dev/events/details/google-gdg-on-campus-federal-university-of-technology-minna-nigeria-presents-build-with-ai-2025/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffe7a5] text-[#1e1e1e] flex-1 px-8 py-4 text-lg font-bold text-center transition-shadow duration-200 rounded-full shadow-sm md:px-12 md:py-6 hover:shadow-md md:text-2xl font-productsans"
          >
            Join Live Event
          </Link>
        </div>
      </div>
    </section>
  );
}