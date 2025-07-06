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

  // Separar el título en caracteres latinos y chinos
  const match = title.match(
    /^([A-Za-z\s]+)([\u3000-\u9FFF\uFF00-\uFFEF\u4E00-\u9FAF\u3040-\u309F\u30A0-\u30FF\s]*)$/
  );
  const latinPart = match ? match[1] : title;
  const chinesePart = match ? match[2] : "";

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
        <span className={estiloTitulo}>{latinPart}</span>{" "}
        <span className="titulo-chino">{chinesePart}</span>
      </h1>
    </div>
  );
};

export default Titulo;
