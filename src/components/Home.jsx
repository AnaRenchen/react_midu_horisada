import Horisada from "./HorisadaSection.jsx";
import CardsHorisada from "./CardsHorisada.jsx";
import FlechaUp from "./FlechaUp.jsx";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <CardsHorisada />
      </div>
      <div id="horisada">
        <Horisada />
      </div>

      <FlechaUp />
    </>
  );
};

export default Home;
