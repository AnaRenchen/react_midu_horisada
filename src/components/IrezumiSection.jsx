import ImagenesIrezumi from "./ImagenesIrezumi.jsx";
import CarouselImagenes from "./CarouselImagenes.jsx";
import imagesIrezumi from "../assets/data/imagenesIrezumi.json";
import FlechaUp from "./FlechaUp.jsx";

const IrezumiSection = () => {
  return (
    <>
      <div className="background-irezumi">
        <div className="irezumi-container">
          <p className="textos-horisada">
            Desde la antigüedad, en todo el mundo los seres humanos han punzado
            su piel para introducir color y tatuar diseños, dibujos, símbolos o
            líneas que permaneciesen en su cuerpo. Los orígenes de esta
            costumbre no están claros al igual que los de otras prácticas que
            conllevan la modificación del cuerpo como la circuncisión, el
            vendado de pies o el alargamiento del cuello. No obstante, a juzgar
            por las estatuillas de barro dogū del período Jōmon (entre el
            14.000-400 a.C. aproximadamente) y haniwa (figuras características
            del período Kofun, desde mediados del siglo III a mediados del siglo
            VII) que se han encontrado, en Japón la costumbre de tatuarse el
            cuerpo existía ya en los albores de la historia. Entre las islas
            Amami y las de Ryūkyū en el sur de Japón existió una tradición por
            la que las mujeres se hacían un tatuaje conocido como hajichi que se
            extendía desde la punta de los dedos hasta el codo. Los primeros
            documentos en los que se registró esta costumbre datan del siglo
            XVI, aunque se cree que esta práctica existía desde mucho antes. Los
            tatuajes de la parte de la mano en las mujeres indicaban que esta
            había contraído matrimonio. Las novias recibían bendiciones una vez
            el tatuaje era completado, y su carga simbólica era la de un ritual
            de paso a la madurez. Los patrones y símbolos de estos tatuajes
            variaban en cada isla, y había algunas en las que se creía que la
            mujer que moría sin el hajichi sufriría en el otro mundo. También
            entre los antiguos pueblos del norte de Japón como los Ainu las
            mujeres tatuaban el área alrededor de los labios y las manos. Hoy
            sabemos que de norte a sur, en muchas regiones de Japón se extendió
            la costumbre de tatuar el cuerpo. En el Kojiki (año 712) y el Nihon
            shoki (año 720), libros que cuentan de los orígenes mitológicos de
            Japón, también se menciona que en los pueblos fronterizos ser
            tatuado era un rito y en algunos casos un castigo. El ideal de
            belleza cambió ampliamente en Japón a mediados del siglo VII. Más
            que la belleza general del propio cuerpo, cobró importancia la
            belleza que podía destacarse en una habitación lóbrega, como la del
            tacto de un kimono o la de los aromas. La práctica del tatuaje fue
            disminuyendo paulatinamente, y su aparición en obras de la
            literatura y el arte desapareció hasta comienzos del siglo XVII.
          </p>
          <CarouselImagenes images={imagesIrezumi} />

          <p className="textos-horisada">
            Después del período Sengoku y gracias a la paz social alcanzada
            durante el período Edo (1603-1868), la historia del irezumi
            resurgió. En esta época empezaron a aparecer en escritos cómo
            algunas prostitutas y sus clientes se cortaban el dedo meñique o se
            grababan en el cuerpo el nombre de su amante como una muestra de
            amor eterno. Poco después este tipo de prácticas pasaron a ser
            utilizadas entre la yakuza como un método para jurarse fidelidad.Los
            tatuajes también comenzaron a hacerse populares entre los tobi, las
            personas que trabajaban en la construcción o en la preparación de
            festivales, y que se dedicaban al mismo tiempo a la vigilancia o a
            la extinción de incendios en las ciudades, y también entre los
            mensajeros (hikyaku). En el trabajo de estas personas vestir kimono
            dificultaba los movimientos, por lo que muchos de ellos solían
            llevar simplemente un fundoshi (una especie de taparrabos), pero
            como mostrar el cuerpo prácticamente desnudo también era motivo de
            vergüenza comenzaron a cubrirlo con tatuajes. Pronto cobró fuerza
            entre la sociedad la imagen de que los tatuajes eran algo que tenían
            que llevar este tipo de profesionales, e incluso se llegaron a
            realizar colectas entre los comerciantes de la ciudad para tatuar el
            cuerpo de los jóvenes que aún no habían llenado su piel de tinta.
            Los hombres encargados de combatir el fuego eran conocidos como los
            más apuestos de Edo, y los tatuajes que llevaban eran el orgullo y
            la flor para cada barrio en el que vivían. Muchos de los tobi se
            tatuaban dragones. Se creía que los dragones atraían la lluvia, por
            lo que para ellos significaba una protección espiritual. A medida
            que iba aumentando la demanda de este tipo de tatuajes, que habían
            empezado con unas letras y diseños simples, fueron paulatinamente
            ganando en complejidad y tamaño. Esto hizo que en poco tiempo
            apareciese un grupo de especialistas en tatuar dibujos y caracteres
            en la piel de las personas, los tatuadores (horishi).
          </p>
          <div className="imagenes-irezumi1">
            <ImagenesIrezumi
              size={400}
              url={"https://i.postimg.cc/pdKX2wXw/irezumi7.jpg"}
              className="imagen-centrada margen-grande "
            />
            <ImagenesIrezumi
              size={500}
              url={"https://i.postimg.cc/9Qh8wg3j/irezumi8.webp"}
              className="imagen-centrada margen-grande "
            />
          </div>
          <p className="textos-horisada">
            Los tatuajes no se extendieron demasiado entre la clase guerrera
            debido a la introducción del pensamiento confuciano por el que no se
            veía con buenos ojos que una persona hiriese su propio cuerpo. A
            partir del año 1720, además, se impuso como un castigo adicional
            para los delincuentes tatuarles la frente o los brazos, por lo que
            entre las clases populares muchas personas comenzaron a aborrecer
            los tatuajes. El gobierno del shogún trató de regular los tatuajes
            en varias ocasiones sin apenas resultados, y fue durante la segunda
            mitad del siglo XIX cuando éstos alcanzaron una popularidad sin
            precedentes. Tras el fin del shogunato y el comienzo del período
            Meiji, el nuevo gobierno acabó con el aislamiento nacional y se
            propuso adoptar un modelo de ilustración para el país de influencia
            occidental. Como resultado comenzaron a llegar los primeros
            invitados de honor, viajeros y marineros del extranjero a Japón,
            algo que no había ocurrido en los pasados 400 años. Durante su
            estancia en Japón estos nuevos visitantes observaban costumbres como
            la de los baños compartidos entre las mujeres y los hombres o a
            hombres que ostentaban en la calle sus cuerpos completamente
            tatuados y cubiertos solo con un fundoshi, algo que registraron en
            sus diarios como costumbres características del pueblo japonés. El
            Gobierno Meiji consideró problemático que en Occidente estas
            prácticas pudiesen interpretarse como un aspecto primitivo de Japón,
            y por esto en 1872 decidió establecer una ley que regulara tanto el
            oficio de tatuador como a las personas que decidían llevar tatuajes.
            Con el comienzo del siglo XX se impuso entre la sociedad la norma de
            ir siempre vestidos (y no solo con un fundoshi), por lo que los
            tatuajes pasaron a ser algo que se escondía debajo de la ropa.
            Aunque resulte paradójico, podemos pensar que en esta época de
            restricciones es posible que cobrara fuerza la idea de que los
            tatuajes albergaban una belleza más profunda, incluso
            psicológicamente, por el hecho de estar ocultos. Cabe recordar que
            estas regulaciones afectaron seriamente también a las mujeres de
            Okinawa y del pueblo Ainu de Hokkaidō entre las que existía la
            costumbre de tatuarse. Aunque había personas que continuaban
            tatuándose en la clandestinidad, cuando eran arrestadas por la
            policía eran sometidas al borrado de sus tatuajes mediante prácticas
            brutales como la cirugía o la eliminación con ácido clorhídrico. Hoy
            este patrimonio ancestral único de la práctica de los tatuajes en
            estas culturas ha desaparecido completamente.
          </p>
          <FlechaUp />
        </div>
      </div>
    </>
  );
};

export default IrezumiSection;
