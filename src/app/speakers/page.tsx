import Image from 'next/image';
import Link from 'next/link';
import '../team/team.css';
import SpeakerShowcase from '@/components/Speakers';

export default function SpeakersPage() {
  return (
    <div>
      <div className="heading">
        <h1>Our Speakers</h1>
        <p>
          Meet the industry experts and thought leaders who will share their insights and knowledge.
          Discover cutting-edge AI technologies and innovations from our distinguished speakers.
        </p>

        {/* Time and Venue */}
        <div className="time-venue-container">
          <div className="time-venue">
            <div className="day-logo-container">
              <p className="Day">Day 1</p>
              <Image
                className="logo"
                src="/logo/WEB STUFF-04.png"
                alt="logo"
                width={180}
                height={40}
              />
            </div>
            <h3>Monday, July 24</h3>
            <p className="google-meet">Google Meet 📍</p>
            <Link
              href="https://gdg.community.dev/events/details/google-gdg-on-campus-federal-university-of-technology-minna-nigeria-presents-build-with-ai-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="register-button"
            >
              Register
            </Link>
          </div>

          <div className="time-venue blue">
            <div className="day-logo-container">
              <p className="Day">Day 2</p>
              <Image
                className="logo"
                src="/logo/WEB STUFF-04.png"
                alt="logo"
                width={180}
                height={40}
              />
            </div>
            <h3>Wednesday, July 26</h3>
            <p className="google-meet">NITDA IT HUB 📍</p>
            <Link
              href="https://gdg.community.dev/events/details/google-gdg-on-campus-federal-university-of-technology-minna-nigeria-presents-build-with-ai-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="register-button blue-text"
            >
              Register
            </Link>
          </div>
        </div>

        <SpeakerShowcase />
      </div>
    </div>
  );
}