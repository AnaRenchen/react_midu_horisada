import "../App.css";
import React from "react";

function CardEjemplo({ name, username }) {
  return (
    <article className="article-home">
      <div className="article-content">
        <img width={80} src="https://i.postimg.cc/bwFsm63R/trex.png" alt="" />
        <div>
          <strong> {name}</strong>
          <span>{username}</span>
        </div>
      </div>
      <aside>
        <button type="button" className="btn btn-primary">
          Seguir
        </button>
      </aside>
    </article>
  );
}

export default CardEjemplo;
