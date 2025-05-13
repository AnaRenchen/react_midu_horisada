import Horisada from "./HorisadaSection.jsx";
import CardsHorisada from "./CardsHorisada.jsx";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <CardsHorisada />
      </div>
      <div id="horisada">
        <Horisada />
      </div>
    </>
  );
};

export default Home;
