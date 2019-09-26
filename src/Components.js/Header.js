import React, { useState, useEffect } from "react";
import Axios from "axios";

const Header = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    Axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=vWXqbHXX0GUda5vXpWNFne66KmvhapEIZ4quBnfW`
    )
      .then(res => {
        setTitle(res.data.title);
      })
      .catch(err => {
        console.log(err);
      });

    Axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=vWXqbHXX0GUda5vXpWNFne66KmvhapEIZ4quBnfW`
    )
      .then(res => {
        setDate(res.data.date);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      <h2>Today's Date: {date}</h2>
      <h3>Title: {title}</h3>
    </div>
  );
};


export default Header;