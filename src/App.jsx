import "./App.css";

import { Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Context from "./context/StaticContext";
import Detail from "./pages/Detail";
import { GifsContextProvider } from "./context/GifsContext";

function App() {
  return (
    <Context.Provider value={{ name: "midudev", suscribeteAlCanal: true }}>
      <div className="App">
        <section className="App-content">
          <h2>GIFFY</h2>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
