import React from "react";

const LightboxModal = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  if (currentIndex === null) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="nav-button left" onClick={onPrev}>
          ←
        </button>
        <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
        <button className="nav-button right" onClick={onNext}>
          →
        </button>
        <button className="lightbox-close" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default LightboxModal;
