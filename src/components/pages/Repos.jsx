import React from "react";
import "../../App.css";

const Repos = () => {
  return (
    <div className="component-container">
      <div className="component-content">
        <h1 style={{ fontFamily: "Raleway" }}>Repositorio de IAs</h1>
        <p style={{ fontFamily: "Agrandir" }}>
          Generativas de Texto: https://chat.openai.com/#
          https://bard.google.com/ Generativas de Imagen:
          https://openai.com/dall-e-2
          https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F
          https://leonardo.ai/ https://stablediffusionweb.com/#demo
        </p>
      </div>
    </div>
  );
};

export default Repos;
