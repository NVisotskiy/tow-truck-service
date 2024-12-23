import React from "react";

export default function Services({ content, language }) {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content[language].services.map((service) => (
            <div
              key={service.title}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition-transform transform hover:scale-105"
            >
              <div className="text-blue-500 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
