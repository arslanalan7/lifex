import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Hi, I'm Arslan 👋</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          I help people transform their lifestyle and financial habits through personalized coaching.
        </p>
      </div>
      <div className="w-full">
        <Image
          src="/profile.jpg" // ✅ Doğrudan public yolunu kullan
          alt="Coach Arslan"
          width={600}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
