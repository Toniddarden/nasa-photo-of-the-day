import React from 'react';
import styled from "styled-components";
// export default function Card(props) {
//     return (
//         <div className="aotd-list" key={props.id}>
//       <h1>Today's Photo: {props.title}</h1>
//       <p>{props.date}</p>
//       <p>{props.explanation}</p>
//       <h2>{props.image}</h2>
//     </div>
//     );
// }

const randomDateButton = styled.button`
width: 100px;
height: 30px;
color: pink;
border: 0;
margin: 5px 10px;
`;

const Button = (props) => {
  

return (
    <button>
        <randomDateButton>Click For A Random Date {props.data}</randomDateButton>
      </button>
)
}

export default Button;