import "./App.css";
import React from "react";
import CardEjemplo from "./assets/CardEjemplo.jsx";

function App() {
  return (
    <>
      <div className="div-cards">
        <CardEjemplo name="Tiranosaurio Rex" username="@Saurio" />
        <CardEjemplo name="Toto" username="@totito" />
      </div>
    </>
  );
}

export default App;
