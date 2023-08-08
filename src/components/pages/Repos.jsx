import React from "react";
import "../../App.css";

const Repos = () => {
  return (
    <div className="component-container">
      <div className="component-content">
        <p className="content-header">Repositorio de IAs</p>
        <p className="content-text">
          <text>Generativas de Texto:</text>
          <br />
          <br />
          <a href="https://chat.openai.com/#">ChatGPT </a>
          <br />
          <br />
          <a href="https://bard.google.com/">Brad </a>
          <br />
          <br />
          <text>Generativas de Imagen:</text>
          <br />
          <br />
          <a href="https://openai.com/dall-e-2"> DALL·E 2 </a>
          <br />
          <br />
          <a href="https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F">
            Midjourney
          </a>
          <br />
          <br />
          <a href="https://leonardo.ai/"> Leonardo </a>
          <br />
          <br />
          <a href="https://stablediffusionweb.com/#demo"> Stable Diffusion </a>
        </p>
      </div>
    </div>
  );
};

export default Repos;
