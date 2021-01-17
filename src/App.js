import React, { useState, useEffect } from "react";
// components
import { ResultsContainer } from "./components/Results";
import { SearchContainer } from "./components/Search";
import { NominationsContainer } from "./components/Nominations";
import { Notification } from "./components/Notification/Notification";
// cookies
import { useCookies } from "react-cookie";

function App() {
  const [cookies, setCookies, removeCookies] = useCookies("nominationsCookie");
  const [searchTerm, setSearchTerm] = useState("");
  const [nominations, setNominations] = useState(
    cookies.nominationsCookie ? cookies.nominationsCookie : []
  );
  const [notification, setNotification] = useState(false);

  const closeNotification = () => {
    setNotification(false);
  }

  const nominate = (movie) => {
    // set nominations if we're under the limit still
    if (!notification) {
      setNominations([...nominations, movie]);
    }
  };

  // eliminate race condition for setting the cookie to equal the nominaitons array.
  useEffect(() => {
    // update cookie
    if (nominations.length > 0) {
      // if nominations, update cookie to match
      setCookies("nominationsCookie", nominations);
    } else if (nominations.length === 0) {
      // remove cookie if no nominations
      removeCookies("nominationsCookie");
    }

    // check nominations limit - controls rendering of the Notification component
    if (nominations.length === 5) {
      setNotification(true);
    } else {
      setNotification(false);
    }
  }, [nominations, removeCookies, setCookies]);

  return (
    <div className="App">
      {/* displays nominations limit message */}
      {notification === true ? (
        <Notification closeNotification={closeNotification} message="You have reached your limit of 5 nominations!" />
      ) : null}

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
