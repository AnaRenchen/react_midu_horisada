import Horisada from "./Horisada.jsx";
import CardsHorisada from "./CardsHorisada.jsx";
import { useEffect, useRef } from "react";
const Home = () => {
  const horisadaRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.3 }
    );
    if (horisadaRef.current) {
      observer.observe(horisadaRef.current);
    }
  }, []);
  return (
    <>
      <div className="home-container">
        <CardsHorisada />
      </div>
      <div id="horisada" ref={horisadaRef} className="fade-in-scroll">
        <Horisada />
      </div>
    </>
  );
};

export default Home;
