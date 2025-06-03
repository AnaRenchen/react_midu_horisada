import "./App.css";
import "./estilos/estilos.css";
import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import TattooSection from "./components/TattooSection.jsx";
import Footer from "./components/Footer.jsx";
import PaintingsSection from "./components/PaintingsSection.jsx";
import ImagesSection from "./components/ImagesSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tatuajes" element={<TattooSection />} />
        <Route path="/pinturas" element={<PaintingsSection />} />
        <Route path="/imagenes" element={<ImagesSection />} />
        <Route path="/contacto" element={<ContactSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
