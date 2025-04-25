import "./App.css";
import React from "react";
import CardEjemplo from "./assets/CardEjemplo.jsx";

const users = [
  {
    username: "saurio",
    name: "Tiranosaurio Rex",
    isfollowing: true,
  },
  {
    username: "totito",
    name: "Toto",
    isfollowing: false,
  },
];

function App() {
  const format = (username) => `@${username}`;

  return (
    <>
      <div className="div-cards">
        {users.map(({ username, name, isfollowing }) => (
          <CardEjemplo
            key={username}
            username={username}
            initialIsFollowing={isfollowing}
            formatUserName={format}
          >
            {name}
          </CardEjemplo>
        ))}
      </div>
    </>
  );
}

export default App;
