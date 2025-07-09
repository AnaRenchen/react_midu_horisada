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
        return "HORISADA";
      case "#horisada":
        return "HORISADA";
      case "/pinturas":
        return "PINTURAS";
      case "/tatuajes":
        return "TATUAJES";
      case "/irezumi":
        return "IREZUMI";
      case "/honshitsu":
        return "HONSHITSU";
      case "/contacto":
        return "CONTACTO";
      default:
        return "HORISADA";
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
