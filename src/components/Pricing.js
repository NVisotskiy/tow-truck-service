import React from "react";

export default function Pricing({ content, language }) {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content[language].pricing.map((item) => (
            <div
              key={item.service}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {item.service}
              </h3>
              <p className="mt-2 text-gray-500">{item.description}</p>
              <p className="mt-4 text-2xl font-bold text-blue-600">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
