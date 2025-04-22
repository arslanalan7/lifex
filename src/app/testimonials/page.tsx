const testimonials = [
  {
    name: "Sophie R.",
    quote: "Working with Arslan was life-changing. I feel more organized and motivated.",
    photo: "/sophie.jpg",
  },
  {
    name: "James T.",
    quote: "I finally understand my finances and feel in control of my future.",
    photo: "/james.jpg",
  },
];

import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-12">What Clients Say</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <Image src={t.photo} alt={t.name} width={50} height={50} className="rounded-full" />
              <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
            </div>
            <p className="text-gray-600 italic">“{t.quote}”</p>
          </div>
        ))}
      </div>
    </div>
  );
}
