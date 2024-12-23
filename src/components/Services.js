import React from "react";

export default function Services({ content, language }) {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content[language].services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
