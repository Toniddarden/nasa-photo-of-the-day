import React from "react";
import "./App.css";
// import Title from "./components/Title"; // <h1> Atsronaunt of the day </h1>
// import Header from "./Components/Header"; // json data:  Title and Date 
import Data from './Components.js/Data.js'; // jsona data: explanation 
// import Image from "./Components/Image"; // json data: url


function App() {
  return (
    <div className="App">
      <p>
      Astronaut Photo Of The Day 
      </p>
      <Data />
    </div>
  );
}

export default App;
