import React from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const LightboxModal = ({ tattoos, currentIndex, onClose, onPrev, onNext }) => {
  if (currentIndex === null) return null;

  const currentTattoo = tattoos[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="nav-button left" onClick={onPrev}>
          <FaChevronLeft />
        </button>
        <img src={currentTattoo.url} alt={currentTattoo.name} />
        <button className="nav-button right" onClick={onNext}>
          <FaChevronRight />
        </button>
        <button className="lightbox-close" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default LightboxModal;
