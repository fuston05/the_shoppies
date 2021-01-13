// components
import { ResultsContainer } from "./components/Results";
import { SearchContainer } from "./components/Search";
import { NominationsContainer } from "./components/Nominations";

function App() {
  return (
    <div className="App">
      <h1>The Shoppies</h1>
      <SearchContainer />
      <section className="lowContainer">
        <ResultsContainer />
        <NominationsContainer />
      </section>
    </div>
  );
}

export default App;
