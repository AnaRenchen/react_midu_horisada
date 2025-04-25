import "../App.css";
import React from "react";
import { useState } from "react";

function CardEjemplo({
  username,
  formatUserName,
  children,
  initialIsFollowing,
}) {
  const [isfollowing, setisfollowing] = useState(initialIsFollowing);

  const text = isfollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isfollowing ? "estilos-sigue" : "estilos-no-sigue";

  const handleClick = () => {
    setisfollowing(!isfollowing);
  };

  return (
    <article className="article-home">
      <div className="article-content">
        <img width={80} src="https://i.postimg.cc/bwFsm63R/trex.png" alt="" />
        <div>
          <strong> {children}</strong>
          <span>{formatUserName(username)}</span>
        </div>
      </div>
      <aside>
        <button type="button" className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}

export default CardEjemplo;
