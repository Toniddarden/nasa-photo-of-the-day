import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";


const TitleStyle = styled.h1`
  text-align: center;
  width: 100%;
  font-family: "Dancing Script";
`;

const Wrapper = styled.section`
  padding: 4em;
`;

// const FontAwesomeIcon = styled.FontAwesomeIcon `
// width: 100%;`
// ;



//const [nasaData, setNasaData] = useState({});

const Title = props => {
  return (
    <Wrapper>
      <TitleStyle className='title'>Space Photo of the Day</TitleStyle>
      <FontAwesomeIcon icon={faCamera} size="3x" />
      
    </Wrapper>
  );
};

export default Title;

