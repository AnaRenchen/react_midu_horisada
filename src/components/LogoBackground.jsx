const LogoBackground = ({ imageUrl, width = "100px" }) => {
  return (
    <div className="decorative-image-container">
      <img
        src={imageUrl}
        alt="Decorative"
        className="decorative-image"
        style={{ width }}
      />
    </div>
  );
};

export default LogoBackground;
