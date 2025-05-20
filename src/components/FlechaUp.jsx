import React, { useEffect, useState } from "react";

const FlechaUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // aparece después de 300px
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className="scroll-container" onClick={scrollToTop}>
          <img
            src="https://i.postimg.cc/mZM4rLS9/icons8-chevron-arriba-en-c-rculo-50.png"
            alt="scroll up"
            className="scroll-up-img"
          />
        </div>
      )}
    </>
  );
};

export default FlechaUp;
