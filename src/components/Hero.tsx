"use client";
import React, { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function getTimeLeft(targetDate: Date) {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  if (diff <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default function Hero() {
  const targetDate = useMemo(() => {
    return new Date("2025-07-26T09:00:00Z");
  }, []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[80vh] py-20 px-4 md:px-12 font-sans text-center bg-white">
        <div className="w-full max-w-4xl h-32 bg-gray-100 rounded-lg animate-pulse mb-8"></div>
        <div className="h-8 bg-gray-100 rounded w-64 animate-pulse mb-8"></div>
        <div className="flex gap-8 mb-10">
          <div className="text-center">
            <div className="w-16 h-8 bg-gray-100 rounded animate-pulse mb-2"></div>
            <div className="w-12 h-4 bg-gray-100 rounded animate-pulse"></div>
          </div>
          <div className="text-center">
            <div className="w-16 h-8 bg-gray-100 rounded animate-pulse mb-2"></div>
            <div className="w-12 h-4 bg-gray-100 rounded animate-pulse"></div>
          </div>
          <div className="text-center">
            <div className="w-16 h-8 bg-gray-100 rounded animate-pulse mb-2"></div>
            <div className="w-12 h-4 bg-gray-100 rounded animate-pulse"></div>
          </div>
          <div className="text-center">
            <div className="w-16 h-8 bg-gray-100 rounded animate-pulse mb-2"></div>
            <div className="w-12 h-4 bg-gray-100 rounded animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  const countdownData = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-20 px-4 md:px-12 font-productsans text-center bg-white">
      <div className="w-full max-w-6xl">
        <div className="mb-2 mt-0 md:mt-32">
          <Image
            src="/logo2.png"
            alt="Build with AI FUTMINNA 2025 Logo"
            width={1200}
            height={500}
            className="mx-auto w-full max-w-5xl h-auto"
            priority
          />
        </div>
        

        {/* Countdown heading */}
        <h2 className="text-lg md:text-xl font-semibold text-black mb-5 font-productsans">
          Countdown to the main event
        </h2>

        <div className="mb-12">
        <div className="grid grid-cols-2 md:flex md:justify-center md:gap-12">
            {countdownData.map((item) => (
            <div key={item.label} className="text-center font-productsans">
                <div className="text-7xl md:text-8xl font-product-sans font-bold text-black mb-2 font-productsans">
                {item.value}
                </div>
                <div className="text-xl md:text-base text-gray-600 tracking-wider font-medium font-productsans">
                {item.label}
                </div>
            </div>
            ))}
        </div>
        </div>

        

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 max-w-2xl mx-auto">
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
            className="bg-[#ffe7a5] text-[#1e1e1e] font-bold px-8 py-4 md:px-12 md:py-6 rounded-full shadow-sm hover:shadow-md transition-shadow duration-200 text-lg md:text-2xl flex-1 text-center font-productsans"
          >
            Register for Event
          </Link>
        </div>
      </div>
    </section>
  );
}