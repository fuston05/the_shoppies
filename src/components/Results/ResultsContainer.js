// ** RESULTS LOGIC FILE **
import React from "react";
// components
import { ResultsRender } from "./ResultsRender";
import { Pagination } from "../Pagination/Pagination";

export const ResultsContainer = ({
  totalPages,
  page,
  setPage,
  movies,
  searchTerm,
  nominate,
  nominations,
}) => {
  return (
    <section className="resultsCont">
      {totalPages && (
        <Pagination totalPages={totalPages} page={page} setPage={setPage} />
      )}

      <ResultsRender
        searchTerm={searchTerm}
        nominations={nominations}
        nominate={nominate}
        movies={movies}
      />
    </section>
  );
};
