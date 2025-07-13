import Image from 'next/image';
import Link from 'next/link';
import './team.css';
import TeamCard from '@/components/TeamCard';
import { team } from './teamdata';

export default function TeamPage() {
  return (
    <div className="team-page">
      <div className="heading">
        <h1>Our Team</h1>
        <p>
          Organisers and volunteers Dedicated. Innovative. Passionate.
          Discover the driving force behind FUTMinna&apos;s largest tech event.
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

        {/* Teams Section */}
        <div id="teams">
          {team.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            title={member.title}
            imageUrl={member.imageUrl}
            socialMedia={member.socialMedia}
            socialMediaLogo={member.socialMediaLogo ?? ""}
          /> ))}
        </div>
      </div>
    </div>
  );
}