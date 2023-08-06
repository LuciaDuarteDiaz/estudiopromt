import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          <Link to="/">Quiénes Somos</Link>
        </li>
        <li>
          <Link to="/que-queremos">Que queremos</Link>
        </li>

        <li>
          <Link to="/cursos-talleres">
            Diseño especializado de Cursos/Talleres
          </Link>
        </li>
        <li>
          <Link to="/social">Proyectos social de Divulgación</Link>
        </li>
        <li>
          <Link to="/artisticos"> Proyectos Artísticos</Link>
        </li>
        <li>
          <Link to="/repos"> Repositorio de IAs</Link>
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
