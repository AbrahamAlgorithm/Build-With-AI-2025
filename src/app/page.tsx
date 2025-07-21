import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Venue from "@/components/Venue";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <Hero />
        <Venue />
        <Schedule />
      </main>
    </div>
  );
}