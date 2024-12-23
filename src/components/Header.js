import React from "react";
import { Globe2, Menu, X } from "lucide-react";

export default function Header({ isMenuOpen, setIsMenuOpen, language, setLanguage, content }) {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="flex-shrink-0">
            <img
              src="/image/logo.png"
              alt="Evacuator Kharkiv Logo"
              className="h-8"
            />
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {content[language].nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900"
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => setLanguage(language === "en" ? "ua" : "en")}
              className="inline-flex items-center text-gray-700 hover:text-gray-900"
            >
              <Globe2 className="w-5 h-5 mr-1" />
              {language.toUpperCase()}
            </button>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
