import React, { useState, useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";
// components
import { ResultsContainer } from "./components/Results";
import { SearchContainer } from "./components/Search";
import { NominationsContainer } from "./components/Nominations";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies("nominationsCookie");
  const [nominations, setNominations] = useState(
    cookies.nominationsCookie ? cookies.nominationsCookie : []
  );

  useEffect(() => {
    if (!cookies.nominationsCookie && nominations.length) {
      setCookie("nominationsCookie", nominations, {
        maxAge: 10000,
      });
    }
  }, [nominations]);
  
  const nominate = (movie) => {
    // set nominations
    setNominations([...nominations, movie]);
    console.log("nominated");
  };
  
  return (
    <div className="App">
      {console.log("cookies: ", cookies.nominationsCookie)}
      {console.log("nominations: ", nominations)}
      <h1>The Shoppies</h1>
      <SearchContainer setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

      <section className="lowContainer">
        <ResultsContainer
          nominations={nominations}
          nominate={nominate}
          searchTerm={searchTerm}
        />

        <NominationsContainer
          setNominations={setNominations}
          nominations={nominations}
        />
      </section>
    </div>
  );
}

export default App;
