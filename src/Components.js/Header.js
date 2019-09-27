import React from "react";
import styled from "styled-components";






const Header = (props) => {
  const headerStyles = styled.h2`
  text-align: center;
  width: 100%;
  font-family: "Dancing Script";
  color: blue;
`;
  
  return (
    <div>
      <headerStyles>Today's Date: {props.date}</headerStyles>
      <h3>Title: {props.title}</h3>
    </div>
  );
};


export default Header;