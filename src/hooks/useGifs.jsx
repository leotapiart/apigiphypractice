import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

const useGifs = (params) => {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    setLoading(true);
    //RECUPERAR LA KEYWORD DEL LOCALSTORAGE
    const keywordToUse =
      keyword || localStorage.getItem("lastKeyword") || "random";

    getGifs({ keyword: keywordToUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword, setGifs]);

  return { loading, gifs };
};

export default useGifs;
