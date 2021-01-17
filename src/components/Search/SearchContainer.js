// ** SEARCH LOGIC FILE **
import React from "react";
// components
import { RenderSearch } from "./SearchRender";

export const SearchContainer = ({setSearchTerm, searchTerm}) => {

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }
  
  return (
    <section className="searchCont">
      <RenderSearch handleChange= {handleChange} searchTerm= {searchTerm}/>
    </section>
  );
};
