import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from 'axios';

const RandomDateButton = styled.button`
  width: 100px;
  height: 50px;
  color: pink;
  border: 1px dotted white;
  margin: 5px 10px;
`;

const Button = props => {
  // return (
  //   <div>
  //     <RandomDateButton>Random Date</RandomDateButton>
  //   </div>
  // );


  //  const [apod, setApod] = useState([]);



  //   useEffect(() => {
  //       Axios.get(`https://api.nasa.gov/planetary/apod?api_key=vWXqbHXX0GUda5vXpWNFne66KmvhapEIZ4quBnfW`)
  //       .then(res => {
  //           const apod = res.data.apod
  //           setApod(apod);
  //       })
  //   }, [apod])

    return (
      <div>
 <RandomDateButton>Random Date</RandomDateButton>
      </div>
      
  )
};

export default Button;
