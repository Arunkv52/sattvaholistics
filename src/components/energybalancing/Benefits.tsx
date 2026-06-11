import React from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Yoga",
    description:
      "Experience the flow of movement and breath that energizes your body and calms your mind.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600",
  },
  {
    id: 2,
    title: "Meditation",
    description:
      "Perfect for beginners and experienced practitioners, helping cultivate mindfulness.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600",
  },
  {
    id: 3,
    title: "Pilates",
    description:
      "Strengthen and tone with dynamic Pilates classes designed to improve posture and stability.",
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600",
  },
  {
    id: 4,
    title: "Guided Programs",
    description:
      "Whether you're just beginning or looking to deepen your practice, our programs support growth.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600",
  },
];

const HealthyPartner: React.FC = () => {
  return (
    <section className="py-20 bg-[#f7f3ef]">
      <div className="w-full mx-auto px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gray-500 text-sm tracking-wide uppercase">
            / What We Do
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4">
            Your Healthy Partner
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Our online yoga, meditation, Pilates, and guided wellness programs
            are designed to support you at every stage of your wellness journey.
          </p>

          <button className="mt-8 bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-full transition duration-300">
            See All Classes
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthyPartner;