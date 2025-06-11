import { useState } from "react";

const CarouselImages = ({ images, maxWidth = "62.5rem" }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="slideshow-container-irezumi" style={{ maxWidth: maxWidth }}>
      {images.map((image, index) => (
        <div
          key={index}
          className="mySlides-irezumi fade-irezumi"
          style={{ display: index === current ? "block" : "none" }}
        >
          <div className="numbertext-irezumi">{`${index + 1} / ${
            images.length
          }`}</div>
          <img
            src={image.url}
            style={{ width: "100%" }}
            alt={`Slide ${index + 1}`}
          />
          <div className="text-irezumi">{image.caption}</div>
        </div>
      ))}

      <button className="prev-irezumi" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next-irezumi" onClick={nextSlide}>
        &#10095;
      </button>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot-irezumi ${
              index === current ? "active-irezumi" : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CarouselImages;
