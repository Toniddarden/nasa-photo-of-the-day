import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./Components.js/Title"; // <h1> Atsronaunt of the day </h1>
import Header from "./Components.js/Header"; // json data:  Title and Date
import Data from "./Components.js/Data"; // jsona data: explanation
import Image from "./Components.js/Image"; // json data: image url
import Footer from "./Components.js/footer";
// import { Button } from 'reactstrap';
import styled from "styled-components";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Axios from 'axios';



function App() {



  const Container = styled.div
  `color: white;`

  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    Axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=vWXqbHXX0GUda5vXpWNFne66KmvhapEIZ4quBnfW`
    )
      .then(res => {
        console.log(res.data);
        setNasaData(res.data);
      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  if(nasaData.length === 0) {return <p>loading....</p>}

 return (
  <Container className="App">
      <Title />
      <Header date={nasaData.date} title={nasaData.title} />
      {/* <Button /> */}
      <Data explanation={nasaData.explanation}/>
      <Image photo={nasaData.url} />
      <Footer />
    </Container>
);
}

export default App;
