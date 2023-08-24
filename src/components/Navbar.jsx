import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import images from "../assets/img/images";
import { useState } from "react";

const Navbar = () => {
  const [animation, setAnimation] = useState("");
  return (
    <nav className="nav-container animate__animated animate__fadeInLeft">
      <ul className="nav-list">
        <li>
          <Link to="/">
            <img src={images["logo-celeste"]} alt="Logo celeste" />
          </Link>
        </li>
        <li>
          <Link to="/quienes-somos">Quiénes Somos</Link>
        </li>
        <li>
          <Link to="/que-queremos">Qué queremos</Link>
        </li>
        <li>
          <Link to="/cursos-talleres">Diseño de cursos y talleres</Link>
        </li>
        <li>
          <Link to="/social">Proyectos sociales</Link>
        </li>
        <li>
          <Link to="/artisticos"> Proyectos artísticos</Link>
        </li>
        <li>
          <Link to="/repositorios"> Repositorio de IA</Link>
        </li>
        <li>
          <Link to="/recomendaciones">Recomendaciones </Link>
        </li>

        {/* Agrega más enlaces aquí */}
      </ul>
    </nav>
  );
};

export default Navbar;
