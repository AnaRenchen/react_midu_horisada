import LogoHeader from "../assets/images/logo_antiguo.jpeg";

const Logo = ({ size }) => {
  return (
    <img
      className="img-fluid "
      width={size}
      src={LogoHeader}
      alt="logo NavBar"
    />
  );
};

export default Logo;
