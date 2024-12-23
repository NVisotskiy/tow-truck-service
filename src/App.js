import React, { useState } from "react";
import { Car, TrendingUp, Package } from "lucide-react"; // Импорт иконок
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
          icon: <Car className="w-8 h-8" />,
        },
        {
          title: "DELIVERY OF CARS FROM ABROAD",
          description: "Professional car delivery service from any country",
          icon: <TrendingUp className="w-8 h-8" />,
        },
        {
          title: "LOCAL TRANSPORTATION",
          description: "Reliable local car transportation services",
          icon: <Package className="w-8 h-8" />,
        },
      ],
      pricing: [
        {
          service: "Local Evacuation",
          description: "Within city limits",
          price: "500 UAH",
        },
        {
          service: "Inter-city Transport",
          description: "Between cities",
          price: "25 UAH/km",
        },
        {
          service: "International Delivery",
          description: "Custom quote based on distance",
          price: "Contact us",
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
          icon: <Car className="w-8 h-8" />,
        },
        {
          title: "ДОСТАВКА АВТО З-ЗА КОРДОНУ",
          description: "Професійна доставка автомобілів з будь-якої країни",
          icon: <TrendingUp className="w-8 h-8" />,
        },
        {
          title: "ЛОКАЛЬНЕ ТРАНСПОРТУВАННЯ",
          description: "Надійні послуги локального транспортування",
          icon: <Package className="w-8 h-8" />,
        },
      ],
      pricing: [
        {
          service: "Локальна евакуація",
          description: "В межах міста",
          price: "500 грн",
        },
        {
          service: "Міжміське перевезення",
          description: "Між містами",
          price: "25 грн/км",
        },
        {
          service: "Міжнародна доставка",
          description: "Індивідуальний розрахунок",
          price: "Зв'яжіться з нами",
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
