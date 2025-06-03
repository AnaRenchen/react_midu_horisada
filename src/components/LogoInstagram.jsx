import LogoInsta from "../assets/images/instagram_logo.png";
import LogoInstaBlanco from "../assets/images/instagram_logo_blanco.png";

const LogoInstagram = ({ size, contacto = false }) => {
  const tipoLogo = contacto ? LogoInstaBlanco : LogoInsta;

  return (
    <img
      className="img-fluid "
      width={size}
      src={tipoLogo}
      alt="logo Instagram"
    />
  );
};

export default LogoInstagram;
