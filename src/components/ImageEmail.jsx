import EmailImage from "../assets/images/sobre_blanco.png";

const ImageEmail = ({ size }) => {
  return (
    <img
      className="img-fluid "
      width={size}
      src={EmailImage}
      alt="Image Direction"
    />
  );
};

export default ImageEmail;
