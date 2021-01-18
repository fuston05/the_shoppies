// ** SEARCH LOGIC FILE **
import React, { useState, useEffect } from "react";
// components
import { RenderSearch } from "./SearchRender";
// api
import { fetchData } from "../../api";

export const SearchContainer = ({
  setTotalPages,
  page,
  setPage,
  setMovies,
  setSearchTerm,
  searchTerm,
}) => {
  const [delayed, setDelayed] = useState(false);

  const handleChange = (e) => {
    setDelayed(true);
    setSearchTerm(e.target.value);
    setMovies([])
    setPage(1);
    // delays submit
    window.setTimeout(() => {
      setDelayed(false);
    }, 2000);
  };

  useEffect(() => {
    // stops from running on page load or while submit is delayed
    if (!searchTerm.length || delayed === true) {
      return false;
    }
    fetchData(searchTerm, page)
      .then((res) => {
        setTotalPages(res.data.totalResults);
        setMovies(res.data.Search);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }, [searchTerm, page, setMovies, setTotalPages, delayed]);

  return (
    <section className="searchCont">
      <RenderSearch handleChange={handleChange} searchTerm={searchTerm} />
    </section>
  );
};
