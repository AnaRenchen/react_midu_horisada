import "./App.css";
import "./estilos/estilos.css";
import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import TattooSection from "./components/TattooSection.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tatuajes" element={<TattooSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
