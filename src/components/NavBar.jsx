import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";

const NavBar = () => {
  // Función para cerrar el menú offcanvas
  const closeMenu = () => {
    const element = document.getElementById("mobileMenu");
    const offcanvas = bootstrap.Offcanvas.getInstance(element);
    if (offcanvas) offcanvas.hide();
  };

  return (
    <nav className="navbar ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          <Logo size={40} />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="mobileMenu"
          aria-labelledby="mobileMenuLabel"
        >
          <div className="offcanvas-header fade-content">
            <h5 className="offcanvas-title" id="mobileMenuLabel">
              Menú
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body fade-content">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/pinturas"
                  onClick={closeMenu}
                >
                  Pinturas
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/tatuajes"
                  onClick={closeMenu}
                >
                  Tatuajes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/irezumi" onClick={closeMenu}>
                  Irezumi
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/imagenes"
                  onClick={closeMenu}
                >
                  Imágenes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contacto"
                  onClick={closeMenu}
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
