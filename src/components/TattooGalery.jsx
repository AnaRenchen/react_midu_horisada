import LightboxModal from "./LightBoxModal.jsx";
import { useState } from "react";
import tattoos from "../assets/data/tattoos.json";

const TattooGalery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openLightbox = (index) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? tattoos.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === tattoos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery-tattoo">
      {tattoos.map((tattoo, index) => (
        <img
          key={index}
          src={tattoo.url}
          alt={tattoo.name}
          onClick={() => openLightbox(index)}
          className="gallery-image"
        />
      ))}
      <LightboxModal
        tattoos={tattoos}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </div>
  );
};

export default TattooGalery;
