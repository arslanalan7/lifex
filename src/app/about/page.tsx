import Image from 'next/image';
import profileImg from '@/public/profile.jpg'; // kendi görselini /public içine koy

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Hi, I'm Arslan 👋</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          I'm a lifestyle and finance coach helping individuals gain clarity, structure, and purpose. With a tech-savvy approach, I blend digital tools and human habits to drive personal transformation.
        </p>
      </div>
      <div className="w-full">
        <Image
          src={profileImg}
          alt="Coach Arslan"
          className="rounded-xl shadow-lg"
          priority
        />
      </div>
    </div>
  );
}
