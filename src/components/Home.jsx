import Horisada from "./Horisada.jsx";
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
        <h1 className="horisada-titulo">¿Quién soy?</h1>
      </div>
      <div id="horisada" ref={horisadaRef} className="fade-in-scroll">
        <Horisada />
      </div>
    </>
  );
};

export default Home;
