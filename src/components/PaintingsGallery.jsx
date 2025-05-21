import LightboxModal from "./LightBoxModal.jsx";
import { useState } from "react";
import paintings from "../assets/data/paintings.json";

const PaintingsGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? paintings.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === paintings.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-tattoo">
      {paintings.map((painting, index) => (
        <img
          key={index}
          src={painting.url}
          alt={painting.name}
          onClick={() => openLightbox(index)}
          className="gallery-image"
        />
      ))}
      <LightboxModal
        images={paintings}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </div>
  );
};

export default PaintingsGallery;
