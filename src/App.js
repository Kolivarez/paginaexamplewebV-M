import React from "react";
import { Navbar } from "./components/inc/Navbar";
import { Inicio } from "./components/pages/Inicio/inicio";
import { Servicio } from "./components/pages/servicio/servicio";
import { Contacto } from "./components/pages/contactos/contacto";
import { Empresa } from "./components/pages/empresa/empresa";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicio" element={<Servicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/empresa" element={<Empresa />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
