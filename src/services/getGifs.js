import { useState } from "react";

const apiKEY = "U0N1cwjKdzCMYE19ofV99xlRev9CSG9S";

const dataFetch = async ({ keyword = "gatos" } = {}) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=20&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

  try {
    const resp = await fetch(apiURL);
    const { data } = await resp.json();
    const gifs = data.map((image) => {
      const { id, title, images } = image;
      const { url } = images.fixed_height_downsampled;
      return { id, title, url };
    });
    return gifs;
  } catch (error) {
    console.log(error);
  }
};

export default dataFetch;
