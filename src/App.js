import React, { useState } from "react";
// components
import { ResultsContainer } from "./components/Results";
import { SearchContainer } from "./components/Search";
import { NominationsContainer } from "./components/Nominations";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [nominations, setNominations] = useState([]);

  const nominate = (movie) => {
    setNominations([...nominations, movie]);
  }
  
  return (
    <div className="App">
      {console.log('nominations: ', nominations)}
      <h1>The Shoppies</h1>
      <SearchContainer setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

      <section className="lowContainer">
        <ResultsContainer nominations={nominations} nominate={nominate} searchTerm={searchTerm} />
        
        <NominationsContainer setNominations={setNominations} nominations= {nominations} />
      </section>
    </div>
  );
}

export default App;
