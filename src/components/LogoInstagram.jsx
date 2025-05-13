import LogoInsta from "../assets/images/instagram_logo.png";

const LogoInstagram = ({ size }) => {
  return (
    <img
      className="img-fluid "
      width={size}
      src={LogoInsta}
      alt="logo Instagram"
    />
  );
};

export default LogoInstagram;
