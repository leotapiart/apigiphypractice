import "./App.css";

import { Route } from "wouter";
import Links from "./components/Links";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Links />
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
      </section>
    </div>
  );
}

export default App;
