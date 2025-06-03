import LogoInstagram from "./LogoInstagram.jsx";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="items_footer">
          <div className="container-logo-footer">
            <a
              className="logo-insta-footer"
              href="https://www.instagram.com/santuhorisada/"
              target="_blank"
            >
              <LogoInstagram size={50} contacto={false} />
            </a>
          </div>
          <p className="letras-footer">
            Todos los derechos reservados &copy; Horisada 彫定 || Diseñado por
            Ana Maria Magalhães 2025
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
