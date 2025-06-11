const ImagenesIrezumi = ({
  size = "100%", // por defecto, que se adapte al contenedor
  url,
  alt = "Imagen Irezumi",
  className = "",
}) => {
  return (
    <img
      src={url}
      alt={alt}
      style={{ width: size, height: "auto" }}
      className={`img-fluid ${className}`}
    />
  );
};

export default ImagenesIrezumi;
