import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import LogoBackground from "./LogoBackground.jsx";

const ContenidoHorisada = () => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  return (
    <section className="horisada">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="contenido-horisada"
      >
        <LogoBackground
          imageUrl={"https://i.postimg.cc/gc5jrdNS/logo_horisada_fondo.jpg"}
          width={80}
        />
        <p className="textos-horisada">
          Santu Horisada estudió desde temprana edad 1 año de dibujo, 4 años de
          manga y 1 año de <i>sumi-e </i>. Comenzó a tatuar en el 2007. Su
          trabajo se caracteriza por tener un gran contenido de simbología,
          fruto de su interés personal por la historia de Asia, que abarca desde
          mitología, budismo, <i>shinto</i>, leyendas, novelas, guerras,
          folclore japonés, entre otros.
        </p>
        <p className="textos-horisada">
          La mayoría de sus trabajos son <i>free hand</i> (dibujados con
          marcadores directos en la piel) logrando así que sean correctos
          anatómicamente. La búsqueda de su trabajo es mantener lo rico de la
          cultura del tatuaje japonés tradicional sin desviarse demasiado, pero
          también aportando su propia visión del tatuaje, de acuerdo con su
          estudio tanto por investigación en libros, como por sus viajes a
          Japón.
        </p>
      </motion.div>
    </section>
  );
};

export default ContenidoHorisada;
