import React from "react";

export const Pagination = ({ totalPages, page, setPage }) => {

  return (
    <div className="paginationCont">
      <button disabled={page === 1} onClick={() => setPage(Math.max(page - 1, 1))}>Prev</button>
      
      <span>{page}</span>

      <button disabled= {page === Math.ceil(totalPages/10)} onClick= {() => setPage(page + 1)}>Next</button>
    </div>
  );
};
