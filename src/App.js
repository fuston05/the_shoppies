import React, { useState } from "react";
// components
import { ResultsContainer } from "./components/Results";
import { SearchContainer } from "./components/Search";
import { NominationsContainer } from "./components/Nominations";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchContainer setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <section className="lowContainer">
        <ResultsContainer searchTerm={searchTerm} />
        <NominationsContainer />
      </section>
    </div>
  );
}

export default App;
