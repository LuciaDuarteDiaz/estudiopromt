import React from "react";
import "../../App.css";
import images from "../../assets/img/images.js";

const Inicio = () => {
  return (
    <div className="component-container">
      <div className="component-content">
        <img
          style={{ maxWidth: "500px", maxHeight: "auto" }}
          src={images["logo-vertical"]}
          alt="logo vertical"
        ></img>
        <p
          style={{
            color: "rgb(27, 161, 220)",
            textAlign: "left",
            verticalAlign: "bottom",
            fontSize: "20pt",
          }}
        >
          "Descubriendo <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; la pregunta"
        </p>
      </div>
    </div>
  );
};

export default Inicio;
