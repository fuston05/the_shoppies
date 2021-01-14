// ** RESULTS JSX FILE **
import React, { useEffect } from "react";

export const ResultsRender = ({ nominations, movies, nominate }) => {
  useEffect(() => {}, [nominations]);

  return (
    <div className="movieCard">
      <h2>results render!</h2>
      {movies &&
        movies.map((movie) => {
          return (
            <div key={movie.imdbID} className="movieCard">
              <span>{movie.Title}</span>
              <span>{movie.Year}</span>
              <span>
                {nominations.includes(movie) ? (
                  <button disabled onClick={() => nominate(movie)}>
                    Nominate
                  </button>
                ) : (
                  <button onClick={() => nominate(movie)}>Nominate</button>
                )}
              </span>
            </div>
          );
        })}
    </div>
  );
};
