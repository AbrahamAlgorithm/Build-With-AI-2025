import Image from 'next/image';

interface TeamCardProps {
  name: string;
  title: string;
  imageUrl: string;
  socialMedia?: string;
  subtitle?: string;
}

export default function TeamCard({
  name,
  title,
  imageUrl,
  socialMedia,
  subtitle,
}: TeamCardProps) {
  // Use a fallback image if imageUrl is missing or empty
  const avatarSrc = imageUrl && imageUrl.trim() !== '' ? imageUrl : '/default-avatar.png';

  return (
    <li className="flex flex-col items-center py-4 px-1">
      {/* Avatar */}
      <div className="mb-3 flex items-center justify-center w-[175px] h-[175px] rounded-full overflow-hidden bg-gray-100">
        <Image
          src={avatarSrc}
          alt={`${name} avatar`}
          width={175}
          height={175}
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      {/* Social Icon */}
      {socialMedia && (
        <div className="mb-2 flex items-center justify-center">
          <a
            aria-label={`View ${name} on X`}
            href={socialMedia}
            rel="nofollow"
            className="flex items-center justify-center rounded-full bg-white text-[#4285F4] w-8 h-8"
            target="_blank"
          >
            <svg viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" role="img" aria-hidden="true">
              <path d="M9.51664 6.79444L15.3449 0.0195312H13.9638L8.90311 5.90209L4.86115 0.0195312H0.199219L6.31146 8.915L0.199219 16.0195H1.58041L6.92464 9.80735L11.1933 16.0195H15.8552L9.5163 6.79444H9.51664ZM7.62491 8.99337L7.00561 8.10758L2.07808 1.05927H4.19951L8.17609 6.74748L8.79538 7.63327L13.9645 15.0271H11.843L7.62491 8.99371V8.99337Z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
      )}
      {/* Info */}
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-1">{name}</h2>
        <p className="text-base text-gray-700">{title}</p>
        {subtitle && (
          <p className="text-base text-gray-700">{subtitle}</p>
        )}
      </div>
    </li>
  );
}