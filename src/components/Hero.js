import React from "react";
import { Phone } from "lucide-react";

export default function Hero({ content, language }) {
  return (
    <section className="relative bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          {content[language].hero.title}
        </h1>
        <p className="mt-3 text-xl text-gray-500">
          {content[language].hero.subtitle}
        </p>
        <a
          href="tel:+380123456789"
          className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          <Phone className="w-5 h-5 mr-2" />
          {content[language].hero.cta}
        </a>
      </div>
    </section>
  );
}
