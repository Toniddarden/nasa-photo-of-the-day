import React from 'react';

export default function Card(props) {
    return (
        <div className="aotd-list" key={props.id}>
      <h1>Today's Photo: {props.title}</h1>
      <p>{props.date}</p>
      <p>{props.explanation}</p>
      <h2>{props.image}</h2>
    </div>
    );
}