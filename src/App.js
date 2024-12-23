import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import "./App.css";

export default function App() {
  const [language, setLanguage] = useState("en");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    en: {
      nav: ["Services", "Pricing", "Contact"],
      hero: {
        title: "EVACUATOR KHARKIV",
        subtitle: "Professional Car Evacuation Services",
        cta: "CALL US",
      },
      services: [
        {
          title: "EVACUATION AFTER ACCIDENTS",
          description: "Quick and safe evacuation service for vehicles after accidents",
          icon: <span>🚗</span>, // Иконка как текст
        },
      ],
    },
    ua: {
      nav: ["Послуги", "Ціни", "Контакти"],
      hero: {
        title: "ЕВАКУАТОР ХАРКІВ",
        subtitle: "Професійні послуги евакуації автомобілів",
        cta: "ЗАТЕЛЕФОНУВАТИ",
      },
      services: [
        {
          title: "ЕВАКУАЦІЯ ПІСЛЯ ДТП",
          description: "Швидка та безпечна евакуація автомобілів після аварій",
          icon: <span>🚗</span>, // Иконка как текст
        },
      ],
    },
  };

  return (
    <div className="App">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        language={language}
        setLanguage={setLanguage}
        content={content}
      />
      <Hero content={content} language={language} />
      <Services content={content} language={language} />
      <Pricing content={content} language={language} />
      <Footer /> {/* Footer не требует пропсов */}
    </div>
  );
  
}
