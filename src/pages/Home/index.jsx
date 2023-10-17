import { useState } from "react";
import { Link, useLocation } from "wouter";

const POPULAR_GIFS = ["Pandas", "Gatos", "Perros", "Mapache"];

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    //NAVEGAR A OTRA RUTA
    pushLocation(`/gif/${keyword}`);
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <h3 className="App-title">Los gifs más populares</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Search a gif here..."
        />
      </form>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/gif/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
