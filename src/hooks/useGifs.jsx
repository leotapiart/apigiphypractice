import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

const useGifs = (params) => {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    setLoading(true);
    //RECUPERAR LA KEYWORD DEL LOCALSTORAGE
    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "random";

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);

  return { loading, gifs };
};

export default useGifs;
