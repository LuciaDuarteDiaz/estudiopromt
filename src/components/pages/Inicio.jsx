import React from "react";
import "../../App.css";
import images from "../../assets/img/images.js";
import pdfUno from "../../assets/pdfs/1.pdf";
import pdfDos from "../../assets/pdfs/2.pdf";
import pdfTres from "../../assets/pdfs/3.pdf";

const Inicio = () => {
  return (
    <div className="component-container">
      <div className="component-content">
        <a href={pdfUno} target="_blank">
          <img
            style={{ maxWidth: "500px", maxHeight: "auto" }}
            src={images["logo-vertical"]}
            alt="logo vertical"
          ></img>
        </a>
        <a style={{ textDecoration: "none" }} href={pdfDos} target="_blank">
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
        </a>
      </div>
    </div>
  );
};

export default Inicio;
