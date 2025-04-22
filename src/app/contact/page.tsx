export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Let's Connect!</h1>
      <p className="text-gray-700 mb-6">
        Interested in coaching or have questions? Reach out for a free 20-minute clarity call.
      </p>
      <a
        href="mailto:hello@arslionix.com"
        className="inline-block bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
      >
        Send Me a Message
      </a>
    </div>
  );
}
