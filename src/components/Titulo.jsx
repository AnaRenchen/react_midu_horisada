import "animate.css";
import { useLocation } from "react-router-dom";

const Titulo = ({ title }) => {
  const location = useLocation();

  // Determina si la ruta actual es la página de inicio
  const isHome = location.pathname === "/" || location.pathname === "/home";

  // Asigna una clase CSS condicional para el título
  const estiloTitulo = isHome ? "home-titulo" : "others-titulo";

  // Establece la duración y el retraso de la animación según la ruta
  const animateDuration = isHome ? "10s" : "5s";
  const animateDelay = isHome ? "1.5s" : "0.5s";

  return (
    <div className="contenedor_titulo">
      <h1
        className={`${estiloTitulo} animate__animated animate__fadeIn`}
        style={{
          // Establece la duración de la animación según la ruta
          animationDuration: animateDuration,
          animationDelay: animateDelay,
        }}
      >
        {title}
      </h1>
    </div>
  );
};

export default Titulo;
