import DirectionImage from "../assets/images/mapa_blanco.png";

const ImageDirection = ({ size }) => {
  return (
    <img
      className="img-fluid "
      width={size}
      src={DirectionImage}
      alt="Image Direction"
    />
  );
};

export default ImageDirection;
