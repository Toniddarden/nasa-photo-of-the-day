import React, { useState, useEffect } from "react";
import Card from "./CardComponents.js";
import axios from "axios";

export default function Data() {
  const [spacePhotos, setSpacePhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const spaceList = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=vWXqbHXX0GUda5vXpWNFne66KmvhapEIZ4quBnfW"
        );
        console.log(spaceList);
        setSpacePhotos(spaceList.item.explanation);
        setSpacePhotos(spacePhotos);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
    return () => {
      //undo stuff
    };
  }, [spacePhotos]);

  useEffect(() => {
    return () => {};
  });

  return (
    <div className="aotd">
      {spacePhotos.map(photos => {
        return (
          <Card
            title={photos.title}
            description={photos.description}
            key={photos.id}
          />
        );
      })}
    </div>
  );
}
