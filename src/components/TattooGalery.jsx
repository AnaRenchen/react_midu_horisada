import LightboxModal from "./LightBoxModal.jsx";
import { useState } from "react";

const images = [
  "https://i.postimg.cc/0yn6VjNZ/kitsune.jpg",
  "https://i.postimg.cc/cJ6JTc24/samurai-agua.jpg",
  "https://i.postimg.cc/4dDnYh84/crisantemos.jpg",
  "https://i.postimg.cc/W3Fhp7wf/dragon.jpg",
  "https://i.postimg.cc/dV518fWx/sunade.jpg",
  "https://i.postimg.cc/5ttXTJYJ/kintaro-koi.jpg",
];

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
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Thumb ${index}`}
          onClick={() => openLightbox(index)}
          style={{ width: "250px", margin: "20px", cursor: "pointer" }}
        />
      ))}
      <LightboxModal
        images={images}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </div>
  );
};

export default TattooGalery;
