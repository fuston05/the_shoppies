import React, { useState, useEffect } from "react";
// components
import { ResultsContainer } from "./components/Results";
import { SearchContainer } from "./components/Search";
import { NominationsContainer } from "./components/Nominations";
import { Notification } from "./components/Notification/Notification";
// cookies
import { Cookies, useCookies } from "react-cookie";
import { updateCookieWithNominations, fetchCookie } from "./utils";

function App() {
  const [cookies, setCookies, removeCookies] = useCookies("nominationsCookie");
  const [searchTerm, setSearchTerm] = useState("");
  const [nominations, setNominations] = useState(
    fetchCookie("nominationsCookie", cookies)
      ? fetchCookie("nominationsCookie")
      : []
  );
  const [isNomLimit, setIsNomLimit] = useState(false);

  const nominate = (movie) => {
    console.log("nominate fired");
    // set nominations if we're under the limit still
    if (!isNomLimit) {
      setNominations([...nominations, movie]);
    }
  };
  
  // eliminate race condition for setting the cookie to equal the nominaitons array.
  useEffect(() => {
    if (nominations.length > 0) {
      updateCookieWithNominations(nominations, setCookies);
    }
    if (nominations.length === 5) {
      setIsNomLimit(true);
    } else {
      setIsNomLimit(false);
    }
  }, [nominations])

  return (
    <div className="App">
      {console.log("nominations: ", nominations)}
      <h1>The Shoppies</h1>
      <SearchContainer setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <section className="lowContainer">
        <ResultsContainer
          nominations={nominations}
          nominate={nominate}
          searchTerm={searchTerm}
        />

        {isNomLimit === true ? <Notification /> : null}

        <NominationsContainer
          setNominations={setNominations}
          nominations={nominations}
        />
      </section>
    </div>
  );
}

export default App;
