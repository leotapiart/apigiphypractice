import { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

import { Link, Route } from "wouter";

function App() {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword) {
      // Utiliza el componente Link para redirigir a la página
      return <Link href={`/gif/${keyword}`} />;
    }
  };

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="ruta"
            name="ruta"
            placeholder="Busque un gif"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;
