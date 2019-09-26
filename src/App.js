import React from "react";
import "./App.css";
import Title from "./Components.js/Title"; // <h1> Atsronaunt of the day </h1>
import Header from "./Components.js/Header"; // json data:  Title and Date 
import Data from './Components.js/Data'; // jsona data: explanation 
import Image from "./Components.js/Image"; // json data: image url


function App() {
  return (
    <div className="App">
      <Title />
      <Header />
      <Data />
      <Image />
    </div>
  );
}

export default App;
