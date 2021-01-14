// ** RESULTS JSX FILE **
import React from "react";

export const ResultsRender = ({ nominations, movies, nominate }) => {

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
                {/* disable btn if already nominated */}
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
