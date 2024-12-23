import React from "react";

export default function Pricing({ content, language }) {
  return (
    <section>
      <h2>{language === "en" ? "Pricing" : "Ціни"}</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        {content[language]?.pricing?.map((item, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px", minWidth: "200px" }}>
            <h3>{item.service}</h3>
            <p>{item.description}</p>
            <p style={{ fontWeight: "bold", color: "#007bff" }}>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
