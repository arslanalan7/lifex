import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <section className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">What My Clients Say</h2>
      <div className="space-y-4">
        {testimonials.slice(0, 2).map((t, i) => (
          <blockquote
            key={i}
            className="text-gray-800 dark:text-gray-200 italic border-l-4 pl-4 border-blue-600"
          >
            “{t.quote}”
            <span className="block mt-1 font-semibold text-sm">– {t.name}</span>
          </blockquote>
        ))}
      </div>
      <div className="mt-4">
        <a href="/testimonials" className="text-blue-600 hover:underline font-medium">
          See all testimonials →
        </a>
      </div>
    </section>
  );
}
