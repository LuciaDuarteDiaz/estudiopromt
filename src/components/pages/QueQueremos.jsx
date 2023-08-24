import React from "react";
import "../../App.css";
import images from "../../assets/img/images";

const QueQueremos = () => {
  return (
    <div className=" component-container">
      <div className="component-content animate__animated animate__fadeInLeft">
        <p className="content-header">Qué queremos</p>
        <p className="content-text">
          El Ciclo de Gartner, también conocido como el "Hype Cycle" (Ciclo de
          Exageración), es un modelo gráfico que representa la madurez, adopción
          y aplicación social de tecnologías específicas. Este ciclo se compone
          de cinco etapas:
        </p>
        <img
          style={{ maxWidth: "600px", maxHeight: "auto" }}
          src={images["grafica-gartner"]}
          alt="grafica-gartner"
        ></img>
        <p className="content-text">
          <text>Innovación Tecnológica:</text> Se introducen nuevas tecnologías
          y conceptos. <br /> <br />
          <text>Expectativas Infladas:</text> Los primeros éxitos de la
          tecnología generan un exceso de optimismo y expectativas desmesuradas.{" "}
          <br />
          <br />
          <text>Desilusión:</text> Las expectativas no se cumplen, el interés
          decae y la tecnología entra en un "valle" de desilusión. <br />
          <br />
          <text>Iluminación: </text>Las empresas comienzan a entender mejor cómo
          aplicar la tecnología y se desarrollan usos prácticos y efectivos.{" "}
          <br /> <br />
          <text>Productividad:</text> La tecnología se adopta masivamente y se
          convierte en parte integral de la vida y los negocios. El Ciclo de
          Gartner describe la adopción y maduración de las nuevas tecnologías,
          desde su introducción hasta su imple- mentación masiva. En el caso de
          la Inteligencia Artificial (IA), la implementación a gran escala puede
          resultar en cambios significativos, que pueden ser negativos para
          algunos, especialmente los más vulnerables, y positivos para otros.
          <br /> <br />
          En este contexto, el objetivo principal de @estudioprompt es acelerar
          la progresión a través del ciclo de Gartner. Nuestra premisa es que al
          facilitar una adopción y comprensión más rápidas de la IA, podemos
          minimizar sus impactos negativos y maximizar sus beneficios. Esto
          significa brindar educación y divulgación adecuadas para superar
          rápidamente las etapas de expectativas infladas y desilusión, llegando
          a la iluminación y productividad de manera más eficiente y
          responsable.
        </p>
      </div>
    </div>
  );
};

export default QueQueremos;
