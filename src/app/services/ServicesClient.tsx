const services = [
    {
      title: "1-on-1 Coaching",
      desc: "Personalized sessions focused on your goals and accountability.",
      icon: "🧠",
    },
    {
      title: "Financial Planning",
      desc: "Make sense of your money, build a plan, and stick to it.",
      icon: "💰",
    },
    {
      title: "Digital Systems",
      desc: "Integrate Notion, budgeting apps, and tools to make life easier.",
      icon: "📱",
    },
  ];
  
  export default function ServicesPage() {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-green-700 mb-12">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  