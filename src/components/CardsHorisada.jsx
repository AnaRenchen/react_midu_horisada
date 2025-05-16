import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const CardsHorisada = () => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="row-cards-horisada"
    >
      <div className="column-cards-horisada  ">
        <img
          src="https://i.postimg.cc/Y0mFktj6/horisada-tattoo.jpg"
          alt="Snow"
          style={{ width: "80%" }}
          className="img-cards-horisada"
        />
      </div>
      <div className="column-cards-horisada ">
        <img
          src="https://i.postimg.cc/Y0mFktj6/horisada-tattoo.jpg"
          alt="Forest"
          style={{ width: "80%" }}
          className="img-cards-horisada"
        />
      </div>
      <div className="column-cards-horisada">
        <img
          src="https://i.postimg.cc/Y0mFktj6/horisada-tattoo.jpg"
          alt="Mountains"
          style={{ width: "80%" }}
          className="img-cards-horisada"
        />
      </div>
    </motion.div>
  );
};

export default CardsHorisada;
