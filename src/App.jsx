import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

import { Route } from "wouter";
import Links from "./components/Link";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Links />
        <Route component={Home} path="/" />
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
