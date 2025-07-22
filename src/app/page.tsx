import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import Venue from "@/components/Venue";
import Speakers from "@/components/Speaker-home";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1">
        <Hero />
        <Slider />
        <Speakers />
        <Venue />
        <Schedule />
      </main>
    </div>
  );
}