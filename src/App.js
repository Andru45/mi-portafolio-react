import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Componentes/Header";
import Proyectos from "./Componentes/Proyectos";
import SobreMi from "./Componentes/SobreMi";
import Contacto from "./Componentes/Contacto";
import Habilidades from "./Componentes/Habilidades";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones en milisegundos
      easing: "ease-in-out", // Tipo de animación
      once: true, // Solo anima una vez por elemento
    });
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "App dark-mode" : "App"}>
      <Header />

      <button onClick={toggleTheme} className="theme-toggle-btn">
        {darkMode ? "☀️ Tema Claro" : "🌙 Tema Oscuro"}
      </button>

      <div data-aos="fade-up">
        <SobreMi />
      </div>
      <div data-aos="fade-right">
        <Habilidades />
      </div>
      <div data-aos="zoom-in">
        <Proyectos />
      </div>
      <div data-aos="flip-left">
        <Contacto />
      </div>

      <footer>© 2024 Andru - Todos los derechos reservados.</footer>
    </div>
  );
}

export default App;
