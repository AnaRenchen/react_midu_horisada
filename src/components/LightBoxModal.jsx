import React from "react";

const LightboxModal = ({ tattoos, currentIndex, onClose, onPrev, onNext }) => {
  if (currentIndex === null) return null;

  const currentTattoo = tattoos[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="nav-button left" onClick={onPrev}>
          ←
        </button>
        <img src={currentTattoo.url} alt={currentTattoo.name} />
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
