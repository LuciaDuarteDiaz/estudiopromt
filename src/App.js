import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import QuienesSomos from "./components/pages/QuienesSomos";
import Artisticos from "./components/pages/Artisticos";
import CursosTalleres from "./components/pages/Cursos&Talleres";
import QueQueremos from "./components/pages/QueQueremos";
import Social from "./components/pages/Social";
import Recomendaciones from "./components/pages/Recomendaciones";
import Repos from "./components/pages/Repos";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/artisticos" element={<Artisticos />} />
        <Route path="/que-queremos" element={<QueQueremos />} />
        <Route path="/recomendaciones" element={<Recomendaciones />} />
        <Route path="/repositorios" element={<Repos />} />
        <Route path="/cursos-talleres" element={<CursosTalleres />} />
        <Route path="/social" element={<Social />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/" element={<Inicio />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
