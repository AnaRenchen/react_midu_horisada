import { useLocation } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Titulo from "./Titulo";

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/" || location.pathname === "/home";
  const headerClass = isHome ? "home-style-header" : "others-style-header";

  const getTitle = () => {
    const route = location.pathname;
    switch (route) {
      case "/home":
      case "/":
        return "Horisada 彫定";
      case "#horisada":
        return "Horisada 彫定";
      case "/pinturas":
        return "Pinturas";
      case "/tatuajes":
        return "Tatuajes";
      case "/irezumi":
        return "Irezumi";
      case "/honshitsu":
        return "Honshitsu 本質";
      case "/contacto":
        return "Contacto";
      default:
        return "Horisada 彫定";
    }
  };

  return (
    <div className={headerClass}>
      {isHome && (
        <div className="slideshow">
          <div className="slide slide1"></div>
          <div className="slide slide2"></div>
          <div className="slide slide3"></div>
        </div>
      )}
      <NavBar />
      <Titulo title={getTitle()} />
    </div>
  );
};

export default Header;
