import Image from 'next/image';
import Link from 'next/link';

type TeamCardProps = {
  name: string;
  title: string;
  imageUrl: string;
  socialMedia: string;
  socialMediaLogo: string;
};

export default function TeamCard({ name, title, imageUrl, socialMedia}: TeamCardProps) {
  return (
    <div className="circle">
      <Image src={imageUrl} alt={name} width={180} height={180} />
      <Link
        href={socialMedia}
        className="socials"
        target="_blank"
        rel="noopener noreferrer"
      >
        X
      </Link>
      <h2 className="name">{name}</h2>
      <p className="title">{title}</p>
    </div>
  );
}