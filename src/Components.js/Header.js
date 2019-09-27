import React, { useState, useEffect } from "react";


const Header = (props) => {

  
  return (
    <div>
      <h2>Today's Date: {props.date}</h2>
      <h3>Title: {props.title}</h3>
    </div>
  );
};


export default Header;