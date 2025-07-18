import CardsHorisada from "./CardsHorisada.jsx";

import ContenidoHorisada from "./ContenidoHorisada.jsx";
const Horisada = () => {
  return (
    <>
      <section className="horisada">
        <div className="cards-container">
          <CardsHorisada />
        </div>
        <ContenidoHorisada />
      </section>
    </>
  );
};

export default Horisada;
