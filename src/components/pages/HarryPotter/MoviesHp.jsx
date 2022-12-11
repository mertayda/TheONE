import React from "react";

import "./MoviesHp.css";
import { MoviesForHp } from "./MoviesForHp";

const MoviesHp = () => {
  return (
    <div className="movieContainerHp">
      <h1 className="moviesHpTitle">Movies</h1>
      <div className="moviesHpcardMoviesHp">
        {MoviesForHp.map((item) => (
          <div className="cardMoviesHp" key={item.id}>
            <div className="imgMovieContainerHp">
              <img className="imgMovieHp" src={item.src} alt={item.book} />
            </div>
            <div className="movieInfoHp">
              <h3 className="nameMovieHp">{item.original_title}</h3>
              <p className="descriptionMovieHp">
                <strong></strong>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesHp;
